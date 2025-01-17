'use strict'
const _ = require('lodash');
const antlr = require('antlr4');

function isNode(v) {
	return _.isFunction(v.getRuleContext);
}

function isTerminal(v) {
	return _.isObject(v.symbol);
}

function getNodeText(node, trim=false) {
	if (node.symbol && node.symbol.type == -1)
		return ''; // EOF
	let t = '';
	if (node.symbol) {
		t = node.getText()
	} else if (node.children) {
		for (let ch of node.children)
			t += getNodeText(ch);
	} else {
		t = node.getInputStream().getText(node.start, node.stop);
	}
	if (trim)
		return t.trim();
	return t;
}

function getNodeLocation(node) {
	return {
		line: node.line || node.start.line,
		column: node.column || node.start.column,
		start: node.start.start || node.start
	};
}

function getNodeIndentation(node) {
	let indent = '';
	let ch = '';
	const stream = node.getInputStream ?
		node.getInputStream() : node.start.getInputStream();
	let o = _.get(node.start, 'start', node.start) - 1;
	for (; o > 0; --o) {
		ch = stream.getText(o, o)
		if (/[\r\n]/.test(ch))
			break;
		if (/\s/.test(ch))
			indent = ch + indent;
		else
			indent = ' ' + indent;
	}
	return indent;
}

function createLocationString(loc, unit) {
	const {line, column} = loc;
	return `"${unit}" (${line}:${column})`;
}

function getNodeRuleName(node) {
	if (!node.getRuleContext)
		return;
	const ctx = node.getRuleContext();
	const cname = ctx.constructor.name;
	return cname.substr(cname, cname.length - 'Context'.length);
}

function addContext(lines,from,loc) {
	lines = lines.map(s => s.replace('\t',' '));
	const width = (from+lines.length).toString().length;
	const toContext = (i,line) => {
		const istr = i.toString();
		const res = [' '.repeat(Math.max(0,width-istr.length)) + i + ' ' + line];
		if (i === loc.line) {
			const marker = ' '.repeat(1+width+loc.column) + '^';
		res.push(marker);
		}
		return res;
	 };
	return lines.flatMap((line,i) => toContext(from+i,line));
};

class ErrorListener extends antlr.error.ErrorListener {
	syntaxError(recognizer, offendingSymbol, line, column, message) {
		const stream = offendingSymbol.source[1];
		const startLine = Math.max(line-3,1);
		const startIndex = startLine - 1;
		const lines = stream.strdata.split(/\r?\n/g).slice(startIndex,startIndex+6);
		const context = addContext(lines,startLine,{line,column}).join('\n');
		throw new Error(`${message} (${line}:${column})\n${context}`);
	}
}

function createParseTree(LexerType, ParserType, startRule, text, mode=null) {
	const errors = new ErrorListener();
	const lexer = new LexerType(antlr.CharStreams.fromString(text));
	// If mode was passed, jump straight into that mode.
	if (_.isString(mode) && _.includes(lexer.modeNames, mode))
		lexer.mode(_.indexOf(lexer.modeNames, mode));
	const tokens = new antlr.CommonTokenStream(lexer);
	const parser = new ParserType(tokens);
	parser.removeErrorListeners();
	lexer.removeErrorListeners();
	parser.addErrorListener(errors);
	lexer.addErrorListener(errors);
	parser.buildParseTrees = true;
	return parser[startRule]();
}

module.exports = {
	getNodeText: getNodeText,
	getNodeLocation: getNodeLocation,
	getNodeIndentation: getNodeIndentation,
	createLocationString: createLocationString,
	getNodeRuleName: getNodeRuleName,
	createParseTree: createParseTree,
	isNode: isNode,
	isTerminal: isTerminal
};

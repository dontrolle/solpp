// Generated from ExprParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprParserListener = require('./ExprParserListener').ExprParserListener;
var ExprParserVisitor = require('./ExprParserVisitor').ExprParserVisitor;

var grammarFileName = "ExprParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"\u008b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00034\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003X\n\u0003\u0003",
    "\u0003\u0007\u0003[\n\u0003\f\u0003\u000e\u0003^\u000b\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004c\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007m\n\u0007\u0003\b\u0003\b\u0003\b\u0005\br\n\b\u0003\t\u0003",
    "\t\u0003\t\u0005\tw\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u0080\n\n\u0003\n\u0003\n\u0005\n\u0084\n\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0089\n\u000b\u0003\u000b",
    "\u0002\u0003\u0004\f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0002\u0004\u0003\u0002\u0019\u001b\u0003\u0002\u0017\u0018\u0002\u009e",
    "\u0002\u0016\u0003\u0002\u0002\u0002\u00043\u0003\u0002\u0002\u0002",
    "\u0006b\u0003\u0002\u0002\u0002\bd\u0003\u0002\u0002\u0002\nf\u0003",
    "\u0002\u0002\u0002\fl\u0003\u0002\u0002\u0002\u000en\u0003\u0002\u0002",
    "\u0002\u0010s\u0003\u0002\u0002\u0002\u0012\u0083\u0003\u0002\u0002",
    "\u0002\u0014\u0085\u0003\u0002\u0002\u0002\u0016\u0017\u0005\u0004\u0003",
    "\u0002\u0017\u0018\u0007\u0002\u0002\u0003\u0018\u0003\u0003\u0002\u0002",
    "\u0002\u0019\u001a\b\u0003\u0001\u0002\u001a4\u0005\u0006\u0004\u0002",
    "\u001b4\u0007\u0016\u0002\u0002\u001c\u001d\u0007\r\u0002\u0002\u001d",
    "\u001e\u0005\u0010\t\u0002\u001e\u001f\u0007\u000e\u0002\u0002\u001f",
    "4\u0003\u0002\u0002\u0002 !\u0007\u000b\u0002\u0002!\"\u0005\u0004\u0003",
    "\u0002\"#\u0007\f\u0002\u0002#4\u0003\u0002\u0002\u0002$%\u0007\u0013",
    "\u0002\u0002%&\u0007\u000b\u0002\u0002&\'\u0007\u0016\u0002\u0002\'",
    "4\u0007\f\u0002\u0002()\u0007\u0014\u0002\u0002)*\u0007\u000b\u0002",
    "\u0002*+\u0007\u0016\u0002\u0002+4\u0007\f\u0002\u0002,-\u0007\u001e",
    "\u0002\u0002-4\u0005\u0004\u0003\f./\u0007\u0018\u0002\u0002/4\u0005",
    "\u0004\u0003\n01\u0007\u001c\u0002\u000214\u0005\u0004\u0003\u00052",
    "4\u0005\u0012\n\u00023\u0019\u0003\u0002\u0002\u00023\u001b\u0003\u0002",
    "\u0002\u00023\u001c\u0003\u0002\u0002\u00023 \u0003\u0002\u0002\u0002",
    "3$\u0003\u0002\u0002\u00023(\u0003\u0002\u0002\u00023,\u0003\u0002\u0002",
    "\u00023.\u0003\u0002\u0002\u000230\u0003\u0002\u0002\u000232\u0003\u0002",
    "\u0002\u00024\\\u0003\u0002\u0002\u000256\f\u000b\u0002\u000267\u0007",
    "\u001d\u0002\u00027[\u0005\u0004\u0003\u000b89\f\t\u0002\u00029:\u0007",
    "\u001f\u0002\u0002:[\u0005\u0004\u0003\n;<\f\b\u0002\u0002<=\t\u0002",
    "\u0002\u0002=[\u0005\u0004\u0003\t>?\f\u0007\u0002\u0002?@\t\u0003\u0002",
    "\u0002@[\u0005\u0004\u0003\bAB\f\u0006\u0002\u0002BC\u0007 \u0002\u0002",
    "C[\u0005\u0004\u0003\u0007DE\f\u0004\u0002\u0002EF\u0007!\u0002\u0002",
    "FG\u0005\u0004\u0003\u0002GH\u0007\"\u0002\u0002HI\u0005\u0004\u0003",
    "\u0005I[\u0003\u0002\u0002\u0002JK\f\u0016\u0002\u0002K[\u0007\u0015",
    "\u0002\u0002LM\f\u0013\u0002\u0002MN\u0007\u0010\u0002\u0002N[\u0007",
    "\u0016\u0002\u0002OP\f\u0012\u0002\u0002PQ\u0007\r\u0002\u0002QR\u0005",
    "\u0004\u0003\u0002RS\u0007\u000e\u0002\u0002S[\u0003\u0002\u0002\u0002",
    "TU\f\r\u0002\u0002UW\u0007\u000b\u0002\u0002VX\u0005\u000e\b\u0002W",
    "V\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002",
    "\u0002Y[\u0007\f\u0002\u0002Z5\u0003\u0002\u0002\u0002Z8\u0003\u0002",
    "\u0002\u0002Z;\u0003\u0002\u0002\u0002Z>\u0003\u0002\u0002\u0002ZA\u0003",
    "\u0002\u0002\u0002ZD\u0003\u0002\u0002\u0002ZJ\u0003\u0002\u0002\u0002",
    "ZL\u0003\u0002\u0002\u0002ZO\u0003\u0002\u0002\u0002ZT\u0003\u0002\u0002",
    "\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003",
    "\u0002\u0002\u0002]\u0005\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002",
    "\u0002_c\u0005\b\u0005\u0002`c\u0005\f\u0007\u0002ac\u0005\n\u0006\u0002",
    "b_\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002",
    "\u0002c\u0007\u0003\u0002\u0002\u0002de\u0007\u0006\u0002\u0002e\t\u0003",
    "\u0002\u0002\u0002fg\u0007\u0012\u0002\u0002g\u000b\u0003\u0002\u0002",
    "\u0002hm\u0007\u0007\u0002\u0002im\u0007\b\u0002\u0002jm\u0007\t\u0002",
    "\u0002km\u0007\n\u0002\u0002lh\u0003\u0002\u0002\u0002li\u0003\u0002",
    "\u0002\u0002lj\u0003\u0002\u0002\u0002lk\u0003\u0002\u0002\u0002m\r",
    "\u0003\u0002\u0002\u0002nq\u0005\u0004\u0003\u0002op\u0007\u000f\u0002",
    "\u0002pr\u0005\u000e\b\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002",
    "\u0002\u0002r\u000f\u0003\u0002\u0002\u0002sv\u0005\u0004\u0003\u0002",
    "tu\u0007\u000f\u0002\u0002uw\u0005\u0010\t\u0002vt\u0003\u0002\u0002",
    "\u0002vw\u0003\u0002\u0002\u0002w\u0011\u0003\u0002\u0002\u0002xy\u0007",
    "\u000b\u0002\u0002yz\u0005\u0014\u000b\u0002z{\u0007\f\u0002\u0002{",
    "|\u0007\u0011\u0002\u0002|}\u0005\u0004\u0003\u0002}\u0084\u0003\u0002",
    "\u0002\u0002~\u0080\u0007\u0016\u0002\u0002\u007f~\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0007\u0011\u0002\u0002\u0082\u0084\u0005\u0004\u0003",
    "\u0002\u0083x\u0003\u0002\u0002\u0002\u0083\u007f\u0003\u0002\u0002",
    "\u0002\u0084\u0013\u0003\u0002\u0002\u0002\u0085\u0088\u0007\u0016\u0002",
    "\u0002\u0086\u0087\u0007\u000f\u0002\u0002\u0087\u0089\u0005\u0014\u000b",
    "\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002",
    "\u0002\u0089\u0015\u0003\u0002\u0002\u0002\r3WZ\\blqv\u007f\u0083\u0088"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     "'('", "')'", "'['", "']'", "','", "'.'", "'=>'", null, 
                     "'defined'", "'peek'", null, null, "'+'", "'-'", "'*'", 
                     "'/'", "'%'", "'!'", "'**'", "'~'", null, null, "'?'", 
                     "':'" ];

var symbolicNames = [ null, "BLOCK_COMMENT", "LINE_COMMENT", "WS", "STRING_LITERAL", 
                      "OCTAL_LITERAL", "HEX_LITERAL", "BINARY_LITERAL", 
                      "DECIMAL_LITERAL", "LPAREN", "RPAREN", "LBRACKET", 
                      "RBRACKET", "COMMA", "DOT", "LAMBDA_ARROW", "BOOLEAN_LITERAL", 
                      "DEFINED_KW", "PEEK_KW", "UNIT_KW", "IDENTIFIER", 
                      "ADD_OP", "SUB_OP", "MUL_OP", "DIV_OP", "MOD_OP", 
                      "NOT_OP", "POW_OP", "BITWISE_INVERT_OP", "BITWISE_OP", 
                      "LOGICAL_OP", "TERNARY_OP", "TERNARY_SEPARATOR" ];

var ruleNames =  [ "expressionRoot", "expression", "literal", "stringLiteral", 
                   "booleanLiteral", "numberLiteral", "callArguments", "listItems", 
                   "lambdaExpression", "idList" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.BLOCK_COMMENT = 1;
ExprParser.LINE_COMMENT = 2;
ExprParser.WS = 3;
ExprParser.STRING_LITERAL = 4;
ExprParser.OCTAL_LITERAL = 5;
ExprParser.HEX_LITERAL = 6;
ExprParser.BINARY_LITERAL = 7;
ExprParser.DECIMAL_LITERAL = 8;
ExprParser.LPAREN = 9;
ExprParser.RPAREN = 10;
ExprParser.LBRACKET = 11;
ExprParser.RBRACKET = 12;
ExprParser.COMMA = 13;
ExprParser.DOT = 14;
ExprParser.LAMBDA_ARROW = 15;
ExprParser.BOOLEAN_LITERAL = 16;
ExprParser.DEFINED_KW = 17;
ExprParser.PEEK_KW = 18;
ExprParser.UNIT_KW = 19;
ExprParser.IDENTIFIER = 20;
ExprParser.ADD_OP = 21;
ExprParser.SUB_OP = 22;
ExprParser.MUL_OP = 23;
ExprParser.DIV_OP = 24;
ExprParser.MOD_OP = 25;
ExprParser.NOT_OP = 26;
ExprParser.POW_OP = 27;
ExprParser.BITWISE_INVERT_OP = 28;
ExprParser.BITWISE_OP = 29;
ExprParser.LOGICAL_OP = 30;
ExprParser.TERNARY_OP = 31;
ExprParser.TERNARY_SEPARATOR = 32;

ExprParser.RULE_expressionRoot = 0;
ExprParser.RULE_expression = 1;
ExprParser.RULE_literal = 2;
ExprParser.RULE_stringLiteral = 3;
ExprParser.RULE_booleanLiteral = 4;
ExprParser.RULE_numberLiteral = 5;
ExprParser.RULE_callArguments = 6;
ExprParser.RULE_listItems = 7;
ExprParser.RULE_lambdaExpression = 8;
ExprParser.RULE_idList = 9;

function ExpressionRootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expressionRoot;
    this.expr = null; // ExpressionContext
    return this;
}

ExpressionRootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionRootContext.prototype.constructor = ExpressionRootContext;

ExpressionRootContext.prototype.EOF = function() {
    return this.getToken(ExprParser.EOF, 0);
};

ExpressionRootContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionRootContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterExpressionRoot(this);
	}
};

ExpressionRootContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitExpressionRoot(this);
	}
};

ExpressionRootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitExpressionRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ExpressionRootContext = ExpressionRootContext;

ExprParser.prototype.expressionRoot = function() {

    var localctx = new ExpressionRootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_expressionRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        localctx.expr = this.expression(0);
        this.state = 21;
        this.match(ExprParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PowerOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerOperationContext.prototype = Object.create(ExpressionContext.prototype);
PowerOperationContext.prototype.constructor = PowerOperationContext;

ExprParser.PowerOperationContext = PowerOperationContext;

PowerOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowerOperationContext.prototype.POW_OP = function() {
    return this.getToken(ExprParser.POW_OP, 0);
};
PowerOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterPowerOperation(this);
	}
};

PowerOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitPowerOperation(this);
	}
};

PowerOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitPowerOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.inner = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupOperationContext.prototype = Object.create(ExpressionContext.prototype);
GroupOperationContext.prototype.constructor = GroupOperationContext;

ExprParser.GroupOperationContext = GroupOperationContext;

GroupOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

GroupOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

GroupOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
GroupOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterGroupOperation(this);
	}
};

GroupOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitGroupOperation(this);
	}
};

GroupOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitGroupOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.condition = null; // ExpressionContext;
    this.first = null; // ExpressionContext;
    this.second = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryOperationContext.prototype = Object.create(ExpressionContext.prototype);
TernaryOperationContext.prototype.constructor = TernaryOperationContext;

ExprParser.TernaryOperationContext = TernaryOperationContext;

TernaryOperationContext.prototype.TERNARY_OP = function() {
    return this.getToken(ExprParser.TERNARY_OP, 0);
};

TernaryOperationContext.prototype.TERNARY_SEPARATOR = function() {
    return this.getToken(ExprParser.TERNARY_SEPARATOR, 0);
};

TernaryOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
TernaryOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterTernaryOperation(this);
	}
};

TernaryOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitTernaryOperation(this);
	}
};

TernaryOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitTernaryOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IndexOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.list = null; // ExpressionContext;
    this.inner = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexOperationContext.prototype = Object.create(ExpressionContext.prototype);
IndexOperationContext.prototype.constructor = IndexOperationContext;

ExprParser.IndexOperationContext = IndexOperationContext;

IndexOperationContext.prototype.LBRACKET = function() {
    return this.getToken(ExprParser.LBRACKET, 0);
};

IndexOperationContext.prototype.RBRACKET = function() {
    return this.getToken(ExprParser.RBRACKET, 0);
};

IndexOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
IndexOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterIndexOperation(this);
	}
};

IndexOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitIndexOperation(this);
	}
};

IndexOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitIndexOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DefinedOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.name = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefinedOperationContext.prototype = Object.create(ExpressionContext.prototype);
DefinedOperationContext.prototype.constructor = DefinedOperationContext;

ExprParser.DefinedOperationContext = DefinedOperationContext;

DefinedOperationContext.prototype.DEFINED_KW = function() {
    return this.getToken(ExprParser.DEFINED_KW, 0);
};

DefinedOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

DefinedOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

DefinedOperationContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};
DefinedOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterDefinedOperation(this);
	}
};

DefinedOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitDefinedOperation(this);
	}
};

DefinedOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitDefinedOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitwiseOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitwiseOperationContext.prototype = Object.create(ExpressionContext.prototype);
BitwiseOperationContext.prototype.constructor = BitwiseOperationContext;

ExprParser.BitwiseOperationContext = BitwiseOperationContext;

BitwiseOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BitwiseOperationContext.prototype.BITWISE_OP = function() {
    return this.getToken(ExprParser.BITWISE_OP, 0);
};
BitwiseOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBitwiseOperation(this);
	}
};

BitwiseOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBitwiseOperation(this);
	}
};

BitwiseOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBitwiseOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnitsOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.num = null; // ExpressionContext;
    this.units = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnitsOperationContext.prototype = Object.create(ExpressionContext.prototype);
UnitsOperationContext.prototype.constructor = UnitsOperationContext;

ExprParser.UnitsOperationContext = UnitsOperationContext;

UnitsOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

UnitsOperationContext.prototype.UNIT_KW = function() {
    return this.getToken(ExprParser.UNIT_KW, 0);
};
UnitsOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterUnitsOperation(this);
	}
};

UnitsOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitUnitsOperation(this);
	}
};

UnitsOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitUnitsOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalNotOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalNotOperationContext.prototype = Object.create(ExpressionContext.prototype);
LogicalNotOperationContext.prototype.constructor = LogicalNotOperationContext;

ExprParser.LogicalNotOperationContext = LogicalNotOperationContext;

LogicalNotOperationContext.prototype.NOT_OP = function() {
    return this.getToken(ExprParser.NOT_OP, 0);
};

LogicalNotOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LogicalNotOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLogicalNotOperation(this);
	}
};

LogicalNotOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLogicalNotOperation(this);
	}
};

LogicalNotOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLogicalNotOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitwiseInvertOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitwiseInvertOperationContext.prototype = Object.create(ExpressionContext.prototype);
BitwiseInvertOperationContext.prototype.constructor = BitwiseInvertOperationContext;

ExprParser.BitwiseInvertOperationContext = BitwiseInvertOperationContext;

BitwiseInvertOperationContext.prototype.BITWISE_INVERT_OP = function() {
    return this.getToken(ExprParser.BITWISE_INVERT_OP, 0);
};

BitwiseInvertOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
BitwiseInvertOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBitwiseInvertOperation(this);
	}
};

BitwiseInvertOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBitwiseInvertOperation(this);
	}
};

BitwiseInvertOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBitwiseInvertOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PeekOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.name = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PeekOperationContext.prototype = Object.create(ExpressionContext.prototype);
PeekOperationContext.prototype.constructor = PeekOperationContext;

ExprParser.PeekOperationContext = PeekOperationContext;

PeekOperationContext.prototype.PEEK_KW = function() {
    return this.getToken(ExprParser.PEEK_KW, 0);
};

PeekOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

PeekOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

PeekOperationContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};
PeekOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterPeekOperation(this);
	}
};

PeekOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitPeekOperation(this);
	}
};

PeekOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitPeekOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArithmeticOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArithmeticOperationContext.prototype = Object.create(ExpressionContext.prototype);
ArithmeticOperationContext.prototype.constructor = ArithmeticOperationContext;

ExprParser.ArithmeticOperationContext = ArithmeticOperationContext;

ArithmeticOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArithmeticOperationContext.prototype.MUL_OP = function() {
    return this.getToken(ExprParser.MUL_OP, 0);
};

ArithmeticOperationContext.prototype.DIV_OP = function() {
    return this.getToken(ExprParser.DIV_OP, 0);
};

ArithmeticOperationContext.prototype.MOD_OP = function() {
    return this.getToken(ExprParser.MOD_OP, 0);
};

ArithmeticOperationContext.prototype.ADD_OP = function() {
    return this.getToken(ExprParser.ADD_OP, 0);
};

ArithmeticOperationContext.prototype.SUB_OP = function() {
    return this.getToken(ExprParser.SUB_OP, 0);
};
ArithmeticOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterArithmeticOperation(this);
	}
};

ArithmeticOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitArithmeticOperation(this);
	}
};

ArithmeticOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitArithmeticOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PropertyOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.obj = null; // ExpressionContext;
    this.key = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyOperationContext.prototype = Object.create(ExpressionContext.prototype);
PropertyOperationContext.prototype.constructor = PropertyOperationContext;

ExprParser.PropertyOperationContext = PropertyOperationContext;

PropertyOperationContext.prototype.DOT = function() {
    return this.getToken(ExprParser.DOT, 0);
};

PropertyOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PropertyOperationContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};
PropertyOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterPropertyOperation(this);
	}
};

PropertyOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitPropertyOperation(this);
	}
};

PropertyOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitPropertyOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateOperationContext.prototype = Object.create(ExpressionContext.prototype);
NegateOperationContext.prototype.constructor = NegateOperationContext;

ExprParser.NegateOperationContext = NegateOperationContext;

NegateOperationContext.prototype.SUB_OP = function() {
    return this.getToken(ExprParser.SUB_OP, 0);
};

NegateOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NegateOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterNegateOperation(this);
	}
};

NegateOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitNegateOperation(this);
	}
};

NegateOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitNegateOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CallOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.callee = null; // ExpressionContext;
    this.args = null; // CallArgumentsContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallOperationContext.prototype = Object.create(ExpressionContext.prototype);
CallOperationContext.prototype.constructor = CallOperationContext;

ExprParser.CallOperationContext = CallOperationContext;

CallOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

CallOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

CallOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CallOperationContext.prototype.callArguments = function() {
    return this.getTypedRuleContext(CallArgumentsContext,0);
};
CallOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterCallOperation(this);
	}
};

CallOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitCallOperation(this);
	}
};

CallOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitCallOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOperationContext.prototype = Object.create(ExpressionContext.prototype);
LogicalOperationContext.prototype.constructor = LogicalOperationContext;

ExprParser.LogicalOperationContext = LogicalOperationContext;

LogicalOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicalOperationContext.prototype.LOGICAL_OP = function() {
    return this.getToken(ExprParser.LOGICAL_OP, 0);
};
LogicalOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLogicalOperation(this);
	}
};

LogicalOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLogicalOperation(this);
	}
};

LogicalOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLogicalOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LambdaOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.lambda = null; // LambdaExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LambdaOperationContext.prototype = Object.create(ExpressionContext.prototype);
LambdaOperationContext.prototype.constructor = LambdaOperationContext;

ExprParser.LambdaOperationContext = LambdaOperationContext;

LambdaOperationContext.prototype.lambdaExpression = function() {
    return this.getTypedRuleContext(LambdaExpressionContext,0);
};
LambdaOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLambdaOperation(this);
	}
};

LambdaOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLambdaOperation(this);
	}
};

LambdaOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLambdaOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LiteralOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.value = null; // LiteralContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LiteralOperationContext.prototype = Object.create(ExpressionContext.prototype);
LiteralOperationContext.prototype.constructor = LiteralOperationContext;

ExprParser.LiteralOperationContext = LiteralOperationContext;

LiteralOperationContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};
LiteralOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLiteralOperation(this);
	}
};

LiteralOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLiteralOperation(this);
	}
};

LiteralOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLiteralOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.items = null; // ListItemsContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListOperationContext.prototype = Object.create(ExpressionContext.prototype);
ListOperationContext.prototype.constructor = ListOperationContext;

ExprParser.ListOperationContext = ListOperationContext;

ListOperationContext.prototype.LBRACKET = function() {
    return this.getToken(ExprParser.LBRACKET, 0);
};

ListOperationContext.prototype.RBRACKET = function() {
    return this.getToken(ExprParser.RBRACKET, 0);
};

ListOperationContext.prototype.listItems = function() {
    return this.getTypedRuleContext(ListItemsContext,0);
};
ListOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterListOperation(this);
	}
};

ListOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitListOperation(this);
	}
};

ListOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitListOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdentifierOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.name = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierOperationContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierOperationContext.prototype.constructor = IdentifierOperationContext;

ExprParser.IdentifierOperationContext = IdentifierOperationContext;

IdentifierOperationContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};
IdentifierOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterIdentifierOperation(this);
	}
};

IdentifierOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitIdentifierOperation(this);
	}
};

IdentifierOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitIdentifierOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new LiteralOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 24;
            localctx.value = this.literal();
            break;

        case 2:
            localctx = new IdentifierOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 25;
            localctx.name = this.match(ExprParser.IDENTIFIER);
            break;

        case 3:
            localctx = new ListOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 26;
            this.match(ExprParser.LBRACKET);
            this.state = 27;
            localctx.items = this.listItems();
            this.state = 28;
            this.match(ExprParser.RBRACKET);
            break;

        case 4:
            localctx = new GroupOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 30;
            this.match(ExprParser.LPAREN);
            this.state = 31;
            localctx.inner = this.expression(0);
            this.state = 32;
            this.match(ExprParser.RPAREN);
            break;

        case 5:
            localctx = new DefinedOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 34;
            this.match(ExprParser.DEFINED_KW);
            this.state = 35;
            this.match(ExprParser.LPAREN);
            this.state = 36;
            localctx.name = this.match(ExprParser.IDENTIFIER);
            this.state = 37;
            this.match(ExprParser.RPAREN);
            break;

        case 6:
            localctx = new PeekOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 38;
            this.match(ExprParser.PEEK_KW);
            this.state = 39;
            this.match(ExprParser.LPAREN);
            this.state = 40;
            localctx.name = this.match(ExprParser.IDENTIFIER);
            this.state = 41;
            this.match(ExprParser.RPAREN);
            break;

        case 7:
            localctx = new BitwiseInvertOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            localctx.op = this.match(ExprParser.BITWISE_INVERT_OP);
            this.state = 43;
            localctx.right = this.expression(10);
            break;

        case 8:
            localctx = new NegateOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            localctx.op = this.match(ExprParser.SUB_OP);
            this.state = 45;
            localctx.right = this.expression(8);
            break;

        case 9:
            localctx = new LogicalNotOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 46;
            localctx.op = this.match(ExprParser.NOT_OP);
            this.state = 47;
            localctx.right = this.expression(3);
            break;

        case 10:
            localctx = new LambdaOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 48;
            localctx.lambda = this.lambdaExpression();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 90;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 88;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 51;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 52;
                    localctx.op = this.match(ExprParser.POW_OP);
                    this.state = 53;
                    localctx.right = this.expression(9);
                    break;

                case 2:
                    localctx = new BitwiseOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 54;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 55;
                    localctx.op = this.match(ExprParser.BITWISE_OP);
                    this.state = 56;
                    localctx.right = this.expression(8);
                    break;

                case 3:
                    localctx = new ArithmeticOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 57;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 58;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.MUL_OP) | (1 << ExprParser.DIV_OP) | (1 << ExprParser.MOD_OP))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 59;
                    localctx.right = this.expression(7);
                    break;

                case 4:
                    localctx = new ArithmeticOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 60;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 61;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.ADD_OP || _la===ExprParser.SUB_OP)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 62;
                    localctx.right = this.expression(6);
                    break;

                case 5:
                    localctx = new LogicalOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 63;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 64;
                    localctx.op = this.match(ExprParser.LOGICAL_OP);
                    this.state = 65;
                    localctx.right = this.expression(5);
                    break;

                case 6:
                    localctx = new TernaryOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.condition = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 66;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 67;
                    this.match(ExprParser.TERNARY_OP);
                    this.state = 68;
                    localctx.first = this.expression(0);
                    this.state = 69;
                    this.match(ExprParser.TERNARY_SEPARATOR);
                    this.state = 70;
                    localctx.second = this.expression(3);
                    break;

                case 7:
                    localctx = new UnitsOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.num = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 72;
                    if (!( this.precpred(this._ctx, 20))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
                    }
                    this.state = 73;
                    localctx.units = this.match(ExprParser.UNIT_KW);
                    break;

                case 8:
                    localctx = new PropertyOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.obj = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 74;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 75;
                    this.match(ExprParser.DOT);
                    this.state = 76;
                    localctx.key = this.match(ExprParser.IDENTIFIER);
                    break;

                case 9:
                    localctx = new IndexOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.list = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 77;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 78;
                    this.match(ExprParser.LBRACKET);
                    this.state = 79;
                    localctx.inner = this.expression(0);
                    this.state = 80;
                    this.match(ExprParser.RBRACKET);
                    break;

                case 10:
                    localctx = new CallOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.callee = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 82;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 83;
                    this.match(ExprParser.LPAREN);
                    this.state = 85;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.STRING_LITERAL) | (1 << ExprParser.OCTAL_LITERAL) | (1 << ExprParser.HEX_LITERAL) | (1 << ExprParser.BINARY_LITERAL) | (1 << ExprParser.DECIMAL_LITERAL) | (1 << ExprParser.LPAREN) | (1 << ExprParser.LBRACKET) | (1 << ExprParser.LAMBDA_ARROW) | (1 << ExprParser.BOOLEAN_LITERAL) | (1 << ExprParser.DEFINED_KW) | (1 << ExprParser.PEEK_KW) | (1 << ExprParser.IDENTIFIER) | (1 << ExprParser.SUB_OP) | (1 << ExprParser.NOT_OP) | (1 << ExprParser.BITWISE_INVERT_OP))) !== 0)) {
                        this.state = 84;
                        localctx.args = this.callArguments();
                    }

                    this.state = 87;
                    this.match(ExprParser.RPAREN);
                    break;

                } 
            }
            this.state = 92;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_literal;
    this.str = null; // StringLiteralContext
    this.num = null; // NumberLiteralContext
    this.bool = null; // BooleanLiteralContext
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

LiteralContext.prototype.numberLiteral = function() {
    return this.getTypedRuleContext(NumberLiteralContext,0);
};

LiteralContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.LiteralContext = LiteralContext;

ExprParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExprParser.RULE_literal);
    try {
        this.state = 96;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 93;
            localctx.str = this.stringLiteral();
            break;
        case ExprParser.OCTAL_LITERAL:
        case ExprParser.HEX_LITERAL:
        case ExprParser.BINARY_LITERAL:
        case ExprParser.DECIMAL_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 94;
            localctx.num = this.numberLiteral();
            break;
        case ExprParser.BOOLEAN_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 95;
            localctx.bool = this.booleanLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_stringLiteral;
    this.value = null; // Token
    return this;
}

StringLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

StringLiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(ExprParser.STRING_LITERAL, 0);
};

StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitStringLiteral(this);
	}
};

StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.StringLiteralContext = StringLiteralContext;

ExprParser.prototype.stringLiteral = function() {

    var localctx = new StringLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprParser.RULE_stringLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        localctx.value = this.match(ExprParser.STRING_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_booleanLiteral;
    this.value = null; // Token
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

BooleanLiteralContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(ExprParser.BOOLEAN_LITERAL, 0);
};

BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.BooleanLiteralContext = BooleanLiteralContext;

ExprParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprParser.RULE_booleanLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        localctx.value = this.match(ExprParser.BOOLEAN_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_numberLiteral;
    return this;
}

NumberLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberLiteralContext.prototype.constructor = NumberLiteralContext;


 
NumberLiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function OctalLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.value = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OctalLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
OctalLiteralContext.prototype.constructor = OctalLiteralContext;

ExprParser.OctalLiteralContext = OctalLiteralContext;

OctalLiteralContext.prototype.OCTAL_LITERAL = function() {
    return this.getToken(ExprParser.OCTAL_LITERAL, 0);
};
OctalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterOctalLiteral(this);
	}
};

OctalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitOctalLiteral(this);
	}
};

OctalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitOctalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.value = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
BinaryLiteralContext.prototype.constructor = BinaryLiteralContext;

ExprParser.BinaryLiteralContext = BinaryLiteralContext;

BinaryLiteralContext.prototype.BINARY_LITERAL = function() {
    return this.getToken(ExprParser.BINARY_LITERAL, 0);
};
BinaryLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBinaryLiteral(this);
	}
};

BinaryLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBinaryLiteral(this);
	}
};

BinaryLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBinaryLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecimalLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.value = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecimalLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
DecimalLiteralContext.prototype.constructor = DecimalLiteralContext;

ExprParser.DecimalLiteralContext = DecimalLiteralContext;

DecimalLiteralContext.prototype.DECIMAL_LITERAL = function() {
    return this.getToken(ExprParser.DECIMAL_LITERAL, 0);
};
DecimalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function HexLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.value = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

HexLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
HexLiteralContext.prototype.constructor = HexLiteralContext;

ExprParser.HexLiteralContext = HexLiteralContext;

HexLiteralContext.prototype.HEX_LITERAL = function() {
    return this.getToken(ExprParser.HEX_LITERAL, 0);
};
HexLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterHexLiteral(this);
	}
};

HexLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitHexLiteral(this);
	}
};

HexLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitHexLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.NumberLiteralContext = NumberLiteralContext;

ExprParser.prototype.numberLiteral = function() {

    var localctx = new NumberLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprParser.RULE_numberLiteral);
    try {
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.OCTAL_LITERAL:
            localctx = new OctalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 102;
            localctx.value = this.match(ExprParser.OCTAL_LITERAL);
            break;
        case ExprParser.HEX_LITERAL:
            localctx = new HexLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            localctx.value = this.match(ExprParser.HEX_LITERAL);
            break;
        case ExprParser.BINARY_LITERAL:
            localctx = new BinaryLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 104;
            localctx.value = this.match(ExprParser.BINARY_LITERAL);
            break;
        case ExprParser.DECIMAL_LITERAL:
            localctx = new DecimalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 105;
            localctx.value = this.match(ExprParser.DECIMAL_LITERAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CallArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_callArguments;
    this.arg = null; // ExpressionContext
    this.rest = null; // CallArgumentsContext
    return this;
}

CallArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallArgumentsContext.prototype.constructor = CallArgumentsContext;

CallArgumentsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CallArgumentsContext.prototype.COMMA = function() {
    return this.getToken(ExprParser.COMMA, 0);
};

CallArgumentsContext.prototype.callArguments = function() {
    return this.getTypedRuleContext(CallArgumentsContext,0);
};

CallArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterCallArguments(this);
	}
};

CallArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitCallArguments(this);
	}
};

CallArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitCallArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.CallArgumentsContext = CallArgumentsContext;

ExprParser.prototype.callArguments = function() {

    var localctx = new CallArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ExprParser.RULE_callArguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        localctx.arg = this.expression(0);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.COMMA) {
            this.state = 109;
            this.match(ExprParser.COMMA);
            this.state = 110;
            localctx.rest = this.callArguments();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListItemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_listItems;
    this.item = null; // ExpressionContext
    this.rest = null; // ListItemsContext
    return this;
}

ListItemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListItemsContext.prototype.constructor = ListItemsContext;

ListItemsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ListItemsContext.prototype.COMMA = function() {
    return this.getToken(ExprParser.COMMA, 0);
};

ListItemsContext.prototype.listItems = function() {
    return this.getTypedRuleContext(ListItemsContext,0);
};

ListItemsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterListItems(this);
	}
};

ListItemsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitListItems(this);
	}
};

ListItemsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitListItems(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ListItemsContext = ListItemsContext;

ExprParser.prototype.listItems = function() {

    var localctx = new ListItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ExprParser.RULE_listItems);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        localctx.item = this.expression(0);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.COMMA) {
            this.state = 114;
            this.match(ExprParser.COMMA);
            this.state = 115;
            localctx.rest = this.listItems();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LambdaExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_lambdaExpression;
    this.args = null; // IdListContext
    this.body = null; // ExpressionContext
    this.arg = null; // Token
    return this;
}

LambdaExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LambdaExpressionContext.prototype.constructor = LambdaExpressionContext;

LambdaExpressionContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

LambdaExpressionContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

LambdaExpressionContext.prototype.LAMBDA_ARROW = function() {
    return this.getToken(ExprParser.LAMBDA_ARROW, 0);
};

LambdaExpressionContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};

LambdaExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LambdaExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};

LambdaExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLambdaExpression(this);
	}
};

LambdaExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLambdaExpression(this);
	}
};

LambdaExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLambdaExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.LambdaExpressionContext = LambdaExpressionContext;

ExprParser.prototype.lambdaExpression = function() {

    var localctx = new LambdaExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ExprParser.RULE_lambdaExpression);
    var _la = 0; // Token type
    try {
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 118;
            this.match(ExprParser.LPAREN);
            this.state = 119;
            localctx.args = this.idList();
            this.state = 120;
            this.match(ExprParser.RPAREN);
            this.state = 121;
            this.match(ExprParser.LAMBDA_ARROW);
            this.state = 122;
            localctx.body = this.expression(0);
            break;
        case ExprParser.LAMBDA_ARROW:
        case ExprParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ExprParser.IDENTIFIER) {
                this.state = 124;
                localctx.arg = this.match(ExprParser.IDENTIFIER);
            }

            this.state = 127;
            this.match(ExprParser.LAMBDA_ARROW);
            this.state = 128;
            localctx.body = this.expression(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_idList;
    this.arg = null; // Token
    this.rest = null; // IdListContext
    return this;
}

IdListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdListContext.prototype.constructor = IdListContext;

IdListContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};

IdListContext.prototype.COMMA = function() {
    return this.getToken(ExprParser.COMMA, 0);
};

IdListContext.prototype.idList = function() {
    return this.getTypedRuleContext(IdListContext,0);
};

IdListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterIdList(this);
	}
};

IdListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitIdList(this);
	}
};

IdListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitIdList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.IdListContext = IdListContext;

ExprParser.prototype.idList = function() {

    var localctx = new IdListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ExprParser.RULE_idList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        localctx.arg = this.match(ExprParser.IDENTIFIER);
        this.state = 134;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.COMMA) {
            this.state = 132;
            this.match(ExprParser.COMMA);
            this.state = 133;
            localctx.rest = this.idList();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 20);
		case 7:
			return this.precpred(this._ctx, 17);
		case 8:
			return this.precpred(this._ctx, 16);
		case 9:
			return this.precpred(this._ctx, 11);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;

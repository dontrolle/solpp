pragma solidity <0.5;
pragma experimental AbiEncoderV2;

import "./deps/OtherContract.sol";
// This import does not exist. It will be ignored with the "tolerant" option
import "./deps/NonExistant.sol";
// This import should be ignored because it"s not a naked import.
import {Poop} from "./PoopContract.sol";

// Some contract.
contract TestContract {
	// $if EXT_SYMBOL_1
	uint256 _var1;
	// $if EXT_SYMBOL_2 == 100
	uint256 _var2 = 1;
	// $elif EXT_SYMBOL_2 == 10 && EXT_SYMBOL_3
	uint256 _var2 = 2;
	// $elif EXT_SYMBOL_2 == 10
	uint256 _var2 = 4;
	// $endif
	// $else
	uint256 _var3;
	// $endif
	// $if !EXT_SYMBOL_2
	address _a1 = 0x1;
	// $else
	address _a2 = 0x2;
	// $endif
	// $if EXT_SYMBOL_4 == 1
	// Expect: uint256 _var4 = 508;
	uint256 _var4 = $$(2**3 + EXT_SYMBOL_4 / 2 * 1000);
	// $elif EXT_SYMBOL_4 == 2
	// Expect: uint256 _var4 = 1008;
	uint256 _var4 = $$(2**3 + EXT_SYMBOL_4 / 4 * 2000);
	// $endif
	address _var5;
	// $define DEF1
	// $if DEF1
	uint256 _var6;
	// $endif
	// $undef DEF1
	// $if DEF1
	uint256 _var7;
	// $endif
	// $if !EXT_SYMBOL_3
	bool _b;
	// $endif
	// $define DEF2 0
	// $if DEF2
	bool _c;
	// $elif DEF2 == 0
	bool _d;
	// $if defined(DEF2)
	bool _e;
	// $endif
	// $endif
	bool _f = $(OTHER_CONTRACT_SYM_1);
	// $if !defined(BAD_DEF)
	// $def DEF3 512
	// $def FUNC0(x) quote(log(x, 2))
	// $def DEF4 booger
	// Expect: string _str0 = "9" + "256" + "booger";
	string _str0 = $$(FUNC0(0x200)) + $$(quote(decimal(0x100))) + $$(quote(peek(DEF4)));
	// Expect: string _str1 = "foo/bar";
	string _str1 = $$(quote(concat("foo", "/", "bar")));
	// Expect: string _str2 = "1.414213562373095";
	string _str2 = $$(quote(sd(2**0.5, 16)));
	// Expect: string _str3 = "1.41421356";
	string _str3 = $$(quote(dp(2**0.5, 8)));
	// Expect: string _str4 = "Bob Smith";
	string _str4 = $$(quote(join(["Bob", "Smith"], " ")));
	// $endif

	// Expect: bytes32 _bytes0 = 0x666f6f626172;
	bytes32 _bytes0 = $$(strhex("foobar"));
	// Expect: bytes32 _bytes1 = 0x0000666f6f626172;
	bytes32 _bytes1 = $$(strhex("foobar", 8));
	// Expect: bytes32 _bytes2 = 0x666f6f6261720000;
	bytes32 _bytes2 = $$(strhex("foobar", -8));
	// Expect: bytes32 _bytes3 = 0x666f6f;
	bytes32 _bytes3 = $$(strhex("foobar", -3));
	// Expect: bytes32 _bytes4 = 0x626172;
	bytes32 _bytes4 = $$(strhex("foobar", 3));
	// Expect: bytes32 _bytes5 = 0xd18acb67d25c8bb9942764b62f18e17054f66a817bd4295423adf9ed98873e00;
	bytes32 _bytes5 = $$(hex(keccak("foobar") << 8, 32));
	// Expect: bytes32 _bytes6 = 0x000032;
	bytes32 _bytes6 = $$(hex(0x32, 3));
	// Expect: bytes32 _bytes7 = 0xabcdef;
	bytes32 _bytes7 = $$(hex(0xabcdef0123, -3));
	// Expect bytes32 _bytes8 = 0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2;
	bytes32 _bytes8 = $$(keccak(1));

	// $def LIST [keccak256("foo"), keccak256("bar"), keccak256(0x34920381af)]
	address _addrs[] = [
	// $for i, k in LIST
		$$(key2addr(i))$$(k == len(LIST) - 1 ? "" : ",")
	// $done
	];

	bytes32 _keys[] = [
		// $for i, k in LIST
		$$(LIST[k])$$(k == len(LIST) - 1 ? "" : ",")
		// $done
	];

	// Sometimes join is simpler than a for loop.
	bytes32 _keys2[] = [
		$$(join(LIST, concat(",\n", __indent)))
	];

	// Expect: _u8a[] = [1337, 1337, 1337];
	uint8 _u8a[] = $$(filled(3, 1337));

	// Block comment directives.
	uint256 _sum = 0/* $for I in range(3) */ + $$((I+1)*100)/* $done */;
	uint256 _sum2 = 0/* $for I in range(1,4) */ + $$(I*100)/* $done */;

	// Some function.
	function foo(uint256 i) public view returns (uint256) {
		// Expect: uint8 x = 0xde;
		uint8 x = $$(hex(uint8(0xabcde)));
		// Expect: uint8 y = -32277;
		int16 y = $$(int16(-491029));
		// $def PRIV_KEY 0x4324a76c910abd0a8c80b596a95aeb623b550f95061939d3314d04e852a22446
		// Expect: address addr = 0x67606790E4395bd826644b1Bc4f770132C70e39b;
		address addr = $$(key2addr(PRIV_KEY));
		// $def ALIAS1 100
		return _var5 + // tail comment
			// Expected: i + /* inline block comment */ 100;
			i /* inline block comment */ + $(ALIAS1);
	}

	/* Another function */
	function bar(uint256 x) internal {
		// $def ALIAS2 \
		// (10**18 + 2)
		// $def FUNC1(x) 10**x
		// $def FUNC2(x, y) x + y
		// $def FUNC3(x) round(176 / x)
		// $def FUNC4(x) FUNC2(x, 7) * ALIAS2
		// $def REDUCER(r, v) v*(r+1)
		// $def VALS [100, 20, 8]
		_var4 = x *
			// Expect: 1024 + (10**18 + 2) - 10 /
			$(EXT_SYMBOL_5) * $(ALIAS2) - $$(log(EXT_SYMBOL_5, 2)) /
			// Expect: 10**3 + 10**this.foo(2) + 10 / 32 +
			$(FUNC1(3)) + $(FUNC1(this.foo(2))) + $$(FUNC2(1, 9)) / $$(FUNC3(5.52)) +
			// Expect: 9000000000000000018 + 128 + 16168 +
			$$(FUNC4(2)) + $$(sum(VALS)) + $$(reduce(map(VALS, FUNC2), REDUCER)) +
			// Expect: 17 +
			$$(reduce(map(VALS, x => round(x**0.5)), (s, r) => r + s)) +
			// Expect: 138 +
			$$(sum(concat(VALS, [10]))) +
			// Expect: 2500000000008 + (1 days + 2 hours);
			$$(FUNC2(2.5 finney, 8)) + ($(FUNC2(1 days, 2 hours)));
		// $def FUNC5(x, y, z) hex((x + y) * z**10, 20)
		// Expect: _var5 = 0x000000000000000000000000000003282b0d3000;
		_var5 = $$(FUNC5(8, 4, 14));
		// Expect: _var2 = 6;
		_var2 = $$(1+1*2 - (1+1)/2 + 2**3/2);
		// $def FUNC6(x) FUNC2(3, x)
		// Expect: 66 * -256 * 72;
		_var1 = $$(33 << 1) * $$(-((2**10) >> 2)) * $$(3912 & FUNC6(88-2));
		// Expect: _b = true && false;
		_b = $$(-18 || 0) && $$(-18 && 0);
		// Expect: _var7 = 9 / 23025850
		_var7 = $$(log(512, 2)) / $$(int(log(10) * 1e7));
		// Expect: 0xffff21524117
		_var1 = $$(hex(~0x3 ^ 0xdeadbeef | 0x4 & 0xffffffffffff));
		// $def STRS ["x", "_var4"]
		// Expect: STRS[0] = x + _var4;
		_var2 = $(STRS[0]) + $$(STRS[1]);
	}

	function bar2() internal pure returns (bool) {
		// $def FUNC7(x) quote(x >= 0x100 ? "yes" : "no")
		// Expect: t = "no";
		string s = $$(FUNC7(100));
		// Expect: s3 = "yes";
		string s2 = $$(FUNC7(0x100));
		// Expect: s3 = "yes";
		string s3 = $$(FUNC7(0x100));
		// Expect: s4 = "bye";
		string s4 = $$(quote(0*10 == 0 ? "bye" : "hello"));
		// $def GREETING(first, last) quote(`Hello, ${first} ${last}!`)
		// Expect: s5 = "Hello, Samwise 32!";
		string s5 = $$(GREETING("Samwise", 2**5));
		// $def LASTNAME "Gamgee"
		// Expect: s6 = "Hello, Samwise Gamgee!";
		string s6 = $$(GREETING("Samwise", LASTNAME));
		// Expect: s7 = "foofoofoo";
		string s7 = $$(quote(repeat("foo", 3)));
		// $def MULTILINE_DEF I SPAN \
		// MULTIPLE LINES
		// Expect: s8 = "I SPAN MULTIPLE LINES";
		string s8 = $$(quote(peek(MULTILINE_DEF)));
		// $def TWO_TO_THE_FIFTH 2**5
		// Expect: s9 = "32, 2**5";
		string s9 = $$(quote(`$${TWO_TO_THE_FIFTH}, ${TWO_TO_THE_FIFTH}`));
		// $def FILLED_ARRAY(type, count) map(range(count), (i) => `${type}(${i})`)
		// Expect: uint256[3] a = [uint256(0), uint256(1), uint256(3)];
		uint256[3] a = $$(FILLED_ARRAY(uint256, 3));
		// $def FOO "foo"
		// $def FOO2 foo
		// $def FUNC8(a, b) (a != b)
		// Expect: return false || true ||
		return $$(bool(BAD_DEF)) || $(EXT_SYMBOL_1) ||
			// Expect: true || false || true ||
			$$(bool(ALIAS1)) || $$(bool(DEF2)) || $$(bool(~0 ^ 0)) ||
			// Expect: false || true && false ||
			$$(bool(~0 ^ ~0)) || $$(!!(true | false)) && $$(!(true || false)) ||
			// Expect: (1 != 2) || false && true &&
			$(FUNC8(1, 2)) || $$(FUNC8(3, 3)) && $$(FUNC8(80, 1)) &&
			// Expect: true && true &&
			$$(FOO == "foo") && $$(unquote(FOO) == "foo") &&
			// false && true && true;
			$$(FOO2 == "foo") && $$(peek(FOO2) == "foo") && $$(peek(FOO2) == FOO);
	}
}

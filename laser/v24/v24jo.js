var _0x4f9f = ["getCallingClassLoader", ".so", "readInt", "add", "readPointer", "writePointer", "writeInt", "readU8", "writeU8", "pointerSize", "sub", "attach", "connect", "toInt32", "options", "redirectHost", "allocUtf8String", "wakeUpReturnArray", "length", "push", "base", "sendQueue", "loginMessagePtr", "newOperator", "pthreadReturn", "serverConnection", "selectReturn", "messaging", "messageFactory", "recvQueue", "state", "createMessageByType", "replace", "returnAddress", "context", "equals", "select", "exports", "detachAll", "findModuleByName", "libg.so", "findExportByName", "libc.so", "void", "pointer", "pthread_mutex_lock", "pthread_mutex_unlock", "int", "pthread_cond_signal", "memmove", "ntohs", "uint16", "inet_addr", "send", "recv", "perform", "use", "java.lang.System", "loadLibrary", "overload", "java.lang.String", "implementation", "getRuntime", "loadLibrary0"];
(function (_0x39661c, _0x21b6ab) {
    var _0xf4ac3e = function (_0xde13fd) {
        while (--_0xde13fd) {
            _0x39661c.push(_0x39661c.shift());
        }
    };
    _0xf4ac3e(++_0x21b6ab);
}(_0x4f9f, 489));
var _0x5a64 = function (_0x5b71eb, _0x3ed90b) {
    _0x5b71eb = _0x5b71eb - 0;
    var _0x3e90c9 = _0x4f9f[_0x5b71eb];
    return _0x3e90c9;
};
var _0x241838 = { modules: {}, options: {} }, _0x31d8af = 11630504, _0x5f1c39 = 7475309, _0x2f6e52 = [481508, 786e3, 989476, 1022044, 4693200, 5559164], _0x2ef955 = 7343811, _0x45942f = 6032368, _0x381349 = 5781068, _0x5d6eba = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), "free"), _0x5a64("0x2"), [_0x5a64("0x3")]), _0x4882ba = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0x4")), "int", [_0x5a64("0x3")]), _0x3ec36c = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0x5")), _0x5a64("0x6"), [_0x5a64("0x3")]), _0x11a148 = new NativeFunction(Module[_0x5a64("0x0")]("libc.so", _0x5a64("0x7")), _0x5a64("0x6"), ["pointer"]), _0x83bc12 = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), "select"), _0x5a64("0x6"), [_0x5a64("0x6"), "pointer", "pointer", _0x5a64("0x3"), _0x5a64("0x3")]), _0x4412ee = new NativeFunction(Module.findExportByName(_0x5a64("0x1"), _0x5a64("0x8")), _0x5a64("0x3"), [_0x5a64("0x3"), _0x5a64("0x3"), _0x5a64("0x6")]), _0x1aa8df = new NativeFunction(Module.findExportByName(_0x5a64("0x1"), _0x5a64("0x9")), "uint16", [_0x5a64("0xa")]), _0x1b0e4a = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0xb")), _0x5a64("0x6"), [_0x5a64("0x3")]), _0x22df94 = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0xc")), _0x5a64("0x6"), [_0x5a64("0x6"), _0x5a64("0x3"), _0x5a64("0x6"), "int"]), _0x189a8d = new NativeFunction(Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0xd")), "int", [_0x5a64("0x6"), _0x5a64("0x3"), _0x5a64("0x6"), _0x5a64("0x6")]);
function _0x28e0a3(_0x5a1403, _0x145f4a) {
    Java[_0x5a64("0xe")](function () {
        var _0x27899b = Java[_0x5a64("0xf")](_0x5a64("0x10")), _0x3e16cc = Java[_0x5a64("0xf")]("java.lang.Runtime"), _0x5941d9 = _0x27899b[_0x5a64("0x11")][_0x5a64("0x12")](_0x5a64("0x13")), _0x3b153f = Java[_0x5a64("0xf")]("dalvik.system.VMStack");
        _0x5941d9[_0x5a64("0x14")] = function (_0x27899b) {
            try {
                _0x3e16cc[_0x5a64("0x15")]()[_0x5a64("0x16")] ? _0x3e16cc.getRuntime()[_0x5a64("0x16")](_0x3b153f[_0x5a64("0x17")](), _0x27899b) : _0x3e16cc[_0x5a64("0x15")]().loadLibrary(_0x27899b, _0x3b153f.getCallingClassLoader());
                _0x5a1403 === "lib" + _0x27899b + _0x5a64("0x18") && _0x145f4a();
            } catch (_0xba513a) { }
        };
    });
}
var _0x4ee664 = {
    e: function (_0x540ac2) {
        return _0x540ac2.add(8);
    }, n: function (_0x57a9d4) {
        return Memory[_0x5a64("0x19")](_0x57a9d4[_0x5a64("0x1a")](4));
    }, t: function (_0x3341fa, _0x2c18ad) {
        Memory.writeInt(_0x3341fa[_0x5a64("0x1a")](4), _0x2c18ad);
    }, o: function (_0xf073c) {
        return new NativeFunction(Memory[_0x5a64("0x1b")](Memory.readPointer(_0xf073c)[_0x5a64("0x1a")](20)), "int", ["pointer"])(_0xf073c);
    }, c: function (_0x127355) {
        new NativeFunction(Memory[_0x5a64("0x1b")](Memory[_0x5a64("0x1b")](_0x127355).add(8)), _0x5a64("0x2"), [_0x5a64("0x3")])(_0x127355);
    }, r: function (_0x4a74ba) {
        new NativeFunction(Memory.readPointer(Memory[_0x5a64("0x1b")](_0x4a74ba)[_0x5a64("0x1a")](12)), _0x5a64("0x2"), ["pointer"])(_0x4a74ba);
    }, i: function (_0x4ca4ce) {
        new NativeFunction(Memory.readPointer(Memory[_0x5a64("0x1b")](_0x4ca4ce)[_0x5a64("0x1a")](24)), _0x5a64("0x2"), ["pointer"])(_0x4ca4ce);
        new NativeFunction(Memory[_0x5a64("0x1b")](Memory[_0x5a64("0x1b")](_0x4ca4ce)[_0x5a64("0x1a")](4)), _0x5a64("0x2"), ["pointer"])(_0x4ca4ce);
    }
}, _0x3db63d = {
    a: function (_0x3ed079) {
        return Memory[_0x5a64("0x19")](_0x3ed079[_0x5a64("0x1a")](16));
    }, u: function (_0xb6bb3e) {
        return Memory[_0x5a64("0x1b")](_0xb6bb3e[_0x5a64("0x1a")](28));
    }, s: function (_0xf0a989, _0xcb9171) {
        Memory[_0x5a64("0x1c")](_0xf0a989[_0x5a64("0x1a")](28), _0xcb9171);
    }, M: function (_0x1a4811) {
        return Memory[_0x5a64("0x19")](_0x1a4811[_0x5a64("0x1a")](20));
    }, _: function (_0x40755c, _0x5212bf) {
        Memory[_0x5a64("0x1d")](_0x40755c[_0x5a64("0x1a")](20), _0x5212bf);
    }
}, _0x20e4c2 = {
    m: function (_0x9428c7) {
        return Memory[_0x5a64("0x1e")](_0x9428c7[_0x5a64("0x1a")](2)) << 16 | Memory[_0x5a64("0x1e")](_0x9428c7[_0x5a64("0x1a")](3)) << 8 | Memory[_0x5a64("0x1e")](_0x9428c7.add(4));
    }, h: function (_0x33e902, _0x5d87cb) {
        Memory[_0x5a64("0x1f")](_0x33e902[_0x5a64("0x1a")](2), _0x5d87cb >> 16 & 255);
        Memory[_0x5a64("0x1f")](_0x33e902[_0x5a64("0x1a")](3), _0x5d87cb >> 8 & 255);
        Memory.writeU8(_0x33e902.add(4), 255 & _0x5d87cb);
    }, f: function (_0x436f36, _0x241a42) {
        Memory[_0x5a64("0x1f")](_0x436f36[_0x5a64("0x1a")](0), _0x241a42 >> 8 & 255);
        Memory[_0x5a64("0x1f")](_0x436f36[_0x5a64("0x1a")](1), 255 & _0x241a42);
    }, y: function (_0x166fcc) {
        return Memory.readU8(_0x166fcc[_0x5a64("0x1a")](5)) << 8 | Memory[_0x5a64("0x1e")](_0x166fcc[_0x5a64("0x1a")](6));
    }, g: function (_0x2898aa, _0x4f5da0) {
        Memory[_0x5a64("0x1f")](_0x2898aa[_0x5a64("0x1a")](5), _0x4f5da0 >> 8 & 255);
        Memory[_0x5a64("0x1f")](_0x2898aa[_0x5a64("0x1a")](6), 255 & _0x4f5da0);
    }, o: function (_0x34a1bb) {
        return Memory[_0x5a64("0x1e")](_0x34a1bb) << 8 | Memory[_0x5a64("0x1e")](_0x34a1bb[_0x5a64("0x1a")](1));
    }
}, _0x3c37eb = {
    l: function (_0x306a82) {
        return Memory.readInt(_0x306a82[_0x5a64("0x1a")](4));
    }, d: function (_0x47a155, _0x49541a) {
        return Memory[_0x5a64("0x1b")](Memory[_0x5a64("0x1b")](_0x47a155)[_0x5a64("0x1a")](Process[_0x5a64("0x20")] * _0x49541a));
    }, v: function (_0x58a929, _0x5db27f, _0x3bd818) {
        Memory[_0x5a64("0x1c")](Memory[_0x5a64("0x1b")](_0x58a929)[_0x5a64("0x1a")](Process[_0x5a64("0x20")] * _0x5db27f), _0x3bd818);
    }, p: function (_0x1583c3) {
        return Memory[_0x5a64("0x19")](_0x1583c3[_0x5a64("0x1a")](8));
    }, N: function (_0x3d116f) {
        Memory[_0x5a64("0x1d")](_0x3d116f.add(8), Memory[_0x5a64("0x19")](_0x3d116f[_0x5a64("0x1a")](8)) - 1);
    }, R: function (_0x17a31b) {
        Memory[_0x5a64("0x1d")](_0x17a31b[_0x5a64("0x1a")](8), Memory[_0x5a64("0x19")](_0x17a31b[_0x5a64("0x1a")](8)) + 1);
    }, b: function (_0x355e71) {
        return Memory.readInt(_0x355e71[_0x5a64("0x1a")](12));
    }, T: function (_0x116b27) {
        return Memory[_0x5a64("0x19")](_0x116b27[_0x5a64("0x1a")](16));
    }, A: function (_0x4c073f, _0x16f8fa) {
        Memory[_0x5a64("0x1d")](_0x4c073f.add(12), _0x16f8fa);
    }, w: function (_0x5dd32b, _0x5cc58d) {
        Memory[_0x5a64("0x1d")](_0x5dd32b[_0x5a64("0x1a")](16), _0x5cc58d);
    }, B: function (_0x559fc6, _0x3d56bf) {
        _0x4882ba(_0x559fc6.sub(4));
        var _0x3efd77 = _0x3c37eb.T(_0x559fc6);
        _0x3c37eb.v(_0x559fc6, _0x3efd77, _0x3d56bf);
        _0x3c37eb.w(_0x559fc6, (_0x3efd77 + 1) % _0x3c37eb.l(_0x559fc6));
        _0x3c37eb.R(_0x559fc6);
        _0x3ec36c(_0x559fc6[_0x5a64("0x21")](4));
    }, F: function (_0x4ae06a) {
        var _0x338fb2 = null;
        if (_0x4882ba(_0x4ae06a[_0x5a64("0x21")](4)), _0x3c37eb.p(_0x4ae06a)) {
            var _0x530aa1 = _0x3c37eb.b(_0x4ae06a);
            _0x338fb2 = _0x3c37eb.d(_0x4ae06a, _0x530aa1);
            _0x3c37eb.A(_0x4ae06a, (_0x530aa1 + 1) % _0x3c37eb.l(_0x4ae06a));
            _0x3c37eb.N(_0x4ae06a);
        }
        return _0x3ec36c(_0x4ae06a[_0x5a64("0x21")](4)), _0x338fb2;
    }
};
function _0x5a48fc() {
    Interceptor[_0x5a64("0x22")](Module[_0x5a64("0x0")]("libc.so", _0x5a64("0x23")), {
        onEnter: function (_0x346d30) {
            if (9339 === _0x1aa8df(Memory.readU16(_0x346d30[1][_0x5a64("0x1a")](2)))) {
                if (_0x241838.fd = _0x346d30[0][_0x5a64("0x24")](), _0x241838[_0x5a64("0x25")][_0x5a64("0x26")]) {
                    var _0x17405c = Memory[_0x5a64("0x27")](_0x241838[_0x5a64("0x25")][_0x5a64("0x26")]);
                    Memory[_0x5a64("0x1d")](_0x346d30[1][_0x5a64("0x1a")](4), _0x1b0e4a("127.0.0.1")); // IP Here
                }
                _0x1ff1cd();
            }
        }
    });
}
function _0x1ff1cd() {
    _0x241838[_0x5a64("0x28")] = [];
    for (var _0x1b17ad = 0; _0x1b17ad < _0x2f6e52[_0x5a64("0x29")]; _0x1b17ad += 1) {
        _0x241838[_0x5a64("0x28")][_0x5a64("0x2a")](_0x241838[_0x5a64("0x2b")].add(_0x2f6e52[_0x1b17ad]));
    }
    function _0x37d280() {
        for (var _0x1b17ad = _0x3c37eb.F(_0x241838[_0x5a64("0x2c")]); _0x1b17ad;) {
            10100 === _0x4ee664.o(_0x1b17ad) && (_0x1b17ad = Memory[_0x5a64("0x1b")](_0x241838[_0x5a64("0x2d")]), Memory[_0x5a64("0x1c")](_0x241838[_0x5a64("0x2d")], ptr(0)));
            _0x4ee664.c(_0x1b17ad);
            var _0x28484b = _0x4ee664.e(_0x1b17ad), _0x1d8160 = _0x3db63d.a(_0x28484b), _0x37d280 = _0x241838[_0x5a64("0x2e")](_0x1d8160 + 7);
            _0x4412ee(_0x37d280[_0x5a64("0x1a")](7), _0x3db63d.u(_0x28484b), _0x1d8160);
            _0x20e4c2.h(_0x37d280, _0x1d8160);
            _0x20e4c2.f(_0x37d280, _0x4ee664.o(_0x1b17ad));
            _0x20e4c2.g(_0x37d280, _0x4ee664.n(_0x1b17ad));
            _0x22df94(_0x241838.fd, _0x37d280, _0x1d8160 + 7, 0);
            _0x5d6eba(_0x37d280);
            _0x4ee664.i(_0x1b17ad);
            _0x1b17ad = _0x3c37eb.F(_0x241838.sendQueue);
        }
    }
    _0x241838[_0x5a64("0x2f")] = _0x241838[_0x5a64("0x2b")][_0x5a64("0x1a")](_0x2ef955);
    _0x241838[_0x5a64("0x30")] = Memory.readPointer(_0x241838[_0x5a64("0x2b")][_0x5a64("0x1a")](_0x31d8af));
    _0x241838[_0x5a64("0x31")] = _0x241838.base.add(_0x381349);
    _0x241838[_0x5a64("0x32")] = Memory[_0x5a64("0x1b")](_0x241838[_0x5a64("0x30")].add(4));
    _0x241838[_0x5a64("0x33")] = Memory[_0x5a64("0x1b")](_0x241838[_0x5a64("0x32")][_0x5a64("0x1a")](52));
    _0x241838[_0x5a64("0x34")] = _0x241838[_0x5a64("0x32")][_0x5a64("0x1a")](60);
    _0x241838[_0x5a64("0x2c")] = _0x241838[_0x5a64("0x32")][_0x5a64("0x1a")](84);
    _0x241838[_0x5a64("0x35")] = _0x241838[_0x5a64("0x32")][_0x5a64("0x1a")](212);
    _0x241838[_0x5a64("0x2d")] = _0x241838[_0x5a64("0x32")].add(216);
    _0x241838[_0x5a64("0x2e")] = new NativeFunction(_0x241838[_0x5a64("0x2b")].add(_0x5f1c39), _0x5a64("0x3"), ["int"]);
    _0x241838[_0x5a64("0x36")] = new NativeFunction(_0x241838[_0x5a64("0x2b")][_0x5a64("0x1a")](_0x45942f), _0x5a64("0x3"), [_0x5a64("0x3"), _0x5a64("0x6")]);
    Interceptor[_0x5a64("0x37")](Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0x7")), new NativeCallback(function (_0x1b17ad) {
        if (!this[_0x5a64("0x38")].equals(_0x241838[_0x5a64("0x2f")])) {
            return _0x11a148(_0x1b17ad);
        }
        for (var _0x5f46ce = Memory[_0x5a64("0x1b")](this[_0x5a64("0x39")].sp.add(4)), _0x2295db = 0; _0x2295db < _0x241838.wakeUpReturnArray[_0x5a64("0x29")]; _0x2295db += 1) {
            if (_0x5f46ce[_0x5a64("0x3a")](_0x241838.wakeUpReturnArray[_0x2295db])) {
                return _0x37d280(), 0;
            }
        }
        return _0x11a148(_0x1b17ad);
    }, _0x5a64("0x6"), [_0x5a64("0x3")]));
    Interceptor[_0x5a64("0x37")](Module[_0x5a64("0x0")](_0x5a64("0x1"), _0x5a64("0x3b")), new NativeCallback(function (_0x1b17ad, _0x4744be, _0x1c94a0, _0x37d280, _0xdb1881) {
        var _0x4cc3f3 = _0x83bc12(_0x1b17ad, _0x4744be, _0x1c94a0, _0x37d280, _0xdb1881);
        return this[_0x5a64("0x38")][_0x5a64("0x3a")](_0x241838[_0x5a64("0x31")]) && function () {
            var _0x1b17ad = _0x241838[_0x5a64("0x2e")](7);
            _0x189a8d(_0x241838.fd, _0x1b17ad, 7, 256);
            var _0x4744be = _0x20e4c2.o(_0x1b17ad);
            20104 === _0x4744be && Memory[_0x5a64("0x1d")](_0x241838[_0x5a64("0x35")], 5);
            var _0x1c94a0 = _0x20e4c2.m(_0x1b17ad), _0x37d280 = _0x20e4c2.y(_0x1b17ad);
            _0x5d6eba(_0x1b17ad);
            var _0xdb1881 = _0x241838.newOperator(_0x1c94a0);
            _0x189a8d(_0x241838.fd, _0xdb1881, _0x1c94a0, 256);
            var _0x4cc3f3 = _0x241838[_0x5a64("0x36")](_0x241838[_0x5a64("0x33")], _0x4744be);
            _0x4ee664.t(_0x4cc3f3, _0x37d280);
            var _0x21f0ed = _0x4ee664.e(_0x4cc3f3);
            if (_0x3db63d._(_0x21f0ed, _0x1c94a0), _0x1c94a0) {
                var _0x35726a = _0x241838[_0x5a64("0x2e")](_0x1c94a0);
                _0x4412ee(_0x35726a, _0xdb1881, _0x1c94a0);
                _0x3db63d.s(_0x21f0ed, _0x35726a);
            }
            _0x4ee664.r(_0x4cc3f3);
            _0x3c37eb.B(_0x241838[_0x5a64("0x34")], _0x4cc3f3);
            _0x5d6eba(_0xdb1881);
        }(), _0x4cc3f3;
    }, "int", [_0x5a64("0x6"), _0x5a64("0x3"), "pointer", _0x5a64("0x3"), _0x5a64("0x3")]));
}
rpc[_0x5a64("0x3c")] = {
    init: function (_0x112b92, _0x1ba417) {
        _0x241838[_0x5a64("0x25")] = _0x1ba417 || {};
        _0x28e0a3("libg.so", function () {
            Interceptor[_0x5a64("0x3d")]();
            _0x241838[_0x5a64("0x2b")] = Process[_0x5a64("0x3e")](_0x5a64("0x3f"))[_0x5a64("0x2b")];
            _0x5a48fc();
        });
    }
};
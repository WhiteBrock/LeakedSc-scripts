var _0x5ce0 = ["readU8", "writeU8", "sub", "attach", "connect", "readU16", "options", "redirectHost", "allocUtf8String", "wakeUpReturnArray", "length", "push", "base", "sendQueue", "loginMessagePtr", "pthreadReturn", "serverConnection", "messageFactory", "messaging", "recvQueue", "state", "newOperator", "createMessageByType", "returnAddress", "equals", "context", "replace", "select", "exports", "findModuleByName", "free", "pointer", "findExportByName", "libc.so", "int", "pthread_cond_signal", "ntohs", "uint16", "inet_addr", "perform", "use", "loadLibrary", "dalvik.system.VMStack", "loadLibrary0", "getCallingClassLoader", "getRuntime", "lib", ".so", "add", "writeInt", "readPointer", "void", "readInt", "writePointer"];
(function (_0x51dbba, _0x524bad) {
    var _0x4e97aa = function (_0x453bca) {
        while (--_0x453bca) {
            _0x51dbba.push(_0x51dbba.shift());
        }
    };
    _0x4e97aa(++_0x524bad);
}(_0x5ce0, 246));
var _0x2010 = function (_0x5eb1e7, _0x27a761) {
    _0x5eb1e7 = _0x5eb1e7 - 0;
    var _0x5870ca = _0x5ce0[_0x5eb1e7];
    return _0x5870ca;
};
var _0x21f077 = { modules: {}, options: {} }, _0x3a530a = 10758892, _0x42692b = 6681317, _0x230ff0 = [676308, 1003840, 3187712, 3341156, 5047168, 5172900], _0x502579 = 6495403, _0x3a3375 = 2946652, _0x457a39 = 717888, _0x312703 = 4, _0x80fe1f = new NativeFunction(Module.findExportByName("libc.so", _0x2010("0x0")), "void", [_0x2010("0x1")]), _0x5e2fac = new NativeFunction(Module[_0x2010("0x2")](_0x2010("0x3"), "pthread_mutex_lock"), "int", ["pointer"]), _0x67603e = new NativeFunction(Module[_0x2010("0x2")]("libc.so", "pthread_mutex_unlock"), _0x2010("0x4"), [_0x2010("0x1")]), _0x46200d = new NativeFunction(Module[_0x2010("0x2")](_0x2010("0x3"), _0x2010("0x5")), _0x2010("0x4"), [_0x2010("0x1")]), _0x1327b8 = new NativeFunction(Module[_0x2010("0x2")](_0x2010("0x3"), "select"), _0x2010("0x4"), [_0x2010("0x4"), _0x2010("0x1"), "pointer", _0x2010("0x1"), _0x2010("0x1")]), _0x73bcfa = new NativeFunction(Module.findExportByName(_0x2010("0x3"), "memmove"), _0x2010("0x1"), [_0x2010("0x1"), "pointer", _0x2010("0x4")]), _0x1b14ea = new NativeFunction(Module[_0x2010("0x2")]("libc.so", _0x2010("0x6")), _0x2010("0x7"), [_0x2010("0x7")]), _0x5ea957 = new NativeFunction(Module[_0x2010("0x2")](_0x2010("0x3"), _0x2010("0x8")), "int", [_0x2010("0x1")]), _0x46614d = new NativeFunction(Module[_0x2010("0x2")](_0x2010("0x3"), "send"), "int", [_0x2010("0x4"), _0x2010("0x1"), _0x2010("0x4"), _0x2010("0x4")]), _0x59ef34 = new NativeFunction(Module[_0x2010("0x2")]("libc.so", "recv"), _0x2010("0x4"), [_0x2010("0x4"), _0x2010("0x1"), _0x2010("0x4"), "int"]);
function _0x59e75e(_0x49e5d7, _0x3a5f76) {
    Java[_0x2010("0x9")](function () {
        var _0x385540 = Java[_0x2010("0xa")]("java.lang.System"), _0x8edffe = Java.use("java.lang.Runtime"), _0x4fa224 = _0x385540[_0x2010("0xb")].overload("java.lang.String"), _0x4bbfa6 = Java.use(_0x2010("0xc"));
        _0x4fa224.implementation = function (_0x385540) {
            try {
                _0x8edffe.getRuntime()[_0x2010("0xd")] ? _0x8edffe.getRuntime().loadLibrary0(_0x4bbfa6[_0x2010("0xe")](), _0x385540) : _0x8edffe[_0x2010("0xf")]()[_0x2010("0xb")](_0x385540, _0x4bbfa6.getCallingClassLoader());
                _0x49e5d7 === _0x2010("0x10") + _0x385540 + _0x2010("0x11") && _0x3a5f76();
            } catch (_0x15e0f0) { }
        };
    });
}
var _0x18112e = {
    e: function (_0x1eb75c) {
        return _0x1eb75c.add(8);
    }, n: function (_0x723967) {
        return Memory.readInt(_0x723967[_0x2010("0x12")](4));
    }, t: function (_0x2185e4, _0x51e428) {
        Memory[_0x2010("0x13")](_0x2185e4[_0x2010("0x12")](4), _0x51e428);
    }, o: function (_0x408498) {
        return new NativeFunction(Memory[_0x2010("0x14")](Memory[_0x2010("0x14")](_0x408498).add(20)), _0x2010("0x4"), ["pointer"])(_0x408498);
    }, c: function (_0x44a6c1) {
        new NativeFunction(Memory[_0x2010("0x14")](Memory[_0x2010("0x14")](_0x44a6c1)[_0x2010("0x12")](8)), _0x2010("0x15"), [_0x2010("0x1")])(_0x44a6c1);
    }, r: function (_0x513a1d) {
        new NativeFunction(Memory[_0x2010("0x14")](Memory[_0x2010("0x14")](_0x513a1d)[_0x2010("0x12")](12)), _0x2010("0x15"), [_0x2010("0x1")])(_0x513a1d);
    }, i: function (_0x3fe166) {
        new NativeFunction(Memory[_0x2010("0x14")](Memory[_0x2010("0x14")](_0x3fe166).add(24)), _0x2010("0x15"), [_0x2010("0x1")])(_0x3fe166);
        new NativeFunction(Memory[_0x2010("0x14")](Memory[_0x2010("0x14")](_0x3fe166).add(4)), _0x2010("0x15"), [_0x2010("0x1")])(_0x3fe166);
    }
}, _0x4485af = {
    a: function (_0x198098) {
        return Memory[_0x2010("0x16")](_0x198098.add(16));
    }, u: function (_0x413911) {
        return Memory.readPointer(_0x413911.add(28));
    }, s: function (_0x28dfcb, _0x2c0a0a) {
        Memory[_0x2010("0x17")](_0x28dfcb[_0x2010("0x12")](28), _0x2c0a0a);
    }, M: function (_0x311293) {
        return Memory[_0x2010("0x16")](_0x311293.add(20));
    }, _: function (_0x3fe99a, _0x479fbe) {
        Memory[_0x2010("0x13")](_0x3fe99a[_0x2010("0x12")](20), _0x479fbe);
    }
}, _0x3bba8d = {
    m: function (_0x332398) {
        return Memory[_0x2010("0x18")](_0x332398[_0x2010("0x12")](2)) << 16 | Memory.readU8(_0x332398[_0x2010("0x12")](3)) << 8 | Memory.readU8(_0x332398[_0x2010("0x12")](4));
    }, h: function (_0x2c6414, _0x2adbda) {
        Memory[_0x2010("0x19")](_0x2c6414[_0x2010("0x12")](2), _0x2adbda >> 16 & 255);
        Memory[_0x2010("0x19")](_0x2c6414[_0x2010("0x12")](3), _0x2adbda >> 8 & 255);
        Memory[_0x2010("0x19")](_0x2c6414[_0x2010("0x12")](4), 255 & _0x2adbda);
    }, f: function (_0x2ce366, _0x479a3f) {
        Memory[_0x2010("0x19")](_0x2ce366[_0x2010("0x12")](0), _0x479a3f >> 8 & 255);
        Memory[_0x2010("0x19")](_0x2ce366[_0x2010("0x12")](1), 255 & _0x479a3f);
    }, y: function (_0x586060) {
        return Memory[_0x2010("0x18")](_0x586060.add(5)) << 8 | Memory[_0x2010("0x18")](_0x586060[_0x2010("0x12")](6));
    }, g: function (_0x293db0, _0x58bf75) {
        Memory.writeU8(_0x293db0[_0x2010("0x12")](5), _0x58bf75 >> 8 & 255);
        Memory[_0x2010("0x19")](_0x293db0[_0x2010("0x12")](6), 255 & _0x58bf75);
    }, o: function (_0x1b748b) {
        return Memory[_0x2010("0x18")](_0x1b748b) << 8 | Memory[_0x2010("0x18")](_0x1b748b.add(1));
    }
}, _0x41116e = {
    l: function (_0x5cbe5c) {
        return Memory[_0x2010("0x16")](_0x5cbe5c.add(4));
    }, d: function (_0xe321f3, _0x44ef7f) {
        return Memory[_0x2010("0x14")](Memory[_0x2010("0x14")](_0xe321f3)[_0x2010("0x12")](_0x312703 * _0x44ef7f));
    }, v: function (_0x31e8a3, _0x4055c9, _0x4b2715) {
        Memory.writePointer(Memory[_0x2010("0x14")](_0x31e8a3)[_0x2010("0x12")](_0x312703 * _0x4055c9), _0x4b2715);
    }, p: function (_0x36af90) {
        return Memory[_0x2010("0x16")](_0x36af90[_0x2010("0x12")](8));
    }, N: function (_0x15bdfb) {
        Memory[_0x2010("0x13")](_0x15bdfb[_0x2010("0x12")](8), Memory[_0x2010("0x16")](_0x15bdfb[_0x2010("0x12")](8)) - 1);
    }, R: function (_0x1d98cb) {
        Memory[_0x2010("0x13")](_0x1d98cb[_0x2010("0x12")](8), Memory[_0x2010("0x16")](_0x1d98cb[_0x2010("0x12")](8)) + 1);
    }, T: function (_0x4bb13) {
        return Memory[_0x2010("0x16")](_0x4bb13[_0x2010("0x12")](12));
    }, b: function (_0x2795e7) {
        return Memory.readInt(_0x2795e7.add(16));
    }, A: function (_0x4dc694, _0x6c577a) {
        Memory[_0x2010("0x13")](_0x4dc694[_0x2010("0x12")](12), _0x6c577a);
    }, S: function (_0x3af9da, _0x123597) {
        Memory[_0x2010("0x13")](_0x3af9da[_0x2010("0x12")](16), _0x123597);
    }, w: function (_0x443d6f, _0x3d26c1) {
        _0x5e2fac(_0x443d6f[_0x2010("0x1a")](4));
        var _0x1e11ad = _0x41116e.b(_0x443d6f);
        _0x41116e.v(_0x443d6f, _0x1e11ad, _0x3d26c1);
        _0x41116e.S(_0x443d6f, (_0x1e11ad + 1) % _0x41116e.l(_0x443d6f));
        _0x41116e.R(_0x443d6f);
        _0x67603e(_0x443d6f[_0x2010("0x1a")](4));
    }, B: function (_0x1183ac) {
        var _0xb23c87 = null;
        if (_0x5e2fac(_0x1183ac[_0x2010("0x1a")](4)), _0x41116e.p(_0x1183ac)) {
            var _0x282832 = _0x41116e.T(_0x1183ac);
            _0xb23c87 = _0x41116e.d(_0x1183ac, _0x282832);
            _0x41116e.A(_0x1183ac, (_0x282832 + 1) % _0x41116e.l(_0x1183ac));
            _0x41116e.N(_0x1183ac);
        }
        return _0x67603e(_0x1183ac.sub(4)), _0xb23c87;
    }
};
function _0x184827() {
    Interceptor[_0x2010("0x1b")](Module[_0x2010("0x2")]("libc.so", _0x2010("0x1c")), {
        onEnter: function (_0x99c567) {
            if (9339 === _0x1b14ea(Memory[_0x2010("0x1d")](_0x99c567[1][_0x2010("0x12")](2)))) {
                if (_0x21f077.fd = _0x99c567[0].toInt32(), _0x21f077[_0x2010("0x1e")][_0x2010("0x1f")]) {
                    var _0x3efc86 = Memory[_0x2010("0x20")](_0x21f077[_0x2010("0x1e")][_0x2010("0x1f")]);
                    Memory.writeInt(_0x99c567[1].add(4), _0x5ea957("127.0.0.1")); // IP Here
                }
                _0x5f4f8a();
            }
        }
    });
}
function _0x5f4f8a() {
    _0x21f077[_0x2010("0x21")] = [];
    for (var _0x2da858 = 0; _0x2da858 < _0x230ff0[_0x2010("0x22")]; _0x2da858 += 1) {
        _0x21f077[_0x2010("0x21")][_0x2010("0x23")](_0x21f077[_0x2010("0x24")][_0x2010("0x12")](_0x230ff0[_0x2da858]));
    }
    function _0x416d30() {
        for (var _0x2da858 = _0x41116e.B(_0x21f077[_0x2010("0x25")]); _0x2da858;) {
            10100 === _0x18112e.o(_0x2da858) && (_0x2da858 = Memory[_0x2010("0x14")](_0x21f077[_0x2010("0x26")]), Memory[_0x2010("0x17")](_0x21f077[_0x2010("0x26")], ptr(0)));
            _0x18112e.c(_0x2da858);
            var _0x4ade3c = _0x18112e.e(_0x2da858), _0x4c87f1 = _0x4485af.a(_0x4ade3c), _0x416d30 = _0x21f077.newOperator(_0x4c87f1 + 7);
            _0x73bcfa(_0x416d30[_0x2010("0x12")](7), _0x4485af.u(_0x4ade3c), _0x4c87f1);
            _0x3bba8d.h(_0x416d30, _0x4c87f1);
            _0x3bba8d.f(_0x416d30, _0x18112e.o(_0x2da858));
            _0x3bba8d.g(_0x416d30, _0x18112e.n(_0x2da858));
            _0x46614d(_0x21f077.fd, _0x416d30, _0x4c87f1 + 7, 0);
            _0x80fe1f(_0x416d30);
            _0x18112e.i(_0x2da858);
            _0x2da858 = _0x41116e.B(_0x21f077[_0x2010("0x25")]);
        }
    }
    _0x21f077[_0x2010("0x27")] = _0x21f077[_0x2010("0x24")][_0x2010("0x12")](_0x502579);
    _0x21f077[_0x2010("0x28")] = Memory[_0x2010("0x14")](_0x21f077.base[_0x2010("0x12")](_0x3a530a));
    _0x21f077.selectReturn = _0x21f077[_0x2010("0x24")].add(_0x457a39);
    _0x21f077.messaging = Memory[_0x2010("0x14")](_0x21f077[_0x2010("0x28")][_0x2010("0x12")](4));
    _0x21f077[_0x2010("0x29")] = Memory[_0x2010("0x14")](_0x21f077[_0x2010("0x2a")][_0x2010("0x12")](52));
    _0x21f077[_0x2010("0x2b")] = _0x21f077[_0x2010("0x2a")][_0x2010("0x12")](60);
    _0x21f077[_0x2010("0x25")] = _0x21f077.messaging[_0x2010("0x12")](84);
    _0x21f077[_0x2010("0x2c")] = _0x21f077.messaging[_0x2010("0x12")](212);
    _0x21f077[_0x2010("0x26")] = _0x21f077.messaging[_0x2010("0x12")](216);
    _0x21f077[_0x2010("0x2d")] = new NativeFunction(_0x21f077[_0x2010("0x24")][_0x2010("0x12")](_0x42692b), "pointer", [_0x2010("0x4")]);
    _0x21f077[_0x2010("0x2e")] = new NativeFunction(_0x21f077[_0x2010("0x24")][_0x2010("0x12")](_0x3a3375), _0x2010("0x1"), [_0x2010("0x1"), _0x2010("0x4")]);
    Interceptor.replace(Module.findExportByName("libc.so", _0x2010("0x5")), new NativeCallback(function (_0x2da858) {
        if (!this[_0x2010("0x2f")][_0x2010("0x30")](_0x21f077[_0x2010("0x27")])) {
            return _0x46200d(_0x2da858);
        }
        for (var _0x48cde0 = Memory[_0x2010("0x14")](this[_0x2010("0x31")].sp[_0x2010("0x12")](4)), _0x4f6954 = 0; _0x4f6954 < _0x21f077[_0x2010("0x21")][_0x2010("0x22")]; _0x4f6954 += 1) {
            if (_0x48cde0[_0x2010("0x30")](_0x21f077[_0x2010("0x21")][_0x4f6954])) {
                return _0x416d30(), 0;
            }
        }
        return _0x46200d(_0x2da858);
    }, "int", [_0x2010("0x1")]));
    Interceptor[_0x2010("0x32")](Module.findExportByName(_0x2010("0x3"), _0x2010("0x33")), new NativeCallback(function (_0x2da858, _0x5934ed, _0x4ae816, _0x416d30, _0x657310) {
        var _0x1e241f = _0x1327b8(_0x2da858, _0x5934ed, _0x4ae816, _0x416d30, _0x657310);
        return this.returnAddress[_0x2010("0x30")](_0x21f077.selectReturn) && function () {
            var _0x2da858 = _0x21f077[_0x2010("0x2d")](7);
            _0x59ef34(_0x21f077.fd, _0x2da858, 7, 256);
            var _0x5934ed = _0x3bba8d.o(_0x2da858);
            20104 === _0x5934ed && Memory[_0x2010("0x13")](_0x21f077[_0x2010("0x2c")], 5);
            var _0x4ae816 = _0x3bba8d.m(_0x2da858), _0x416d30 = _0x3bba8d.y(_0x2da858);
            _0x80fe1f(_0x2da858);
            var _0x657310 = _0x21f077.newOperator(_0x4ae816);
            _0x59ef34(_0x21f077.fd, _0x657310, _0x4ae816, 256);
            var _0x1e241f = _0x21f077[_0x2010("0x2e")](_0x21f077[_0x2010("0x29")], _0x5934ed);
            _0x18112e.t(_0x1e241f, _0x416d30);
            var _0x3f17fa = _0x18112e.e(_0x1e241f);
            if (_0x4485af._(_0x3f17fa, _0x4ae816), _0x4ae816) {
                var _0x4e24fc = _0x21f077[_0x2010("0x2d")](_0x4ae816);
                _0x73bcfa(_0x4e24fc, _0x657310, _0x4ae816);
                _0x4485af.s(_0x3f17fa, _0x4e24fc);
            }
            _0x18112e.r(_0x1e241f);
            _0x41116e.w(_0x21f077[_0x2010("0x2b")], _0x1e241f);
            _0x80fe1f(_0x657310);
        }(), _0x1e241f;
    }, _0x2010("0x4"), [_0x2010("0x4"), "pointer", "pointer", _0x2010("0x1"), _0x2010("0x1")]));
}
rpc[_0x2010("0x34")] = {
    init: function (_0xd956c2, _0x46af32) {
        _0x21f077.options = _0x46af32 || {};
        _0x59e75e("libg.so", function () {
            Interceptor.detachAll();
            _0x21f077.base = Process[_0x2010("0x35")]("libg.so")[_0x2010("0x24")];
            _0x184827();
        });
    }
};
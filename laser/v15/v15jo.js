var _0x3a32 = ["decode", "setByteArray", "options", "pthread_cond_signal", "context", "equals", "detach", "exports", "modules", "findModuleByName", "enumerateRangesSync", "---", "base", "length", "push", "size", "protection", "attach", "findExportByName", "libc.so", "readUtf8String", "writeUtf8String", "use", "java.lang.System", "java.lang.Runtime", "loadLibrary", "dalvik.system.VMStack", "implementation", "getRuntime", "loadLibrary0", "getCallingClassLoader", "getByteStream", "add", "getVersion", "setVersion", "writeInt", "getMessageType", "readPointer", "int", "encode", "void", "pointer", "getOffset", "getByteArray", "writePointer", "getLength", "readInt", "setLength", "setEncodingLength", "writeU8", "readU8", "libg.so", "pthread_mutex_lock", "memmove", "sub", "replace", "setMessageType", "setMessageVersion", "recvfrom"];
(function (_0x5de7e9, _0x4230cb) {
    var _0x2e6a50 = function (_0xdfe154) {
        while (--_0xdfe154) {
            _0x5de7e9.push(_0x5de7e9.shift());
        }
    };
    _0x2e6a50(++_0x4230cb);
}(_0x3a32, 362));
var _0x7369 = function (_0x551e2d, _0x33e0b8) {
    _0x551e2d = _0x551e2d - 0;
    var _0x320095 = _0x3a32[_0x551e2d];
    return _0x320095;
}, cache = { modules: {}, options: {} };
const SERVER_CONNECTION = 9926272, SENDTO = 5721564, RECVFROM = 5721524, NEW_OPERATOR = 5823761, WAKEUP = 5722111, CREATE_MESSAGE_BY_TYPE = 3999840, POINTER_SIZE = 4;
function moduleInfo(_0x480abc, _0x415255) {
    if (cache[_0x7369("0x0")][_0x480abc] && !_0x415255) {
        return cache[_0x7369("0x0")][_0x480abc];
    }
    const _0x595a7d = Process[_0x7369("0x1")](_0x480abc), _0x279347 = Module[_0x7369("0x2")](_0x480abc, _0x7369("0x3")), _0x23c9c8 = { name: _0x480abc, base: _0x595a7d[_0x7369("0x4")], ranges: [] };
    for (var _0x2bc575 = 0; _0x2bc575 < _0x279347[_0x7369("0x5")]; _0x2bc575 += 1) {
        _0x23c9c8.ranges[_0x7369("0x6")]({ base: _0x279347[_0x2bc575][_0x7369("0x4")], size: _0x279347[_0x2bc575][_0x7369("0x7")], protection: _0x279347[_0x2bc575][_0x7369("0x8")] });
    }
    return cache[_0x7369("0x0")][_0x480abc] = _0x23c9c8, _0x23c9c8;
}
function lptr(_0x48c603, _0x5d9185) {
    const _0x198279 = moduleInfo(_0x48c603);
    return _0x198279[_0x7369("0x4")].add(_0x5d9185);
}
function redirectHost(_0x558bbb) {
    const _0x1ec39e = new NativeFunction(Module.findExportByName("libc.so", "ntohs"), "uint16", ["uint16"]), _0x5c2530 = new NativeFunction(Module.findExportByName("libc.so", "inet_addr"), "int", ["pointer"]);
    Interceptor.attach(Module.findExportByName("libc.so", "connect"), {
        onEnter: function (_0x2129c1) {
            if (_0x1ec39e(Memory.readU16(_0x2129c1[1].add(2))) === 9339) {
                var _0x18a6df = Memory.allocUtf8String(_0x558bbb);
                Memory.writeInt(_0x2129c1[1].add(4), _0x5c2530("127.0.0.1")); // IP Here
            }
        }
    });
}
function onLoad(_0x21e2da, _0x5ef0c1) {
    Java.perform(function () {
        const _0x165980 = Java[_0x7369("0xe")](_0x7369("0xf")), _0x59e37c = Java[_0x7369("0xe")](_0x7369("0x10")), _0x2ad017 = _0x165980[_0x7369("0x11")].overload("java.lang.String"), _0x41ae16 = Java.use(_0x7369("0x12"));
        _0x2ad017[_0x7369("0x13")] = function (_0x26663a) {
            try {
                _0x59e37c[_0x7369("0x14")]()[_0x7369("0x15")] ? _0x59e37c[_0x7369("0x14")]()[_0x7369("0x15")](_0x41ae16[_0x7369("0x16")](), _0x26663a) : _0x59e37c[_0x7369("0x14")]()[_0x7369("0x11")](_0x26663a, _0x41ae16[_0x7369("0x16")]());
                _0x21e2da === "lib" + _0x26663a + ".so" && _0x5ef0c1();
            } catch (_0x460814) { }
        };
    });
}
function Message() { }
Message[_0x7369("0x17")] = function (_0x18b6ba) {
    return _0x18b6ba[_0x7369("0x18")](8);
};
Message[_0x7369("0x19")] = function (_0x518a30) {
    return Memory.readInt(_0x518a30[_0x7369("0x18")](4));
};
Message[_0x7369("0x1a")] = function (_0xc196ef, _0x2bae25) {
    Memory[_0x7369("0x1b")](_0xc196ef[_0x7369("0x18")](4), _0x2bae25);
};
Message[_0x7369("0x1c")] = function (_0x4a8e86) {
    return new NativeFunction(Memory[_0x7369("0x1d")](Memory.readPointer(_0x4a8e86)[_0x7369("0x18")](20)), _0x7369("0x1e"), [])();
};
Message[_0x7369("0x1f")] = function (_0x2520b4) {
    new NativeFunction(Memory[_0x7369("0x1d")](Memory[_0x7369("0x1d")](_0x2520b4).add(8)), _0x7369("0x20"), [_0x7369("0x21")])(_0x2520b4);
};
Message.decode = function (_0x1e8f81) {
    new NativeFunction(Memory[_0x7369("0x1d")](Memory[_0x7369("0x1d")](_0x1e8f81)[_0x7369("0x18")](12)), _0x7369("0x20"), [_0x7369("0x21")])(_0x1e8f81);
};
function ByteStream() { }
ByteStream[_0x7369("0x22")] = function (_0x3de2ee) {
    return Memory.readInt(_0x3de2ee[_0x7369("0x18")](16));
};
ByteStream[_0x7369("0x23")] = function (_0x57efc8) {
    return Memory[_0x7369("0x1d")](_0x57efc8[_0x7369("0x18")](28));
};
ByteStream.setByteArray = function (_0x47993d, _0x19d145) {
    Memory[_0x7369("0x24")](_0x47993d.add(28), _0x19d145);
};
ByteStream[_0x7369("0x25")] = function (_0x325794) {
    return Memory[_0x7369("0x26")](_0x325794[_0x7369("0x18")](20));
};
ByteStream[_0x7369("0x27")] = function (_0x11cc08, _0x580c25) {
    Memory[_0x7369("0x1b")](_0x11cc08[_0x7369("0x18")](20), _0x580c25);
};
function Buffer() { }
Buffer[_0x7369("0x28")] = function (_0x2e308c, _0x2ae510) {
    Memory[_0x7369("0x29")](_0x2e308c[_0x7369("0x18")](2), _0x2ae510 >> 16 & 255);
    Memory.writeU8(_0x2e308c[_0x7369("0x18")](3), _0x2ae510 >> 8 & 255);
    Memory[_0x7369("0x29")](_0x2e308c.add(4), _0x2ae510 & 255);
};
Buffer.setMessageType = function (_0x918dd0, _0x4b5441) {
    Memory.writeU8(_0x918dd0[_0x7369("0x18")](0), _0x4b5441 >> 8 & 255);
    Memory[_0x7369("0x29")](_0x918dd0[_0x7369("0x18")](1), _0x4b5441 & 255);
};
Buffer.setMessageVersion = function (_0x43f1f2, _0x501b89) {
    Memory.writeU8(_0x43f1f2[_0x7369("0x18")](5), _0x501b89 >> 8 & 255);
    Memory[_0x7369("0x29")](_0x43f1f2[_0x7369("0x18")](6), _0x501b89 & 255);
};
Buffer[_0x7369("0x1c")] = function (_0x5a8292) {
    return Memory[_0x7369("0x2a")](_0x5a8292) << 8 | Memory[_0x7369("0x2a")](_0x5a8292[_0x7369("0x18")](1));
};
function setupMessaging() {
    const _0x5b04f9 = Process[_0x7369("0x1")](_0x7369("0x2b"))[_0x7369("0x4")];
    var _0x23350b = Memory.readPointer(_0x5b04f9[_0x7369("0x18")](SERVER_CONNECTION)), _0x357c0c = Memory[_0x7369("0x1d")](_0x23350b[_0x7369("0x18")](4)), _0x479884 = Memory[_0x7369("0x1d")](_0x357c0c[_0x7369("0x18")](52)), _0x4c3728 = _0x357c0c[_0x7369("0x18")](60), _0x3f67ee = _0x357c0c[_0x7369("0x18")](84), _0x28be73 = _0x357c0c.add(212), _0x17fbae = _0x357c0c[_0x7369("0x18")](216), _0x1ebdb0 = Memory[_0x7369("0x1d")](_0x3f67ee);
    const _0x13e7db = new NativeFunction(Module.findExportByName("libc.so", _0x7369("0x2c")), _0x7369("0x1e"), [_0x7369("0x21")]), _0x21edc4 = new NativeFunction(Module[_0x7369("0xa")](_0x7369("0xb"), "pthread_mutex_unlock"), _0x7369("0x1e"), [_0x7369("0x21")]), _0x3f8eb4 = new NativeFunction(Module[_0x7369("0xa")](_0x7369("0xb"), "sendto"), _0x7369("0x1e"), [_0x7369("0x1e"), _0x7369("0x21"), _0x7369("0x1e"), _0x7369("0x1e"), _0x7369("0x21"), _0x7369("0x1e")]), _0x1a02a9 = new NativeFunction(Module.findExportByName("libc.so", _0x7369("0x2d")), _0x7369("0x21"), ["pointer", _0x7369("0x21"), _0x7369("0x1e")]), _0x2e3f8e = new NativeFunction(_0x5b04f9[_0x7369("0x18")](NEW_OPERATOR), _0x7369("0x21"), [_0x7369("0x1e")]), _0x36f70e = function (_0x914070, _0x2028a5) {
        _0x13e7db(_0x914070[_0x7369("0x2e")](4));
        const _0x10c98f = Memory[_0x7369("0x26")](_0x914070[_0x7369("0x18")](16)), _0x37e0c7 = Memory[_0x7369("0x26")](_0x914070[_0x7369("0x18")](4));
        Memory[_0x7369("0x24")](Memory[_0x7369("0x1d")](_0x914070).add(POINTER_SIZE * _0x10c98f), _0x2028a5);
        Memory.writeInt(_0x914070[_0x7369("0x18")](16), (_0x10c98f + 1) % _0x37e0c7);
        Memory[_0x7369("0x1b")](_0x914070[_0x7369("0x18")](8), Memory[_0x7369("0x26")](_0x914070[_0x7369("0x18")](8)) + 1);
        _0x21edc4(_0x914070[_0x7369("0x2e")](4));
    };
    Interceptor[_0x7369("0x2f")](_0x5b04f9[_0x7369("0x18")](SENDTO), new NativeCallback(function (_0x1d42f4, _0xdbc3a2, _0xd975e5, _0x56b380, _0x2047af, _0x61f3d0) {
        const _0x2695aa = Buffer[_0x7369("0x1c")](_0xdbc3a2);
        var _0x14f492, _0xc8890d;
        if (_0x2695aa === 10100) {
            var _0x29142a, _0x46e104;
            _0x14f492 = Memory[_0x7369("0x1d")](_0x17fbae);
            Message[_0x7369("0x1f")](_0x14f492);
            _0xc8890d = Message[_0x7369("0x17")](_0x14f492);
            _0x46e104 = ByteStream[_0x7369("0x22")](_0xc8890d);
            _0x29142a = _0x2e3f8e(_0x46e104 + 7);
            _0x1a02a9(_0x29142a[_0x7369("0x18")](7), ByteStream.getByteArray(_0xc8890d), _0x46e104);
            Buffer[_0x7369("0x28")](_0x29142a, _0x46e104);
            Buffer[_0x7369("0x30")](_0x29142a, 10101);
            Buffer[_0x7369("0x31")](_0x29142a, 10);
            _0x3f8eb4(_0x1d42f4, _0x29142a, _0x46e104 + 7, _0x56b380, _0x2047af, _0x61f3d0);
            Memory.writePointer(_0x17fbae, ptr(0));
        } else {
            _0x13e7db(_0x3f67ee.sub(4));
            const _0x3f9af7 = Memory[_0x7369("0x26")](_0x3f67ee[_0x7369("0x18")](4));
            var _0x4a8c22 = (Memory[_0x7369("0x26")](_0x3f67ee[_0x7369("0x18")](12)) - 1) % _0x3f9af7;
            _0x4a8c22 < 0 && (_0x4a8c22 += _0x3f9af7);
            _0x14f492 = Memory[_0x7369("0x1d")](_0x1ebdb0[_0x7369("0x18")](POINTER_SIZE * _0x4a8c22));
            _0xc8890d = Message[_0x7369("0x17")](_0x14f492);
            const _0x56273f = ByteStream[_0x7369("0x22")](_0xc8890d);
            Buffer[_0x7369("0x28")](_0xdbc3a2, _0x56273f);
            _0x1a02a9(_0xdbc3a2[_0x7369("0x18")](7), ByteStream.getByteArray(_0xc8890d), _0x56273f);
            _0x3f8eb4(_0x1d42f4, _0xdbc3a2, _0x56273f + 7, _0x56b380, _0x2047af, _0x61f3d0);
            _0x21edc4(_0x3f67ee.sub(4));
        }
        return _0xd975e5;
    }, _0x7369("0x1e"), [_0x7369("0x1e"), _0x7369("0x21"), _0x7369("0x1e"), _0x7369("0x1e"), _0x7369("0x21"), "int"]));
    const _0x6ad7e2 = new NativeFunction(Module[_0x7369("0xa")](_0x7369("0xb"), _0x7369("0x32")), _0x7369("0x1e"), [_0x7369("0x1e"), "pointer", "int", "int", "pointer", _0x7369("0x21")]), _0x474ec9 = new NativeFunction(_0x5b04f9[_0x7369("0x18")](CREATE_MESSAGE_BY_TYPE), "pointer", [_0x7369("0x21"), _0x7369("0x1e")]);
    var _0x25e8b9, _0x12beeb, _0x326459;
    Interceptor.replace(_0x5b04f9[_0x7369("0x18")](RECVFROM), new NativeCallback(function (_0x422714, _0x227cce, _0x41ee74, _0x5a44cf, _0x142a76, _0x423ef5) {
        var _0x320080 = _0x6ad7e2(_0x422714, _0x227cce, _0x41ee74, _0x5a44cf, _0x142a76, _0x423ef5);
        if (_0x25e8b9 === 20100) {
            return _0x25e8b9 = null, _0x320080;
        }
        _0x25e8b9 === 20104 && Memory[_0x7369("0x1b")](_0x28be73, 5);
        if (!_0x25e8b9) {
            _0x25e8b9 = Buffer[_0x7369("0x1c")](_0x227cce);
            _0x12beeb = Memory[_0x7369("0x2a")](_0x227cce[_0x7369("0x18")](5)) << 8 | Memory[_0x7369("0x2a")](_0x227cce[_0x7369("0x18")](6));
            if (_0x25e8b9 === 20100) {
                return _0x320080;
            }
            const _0xd4396b = Memory[_0x7369("0x2a")](_0x227cce[_0x7369("0x18")](2)) << 16 | Memory[_0x7369("0x2a")](_0x227cce[_0x7369("0x18")](3)) << 8 | Memory.readU8(_0x227cce[_0x7369("0x18")](4));
            _0xd4396b === 0 && (_0x326459 = _0x474ec9(_0x479884, _0x25e8b9), Message.setVersion(_0x326459, _0x12beeb), ByteStream.setLength(Message[_0x7369("0x17")](_0x326459), 0), Message[_0x7369("0x33")](_0x326459), _0x36f70e(_0x4c3728, _0x326459), _0x25e8b9 = null);
            Buffer.setMessageType(_0x227cce, 65535);
        } else {
            _0x326459 = _0x474ec9(_0x479884, _0x25e8b9);
            Message[_0x7369("0x1a")](_0x326459, _0x12beeb);
            var _0x108b1b = Message[_0x7369("0x17")](_0x326459);
            ByteStream.setLength(_0x108b1b, _0x41ee74);
            const _0x4dff09 = _0x2e3f8e(_0x41ee74);
            _0x1a02a9(_0x4dff09, _0x227cce, _0x41ee74);
            ByteStream[_0x7369("0x34")](_0x108b1b, _0x4dff09);
            Message[_0x7369("0x33")](_0x326459);
            _0x36f70e(_0x4c3728, _0x326459);
            _0x25e8b9 = null;
        }
        return _0x320080;
    }, _0x7369("0x1e"), ["int", _0x7369("0x21"), "int", _0x7369("0x1e"), _0x7369("0x21"), _0x7369("0x21")]));
}
function setup() {
    cache[_0x7369("0x35")].redirectHost && redirectHost(cache[_0x7369("0x35")].redirectHost);
    var _0xe8334d = lptr("libg.so", WAKEUP), _0x2dcf3a = Interceptor.attach(Module[_0x7369("0xa")](_0x7369("0xb"), _0x7369("0x36")), {
        onEnter: function () {
            this[_0x7369("0x37")].lr[_0x7369("0x38")](_0xe8334d) && (_0x2dcf3a[_0x7369("0x39")](), setupMessaging());
        }
    });
}
rpc[_0x7369("0x3a")] = {
    init: function (_0x3f4557, _0x2c253f) {
        try {
            cache[_0x7369("0x35")] = _0x2c253f || {};
            onLoad(_0x7369("0x2b"), function () {
                setup();
            });
        } catch (_0x1dd488) { }
    }
};
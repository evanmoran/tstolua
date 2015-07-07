//// [internalAliasEnumInsideTopLevelModuleWithoutExport.ts]
export module a {
    export enum weekend {
        Friday,
        Saturday,
        Sunday
    }
}

import b = a.weekend;
export var bVal: b = b.Sunday;


//// [internalAliasEnumInsideTopLevelModuleWithoutExport.js]
define(["require", "exports"], function (require, exports) {
    var a;
    (function (a) {
        (function (weekend) {
            weekend[weekend["Friday"] = 0] = "Friday";
            weekend[weekend["Saturday"] = 1] = "Saturday";
            weekend[weekend["Sunday"] = 2] = "Sunday";
        })(a.weekend || (a.weekend = {}));
        var weekend = a.weekend;
    })(a = exports.a || (exports.a = {}));
    var b = a.weekend;
    exports.bVal = b.Sunday;
});


//// [internalAliasEnumInsideTopLevelModuleWithoutExport.d.ts]
export declare module a {
    enum weekend {
        Friday = 0,
        Saturday = 1,
        Sunday = 2,
    }
}
import b = a.weekend;
export declare var bVal: b;

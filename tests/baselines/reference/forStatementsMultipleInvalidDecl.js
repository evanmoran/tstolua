//// [forStatementsMultipleInvalidDecl.ts]
interface I {
    id: number;
}

class C implements I {
    id: number;
    valid: boolean;
}

class C2 extends C {
    name: string;
}

class D<T>{
    source: T;
    recurse: D<T>;
    wrapped: D<D<T>>
}

function F(x: string): number { return 42; }

module M {
    export class A {
        name: string;
    }

    export function F2(x: number): string { return x.toString(); }
}

// all of these are errors
for( var a: any;;){}
for( var a = 1;;){}
for( var a = 'a string';;){}
for( var a = new C();;){}
for( var a = new D<string>();;){}
for( var a = M;;){}

for( var b: I;;){}
for( var b = new C();;){}
for( var b = new C2();;){}

for(var f = F;;){}
for( var f = (x: number) => '';;){}

for(var arr: string[];;){}
for( var arr = [1, 2, 3, 4];;){}
for( var arr = [new C(), new C2(), new D<string>()];;){}

for(var arr2 = [new D<string>()];;){}
for( var arr2 = new Array<D<number>>();;){}

for(var m: typeof M;;){}
for( var m = M.A;;){}

//// [forStatementsMultipleInvalidDecl.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var C = (function () {
    function C() {
    }
    return C;
})();
var C2 = (function (_super) {
    __extends(C2, _super);
    function C2() {
        _super.apply(this, arguments);
    }
    return C2;
})(C);
var D = (function () {
    function D() {
    }
    return D;
})();
function F(x) { return 42; }
var M;
(function (M) {
    var A = (function () {
        function A() {
        }
        return A;
    })();
    M.A = A;
    function F2(x) { return x.toString(); }
    M.F2 = F2;
})(M || (M = {}));
// all of these are errors
for (var a;;) { }
for (var a = 1;;) { }
for (var a = 'a string';;) { }
for (var a = new C();;) { }
for (var a = new D();;) { }
for (var a = M;;) { }
for (var b;;) { }
for (var b = new C();;) { }
for (var b = new C2();;) { }
for (var f = F;;) { }
for (var f = function (x) { return ''; };;) { }
for (var arr;;) { }
for (var arr = [1, 2, 3, 4];;) { }
for (var arr = [new C(), new C2(), new D()];;) { }
for (var arr2 = [new D()];;) { }
for (var arr2 = new Array();;) { }
for (var m;;) { }
for (var m = M.A;;) { }

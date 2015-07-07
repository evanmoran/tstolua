//// [unionSubtypeIfEveryConstituentTypeIsSubtype.ts]
enum e {
    e1,
    e2
}

// A union type U is a subtype of a type T if each type in U is a subtype of T
interface I {
    [x: string]: any;
    foo: string | number; // ok
    foo2: e | number; // ok
}
interface I2 {
    [x: string]: number;
    // S is union type and each constituent type of S is a subtype of T
    foo: string | number; // error string is not subtype of number
    foo2: e | number; // ok e and number both subtype of number
}

interface I3 {
    [x: string]: string;
    foo: string | number; // error numer is not subtype of string
    foo2: e | number; // error e and number both not subtype of string
}

// error cases
interface I4 {
    [x: string]: boolean;
    foo: string | number;
    foo2: e | number;
}


interface I5 {
    [x: string]: Date;
    foo: string | number;
    foo2: e | number;
}


interface I6 {
    [x: string]: RegExp;
    foo: string | number;
    foo2: e | number;
}


interface I7 {
    [x: string]: { bar: number };
    foo: string | number;
    foo2: e | number;
}


interface I8 {
    [x: string]: number[];
    foo: string | number;
    foo2: e | number;
}


interface I9 {
    [x: string]: I8;
    foo: string | number;
    foo2: e | number;
}

class A { foo: number; }
interface I10 {
    [x: string]: A;
    foo: string | number;
    foo2: e | number;
}

class A2<T> { foo: T; }
interface I11 {
    [x: string]: A2<number>;
    foo: string | number;
    foo2: e | number;
}


interface I12 {
    [x: string]: (x) => number;
    foo: string | number;
    foo2: e | number;
}


interface I13 {
    [x: string]: <T>(x: T) => T;
    foo: string | number;
    foo2: e | number;
}


enum E2 { A }
interface I14 {
    [x: string]: E2;
    foo: string | number;
    foo2: e | number;
}


function f() { }
module f {
    export var bar = 1;
}
interface I15 {
    [x: string]: typeof f;
    foo: string | number;
    foo2: e | number;
}


class c { baz: string }
module c {
    export var bar = 1;
}
interface I16 {
    [x: string]: typeof c;
    foo: string | number;
    foo2: e | number;
}


interface I17<T> {
    [x: string]: T;
    foo: string | number;
    foo2: e | number;
}

interface I19 {
    [x: string]: Object;
    foo: string | number;
    foo2: e | number;
}


interface I20 {
    [x: string]: {};
    foo: string | number;
    foo2: e | number;
}

//// [unionSubtypeIfEveryConstituentTypeIsSubtype.js]
var e;
(function (e) {
    e[e["e1"] = 0] = "e1";
    e[e["e2"] = 1] = "e2";
})(e || (e = {}));
var A = (function () {
    function A() {
    }
    return A;
})();
var A2 = (function () {
    function A2() {
    }
    return A2;
})();
var E2;
(function (E2) {
    E2[E2["A"] = 0] = "A";
})(E2 || (E2 = {}));
function f() { }
var f;
(function (f) {
    f.bar = 1;
})(f || (f = {}));
var c = (function () {
    function c() {
    }
    return c;
})();
var c;
(function (c) {
    c.bar = 1;
})(c || (c = {}));

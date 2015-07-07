/// <reference path='fourslash.ts'/>

////module M {
////   export class C1 { }
////   export class C2<T> { }
////}

////var c = new M.C2<number>();

////module N {
////   export class D1 extends M.C1 { }
////   export class D2<T> extends M.C2<T> { }
////}

////var n = new N.D1();
////var /*1*/n2 = new N.D2<number>();
////var /*2*/n3 = new N.D2();

goTo.marker('1');
verify.quickInfoIs('var n2: N.D2<number>');

goTo.marker('2')
verify.quickInfoIs('var n3: N.D2<{}>');

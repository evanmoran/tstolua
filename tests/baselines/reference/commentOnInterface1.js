//// [tests/cases/compiler/commentOnInterface1.ts] ////

//// [a.ts]
/*! Keep this pinned comment */
interface I {
}

// Don't keep this comment.
interface I2 {
}

//// [b.ts]
///<reference path='a.ts'/>
interface I3 {
}

//// [a.js]
/*! Keep this pinned comment */
//// [b.js]
///<reference path='a.ts'/>

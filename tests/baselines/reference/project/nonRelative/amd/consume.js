define(["require", "exports", "decl", "lib/foo/a", "lib/bar/a"], function (require, exports, mod, x, y) {
    x.hello();
    y.hello();
    var str = mod.call();
    if (str !== "success") {
        fail();
    }
});

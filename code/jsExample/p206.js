Range.propotype = {
    constructor: Range,
    includes: function (x) {
        return this.from <= x && X <= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++)f(x);
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";}
};


Range.prototype.includes = function (X) {
    return this.from <= x && x <= this.to;
};
Range.prototype.foreach = function (f) {
    for (var x = Math.ceil(this.from); x <= this.to; x++)f(x);
};
Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")";
};
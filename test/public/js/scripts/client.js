//import { Points } from "./classes/Point"
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 10);
console.log("p1", p1);

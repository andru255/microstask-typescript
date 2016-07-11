//import { Points } from "./classes/Point"
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    add(point: Point){
        return new Point(this.x + point.x, this.y + point.y);
    }
}

var p1 = new Point(0, 10);

console.log("p1", p1);


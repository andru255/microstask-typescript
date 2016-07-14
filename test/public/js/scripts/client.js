"use strict";
//import { Points } from "./classes/Point"
//class Point {
//    x: number;
//    y: number;
//    constructor(x: number, y: number){
//        this.x = x;
//        this.y = y;
//    }
//    add(point: Point){
//        return new Point(this.x + point.x, this.y + point.y);
//    }
//}
var Point_1 = require("./classes/Point");
var p1 = new Point_1.Point(0, 10);
var p2 = new Point_1.Point(10, 0);
console.log("p1", p1);
console.log("p2", p2);

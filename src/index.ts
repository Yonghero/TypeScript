import { Square } from "./core/square";
import { IViewer } from "./core/types";

class SquareViewr implements IViewer {

    constructor(private square: Square) {

    }

    show(): void {
        console.log(this.square.point, this.square.color);


    }
    remove(): void {
        throw new Error("Method not implemented.");
    }


}
const sq = new Square({ x: 0, y: 0 }, 'red')
sq.viewer = new SquareViewr(sq)
sq.viewer.show()
sq.point = {
    x: 1,
    y: 1
}
sq.point = {
    x: 2,
    y: 3
}
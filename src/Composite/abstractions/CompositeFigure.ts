import { Figure } from "./Figure";

export class CompositeFigure implements Figure{
    private figures: Figure[];
    private static readonly id: string = "FC";
    
    constructor(){
        this.figures = [];
    }

    public addFigure(figure: Figure): void {
        this.figures.push(figure);
    }

    public addTransform(transform: string): void {
        this.figures.forEach( (figure) => { figure.addTransform(transform)})
    }

    public draw(): string {
        return `${CompositeFigure.id} ${this.figures.map( (figure) => figure.draw()).join(" ")}`
    }
}
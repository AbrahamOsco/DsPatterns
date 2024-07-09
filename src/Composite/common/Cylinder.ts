import { Figure } from "../abstractions/Figure";

export class Cylinder implements Figure{

    private transformations: string[] = [];
    private static readonly id: string = "Cylinder";

    constructor(){}

    public addTransform(transform:string){
        this.transformations.push(transform)
    }

    public draw(): string {
        return `${Cylinder.id} ${this.transformations.join(" ")}`
    }

}
import { Figure } from "../abstractions/Figure";

export class Cone implements Figure{
    
    private transformations: string[] = [];
    private static readonly id: string = "Cone";

    constructor(){}

    public addTransform(transform:string){
        this.transformations.push(transform)
    }

    public draw(): string{
        return `${Cone.id} ${this.transformations.join(" ")}`
    }
    

}
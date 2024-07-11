import { Visitor } from "../../Visitor/Visitor";
import { Visitable } from "../Visitable";

export abstract class WorkerHuman implements Visitable{
    protected name: string;
    protected salary: number;

    constructor(name: string, salary:number){
        this.name = name;
        this.salary = salary;
    }
    
    abstract accept(visitor: Visitor): string;
w
    public getName(): string{
        return this.name;
    }

    public getSalary(): number{
        return this.salary;
    }


}
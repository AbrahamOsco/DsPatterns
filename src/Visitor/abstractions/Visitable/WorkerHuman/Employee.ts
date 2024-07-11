import { Visitor } from "../../Visitor/Visitor";
import { WorkerHuman } from "./WorkerHuman";

export class Employee extends WorkerHuman{
    private roles: string[];
    
    constructor(name: string, salary:number, roles: string[]){
        super(name, salary);
        this.roles = roles;
    }

    public getRoles(): string[]{
        return this.roles;
    }

    public accept(visitor: Visitor): string {
        return visitor.visitEmployee(this)
    }
}


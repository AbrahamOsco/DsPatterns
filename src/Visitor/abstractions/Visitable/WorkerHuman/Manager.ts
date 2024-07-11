import { Visitor } from "../../Visitor/Visitor";
import { WorkerHuman } from "./WorkerHuman";

export class Manager extends WorkerHuman{
    private teams: string[];
    
    constructor(name: string, salary:number, teams: string[]){
        super(name, salary);
        this.teams = teams;        
    }

    public getTeams(): string[]{
        return this.teams;
    }
    
    public accept(visitor: Visitor): string {
        return visitor.visitManager(this)
    }

}
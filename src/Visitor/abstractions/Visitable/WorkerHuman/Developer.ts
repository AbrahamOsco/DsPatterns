import { Visitor } from "../../Visitor/Visitor";
import { WorkerHuman } from "./WorkerHuman";

export class Developer extends WorkerHuman{
    private languages: string[];

    constructor(name: string, salary:number, languages: string[]){
        super(name, salary);
        this.languages = languages;
    }

    public getLanguages(): string[]{
        return this.languages;
    }

    public accept(visitor: Visitor): string {
        return visitor.visitDeveloper(this)
    }
}


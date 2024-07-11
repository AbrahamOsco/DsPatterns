import { Visitor } from "../Visitor/Visitor";

export interface Visitable{
    accept(visitor: Visitor):string;
}



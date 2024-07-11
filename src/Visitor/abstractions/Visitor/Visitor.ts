import { Developer } from "../Visitable/WorkerHuman/Developer";
import { Employee } from "../Visitable/WorkerHuman/Employee";
import { Manager } from "../Visitable/WorkerHuman/Manager";

export interface Visitor{
    visitEmployee(employee: Employee): string;
    visitManager(employee: Manager): string;
    visitDeveloper(employee: Developer): string;
}
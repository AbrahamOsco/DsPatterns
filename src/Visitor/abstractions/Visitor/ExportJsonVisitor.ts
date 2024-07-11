import { Developer } from "../Visitable/WorkerHuman/Developer";
import { Employee } from "../Visitable/WorkerHuman/Employee";
import { Manager } from "../Visitable/WorkerHuman/Manager";
import { Visitor } from "./Visitor";

export class ExportJsonVisitor implements Visitor{

    public visitEmployee(employee: Employee): string {
        const bodyInSpanish = {
            NombreEmpleado: employee.getName(),
            salario:  `$ ${employee.getSalary()} ARS`,
            roles: employee.getRoles().join(', '),
        };
        return JSON.stringify(bodyInSpanish);
    }
    
    public visitManager(employee: Manager): string {
        const bodyInSpanish = {
            NombreManager: employee.getName(),
            salarioTop:  `€ ${employee.getSalary()} EUR`,
            EquiposActuales: employee.getTeams().join(', ')
        };
        return JSON.stringify(bodyInSpanish);
    }

    public visitDeveloper(employee: Developer): string {
        const bodyInSpanish = {
            NombreDev: employee.getName(),
            salarioDev:  `$ ${employee.getSalary()} USD`,
            Lenguajes: employee.getLanguages().join(', ')
        };
        return JSON.stringify(bodyInSpanish);
    }

}
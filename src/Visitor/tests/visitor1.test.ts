import { Developer } from "../abstractions/Visitable/WorkerHuman/Developer";
import { Employee } from "../abstractions/Visitable/WorkerHuman/Employee";
import { Manager } from "../abstractions/Visitable/WorkerHuman/Manager";
import { ExportJsonVisitor } from "../abstractions/Visitor/ExportJsonVisitor";

test('testing a fetch using directamente el objeto service ', async () => {
    const developer = new Developer('Micaela Perez', 1500, ['TS', 'Python', 'C++']);
    const employee = new Employee('Juan Perez', 300, ['HR'] );
    const manager = new Manager('Nacho', 5000, ['Peopleware 2', 'Japon Project', 'Champions League']);
    const jsonExportVisitor = new ExportJsonVisitor();
    const jsonStrDev = developer.accept(jsonExportVisitor);
    const jsonStrEmployee = employee.accept(jsonExportVisitor);
    const jsonStrManager = manager.accept(jsonExportVisitor);

    expect(JSON.parse(jsonStrDev).NombreDev).toBe('Micaela Perez');
    expect(JSON.parse(jsonStrEmployee).salario).toBe("$ 300 ARS");
    expect(JSON.parse(jsonStrManager).NombreManager).toBe('Nacho');
    expect(JSON.parse(jsonStrManager).salarioTop).toBe("€ 5000 EUR");
});


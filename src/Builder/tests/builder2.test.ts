import { ComputerBuilder } from "../abstractions/Builder/ComputerBuilder";
import { ManualComputerBuilder } from "../abstractions/Builder/ManualComputerBuilder";
import { Director } from "../abstractions/Director/Director";


// Creamos un ComputerBuilder q implementa la abstraccion Builder. y el director que sabe construir el objeto.
// luego obtenemos el computador y le hacemos build. 

test('Create a super computer using computerBuilder and the director', () => {
    const computerBuilder = new ComputerBuilder();
    const director = new Director();
    director.constructSuperComputer(computerBuilder);
    const computer = computerBuilder.build();
    expect(computer.toString()).toBe("64GB-Liquid Cooler-1TB SSD-Intel Core i9")
});

// idem usando ManualComputerBuilder. 
test('Create a super computer using ManualComputerBuilder and the director', () => {
    const manualComputerBuilder = new ManualComputerBuilder();
    const director = new Director();
    director.constructSuperComputer(manualComputerBuilder);
    const computer = manualComputerBuilder.build();
    expect(computer.toString()).toBe("Manual :M64GB-MLiquid Cooler-M1TB SSD-MIntel Core i9")
});




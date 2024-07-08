import { Computer } from "../common/Computer";
import { ManualComputer } from "../common/ManualComputer";


// instanciando una clase concreta con un construccion complej si necesito mas features, esto no escala.
test('Create windows and pannels concrets', () => {
    const computer = new Computer();
    computer.setRam("DDR8")
    computer.setCooler("CoolerMaster")
    computer.setDisk("SSD")
    computer.setProcessor("Intel")
    expect(computer.toString()).toBe("DDR8-CoolerMaster-SSD-Intel")
});

test('Create windows and pannels concrets', () => {
    const computer = new ManualComputer();
    computer.setRam("DDR8")
    computer.setCooler("CoolerMaster")
    computer.setDisk("SSD")
    computer.setProcessor("Intel")
    expect(computer.toString()).toBe("Manual :MDDR8-MCoolerMaster-MSSD-MIntel")
});



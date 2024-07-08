import { Computer } from "../../common/Computer";
import { Builder } from "./Builder";

export class ComputerBuilder implements Builder{
    
    private computer: Computer;
    
    constructor(){
        this.computer = new Computer();
    }

    public reset(): void {
        this.computer = new Computer();
    }
    
    public setRam(ram: string) {
        this.computer.setRam(ram);
    }
    
    public setProcessor(processor: string) {
        this.computer.setProcessor(processor);
    }
    
    public setCooler(cooler: string) {
        this.computer.setCooler(cooler);
    }

    public setDisk(disk: string) {
        this.computer.setDisk(disk);
    }
    public build(): Computer{
        const product = this.computer;
        this.reset();
        return product;
    }

}
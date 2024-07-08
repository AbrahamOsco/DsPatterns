import { ManualComputer } from "../../common/ManualComputer";
import { Builder } from "./Builder";

export class ManualComputerBuilder implements Builder{
    
    private manual: ManualComputer;
    
    constructor(){
        this.manual = new ManualComputer();
    }

    public reset(): void {
        this.manual = new ManualComputer();
    }

    public setRam(ram: string) {
        this.manual.setRam(ram);
    }

    public setProcessor(processor: string) {
        this.manual.setProcessor(processor);
    }

    public setCooler(cooler: string) {
        this.manual.setCooler(cooler);
    }

    public setDisk(disk: string) {
        this.manual.setDisk(disk);
    }
    public build(): ManualComputer{
        const result = this.manual;
        this.reset();
        return result;
    }
    
}

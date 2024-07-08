export class Computer{

    private ram: string;
    private processor: string;
    private cooler: string;
    private disk: string;
    
    constructor(){}
    
    public setRam(ram: string) {
        this.ram = ram;
    }

    public setProcessor(processor: string) {
        this.processor = processor;
    }

    public setCooler(cooler: string) {
        this.cooler = cooler;
    }

    public setDisk(disk: string) {
        this.disk = disk;
    }
    
    public toString() : string{
        return `${this.ram}-${this.cooler}-${this.disk}-${this.processor}`
    }
}


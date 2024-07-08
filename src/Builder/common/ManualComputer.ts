export class ManualComputer{
    
    private ram: string;
    private processor: string;
    private cooler: string;
    private disk: string;
    
    constructor(){}
    
    public setRam(ram: string) {
        this.ram = "M"+ram;
    }

    public setProcessor(processor: string) {
        this.processor = "M"+processor;
    }

    public setCooler(cooler: string) {
        this.cooler = "M"+cooler;
    }

    public setDisk(disk: string) {
        this.disk = "M"+disk;
    }
    
    public toString() : string{
        return `Manual :${this.ram}-${this.cooler}-${this.disk}-${this.processor}`
    }
}
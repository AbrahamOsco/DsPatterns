export interface Builder{
    reset():void
    setRam(ram: string);
    setProcessor(processor: string);
    setCooler(cooler: string);
    setDisk(disk: string);
}


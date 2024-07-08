import { Builder } from "../Builder/Builder";

export class Director{

    public constructSuperComputer(builder:Builder){
        builder.reset();
        builder.setRam("64GB");
        builder.setProcessor("Intel Core i9");
        builder.setCooler("Liquid Cooler");
        builder.setDisk("1TB SSD");
    }
}
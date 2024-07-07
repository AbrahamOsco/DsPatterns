import { ControlFactory } from "./ControlFactory/ControlFactory";

export class Application{
    
    private controlFactory: ControlFactory;

    constructor(controlFactory: ControlFactory){
        this.controlFactory = controlFactory
    }
}
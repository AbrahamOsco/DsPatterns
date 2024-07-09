import { Component } from "./Component";
import { Mediator } from "../Mediator/Mediator";

export class Warrior implements Component{
    private name: string;
    private mediator: Mediator;


    public constructor(){
        this.name = "Warrior"
    }

    public getName(): string {
        return this.name;
    }

    public setMediator(mediator :Mediator){
        this.mediator = mediator;
    }

    public attackRobot(damage:number){
        this.mediator.attackRobot(damage);
    }
    
}
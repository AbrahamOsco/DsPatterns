import { Mediator } from "../Mediator/Mediator";
import { Component } from "./Component";

export class Medic implements Component{
    private name: string;
    private mediator: Mediator;


    public constructor(){
        this.name = "Medic"
    }

    public getName(): string {
        return this.name;
    }

    public setMediator(mediator :Mediator){
        this.mediator = mediator;
    }
    
    public healRobot(someHp:number){
        this.mediator.healRobot(someHp);
    }

}
import { Mediator } from "../Mediator/Mediator";
import { Component } from "./Component";

export class Robot implements Component{
    private name: string;
    private mediator: Mediator;
    private hp: number;

    public constructor(hp: number){
        this.name = "Robot"
        this.hp = hp;
    }

    public getName(): string {
        return this.name;
    }

    public setMediator(mediator :Mediator){
        this.mediator = mediator;
    }
    public receiveAttack(damage: number){
        this.hp -= damage;
    }

    public heal(someHp: number){
        this.hp += someHp;
    }
    public getHp() :number{
        return this.hp;
    }

}
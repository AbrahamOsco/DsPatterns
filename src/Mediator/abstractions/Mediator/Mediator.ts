import { Component } from "../Components/Component";
    //notify(sender: Component, event: string):void usan este metodo para introducir el patron.

export interface Mediator{
    registerComponenet(component: Component): void;
    attackRobot(damage: number): void;
    healRobot(someHp:number):void;
}
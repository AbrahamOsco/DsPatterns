import { Component } from "../Components/Component";
import { Mediator } from "./Mediator";
import { Warrior } from "../Components/Warrior";
import { Robot } from "../Components/Robot";
import { Medic } from "../Components/Medic";

export class BattleMediator implements Mediator{
    private attack: Warrior;
    private robot: Robot;
    private medic: Medic;

    public constructor(){}

    public registerComponenet(component: Component){
        component.setMediator(this);
        // una manera de eliminar esto es usando double dispatch. 
        // hacer component.setMediator(this) y tendria 3 metodos extras aca en
        // battleMEediator uno para setear el robot, attacK y el medic. DE esa manera eliminamos if y el loco as 🤩
        if (component.getName() == "Warrior") {
            this.attack = component as Warrior; 
        } else if (component.getName() == "Robot") {
            this.robot = component as Robot; 
        } else if (component.getName() == "Medic") {
            this.medic = component as Medic; 
        }
    }
    // mensajes 

    public attackRobot(damage: number) {
        this.robot.receiveAttack(damage)
    }

    public healRobot(someHp: number) {
        this.robot.heal(someHp)
    }

}
import { Mediator } from "../Mediator/Mediator";

export interface Component{
    setMediator(mediatior: Mediator): void;
    getName():string;
}
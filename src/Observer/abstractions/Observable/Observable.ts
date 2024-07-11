import { Observer } from "../Observer/Observer";

export interface Observable{
    addObserver(observer: Observer): void;
    deleteObserver(observer: Observer):void; 
    notifyObservers(): void;
}
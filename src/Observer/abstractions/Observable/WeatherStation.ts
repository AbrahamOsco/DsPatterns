import { Observer } from "../Observer/Observer";
import { Observable } from "./Observable";

export class WeatherStation implements Observable {
    private temperature: number;
    private observers: Observer[]

    constructor(){
        this.observers = [];
        this.temperature = 30;
    }

    public setTemprature(newTemperature: number){
        this.temperature = newTemperature;
        this.notifyObservers();
    }

    public getTemperature(): number{
        return this.temperature;
    }

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public deleteObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    public notifyObservers(): void {
        this.observers.forEach(observer => observer.notify(this));
    }
} 


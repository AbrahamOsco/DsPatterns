import { Observable } from "../Observable/Observable";
import { WeatherStation } from "../Observable/WeatherStation";
import { Observer } from "./Observer";

export class WatchPhone implements Observer{
    private newMessage: string;

    public constructor(){
        this.newMessage = "";
    }

    public getNewMessage(): string{
        return this.newMessage;
    }

    public notify(observable: Observable): void {
        if (observable instanceof WeatherStation){
            const weather = observable as WeatherStation;
            this.newMessage = `Whatch: New Temperature: ${weather.getTemperature()}`;
        }
    }


}
import { WeatherStation } from "../abstractions/Observable/WeatherStation";
import { CellIphone } from "../abstractions/Observer/CellIphone";
import { WatchPhone } from "../abstractions/Observer/WhatchPhone";


test('testing observer ', () => {
    const aIphone1 = new CellIphone();
    const aWatch = new WatchPhone();

    const station = new WeatherStation();
    station.addObserver(aIphone1)
    station.addObserver(aWatch)
    station.setTemprature(30);
    
    expect(aIphone1.getNewMessage()).toBe("Iphone: New Temperature: 30")
    expect(aWatch.getNewMessage()).toBe("Whatch: New Temperature: 30")

});

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

test('testing add/delete observers  ', () => {
    const aIphone1 = new CellIphone();
    const aIphone2 = new CellIphone();
    const aIphone3 = new CellIphone();
    const aIphone4 = new CellIphone();

    const aWatch1 = new WatchPhone();
    const aWatch2 = new WatchPhone();
    
    const station = new WeatherStation();
    station.addObserver(aIphone1)
    station.addObserver(aIphone2)
    station.addObserver(aIphone3)
    station.addObserver(aIphone4)
    station.deleteObserver(aIphone3)
    station.deleteObserver(aIphone4)
    station.addObserver(aWatch1)
    station.addObserver(aWatch2)
    station.deleteObserver(aWatch2)
    station.setTemprature(30);
    
    expect(aIphone1.getNewMessage()).toBe("Iphone: New Temperature: 30")
    expect(aIphone2.getNewMessage()).toBe("Iphone: New Temperature: 30")
    expect(aWatch1.getNewMessage()).toBe("Whatch: New Temperature: 30")
    
    expect(aIphone3.getNewMessage()).not.toBe("Iphone: New Temperature: 30")
    console.log(aIphone3);
    expect(aIphone4.getNewMessage()).not.toBe("Iphone: New Temperature: 30")
    expect(aWatch2.getNewMessage()).not.toBe("Whatch: New Temperature: 30")
});
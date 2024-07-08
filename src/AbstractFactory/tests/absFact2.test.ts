import { Application } from "../abstractions/Application";
import { WindowsControlFactory } from "../abstractions/ControlFactory/WindowsControlFactory";
import { UnixControlFactory } from "../abstractions/ControlFactory/UnixControlFactory";
import { ControlFactory } from "../abstractions/ControlFactory/ControlFactory";

    // ok creamos una windowsControlFactory (idem todo con UnixControlFactory)
    // Tenemos dos factory concretas cada una sigue dependiendo del os
test('create windows factory and create a button and panel', () => {
    const windowsFactory :WindowsControlFactory = new WindowsControlFactory()
    const winButton =  windowsFactory.createButton()  
    const winPanel = windowsFactory.createPanel()
    winPanel.add(winButton)
    expect(winPanel).not.toBeNull()
});

    // si tenemos una application que debe recbir tanto el WindowsControlFactory como el UnixControlFactory como hacemos? 
    // we need to create an Abstraction de la fabrica.
    // creamos un ControlFactory una abstraccion para las factorys.
test('we create the application using a generic factory', () => {
    const windowsFactory :ControlFactory = new WindowsControlFactory()
    const unixFactory : ControlFactory = new UnixControlFactory  ()
    const winAplication = new Application(windowsFactory)
    const unixAplication = new Application(unixFactory)
    expect(winAplication).not.toBeNull()
    expect(unixAplication).not.toBeNull()
});


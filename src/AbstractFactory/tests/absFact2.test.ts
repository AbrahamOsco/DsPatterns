import { Application } from "../abstractions/Application";
import { WindowsControlFactory } from "../abstractions/ControlFactory/WindowsControlFactory";
import { UnixControlFactory } from "../abstractions/ControlFactory/UnixControlFactory";
import { UnixButton } from "../common/UnixButton";
import { UnixPanel } from "../common/UnixPanel";


    // ok creamos una windowsFactory, unixFactory
    // Tenemos dos clases concretas seguimos dependiendo del os
    // si tenemos una application que debe recbir tanto el WindowsControlFactory como el UnixControlFactory como hacemos? 
    // answer -> we need to create an Abstraction.
test('create windows factory and create a button and panel', () => {
    const windowsFactory = new WindowsControlFactory()
    const unixFactory = new UnixControlFactory()
    const unixButton = new UnixButton()
    const unixPanel = new UnixPanel()
    const winButton =  windowsFactory.createButton()  
    const winPanel = windowsFactory.createPanel()
    winPanel.add(winButton)
    expect(winPanel).not.toBeNull()
});


// creamos una abstraccion para la factory.

test('we create the application using a generic factory', () => {
    const windowsFactory = new WindowsControlFactory()
    const unixFactory = new UnixControlFactory()
    const winAplication = new Application(windowsFactory)
    const unixAplication = new Application(unixFactory)
    expect(winAplication).not.toBeNull()
    expect(unixAplication).not.toBeNull()
});

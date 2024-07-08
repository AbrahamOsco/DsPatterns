import { PhysicsFacade } from "../PhysicsFacade";


test('testing physicsFacade', () => {
    // Una clase AplicationFront simulada en el test:  que tengamos por ahi. usamos el physics facade. 
    const physics = new PhysicsFacade(-9.8);
    const dynamicBody = physics.createBody(10, 10, 2, 2, 1.2);
    const timeStep = 1/60
    const velocityIteration = 8
    const positionIteration = 3
    physics.step(timeStep, velocityIteration, positionIteration);
    console.log(`${dynamicBody.GetPosition().x}, ${dynamicBody.GetPosition().y}`);
    expect(physics.getWorld().GetBodyList()).toEqual(dynamicBody);
});



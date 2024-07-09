import { Warrior } from "../abstractions/Components/Warrior";
import { BattleMediator } from "../abstractions/Mediator/BattleMediator";
import { Medic } from "../abstractions/Components/Medic";
import { Robot } from "../abstractions/Components/Robot";

test('testing robot with 1500 hp recv a attack and then is heal the hp should be the correct. ', () => {
    const robot = new Robot(1500); // robot start with 1500 hp
    const attackingUser = new Warrior();
    const medic = new Medic();
    const mediator = new BattleMediator();
    mediator.registerComponenet(robot);
    mediator.registerComponenet(attackingUser);
    mediator.registerComponenet(medic);
    attackingUser.attackRobot(200);
    medic.healRobot(100);
    expect(robot.getHp()).toBe(1400);
});

test('testing robot with 500 hp is heal the hp should be the correct. ', () => {
    const robot = new Robot(500); // robot start with 500 hp
    const medic = new Medic();
    const mediator = new BattleMediator();
    mediator.registerComponenet(robot);
    mediator.registerComponenet(medic);
    medic.healRobot(200);
    expect(robot.getHp()).toBe(700);
});

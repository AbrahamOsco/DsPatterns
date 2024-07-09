import { CompositeFigure } from "../abstractions/CompositeFigure";
import { Cone } from "../common/Cone";
import { Cylinder } from "../common/Cylinder";

test('Test creation of figure composite complex and aplly two transform', () => {
    const cilindro = new Cylinder();
    const cone = new Cone();
    const composite1 = new CompositeFigure();
    composite1.addFigure(cilindro);
    composite1.addFigure(cone);
    composite1.addTransform("Translate 1m");
    composite1.addTransform("Escalado 2m");
    expect(composite1.draw()).toBe("FC Cylinder Translate 1m Escalado 2m Cone Translate 1m Escalado 2m");
});


test('Test creation of 3 figure composite complex and aplly two transform', () => {
    const cilindro1 = new Cylinder();
    const cilindro2 = new Cylinder();
    const cilindro3 = new Cylinder();
    const cone1 = new Cone();
    const cone2 = new Cone();
    const cone3 = new Cone();
    const composite1 = new CompositeFigure();
    const composite2 = new CompositeFigure();
    const composite3 = new CompositeFigure();
    composite1.addFigure(composite2);
    composite2.addFigure(cone1);
    composite2.addFigure(cone2);
    composite1.addFigure(cilindro1);
    composite1.addFigure(cilindro2);
    composite3.addFigure(cilindro3);
    composite3.addFigure(cone3);
    composite1.addFigure(composite3);
    composite1.addTransform("Translate 1m");
    composite2.addTransform("Translate 2m");
    composite3.addTransform("Escalado 3m");
    const resultComposite3 = "FC Cylinder Translate 1m Escalado 3m Cone Translate 1m Escalado 3m"
    const resultComposite2 = "FC Cone Translate 1m Translate 2m Cone Translate 1m Translate 2m"
    const resultComposite1 = `FC ${resultComposite2} Cylinder Translate 1m Cylinder Translate 1m ${resultComposite3}`  
    // al composite 3 se le aplica Translate 1m por q esta adentro del composite 1. 
    expect(composite3.draw()).toBe(resultComposite3);
    expect(composite2.draw()).toBe(resultComposite2);
    expect(composite1.draw()).toBe(resultComposite1);

});

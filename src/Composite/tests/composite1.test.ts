import { Cylinder } from "../common/Cylinder";
import { Cone } from "../common/Cone";

// como hacemos si hay una entidad que grafico compuesta q tiene otros graficos compuestas q asu vez tiene cilindros y conos ? 
test('Test creation of cilindro', () => {
    const cilindro = new Cylinder();
    cilindro.addTransform("Translate 1m");
    cilindro.addTransform("Escalado 2m");
    expect(cilindro.draw()).toBe("Cylinder Translate 1m Escalado 2m");
});

// idem con cono ademas se repiten el mismo codigo  el toString y el addTransform en Cono y Cilindro como hacemos?
test('Test creation of Cono', () => {
    const cono = new Cone();
    cono.addTransform("Escalado 3m");
    cono.addTransform("Translate 2.1m");
    expect(cono.draw()).toBe("Cone Escalado 3m Translate 2.1m");
});


# DsPatterns
Design Patterns 

### Initialize Project: 
👉 Remember these steps: 
1. npm init -y  //to create package.json faster
1. npm add -D typescript // add dev dependecy
1. npm tsc -init   // to create configuration file ts.
1. npm add -D @types/node  // we need to install types for ts, we don't have any type. 
1. Open the ts.config.json and paste: 
```
{
    "compilerOptions": {
        "module": "NodeNext",
        "moduleResolution":"NodeNext",
        "target":"ESNext",
        "outDir":"dist",
    },
    "include": ["src/**/*"]
    }
```

1. mean: 
    "module": "NodeNext", -> Sistema de modulo que usaremos
    "moduleResolution": "NodeNext", como se resuleven los modulso en tu codigo.
    "target": "EsNext". - lenguaje a transpilar ECMA6, ECMA7, EsNext -> represneta la version mas reciente.
    "outDir": "dist" : carpeta donde realiza la compilacion.
1. podemos compilarlo con **npm run build** and then use **node dist/main.js**
1. Para ejecutar un main agregar en el package.json en scripts: **"dev": "ts-node  main.ts"**
1. to execute **npm run dev** or you can use **npx ts-node main.ts** 


### Test 👉 Jest: 

To install jest: 
1. npm install --save-dev jest
1. npm install ts-jest --save-dev
1. npm i --save-dev @types/jest
1. add in package.json in field scripts: **"test": "jest"**
1. create a file **jest.config.ts** and paste: (the configuration is from: https://www.testim.io/blog/typescript-unit-testing-101/ (jest.config.ts)  )
```
    module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
    };
``` 
1. for to test only a file by example: **npx jest src/lib/parserZod/tests/rule/buyAction.test.ts**


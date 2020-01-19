# nodejswithtypescript
Node.js application to use TypeScript

configuration node.js

`node -v`

or

`node --version`

then install all dependencies 

`npm install -D typescript`

`npm install -D tslint`

`npm install express -S`

`npm install @types/express -D`


npm command 

-D flag is for –save-dev 

-S flag is for –save


step 1 
create file `tsconfig.json` and 

`
{
    "compilerOptions": {
      "module": "commonjs",
      "esModuleInterop": true,
      "target": "es6",
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist"
    },
    "lib": ["es2015"]
  }
`

step 2

Add file tslint.json and paste the code 

`{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console":false
    },
    "rulesDirectory": []
}
`

Step 3

add code in package.json

`"start": "tsc && node dist/app.js",`

step 4

`npm run start`


##Tutorial: Adding a Package.json file

###Step 1:
Before you add your package.json file..
in your terminal, `cd` in directory you want your package.json, and make sure you are on the correct branch.
```
cd <directory>
git checkout <branch>
```

###Step 2:
`npm init` (gives you package.json) 
..gonna add more info here for the steps in the terminal

###Step 3: Install & save development dependencies
in the terminal..
```
npm install --save-dev mocha chai
npm install --save-dev browser-sync
npm install --save-dev node-sass
```

###Step 4: Add `scripts` keys
Under `scripts` key add: "start"- browser-sync, "sass"- node-sass
..gonna add the right values

###Step 5: Make sure they work!
- `npm start`
- `npm run sass`

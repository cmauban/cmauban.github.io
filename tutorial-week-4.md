##Tutorial: Adding a Package.json file
A package.json file stores all the information for a project. You can find a short and concise description of the project. It is a great way easily check what included.

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
in the command line..
```
npm install --save-dev mocha chai
npm install --save-dev browser-sync
npm install --save-dev node-sass
```
...Make sure `mocha`, `chai`, and `node-sass` were added to the package.json file under devDependencies.

###Step 4: Add `scripts` keys
Adding `script` keys gives you a short hand way to run your tools in the command line. For example, instead of typing out `browser-sync start --server --directory....` every time you want to run browser-sync, you could just type `npm start`

Under the `scripts` key, add:
```
"start": "browser-sync start --server --directory --files='<file_name>.html'", 
"sass": "node-sass scss/main.scss --output css/"
```

###Step 5: Make sure they work!
- `npm start` to sync atom with your browser!
- `npm run sass` to convert a SCSS file into CSS file!

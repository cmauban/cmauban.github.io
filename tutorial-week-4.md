##Tutorial: Adding a Package.json file
A package.json file stores all the information for a project. It is a short and concise description of the project and a great way to easily check what's included.

###Step 1: Make sure you are in the right directory
Before you add your package.json file, you want to make sure you're in the correct directory.
in your terminal, `cd` in directory you want your package.json, and make sure you are on the correct branch.
```
cd <directory>
git checkout <branch>
```

###Step 2: Create a package.json file
In the terminal, type `npm init` to begin. This will ask you a series of questions, then write a package.json for you. It will attempt to make guesses about what you want things to be set to. If you agree, press enter.
- `npm init`
- `name:` your current working branch. must be all lowercase
- `version:` `0.0.0`
- `Description:` you can optionally add a description of project (press enter to skip)
- `keywords:` you can optionally add a description of project (press enter to skip)
- `license:` `MIT`
- `author:` your name, email, etc.
- `repository:` the place your code lives. Most likely your github repo will already be on there so just press enter.

###Step 3: Install & save development dependencies
In the terminal, install these development dependencies.
```
npm install (to get node sass node modules)
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
These will allow you to watch a specific file in browser-sync, and run node sass, respectivly.

###Step 5: Make sure they work!
- `npm start` to sync atom with your browser!
- `npm run sass` to convert a SCSS file into CSS file!

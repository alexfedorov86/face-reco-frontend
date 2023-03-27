**Connecting to GITHUB repository**

1. Created new repository on GitHub
2. Prepare local project:
- `mv facerec face-reco-frontend` -- rename project
- `git branch -M main` -- rename branch master -> main
- `ls -a` -- project directory has been initialized as a Git repository, as we see .git folder
3. Commit and push to GITHUB
- `git add .`
- `git commit -m "Initial commit"`
- `git remote add origin git@github.com:alexfedorov86/face-reco-frontend.git`
- `git remote -v` -- check
- `git push -u origin main`

**Replace links to backend**

- Backend link: https://face-reco-backend-86.herokuapp.com/
- _fetch('https://face-reco-backend-86.herokuapp.com:3000/image',...)_ and others...  


**Update react-scripts from ver 4.x.x to 5.0.1**
- We needed downgraded version to make app work, when it was built only as frontend app.
With BE and DB we can install latest version.
- `npm install --save --save-exact react-scripts@5.0.0`
- `npm install --save --save-exact react-scripts@5.0.1`


**Deploy to Heroku**

1. As recommended by Create-React-App we install NPM serve package.  
- `npm install serve --s`  
- replace in _package.json_ `"start": "react-scripts start"` -> `"start": "serve -s build"`

2. Create new app on Heroku

3. Deploy: 
- `heroku login`  
- `heroku git:remote -a face-reco-frontend-86`

4. Push to github and heroku (add, commit, push)  

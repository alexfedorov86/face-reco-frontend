CONNECTING TO GITHUB REPOSITORY

1. Created new repository on GitHub
2. Prepare local project:
`mv facerec face-reco-frontend` // rename project
`git branch -M main`// rename branch master -> main
`ls -a` // project directory has been initialized as a Git repository, as we see .git folder
3. Commit and push to GITHUB
`git add .`
`git commit -m "Initial commit"`
`git remote add origin git@github.com:alexfedorov86/face-reco-frontend.git`
`git remote -v` //check
`git push -u origin main`
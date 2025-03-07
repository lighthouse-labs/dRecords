# Covid-Central
Covid-Central

**Project Description**

**Project title:**  Covid CENTRAL

**Problem solved**: Decentralized nature of COVID-19 services. Currently, services (tests/vaccination/PPE) are offered on different website making it difficult to navigate, inconvenient and time consuming. Our value proposition aggregate different websites/services on one Covid central platform allowing the user find easier and faster the service desired.  

**Target audience:** Canadian adults that are looking for Covid-19 services near by their home/location.

NavBar: Carrousel  (Bootstrap)

FONT: Questrial / 


## User Stories
1. User should be able to visit webpage and see latest covid19 data
2. User is prompted to choose 1 of 2 categories (vaccinations or testings)
3. User is prompted to accept google location settings (yes/no) 
4. User is presented with nearby locations of the services category selected
5. User should be able to register/login
6. User should be able to see the history of queries/searches done on the website (stored in our database based on user_id) IF logged-in
7. User should be able to search in a search bar for nearby services by city/postal code (visual map)
8. User should get back results from search with nearby covid19 services (vaccinations, testing and ppe)
9. User should be able to get a link to redirect onto website that provides the service requested

**STRETCH USER Stories**
1. User should be able to register/login (with phone number)
2. QR code to text to your number with appointment data
3. 3rd category is e-commerce (amazon for PPE, covid tests, etc)
4. Chatbox to help navigate the site

### Project Git Workflow
NEVER code on Main!

**Create Feature Branches** 
git checkout -b feature/my-feature

**Main branch is your production branch, never directly work on it!**

**Starting a new branch**
1. git checkout main (Start new branches from the main branch)
2. git pull (Make sure you have the most recent version)

**Working on the branch** 
3. git checkout feature/my-feature (Make your feature) 
4. git add & git commit (Commit often with meaningful messages !) 
5. git push (So it's not only local)

**Merging main in the BRANCH**
6. git checkout main (To update it)
7. git pull 
8. git checkout feature/my-feature (Back to your feature) 
9. git merge main 
10. Fix conflicts if any 
11. git commit (commit the merge) 
12. git push (So it's not only local)

**Merging the branch back in MAIN** 
13. git checkout main (To merge your branch) 
14. git merge feature/my-feature 
15. Should not be any conflict since you cleaned them in the branch first 
16. git commit (commit the merge) 
17. git push (So it's not only local)

## NEW Workflow - Vasily 
1. Step 1 - git pull origin main
Make sure to pull all recent changes to main to start the branch-off process.

2. Step 2 - Add a branch 
To add a branch 
```sh
git checkout -b branchname
```
3. Step 3 - work on feature branch
Commit as OFTEN as you can! Commits really matter. Don't do everything in 1 commit.

4. ### Feature complete!

Now that you are done, and everything has been commited, push the `BRANCH` into github.com

```sh
git push origin_branchname_
```
On github, create a pull request bym clicking `pull requests` button, then clicking the `new pull request` button on the apge. Pick your branch then fill out the form to generate pull request.

#this already checks for conflicts for me
#this also shows all file changes made


### If you have a merge conflict github will tell you

- There are 2 was to fix it, 1, github will five you tools (bad way)
- Switch to main, pull all changes, switch back to your branch, MERGE main into your branch and fix conflicts

Once you fixed them, push the branch back out, and your `pull request` will be updated.


#### Merging pull requests
#### Once reviewed and approved by a team member, merge the pull request by clicking green merge pull request button. Now everything will be added to main branch.

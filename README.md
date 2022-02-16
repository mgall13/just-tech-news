# Just Tech News

## Project Description
This application creates the database and back-end structure for a news aggregate site called "Just Tech News," where a user can add articles, as well as comment, and vote on them, similar to Hacker News. 

## Tools Used to Create This Project
* JavaScript ES6
* Node.js
* Express.js
* dotenv (npm package used to store environmental variables used in a project locally so sensitive data like root passwords are not exposed on GitHub)
* MySQL
* Sequelize (npm package for integrating MySQL and Node.js)
* bcrypt (npm package for password hashing)
* handlebars (npm package for a template engine used for html and javascript integration on the front-end)
* Heroku

## Usage
The application is deployed on Heroku at // coming soon.

Visit the website on Heroku.  You can view posts and visit links as a visitor, create your own account, and as an authenticated user you can comment on and upvote other posts as well as adding your own.  You can edit titles of your own posts and delete posts as well.  

Warning: New data is stored on Heroku for an indeterminate period of time.  At least once a day the dynos will be restarted and any new data included new users will be wiped out.

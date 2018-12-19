# Table of Contents
0. [Prerequisites](#Prerequisites)
1. [About this Application](#About)
2. [Functions of this Application](#Functionality)
3. [Resources Used](#Resources)
4. [Running Hosted](#Hosted)
5. [Running Locally](#Locally)
6. [Contact Me](#Contact)

# Prerequisites
- Code Editor Used: [Visual Studio Code](https://code.visualstudio.com/download)
- Server Program Used: [PostgreSQL](https://www.postgresql.org/download/)
- Server Viewing Program Used: [pgAdmin](https://www.pgadmin.org/download/)
- Server Testing Program Used: [Postman](https://www.getpostman.com/apps)

# About
SavePoint is a project that explores all aspects of React.js Client and a Node.js Server. SavePoint is a site that allows publicly sourced deals and savings found online and locally. Members can sign up, share deals, and is totally GEEK/NERD focused. If your are into video games, vintage tech or any form of techy geeking stuff, SavePoint is your the site you're looking for! 

# Functionality 

This application handles many web development processes such as Admin vs User roles, database associations, and full C.R.U.D. acessibility.

# Resources 

- JSON Web Token for Authenticated Users - [Jason Watmore](http://jasonwatmore.com/post/2018/11/22/angular-7-role-based-authorization-tutorial-with-example)

- Association Sequelization Learning - [Sequelize Docs](http://docs.sequelizejs.com/manual/tutorial/associations.html)

- Association Joining Learning - [Loren Stewart](https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/)

# Hosted
### How to run this application on the web
1. Run the [App](<add heroku clientside url here).

2. Navigate to the Login Page.

3. This application runs differently depending on if you're merely viewing the page, as a user, or an admin. The login credentials consist of a unique username and password.

4. As a user you will be able to create new deals leads, delete existing deals, and update any other deals that exist in the database.

5. A user may also create a Profile with Bio, Twitter Handle, and Facebook URL.

# Locally
### How to run this Application Locally

1. Create a new folder in your preferred Code Editor

2. Clone the [teamAppClient](https://github.com/jet-alone/teamAppClient) and [teamAppServer](https://github.com/jet-alone/teamAppServer) Repository to the new folder you created

3. Within your Code Editor terminal, CD into the new folder and then CD into "teamAppServer" and run the following command```npm install```. This will add the folder ```node_modules``` to your folder structure, this will allow the backend to run smoothly.

4. In the same Code Editor terminal you CD'd into, run the command ```nodemon index.js```. This will run the server.

5. Now, within your Code Editor terminal, CD into the new folder and then CD into "teamAppClient" and run the following command```npm install```. This will update the current package.json and it's dependencies and add a folder named "node_modules", this will allow you to run the frontend smoothly.

6. Now, in the same Code Editor terminal you CD'd into, run the command ```ng serve -o```. This will open a new window in your default browser with the clientside application running.
    - Note! it may ask you the following within your terminal: ```? Something is already running on port 3000. Would you like to run the app on another port instead? (Y/n)```. 

    - Press ```Y```. It asks you this because your backend-server is already running on Local Host Port:3000. This will start the frontend-server on Port:3001 so there is no conflict.
    
# Tutorials

### Creating Deal Posts and Profiles

### Signing up vs Logging in

# Contact
### Have a question?
### Have a request?
### Report a problem or bug?

Thank you for viewing this application. I hope you found this informative and instructive. Email me at LiquidChickenQQ@gmail.com if you have any questions or problems.
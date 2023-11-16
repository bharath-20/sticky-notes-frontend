# <a name="_l9a5qokprd00"></a>Read ME
The application is made using NodeJs and ExpressJS.

Steps to setup application in local.

- Download the application zip and extract it.
- Download nodeJS if not downloaded(<https://nodejs.org/en/download>)
- From ./stickyNotes in the terminal. Install require dependencies
- First try npm install to automatically install all the dependencies
- ### <a name="_nl2sxpe2d7wp"></a>*USER PORTAL*
  - Go  to ./sticky-notes-frontend and clone the project
  - From  /sticky-notes-frontend *‘npm install*’ to install all the dependencies
  - *npm start* to run the project. By default the project will run on localhost:3000
- ### <a name="_pfk4q3gc82kg"></a>*ADMIN PORTAL*
  - Go  to ./sticky-notes-admin and clone the project
  - From  /sticky-notes-admin *‘npm install’* to install all the dependencies
  - *npm start* to run the project. By default the project will run on localhost:3000

- Please add .env to the root and add backend url which is defined in the backend  
  - backendURL = “<http://localhost:5000>”
  - Here you can add the url given for the backend env file.

- Existed login creds
  - For admin
	Email :  <admin@gmail.com>

	Password : password

- For sample user
  - Email : [user@gmail.com](mailto:user1@gmail.com)
  - Password : Password@123
- The above emails have data associated with the latest pull from the db.
- *NOTE:* I Intentionally added sqlite3 DB to** backend git for some existing data.



` `Description
- ## <a name="_6tfeocezkxdf"></a>/login
  - Description: Give the valid credentials to login. If not registered, click register. Once logged in, Jwt will be stored in local storage.
- ## <a name="_oi437bcqwr4m"></a>/register
  - Description: Register with the details and email. If you have already registered, click on login.
- ## <a name="_vulw74mh3e4i"></a>/logout
  - Description: redirects to login and clears the jwt
- ## <a name="_g4xmrhr16pcj"></a>/home
  - User Portal : Displays all the notes of the user basis user id if the logged in role is Users.
  - Admin portal : Displays all the notes of the users.
- ## <a name="_quzeih94s5rs"></a>/feed
  - User Portal : Displays all the public notes feed except for user notes.
  - Admin portal : Displays all the public notes of all  users.

`  `Admin Portal
- ## <a name="_h96vgyh6myx5"></a>Along with the above url’s, For admin portal there are some other routes too.
- ## <a name="_abq9ac9bjc4z"></a>/invite
  - Description: Gives a dummy invite link for any user provided the email/
- ## <a name="_83ee0tiaxqiv"></a>/users
  - Description: Displays all the users  that include the role.And if the user role is USER admin can promote the user to admin through the button given.
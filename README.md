# Software-Engineering
Project Name:
	Ga1ors

Project Description:
	Ga1ors is a community based chat forum for the University of Florida. The 1 within the word "Ga1ors" refers to the 1.0% of the UF student population.
	Everyday the forum can contain X amount of posts, where X is the equivalent to 1% of the student population. At the end of each day, the forum is wiped clean and users rush to be part of the 1% to populate the forum.
	Users can post advertisements, stories, jokes, or any blog-related content they desire. As the name "Gators" implies, only accounts with a valid ufl.edu email address can post to this forum.
	The idea is to keep the websitelocally centered and created by UF students. Despite the exclusivity, no login is required to view the contents of the forum.
	At its core, Ga1ors is a social media app used to generate dialogue outside of its confines. Each day the community is not only given a platform to speak to the masses, but given a topic of conversation on how the random minority choose to use it.

Members:
	Backend:
		Ethan Wobb,
		Reece McDonald
	Frontend:
		Christian Bello,
		Rhyan Lugo Crespo


How to run the app:

VSCode Installation
This program and It’s dependencies can be installed and run through the VSCode code editor
https://code.visualstudio.com/Download 

Installation of NodeJS
https://nodejs.org/en 

Installation of Angular through the Angular CLI.
	npm install -g @angular/cli in VSCode terminal
	*this will check for node as well and install it if you haven’t installed node in step 2*

Install Go
https://go.dev/dl/ 
go install -v golang.org/x/tools/gopls@latest 

Clone the repository https://github.com/Reece-McDonald/Software-Engineering 
Paste this into vscode 

npm Install
cd Frontend/ga1ors-front-end
npm install
*this will install any necessary node packages*  
	
Add MYSQL, Go, and Angular Language Service VSCode Extension

Install Gorm
In the terminal cd Backend\backend
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite
Install Gorilla/MUX
In the terminal cd Backend\backend
go get -u github.com/gorilla/mux

https://dev.mysql.com/downloads/mysql/ 
Create account name root and password root on computers local host within mysql 
Within VSCode towards the bottom left use the ”+” icon within mysql to connect to database

Running Front-end
cd Frontend/ga1ors-front-end
ng serve
Open browser on http://localhost:4200/
/chat: default api endpoint for chat. ‘/’ will be redirected to here.
/register: api endpoint for registering user
/login: api endpoint for user login
/verify (only needed for after register): api endpoint for email verification after register
/profile: api endpoint for user account changes (i.g. name, email, password)

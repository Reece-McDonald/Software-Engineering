User Stories (also on the Github wiki) https://github.com/Reece-McDonald/Software-Engineering
Sprint 3 Progress Video:

1. As a socially active user, I want to be able to easily digest large amounts of content so that I can consume the website’s daily media in a reasonable amount of time.

2. As a UF student I want to be able to interact with those in different majors on a casual level so that we can relate as UF students without having other social media and other topics in the way.

3. As someone who enjoys refreshing content, I want a frequently updated site so that I can have a reason to log on everyday.

4. As a person who enjoys interacting with content, I want there to be a like button so I can support content I enjoy on the website.

5. As a social media user that dislikes the anonymity of most social media sites, I want a place to form local connections so that I can meet like minded people around me.

6. As someone who doesn’t want to be fraudulently represented, I want an email verification feature so that my account remains secure.

7. As someone who likes brevity I want a character limit per message because I don’t want to read too much from one person.


Issues (found in the issues section of the Github) see link above ^^

(Successfully completed)-------------------------------------------------------------------------------------------------------

-#1 Character Limits (From Sprint 2)
Based on a user story, character limits were desired. We will look to implement this feature request.

This problem has been solved as Ethan implemented a character limit per message for each user.

-#7 Login Page (From Sprint 2)

As a social media user that dislikes the anonymity of most social media sites, 
I want a place to form local connections so that I can meet like minded people around me.

This issue has been fixed as we have implemented a login page that also has the user register prior to logging in. 
The first and last name of the user are taken in so that they can be used to identify them in the forum. 
Thus, this takes care of the issue of anonymity on social media as everyone is identified by their name.

(Partially Completed)----------------------------------------------------------------------------------------------------------

-#2 User Verification

Based on a user story, user verification is desired. We intend on making a way to have our system send an email 
to the input email, this email carrying a verification link to ensure the user is
who they say they are. Additionally, we will be implementing a system to verify the 
user is a UF student, as only UF students can post and view the forum, while everyone else can only view it.


With frontend and backend connected we were able to get the parsing system to work in its final form so to speak, meaning we had to remake it
to work with how we connected the front and backend. The email verification system is very early stages, while it can send emails, we are not
ready to show this feature off yet, we still need more time on the backend to get it running properly and consistently. Since we don't yet have
the forum set up yet, we have yet to implement the feature of verfied accounts being able to post, while unverified viewers can only look at the
forum.

(Sprint 3 Update)
As it stands, account registration only allows for ufl.edu addresses and upon registration an email is sent to the entered email with a verification code. If the ufl.edu email does not exist the email will simply not be able to be accessed through the gatormail portal, verifying if the entered ufl.edu exists within UF systems. This is also we verify if the user creating the account is the owner of the entered email address as they will also have to be able to access their gatormail account to obtain the code which is required for creation.
This is still partially completed as currently we are in the process of setting up the routes so pass this verification number and user inputed code between front and back end so they can be compared with each other.

(Sprint 3 Update)
-#3 Large Amount of Data Consumption
Based on a user story, users want to have large data consumption in a short amount of time. We may be able to do this with the layout
of the forum itself, showing multiple posts at once. We will have to look into this further.

We are glad to say that we have the message system implemented which interacts with a seperate message database. THis database stores message components such as time the message was posted as well as who posted it, additionally posting affects the user database's "Posted today" boolean which will be used to limit each user to one post a day. Strides have been made both on the back and front end to have a working system that appears on screen. This feature is still in development as the like system has to be implemented, additionally basic aesthetic changes on the front-end side need to be made to reorganize the appearence of the messages page as well as it's order of apperance in conjuction with the register/login pages 



(Not completed)----------------------------------------------------------------------------------------------------------------

-#4 Communication with Local Students

Users want to communicate with local students outside of UF communication methods. This feature is essentially the whole project, so we will
work on this throughout the semester.

The reason why this wasn't completed is that, as previously stated, this is the entirety of the project just boiled down to a a simple problem 
statement /user story and it's not feasible for a single sprint. We have the groundwork laid to start implementing the forum through Sprint 3. 
A feature we could add around Sprint 4 is a tag feature that allows the users to tag themselves with their major. 

(Sprint 3 Update)
The forum implementation has made great progress this sprint, as it stands the messages features is about complete, what's missing currently is the smaller features of this such as the like button or the tags

-#5 Refreshing Daily Content

Users want new daily content, we intend on doing this through the system of wiping the forum every 24 hours, and having only 1% of the student 
body being able to post. We may decide to alter or add how we implement the feature later.

The reason why we haven't yet implemented this is because we don't quite know how this is to be done. There is the question of wanting to allow the 
same users to stay up and post every night as the message cap would be met before someone opens it up the next day. One idea is to rotate the users
that can post each day so that the content doesn't grow stale. We could softlock a user for over 24 hours so that others may get a chance. We have 
yet to revisit this as we haven't implemented the forum feature at all yet, so we are not worried about this too much until we have the forum implemented.

(Sprint 3 Update)
This sprint we have been mainly focused with simply getting the messages function working, by the end we had researched a few ways to implement this feature, however there currently is not an implementation of this, additionally we are looking into capping the database to only accept a maximum number of messages

-#6 Like Button
As a person who enjoys interacting with content, I want there to be a like button so I can support content I enjoy on the website.
(Sprint 2)
The front end team was not able to finish this as we were not able to implement the interface for messaging yet outside of a template
we're hoping to have this complete by Sprint 3 (Sprint 4 at the latest). Still at the same spot on the like button, no forum yet, so
no way for us to implement this yet.

(Sprint 3 Update)
After further working with the messaging system, we found that the like system is a smaller subcomponent that can be implemented later so that we can focus on working on the cumbersome message system, therefore we hope to have this implemented in sprint 4 along with visual changes to the website. 

Backend Tests -------------------------------------------------------------------------------------------------------------------------

For this sprint the goal of both teams was to work on the message system, compared to last sprint where we had multiple features working, we decided this sprint to focus soley on the message system as it is the heart and soul of our program.

For the message system, we are using postman tests once again to test the functionality of our backened API. The postman tests currently tests the functionality of sending and recieveing messages from the message database

The testing system works on inputting simply a message, from there the message database recieves the message data and other required information, such as the user and time is derived from the login cookies and system time. Additionally we have another postman test to return all the messages currently within the message database, these tests also currently check for character limit within messages

Sprint 4 Goals:
The goals of testing for sprint 4 include create post/get tests for the user verification feature as well updating the current message tests to reflect smaller features such as number of likes for a particular post

Backend API ------------------------------------------------------------------------------------------------------------------------------
With this sprint, the Backend API has been updated to include another MySQL database to house the messages posted on the website, with the creation of this we set up similar functions to that of the User database, only this time dealing with message objects. Additional routes were set up as well so that messages can be retrieved and displayed by the front end, and sent and stored in the backend. Some of the current functions interacting with the message database are the createMsg function which creates a message object from the user input and passes it to the DB, additionally there is AllMsgs which is used to return messages already stored within the DB, this along with the routes allows for Users to create and post messages and view already posted content. Additional functions includes deleteMsg which allows for the deletion of a message from the database. Currently on a user level we are not sure whether to give users access to this feature, currently it exists to remove inappropriate messages posted to the forum. Topic is still up for debate on whether to allow users to ddelete their posted messages and if so, if this affects their one post per day limit.


Frontend Tests --------------------------------------------------------------------------------------------------------------------------- 

The focus of the frontend team for this sprint was moreso the testing aspect of our current components. The main focus of the testing comprised of the login and registration components since they are the most complete components of the frontend.

The Cypress test first examines if the login component has been mounted properly before proceeding to the next steps in the test. The test then examines if the fields in the login page are filled by typing in a sample email and password into the input fields; furthermore, the test then clicks on the register button and demonstrates that clicking the button takes the user to the next page which is blank since the testing in Cypress is done within the login component. Furthermore, the next sprint should include end to end testing via Cypress and hopefully more to test one.

The next component tested was the register component which was done similarly since the pages are comprised of similar aspects. The test first checks if the registration component was mounted; the next step populates the name fields ("first name" and "last name") and then populates the rest of the fields ("email", "password", and "confirm password"). The tests do pass since they involve simply inputting information into the input fields on the page. 

Frontend----------------------------------------------------------------------------------------------------------------------------------

This sprint was solely focused on testing, so the bulk of the work was learning to work with Cypress and have it properly installed in the repository so that tests can be created and ran. Outside of the tests, a confirmation component/page was created in order to be able to have users receive the email with a confirmation code and then enter said code into the input. This won't be shown off in this sprint demo since we haven't been able to implement it with the function in the backend that creates the confirmation code and sends an email to the user.

This page and the actual messaging on the frontend is a goal to be completed by the end of Sprint 3 so that we can then work on integration of messages and fix up semantics involving logging in and attributing messages to a user. 


User Stories (also on the Github wiki) https://github.com/Reece-McDonald/Software-Engineering

Sprint 4 Progress Video: https://drive.google.com/file/d/1cy08XtDpNujVJGeKa7LQvmZ4A_p9qwL1/view?usp=sharing

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
After further working with the messaging system, we found that the like system is a smaller subcomponent that can be implemented later so that we can focus on working on the message system, therefore we hope to have this implemented in sprint 4 along with visual changes to the website. 

Backend Tests -------------------------------------------------------------------------------------------------------------------------

Our goals set by sprint 4 have been met regarding the key functionality of the website, some smaller features like a like button have been cut for time. 

For our postman tests, we are simply modifying our older tests as the features that have been since implemented cannot be tested via postmans automated testing system through json format. The main accomplishments of sprint 4 were implementing the midnight message refresh and the User verification for the backend. For the midnight refresh this is simply a function within our backend that executes on system time, therefore there is no post/get requests involving this that we can test via postman, As for the verification section, we have postman routes set up to test the feature, however due to the nature of the algorithm being to generate a random key which can only be accessed within an external email, we won't be able to know these values to create JSON tests, we can however test these manually within postman to verify that the verification is working. Another smaller feature we were able to add is the user only being able to post once a day. For this feature we modified the messages test JSON file so that it would test all the possible sources of error such as an empty message or breach of character limit first, then proceed to send a valid message followed by a second attempt to post which should throw an error as well. 


Backend API ------------------------------------------------------------------------------------------------------------------------------

Within this sprint our biggest goal was to implement the midnight deletion function which clears the message database at midnight of every day. After some trial and error we found that using the time.Afterfunc function within gomail’s time package allowed us to create this effect. The time.afterfunc function works by getting the exact time until midnight based on what time the user logs in, from there it runs a timer in parallel with the other functions of the website and executes the deletion command once the timer expires which will be midnight. As the user logs on throughout the day the timer will be updated with each new session and when the time comes the message database will be wiped at midnight.

Another accomplishment from sprint 3 was the email verification. This feature was ready for sprint 3 however the email account was hacked preventing us from sending out emails, additionally we were not prepared on the frontend side to receive this input. After creating the front end input, we found it best to add the user to the database regardless of verification, then when their email is verified, give them access to post to the forum.

 Another thing we accomplished for this sprint was finalizing the postedToday function within our user database. When a user posts, their postedToday boolean value is set to true, everytime a post is made this boolean is checked, in the case a user has not posted today, the message goes through normally. If the boolean is false, their post is rejected.


Frontend Tests (including previous sprints)------------------------------------------------------------------------------------------------ 

The main focus of the testing comprised of the login, registration, and chat components since they are the most complete components of the frontend and represent the pages that will be accessed most by the user.

The Cypress test first examines if the login component has been mounted properly before proceeding to the next steps in the test. The test then examines if the fields in the login page are filled by typing in a sample email and password into the input fields; furthermore, the test then clicks on the register button and demonstrates that clicking the button takes the user to the next page which is blank since the testing in Cypress is done within the login component. Furthermore, the next sprint should include end to end testing via Cypress and hopefully more to test one.

The next component tested was the register component which was done similarly since the pages are comprised of similar aspects. The test first checks if the registration component was mounted; the next step populates the name fields ("first name" and "last name") and then populates the rest of the fields ("email", "password", and "confirm password"). The tests do pass since they involve simply inputting information into the input fields on the page.  

Another component test was created for the sake of testing the chat-message component/page as well as to showcase the revamped chat page. The test consists of mounting the chat component, typing in a test message to show the fields can be filled, and clicking the send button which causes the message to disappear. The message bubble won't display with the contents of the message bar because getting the message back from the back-end is currently a goal for Sprint 4.

Lastly, we experimented with E2E testing and created an E2E test that navigates across the different pages in our application. The interactive parts in each component were tested in order to both become familiar with and show off a more automated process. The testing also served as an example of how it would look to navigate the page and will help in possibly fixing the navigation in the near future.

(New)
An E2E test was created in order to see if messages could be typed into the message input bar and sent. A test message is typed and the send button is pressed in order to have the message be displayed on the screen. This is essentially the functionality the front end has added since the last sprint that could be tested, aside from the verify page. 

A component test for the verification page was planned but it's difficult to verify if the email gets to your inbox since the inbox is on completely different software.

Frontend----------------------------------------------------------------------------------------------------------------------------------

For Sprint 4, we changed the style of the chat menu in order to be more in line with what a UF page would look like and added different components to be able to display the separate messages, as well as grab every message that has been displayed as of the time of retrieval. Another thing added was the feature of only allowing a single user to post once since that is part of the ga1ors product. Toastr messages were added in order to replace the window pop-up notifcations since they are break the flow of the experience by requiring the user to click on the notification.

The verification page was also created and works with the backend; furthermore, a user is now able to enter their email and receive a verification code and will then have to enter that code in order to finish creating their account. The verification page is, stylistically, very much inline with the login and register pages. The chat page is different since it has a more unique layout compared to the previously mentioned pages and it has a look that differs because of the fact that the colors are too bright and take away from the immersion of being in a UF messaging application. 

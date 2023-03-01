User Stories (also on the Github wiki) https://github.com/Reece-McDonald/Software-Engineering

1. As a socially active user, I want to be able to easily digest large amounts of content so that I can consume the website’s daily media in a reasonable amount of time.

2. As a UF student I want to be able to interact with those in different majors on a casual level so that we can relate as UF students without having other social media and other topics in the way.

3. As someone who enjoys refreshing content, I want a frequently updated site so that I can have a reason to log on everyday.

4. As a person who enjoys interacting with content, I want there to be a like button so I can support content I enjoy on the website.

5. As a social media user that dislikes the anonymity of most social media sites, I want a place to form local connections so that I can meet like minded people around me.

6. As someone who doesn’t want to be fraudulently represented, I want an email verification feature so that my account remains secure.

7. As someone who likes brevity I want a character limit per message because I don’t want to read too much from one person.


Issues (found in the issues section of the Github) see link above ^^

(Successfully completed)-------------------------------------------------------------------------------------------------------

-#1 Character Limits 
Based on a user story, character limits were desired. We will look to implement this feature request.

This problem has been solved as Ethan implemented a character limit per message for each user.

-#7 Login Page

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

(Not completed)----------------------------------------------------------------------------------------------------------------

-#3 Large Amount of Data Consumption

Based on a user story, users want to have large data consumption in a short amount of time. We may be able to do this with the layout
of the forum itself, showing multiple posts at once. We will have to look into this further.

The reason why this wasn't implemented is that the front end team hasn't yet implemented a user interface for messaging. However, we have
drawn up a layout of how we would like the forum to appear and this will support multiple messages visible on the screen. We have established
some starting code and files for the messaging/forum system, so we should be able to hit the ground running for Sprint 3.We hope to get this 
finished by Sprint 3.

-#4 Communication with Local Students

Users want to communicate with local students outside of UF communication methods. This feature is essentially the whole project, so we will
work on this throughout the semester.

The reason why this wasn't completed is that, as previously stated, this is the entirety of the project just boiled down to a a simple problem 
statement /user story and it's not feasible for a single sprint. We have the groundwork laid to start implementing the forum through Sprint 3. 
A feature we could add around Sprint 4 is a tag feature that allows the users to tag themselves with their major. 

-#5 Refreshing Daily Content

Users want new daily content, we intend on doing this through the system of wiping the forum every 24 hours, and having only 1% of the student 
body being able to post. We may decide to alter or add how we implement the feature later.

The reason why we haven't yet implemented this is because we don't quite know how this is to be done. There is the question of wanting to allow the 
same users to stay up and post every night as the message cap would be met before someone opens it up the next day. One idea is to rotate the users
that can post each day so that the content doesn't grow stale. We could softlock a user for over 24 hours so that others may get a chance. We have 
yet to revisit this as we haven't implemented the forum feature at all yet, so we are not worried about this too much until we have the forum implemented.

-#6 Like Button
As a person who enjoys interacting with content, I want there to be a like button so I can support content I enjoy on the website.

The front end team was not able to finish this as we were not able to implement the interface for messaging yet outside of a template
we're hoping to have this complete by Sprint 3 (Sprint 4 at the latest). Still at the same spot on the like button, no forum yet, so
no way for us to implement this yet.

Backend Tests -------------------------------------------------------------------------------------------------------------------------

Since the majority of this sprint was getting front and backend communicating, the main tests we wanted to run were testing the login and register features.
Our tests for the backend are ran through Postman, using external JSON files to input the "body" of the input for each test. For both Login and Register functions
we have four tests for each that test for four different valid inputs. Register has two tests that check for failure, one tests for an invalid email input error being 
thrown, invalid being an email that is not an "@ufl.edu" domain and the other tests for a password mismatch, as our register page asks for a password confirmation, so 
this last test tests to ensure that a password mismatch error gets thrown. For the last two login tests, one checks for an invalid email error being thrown when an invalid
email is input and the other tests for an incorrect password error being thrown when an incorrect password for a given email doesn't match.

We have minor tests for our logout function, these are in a postman script and will be demonstrated in our video. A quick description of the tests is that one checks for a
successful code, when the function runs properly, meaning that a successful logout was achieved. The other test is checking for the error code when a logout is attempted and fails
this test will pass if the desired wrror code is detected. As of right now however, the error for logout is not achieveable outside of testing environments, as you are unable to
logout if you aren't already logged in, which is how the error is thrown, but we figured in some edge case we weren't thinking of, having this and checking this error functionality
is safer.

Backend API ------------------------------------------------------------------------------------------------------------------------------

The way we have the APIset up between our GoLang program and SQL local server is that upon start up, we establish the connection to the SQL server,
we then use a function that blocks requests from differen ports than the one we're using, and this allows the frontend to get the users cookies.
We then use a setup function that estabilshes our private and public routes, the private routes being things like user, users, info, etc., things
we are using for testing purposes to look at the SQL server and see how it is storing our data we're inputting. The public routes are register and 
login, as this would be something that the average user would be able to use and access, needing these functions to get into the website. We also have
intermediate software, "middleware", to check that a valid user is logged in, this is also a public route. Finally after all of these routes are established, 
we have it set to listen through our specified online port, allowing us to input data through this online port, through the program which organizes the data and makes sense of
it, and is then passed into the SQL local server organized, hashed, and stored. This data as it currently stands is the user data, names, emails, passwords, and 
their designated ID number, which only us on the backend will see.

Frontend Tests --------------------------------------------------------------------------------------------------------------------------- 



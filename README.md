
# Nerd Alert - Front end

Nerd Alert is for all the people who love to play computer/video games and that want a community where they can find likeminded people. Loggged in users can share pictures from their favourite game or why not movie and rate, comment on other peoples posts. This is the frontend of the webpage. The backend API is found here: https://github.com/Kimskogfelter/pp5-drf-nerd-alert


![Mockup](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/mockup.png)


### Site Goals

Nerd Alert is for all the nerdy people out there who wants to find likeminded people to share their love for nerdy things. The main category is computer/video games but people can also share a movie related to a specific video game, or why not a 3D printed stand for your gaming controllers that reminds you of Zelda. Maybe you want help to find the next game to play? A movie for the geek night with your friends? Or help to find the best headset for your gaming computer? Only your imagination sets the limits of what you want to share.
<hr>

### Agile Planning

I used a kanban board when developing this project to help me track each of the steps I needed to take to complete this website.

During the development of the webpage I deleted all the stories I found not necessary to keep in the websise so I only could focus on the ones I really needed.

The Kanban board was created using github projects and can be located [here](https://github.com/users/Kimskogfelter/projects/6/views/1).

<hr>

### Epics


**Posts**

This epic is about the front end application where the users can create, read, update and delete their own posts. 

**Comments**

This epic is about the front end application where the users can create, read, update and delete their own comments and add a star rating to the related post. 

**Profiles**

This epic is about the front end application where the users can create, read, update and delete their own profiles.  

**Favourites**

This epic is about the front end application where the users can favourite certain posts they like and find them under the favourites category when they are logged in.

**Contact Page**

This epic is about the front end application where the users can choose to contact the administration of the webpage through a form if they got any questions.


<hr>
<br>

### User Stories

By Epic:

**Home**

* As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc
* As a user I can see a list of the most followed profiles so that I can see which profiles are popular
* As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in
* As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
* As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh

**Authentication** 

* As a user I can sign in to the app so that I can access functionality for logged in users
* As a user I can tell if I am logged in or not so that I can log in if I need to
* As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
* As a user I can create a new account so that I can access all the features for signed up users

**Navigation menu**

* As a user I can view a navbar from every page so that I can navigate easily between pages
* As a logged out user I can see sign in and sign up options so that I can sign in/sign up

**Posts**

* As a logged in user I can create posts so that I can share my images with the world!
* As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
* As a user I can view the details of a single post so that I can learn more about it
* As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
* As an owner of a post I can delete my post so that I can control removal of my post from the application
* As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
* As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about

**Comments**

* As a user I can view the posts page so that I can read the comments about the post
* As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
* As a user I can read comments on posts so that I can read what other users think about the posts.
I can also see the star rating.
* As a logged in user I can add comments to a post so that I can share my thoughts about the post.
I can choose to add a star rating too.
* As a user I can see how long ago a comment was made so that I know how old a comment is
* As an owner of a comment I can edit my comment so that I can fix or update my existing comment with the text or rating.

**Profiles**

* As a user I can view other users profiles so that I can see their posts and learn more about them
* As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
* As a logged in user I can edit my profile so that I can change my profile picture and bio
* As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
* As a user I can view user's avatars so that I can easily identify users of the application

**Favourites**

* As a logged in user I can favourite a post so that I can show my support for the posts that interest me
* As a logged in user I can view the posts I have marked as a favourite so that I can find the posts I enjoy the most

**Contact Page**

* As a user I want to be able to contact the webpage if I got any questions


<hr>
<br>

### Features:

**Home**

USER STORIE NR# 18:

`As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc`

Implementation: 

As a user it is a nice experince to dont have to click on a button to continue to see more of the content. 
To be able to scroll when you want to see more gives the user a good experience. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716942
![picture of the home page when scrolling showing no next button](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2018.png)

USER STORIE NR# 9:

`As a user I can see a list of the most followed profiles so that I can see which profiles are popular`

Implementation: 

As a user it is a nice experince to see the most popular profiles to see if someone of them offers something they would like to follow too.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716120
![picture of the most followed profiles](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%209.png)

USER STORIE NR# 21:

`As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.`

Implementation: 

As a user it is a nice experince to be able to search for a specific topic to find what you are looking for without having to search the entire website.
This is being done with the searchbar at the top of the webpage under the header.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717112
![picture of the search bar](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2021.png)

USER STORIE NR# 7:

`As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed`

Implementation: 

As a user it is a nice experince to be able only see the content of the profiles you follow in its own page. So when a user choose to follow a profile and click the 
feed menu in the navigation bar they will get to a page which only shows posts from the users they have choosen to follow. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64715989
![picture of the feed page which only shows posts from the users you follow](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%207.png)

USER STORIE NR# 32:

`As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh`

Implementation: 

As a user it is a nice experince to be able to navigate through different pages quickly without having to wait for the page to refresh. This is being done
by a refresh token. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717935


**Authentication**

USER STORIE NR# 30:

`As a user I can sign in to the app so that I can access functionality for logged in users`

Implementation: 

As a user it is a nice experince to be able to create a user for the webpage to be able to get access to certain functions like favourite a post. To later be able to log in and
find all the posts you have choose to favourite. This is being created by clicking on the  heart next to a posts when logged in. That post is then saved to the favourites page, which the user can reach by clicking on the favourites menu in the navigation bar.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717737
![picture of the sign in page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2030.png)

USER STORIE NR# 29:

`As a user I can tell if I am logged in or not so that I can log in if I need to`

Implementation: 

As a user it is a nice experince to be able to see if you are logged in or not the webpage. When a user is logged in they can see the Sign out menu at the navigation bar. If the user is not logged in they can see the Sign in menu insted. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717686
![picture of the navigation bar when logged in, showing the sign out menu](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2029.png)

USER STORIE NR# 28:

`As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised`

Implementation: 

As a user it is a nice experince to be able to stay logged in for as long as you want to. This is being done by having a refresh token.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717641

USER STORIE NR# 31:

`As a user I can create a new account so that I can access all the features for signed up users`

Implementation: 

As a user it is a nice experince to be able to create your own user for the webpage to get access to all the features a logged in user gets. 
This is being done at the Sign up page with the Sign up form. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717854
![picture of the sign up page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2031.png)

**Navigation menu**

USER STORIE NR# 2:

`As a user I can view a navbar from every page so that I can navigate easily between pages`

Implementation: 

As a user it is a nice experince to be able to navigate to the different pages that the webpage offers without having to scroll or search for them.
This is being done with the navigation menu at the top of every page. The user can then click on the different menus in the navigation bar to get to the different pages.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64708364
![picture of the navigation bar/menu](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%202.png)

USER STORIE NR# 27:

`As a logged out user I can see sign in and sign up options so that I can sign in/sign up`

Implementation: 

As a user it is a nice experince to be able to see if your are logged in, or if you can create or sign in a user. This is being done with the Sign in/Sign up menus in the 
navigation bar, which only displays to logged out users. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717548
![picture of the navigation bar when not logged in to the website](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2027.png)

**Posts**

USER STORIE NR# 25:

`As a logged in user I can create posts so that I can share my images with the world!`

Implementation: 

As a user it is a nice experince to be able to share your own posts. This is being done with the add posts menu that is displayed only to logged in users in the
navigation menu. When clicked the user is taken to a page where they can choose a image, title and content to then be able to press the create button to create the post.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717347
![picture of the create post page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2025.png)

USER STORIE NR# 22:

`As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content`

Implementation: 

As a user it is a nice experince to be able to see new posts that have been added to the webpage. This is being done at the home page where the newest post
are at the top of the page. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717163
![picture of the home page where the user can see the most recent posts](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2022.png)


USER STORIE NR# 24:

`As a user I can view the details of a single post so that I can learn more about it`

Implementation: 

As a user it is a nice experince to be able to see more information about a certain post that they are interested in. This is being done by clicking on a certain post.
The user is then taking to a page which displays only that post and all information about it.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717283
![picture of the page the user gets to when they have clicked on a single post](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2024.png)

USER STORIE NR# 16:

`As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created`

Implementation: 

As a user it is a nice experince to be able to edit your own posts. This is being done with 3 dots that appear next to the users own posts when they are logged in.
When the user clicks on those dots they can choose to edit that post. They are then taken to a separate page where they can change the image, title or content. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716834
![picture of the edit post page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2016.png)

USER STORIE NR# 33:

`As an owner of a post I can delete my post so that I can control removal of my post from the application`

Implementation: 

As a user it is a nice experince to be able to delete your own posts. This is being done with 3 dots diplayed by the users own posts when they are logged in. 
The user needs to click on that certain post that they own to be able to see the 3 dots. They can then click on those and choose the trashcan icon to delete that post.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=65348599
![picture of the trashcan icon the user deletes their own posts with](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2033.png)

USER STORIE NR# 6:

`As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them`

Implementation: 

As a user it is a nice experince to be able to see all posts by a specific user. This is being done by clicking on that specific users avatar picture. You are
then taken to that users profile page which diplays all posts that user have created. You can then choose if you want to follow that user or not.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64715858
![picture of a specific profile page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%206.png)


USER STORIE NR# 19:

`As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about`

Implementation: 

As a user it is a nice experince to be able to see all posts of the users you choose to follow. This is being done by adding all those users posts in a different page called Feed. That page is diplayed to logged in users in the navigation bar. The logged in user can then choose to click on the Feed menu and get to all the posts that only the users 
they follow have posted. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717014
![picture of the feed menu in the navigation bar](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2019.png)

**Comments**

USER STORIE NR# 17:

`As a user I can view the posts page so that I can read the comments about the post`

Implementation: 

As a user it is a nice experince to be able to see all the different comments a post got. This is being done by clicking on a specific post. The user is then
taken to that posts page where they can see the comments made at the bottom of the screen. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716898
![picture of the comment part of the post page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2017.png)

USER STORIE NR# 12:

`As an owner of a comment I can delete my comment so that I can control removal of my comment from the application`

Implementation: 

As a user it is a nice experince to be able to delete your own comments when you want to. This is being done by going to a certain post that you have commented on. 
Next to your comment there is 3 dots which you can press and choose the trashcan to delete that comment. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716524
![picture of the trashcan icon the user can delete their own comment with](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2012.png)

USER STORIE NR# 13:

`As a user I can read comments on posts so that I can read what other users think about the posts. I can also see the star rating.`

Implementation: 

As a user it is a nice experince to be able to read all the comments made to a post. This is being done by clicking on a post and scroll down to be bottom
of that post where all the comments are. The user can then read all the comments and also see the star rating. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716589
![picture of the comments part of the post page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2013.png)

USER STORIE NR# 15:

`As a logged in user I can add comments to a post so that I can share my thoughts about the post. I can choose to add a star rating too.`

Implementation: 

As a user it is a nice experince to be able to make your own comments to posts. This is being done by clicking on a post and scroll down to bottom of it. 
The user can then choose to fill in the comment form and add a star rating to then click on the post botton to create that comment. The user needs to be logged in
for the comment form to appear.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716735
![picture of the comment form on the post page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2015.png)

USER STORIE NR# 14:

`As a user I can see how long ago a comment was made so that I know how old a comment is`

Implementation: 

As a user it is a nice experince to be able to see how long ago a comment was made. This is being done by clicking on a post and scroll down to all the comments.
The user can then see next to the name of the person that made that comment, how long ago the comment was made. This is good to know so the user knows if the comment is
new and relevant or if its years old. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716645
![picture of a comment showing the time stamp next to the users name](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2014.png)

USER STORIE NR# 11:

`As an owner of a comment I can edit my comment so that I can fix or update my existing comment with the text or rating.`

Implementation: 

As a user it is a nice experince to be able to edit your own comments. This is being done by clicking on post you have commented on.
Then next to your own comment there is 3 dots which you can click on to display a edit or delete icon. Click on the edit icon to display a form where
you can edit your comments text and rating. The user needs to be logged in to be able to see this function. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716295
![picture of the edit form for the comments](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2011.png)

**Profiles**

USER STORIE NR# 10:

`As a user I can view other users profiles so that I can see their posts and learn more about them`

Implementation: 

As a user it is a nice experince to be able to view other users profiles. This is being done by clicking on a certain users profiles avatar picture to get to that users profile page. The user can then see all the information and posts that specific user have created. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716177
![picture of a single profile page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2010.png)

USER STORIE NR# 4:

`As a logged in user I can update my username and password so that I can change my display name and keep my profile secure`

Implementation: 

As a user it is a nice experince to be able to change your username or password when needed. The user needs to be logged in and press their own profile picture in the
navigation menu. They are then taken to their own profile page. In the top right corner of the profile page there is 3 dots which the user can click on to reveal 3 different menus. 2 of them being able to change the username or password. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64709520
![picture of the edit username and password icons at the profile page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%204.png)

USER STORIE NR# 5:

`As a logged in user I can edit my profile so that I can change my profile picture and bio`

Implementation: 

As a user it is a nice experince to be able to change your own profile image or bio. This is being done by clicking on your own profile picture when youre logged in. 
You can then click on the 3 dots in the top right corner of your profile page to reveal the edit icon. Press that and youre taken to a form where you can choose to change your profile image and bio text. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64710416
![picture of the edit form for the profile page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%205.png)

USER STORIE NR# 8:

`As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them`

Implementation: 

As a user it is a nice experince to be able to see different statistics about a certain user. This is being done by clicking on a specific users profile picture. The user is then taken to that specific users profile page where they can see statistics like: bio, number of posts, follows and users followed. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64716060
![picture of the statistics at a profile page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%208.png)

USER STORIE NR# 26:

`As a user I can view user's avatars so that I can easily identify users of the application`

Implementation: 

As a user it is a nice experince to be able to see avatars of different users so you can identity them. This is being done by displaying a picture next to that users name. That user can then choose to add their own profile picture so other users can identify them easier. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717491
![picture of users avatar images](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2026.png)

**Favourites**

USER STORIE NR# 23:

`As a logged in user I can favourite a post so that I can show my support for the posts that interest me`

Implementation: 

As a user it is a nice experince to be able to favourite post that you like. This is being done by clicking on the heart icon that is displayed under the post image and text. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717222
![picture of the heart icon that favourites a post](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2023.png)

USER STORIE NR# 20:

`As a logged in user I can view the posts I have marked as a favourite so that I can find the posts I enjoy the most`

Implementation: 

As a user it is a nice experince to be able to view the posts that the user have marked as their favourites. This is being done by adding all the posts the user have marked with the heart icon to the page called favourites. To see all the favourite posts the user can click on the favourites menu in the navigation bar to get to that page. 

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64717064
![picture of the favourites menu at the navigation bar](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%2020.png)

**Contact page**

USER STORIE NR# 3:

`As a user I want to be able to contact the webpage if I got any questions`

Implementation: 

As a user it is a nice experince to be able to contact the webpage owners if they got any questions. This is being done by clicking on the
Contact us menu in the navigation bar. The user is then taken to a contact form which they can fill in send a message to the webpage owners.

Link to user storie: https://github.com/users/Kimskogfelter/projects/6/views/1?pane=issue&itemId=64709085
![picture of the contact page](https://github.com/Kimskogfelter/pp5-frontend-nerdalert/blob/main/public/user%20storie%203.png)


<br>

### Future Features

???????????
<hr>
<br>

### Wireframes

Home / Feed / Favourites pages - not logged in user

![Wireframe for Home Page,Feed Page,Favourites Page, not logged in user](https://raw.githubusercontent.com/Kimskogfelter/pp5-frontend-nerdalert/main/public/wireframes/Home%20Page%2CFeed%20Page%2CFavourites%20Page%2C%20not%20logged%20in%20user.webp)

Home / Feed / Favourites pages - logged in user

![Wireframe for Home Page,Feed Page,Favourites Page, logged in user](https://raw.githubusercontent.com/Kimskogfelter/pp5-frontend-nerdalert/main/public/wireframes/Home%20Page%2CFeed%20Page%2CFavourites%20Page%2C%20logged%20in%20user.webp)

Contact page

![Wireframe for Contact page](https://raw.githubusercontent.com/Kimskogfelter/pp5-frontend-nerdalert/main/public/wireframes/Contact%20page.webp)

Profile page

![Wireframe for Profile page](https://raw.githubusercontent.com/Kimskogfelter/pp5-frontend-nerdalert/main/public/wireframes/Profile%20page.webp)

Sign up page

![Wireframe for Sign up page](https://raw.githubusercontent.com/Kimskogfelter/pp5-frontend-nerdalert/main/public/wireframes/Sign%20up%20page.webp)

Sign in page

![Wireframe for Sign in page](https://raw.githubusercontent.com/Kimskogfelter/pp5-frontend-nerdalert/main/public/wireframes/sign%20in%20page.webp)


### Design

#### Colour-Scheme

The background color on the navigation menu is #243837 to make the icons and logo pop. 
The font and icons colors are a mix between #FE7833 and black to have a nice mix of colors on the website.
The posts, forms and followers profiles backgrounds are white. 
The background color on the website is light grey so that the posts, forms and followers profiles stands out a bit from the background.

<hr>
<br>

#### Typography

The font used on the website is "DM Sans".
<hr>
<br>

#### Images

MEDIA:
* logo from: https://logo.com/editor/colors
* picture on the signup page: https://images.pexels.com/photos/4009592/pexels-photo-4009592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
* picture on the signin page: https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
* picture on the contact page: https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

IMAGES FOR THE POSTS:
* https://wallpapers.com/wallpapers/zelda-on-mountain-peak-10z2shqr6wu21hzh.html
* https://wallpapers.com/wallpapers/mario-wallpaper-for-ipad-1920x1080-hd-for-ipad-apps-e3al2e43aalb8c5p.html
* https://wallpapers.com/wallpapers/mario-wallpaper-hd-68yqbxmtiijuexhn.html
* https://wallpapers.com/background/world-of-warcraft-3840-x-2160-background-au7g7425at5r2933.html
* https://wallpapers.com/wallpapers/valheim-game-winter-poster-vn5bcejvntr4h0my.html
* https://wallpapers.com/png/purple-dragon-character-spyro-hgdvc9zc1i4igoon-2.html
* https://wallpapers.com/wallpapers/super-mario-bros-movie-poster-qc3209k4u4ixufo4.html
* https://wallpapers.com/wallpapers/wow-classic-orc-dwcucvjj3fm5xiii.html
* https://wallpapers.com/wallpapers/four-fortnite-survivors-hd-s2quxs8pv30anjws.html
* https://wallpapers.com/background/4k-borderlands-3-background-89i54p77r8wx4qwu.html
* https://wallpapers.com/wallpapers/gaming-headsets-1920-x-1080-wallpaper-dazgssc29liyngr6.html

AVATAR IMAGES:
* https://www.freepik.com/free-ai-image/portrait-abstract-overstimulated-feelings_138520849.htm#fromView=search&page=1&position=29&uuid=8443b467-05d8-42e7-b779-fc3f1545a647

<hr>
<br>

## Technologies

* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies
* Eslint
    * Linting tool used in order to check best practice coding standards
* Heroku
    * Used for application hosting
* Git
    * Version control software
* Github
    * Repository used to store base code and docs
* favicon from: https://fontawesome.com/icons/gamepad?f=classic&s=solid
* used [https://favicon.io/favicon-converter/] to generate the favicon

<hr>
<br>

## Testing

<hr>
<br>

## Deployment
## Heroku Deployment

This project was also deployed to Heroku.com. The following steps shows how you do it:

1. Start by creating a account on Herokus website

2. Then log in to your account and create the app for your website

3. When the app is created go to the settings tab

4. Reveal the config vars and add a KEY of DISABLE_COLLECTSTATIC, and a VALUE of 1

5. In your IDEs terminal pip install gunicorn~=20.1

6. In your IDE use this command: "pip freeze --local > requirements.txt" to update your requirements.txt file with the installed gunicorn

7. Create a file in your root directory named Procfile, it needs to be the same directory as your requirements.txt

8. In your procfile add this text: "web: gunicorn my_project.wsgi"

9. Change "my_project" to the name of your own project

10. Open your settings.py file and change your DEBUG settings to False. It should always be False when deploying your project to Heroku!

11. In your settings.py under the ALLOWED_HOSTS add this text ",'.herokuapp'"

12. Now git add, commit and push all the changes to Github

13. Return to your Heroku dashboard and go to the deploy tab

14. Choose to connect your Heroku account to your Github account

15. When your Heroku account is connected to your Github account search for your project repo name and choose it

16. Then scroll down to the bottom of the page and click on the "deploy branch" button to start a manual deployment

17. When the deployment is done you'll see a "View" button at the bottom of the page

18. Press that button to view your deployed app

<hr>
<br>
Link to the live website: (https://pp5-frontend-nerdalert-7bbffbba1478.herokuapp.com/)
<br>

## Version Control

The website was created using the Gitpod editor and pushed to github to the repository ‘pp5-frontend-nerdalert’.

The following git commands were used throughout development to push code to the repository in github:

```git add .``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.
<hr>
<br>

### Run Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

```npm install```

Run Application:

```npm start```
<hr>
<br>

## Credits

CODE:
* used these two repositories to make the star rating work in the comments section: 
https://github.com/awran5/react-simple-star-rating , https://github.com/Gareth-McGirr/body-doodles/blob/main/src/pages/reviews/ReviewsPage.js
* used the moments walkthrough by Code Institute to make this IDE: https://github.com/mr-fibonacci/moments/tree/bb6657e265fb18360b841e10d9d633dad06f4e5c
* used this repository to help me get the contact form to work: https://github.com/Hujanen91/sourdoughcircle_frontend/blob/main/src/pages/contact/ContactForm.js


### Acknowledgements

I'd like the thank the swedish channel in slack for always helping and cheering when things got tough. 
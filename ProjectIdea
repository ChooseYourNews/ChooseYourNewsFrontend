Ideas for Group project
 - Personal News
   - Harder in getting different outside source API working (NYTimes, Twitter, Other News outlets)
   - Even if we dont finish it now, we can work on it in the future and deploy it for public
 - Grubhub 
   - Harder in the backend (Seperating Admins and normal users)
 - Message Board
   - Harder in the frontend (Displaying messages and comments and replys for comments)
 - 


 Functional Requirements (Choose Your News)

- Email vertify with account Register
	- Add tags at register screen (Optional)
- Email vertify with password reset
- login serves
- Profile Page
- Phone/Mobile Browser Optimize (Optional)
- Every morning at 8am, send the first result article of your topic. (Notification, Optional)
- Auto Login with Token (Store in local Storage)
	- JSON Web Tokens (Optional)

Frontend
 - Home Screen 
 	- News Stores related to your "interest"
 		- With a scroll bar keep auto populate with more stories (Load more Button also works)
 	- Click on News stories to go to the article from the site.  
 	- Search to search for anything you key (Optional)
 	- Fav news stories (optional)
 	- Logout Button
 	- Upon first login, show a few articles from ALL your interest until you select one interest (optional)

 - Register (Only show the option if you're not logged in)
 	- Make accounts with email vertify
 	- Preselect from a bunch of interest (Optionals)
 	- Preselect news outlit that you want to hear from (Optional)

 - Profile Page (Only show the option if you're logged in)
 	- Customize profile info
 		- Change password (with email vertify)
 		- Change names
 		- Add/Delete Interests
 		- Manage fav news stories (optional)
 	- Toggle which outlits of news you want to hear from (optional)
 		- https://en.wikipedia.org/wiki/List_of_news_media_APIs
 		- Google News https://newsapi.org/s/google-news-api
 		- NY Times https://developer.nytimes.com/

 - About us (Optional)
 	- A page about all the devs

Backend
 - Users
 	- P key Id
 	- email String not null, unique
 	- password String not null
 	- FirstName String
 	- LastName String not null

 - UserInterest 
 	- Foreign Key id users
 	- Foreign Key id interest

 - Interest (Tags)
   - P Key id
   - Interest String not null

 - FavNews (optional)
   - P Key id
   - Foreign Key UsersID
   - NewsURL String not null

 - UserOutlet (Optional)
 	- Foreign Key User
 	- Foreign Key NewsOutlet
 	- wantToSee boolean

 - NewsOutlet (Optional)
   	- P key id
   	- NameOfOrg String

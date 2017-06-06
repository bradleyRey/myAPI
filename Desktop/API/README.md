Documentation

304CEM - Web API development

For this assignment, I was required to create a RESTful API that will take data from a third-party API where I manipulate the data to create my own API. I decided to use the Spotify API to extract data to use. Specifically, my API can access artist information, album information and artist information. The track data would return the artist name and the name of the track. My album request would also do the same, where it would load the artist name accompanied by the name of the album. The artist request was slightly different, where it would return the artist name, the genres of music which the artist fits in, and the number of followers the artist has on Spotify. 

All this data can be POSTed to a database for the user to store. This data was set to mlab which is a mongo based databased based on cloud services. The API can also create users in a separate collection which will provide a username and a password. I attempted to hash the password for authorisation proposes however I could not manage to implement it as you can see in my repository the files for authentication are there, but there are not used. 

Ignore the lab demos file as I could not remove them from the repository as I removed them locally instead. There are a few other files which can be ignored. This includes: 
 jasmine.js
 mongoRoutes.js
 mongoKeys.txt
 test.js
 autheriseHandler.js
 autherise.js
 spotifynew.js
 users.js
 userhandler.js

I also provided some testing in a testing file where I used Jasmine-node to perform this testing. I mainly tested my GET approaches, where I would test whether the modules would successfully request the data.

I also used eslint to check for any other errors such as spacing errors or magic number errors.

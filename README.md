# Social NewsReader - React Application

1) The first module will crawl the Facebook and Twitter feeds. As of now I used feeds.json file to get the feeds text.
2) The second module will extract important concepts from the feed. i.e. entities, links or twitter usernames. (In the example below, you can see how there is an entity from position 14 through 22, another entity from position 0 to 5 and so on).
3) The third module will format each post as follows:
●  Entities should be wrapped in "strong" tags
●  Links should be wrapped in "a href" tags that point to the corresponding links 
●  Twitter usernames should be wrapped in "a href" tags that point to
"http://twitter.com/username" and are displayed as the username

# Tech Stack : React, Redux, Bootstrap, SASS, Webpack, Jest

#Design Principles Followed
I used Redux to manage states, so we are achieving DI 
I splitted components into smaller modules to have single responsibility 
This app is open for extension, if someone wants to reuse they just need to make sure that feed text is align to same format mentioned in usecase. For example we can reuse Homw, FeedList component without any modifications.

#How to adhere for run time unhandled errors
In in application while working with arrays, objects I validated for whether its valid or not. It avoids most of the run time errors.
To avoid array length related issues, Used three dots(...) , to get rest parameters also used as spread operator that expands array to list.



# To begin the development Getting Started?
In order to get started developing, you'll need to do a few things first.

1. Clone this repository / unzip the folder
2. If you don't have node installed download it here: https://nodejs.org/en/
3. To Install all of the node_modules required for the package, run below command from root folder.

   npm install

4. Lastly, run the start command to get the project off the ground. This command will build your files using the Webpack dev-server

   npm start

5. Head over to http://localhost:3000 to see your app live!
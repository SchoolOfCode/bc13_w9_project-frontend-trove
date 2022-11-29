# Welcome to Trove!

![logo](public/trove-logo.jpg)

Question:
How often do you share a link? Once a week? Once a day? Multiple types a day?
How often do you receive a link and say to yourself: "I’ll visit that later..."? 

...a day goes by and you receive another link...a week goes by and you receive ten more, and before you know it, 
you find yourself with a whole inventory of links to catch up on and they just keep stacking up!! 😭 

As bootcampers at School of Code, we are **constantly** receiving links on Slack, but without a well-organised place to store them, they soon disappear up the chat thread, never to be seen again.

What learners need is a dedicated and well-organised home for all these resources...
...Enter 'Trove'! 

Trove is searchable, filterable and persistent store for all these wonderful learning resources, built using PostgreSQL, Express, React, and Node.js.

## Project Status
This project is currently in development. Users can browse resources and filter by title, as well as adding a new resource to the collection. 

Functionality to filter by post topic / tag / category is in progress - watch this space! 👀

## Project Screen Shot(s)

![screenshot1](image.jpg)

![screenshot2](image.jpg)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

  - What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
  - What did you set out to build?
  - Why was this project challenging and therefore a really good learning experience?
  - What were some unexpected obstacles?
  - What tools did you use to implement this project?
      - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.  

This was a 1-week project built during my nineth week at the School of Code bootcamp. Project goals included: 
1. Tackling a real-world problem for fellow bootcampers
2. Using technologies learned up until this point 
3. Familiarising myself with documentation using JSDoc

After initial user research, our team decided we would build an application that allowed fellow bootcampers to browse, search, filter and contribute to vast collection of learning resources. 

We built the frontend and backend as two seperate applications, linking them together around half-way through the week. 
We went with the 'create-react-app' boilerplate on the frontend to take care of our setup as quickly as possible.  

One of the main challenges we ran into was the use of category 'tags' and complications that arose from the re-use of custom react components. This lead to us having to spend a large chunk of our time trying to get the feature working, as we felt it was an integral part of our agreed MVP, however, this turned out to be time well-spent, and we learned a lot along the way.

Due to project time constraints, we had to be pragmatic and cohesive within the team in order to pull off an entire app in less than 1 week. 

In conclusion, we used the PERN technology stack (PostgreSQL, Express, React, and Node.js) to build a full-stack web application with CRUD operations, employing the `create-react-app` boilerplate to minimize initial setup and invest more time elsewhere. 

We plan to continue adding features to the app, focussing next on simple user authentication, which will enable us to safely deploy the app, restricting access to learners on the bootcamp.

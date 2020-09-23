# treble. - Travel Tracker App

## Contributors
- [Hanna Kim](https://github.com/hannakim91)
- [Turing Staff](https://github.com/turingschool-examples/webpack-starter-kit/tree/main/src)

## Abstract
FreshPicks is a card UI recipe application where users can view and filter recipes based on their existing pantry ingredients and recipe type. There is also a feature that allows users to favorite their recipes, "*shop*" for missing ingredients and "*cook*" a recipe, which removes any ingredients used in the cooking process.

In this project, we refactored an existing code base and ensured that all functionality was working properly, created a robust testing suite, added new features such as Fetch API, SCSS, Accessibility and testing with Chai Spies.

### App in Action
#### Login Feature
![Treble Log-in](https://media.giphy.com/media/nQpR7oxlCUZRBhUm2H/giphy.gif)

#### Responsive Layout
![Treble Responsive Layout](https://media.giphy.com/media/gEWaWnJnOEMgxjo7yi/giphy.gif)

#### Mobile View

![Treble Mobile View](https://i.imgur.com/ATx8qML.png)

#### Accessibility

![Treble Accessibility Score](https://i.imgur.com/6r2u2pm.png)
#### Get Trip Estimate & Add New Trip Features

![Treble Add New Trip](https://media.giphy.com/media/2yLeR3FbedVa9G1eYC/giphy.gif)

## Setup & Installation
To view and use the application, clone down [this repository](git@github.com:hannakim91/travel-tracker.git) and install npm. Run npm  and open [localhost:8080](localhost:8080) on your browser
```
git clone git@github.com:hannakim91/travel-tracker.git
npm install
npm start
```
To view the test suite:
```
npm test
```
## Skills
- OOP using ES6 classes
- Array iterator methods/Object methods
- Test Driven Development - designing an application by testing first and pseudo-coding before coding functionality
- Accessibility - following ARIA guidelines to provide seamless tabbing for screen readers and choosing a color scheme that accommodates for colorblindness
- Group workflow using a project board, concise commits, linking commits/PR's to issues, automated PR template, and documented code review
- Refactoring existing code base by following SRP and DRY principles and using newer technologies

## Technologies Used
- Vanilla JS
- HTML
- CSS/SASS
- Webpack
- Mocha framework
- Chai library with Spies plug-in for DOM testing
- NPM
- Fetch API to GET/POST data to a server
- GitHub/Git
- Eslint

## Wins & Challenges

### Challenges
- Writing our tests based the wrong data -- in hindsight, we should have checked the API data supplied before writing new tests and methods. We learned later in the process that API datasets differed from original project's repo data and could have saved time with functionality that was unneeded (RIP `User.marieCondoMyPantry`)
- Using API data that can be modified by multiple developers (both within our group and other students in the class). We're all learning how to use API data for the first time, so data was sometimes altered in ways that might not work with how our class methods were written.
- Posting data to the server. We realized as a group that this would have been easier had we used Promise.all to ensure that all data that we needed to post to the server was available as our methods were using it.

### Wins
- Tackling complicated logic involving multiple datasets.
- Learning how to take advantage of Webpack's features to consolidate our files into one neat bundle. We found that while everything doesn't have to be linked through an `html scripts` tag, the correct files must be linked in `index.js` and have a chosen entry point (`scripts.js`) before deployment.
- Using `Fetch` to `GET` data from a server.
- Deciding (not) to use inheritance - while this is a new feature we learned during this module, we felt that it did not offer enough advantages to be applicable for how we structured our classes.
- Implementing Chai Spies to test functionality on the DOM.
- Exploring SCSS functionality to refactor using nesting and variables.

## Additional Links
- [Project Board](https://github.com/npdarrington/Whats-Cookin/projects/1)
- [Visual planning](https://jamboard.google.com/d/1k-Fsp7zcx3fZqDgq3sIR5eu4ZKydwCJyzZFebz4ChQg/viewer?f=3)
- [Refactor Specs](https://frontend.turing.io/projects/whats-cookin.html)
- [Original Project Specs](https://frontend.turing.io/projects/module-2/refactor-tractor-wc.html)
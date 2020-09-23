# treble. - Travel Tracker App

## Contributors
- [Hanna Kim](https://github.com/hannakim91)
- [Turing Staff](https://github.com/turingschool-examples/webpack-starter-kit/tree/main/src)

## Abstract
treble. is a travel booking application where a user can log in and out of their account and book a new trip. Validation methods ensure that a user can only log in with a correct username and password, as well as view estimates for and book a new trip by adding all necessary inputs. A user also has access to their past, present, and upcoming trips and their past spending.

This app was created with test-driven JavaScript, SCSS, and HTML. 

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
- Array iterator methods
- Test Driven Development: design an application by writing tests before writing functionality
- Accessibility - follow ARIA guidelines to provide seamless tabbing for screen readers and choose a color scheme that accommodates for colorblindness
- Workflow using a project board, branches, concise commits, linking PR's to issues, automated PR template, and documented code review
- Planning project based on spec using a wireframe
- Refactoring "smelly" code

## Technologies Used
- Vanilla JS
- HTML
- CSS/SASS
- Webpack
- Chai & Mocha for testing
- NPM
- Fetch API to GET/POST data to a server
- GitHub/Git
- Eslint

## Wins & Challenges

### Organizing data into appropriate models: 
Working on this project helped clear up the difference between a real-life app user and a "user" as a data model.

I spent almost 2 of the 6 days given for the project planning out the architecture for my app using a project board and visual organization. I believe this helped me transition to coding the data model and functionality more efficiently.

If there was more time, I would have liked to reorganize some methods from `TravelerRepo` into a `TripRepo` to reduce coupling.

### Prioritizing tasks:
I laid good groundwork for how to spend my time on the project by focusing on project organization in the beginning. As I'd write code, new features and/or bugs would pop up - having priority tags helped me to continue to keep tasks organized throughout the project.

### Using the same API as other students to `POST` new trip data:
 While working on separate projects, people made different decisions on how to create a unique trip id; for example, some followed the API's id's in sequential order, while others used the Date object, and I created a random 4-digit number. I learned from a mentor that normally this ID would be classified as a primary key and would **not** rely on a developer to hard-code into a POST request.

 ### Accessible & Responsive UI:
 I feel this was my most successful attempt so far at designing an accessible and responsive UI - the Lighthouse score for the traveler dashboard is 100 and the page largely works across different browsers, screen sizes, and devices.

## Additional Links
- [Project Board](https://github.com/hannakim91/travel-tracker)
- [Visual Organization Spreadsheet](https://docs.google.com/spreadsheets/d/1MZ8Qy4vjl9vj-Ih6goFJY9nMPFK7qgZC0VGfVzbGEjk/edit#gid=0)
- [Wireframe](https://projects.invisionapp.com/freehand/document/SlQAYHbTR)
- [Project Specs](https://frontend.turing.io/projects/travel-tracker.html)
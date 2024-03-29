# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_At it's core, **Project Shopping Planner** is simply there to help you keep track of all those things you want to do. No matter the stage you are at in planning, you need a way to make sure you have covered all the bases. And when you have multiple projects happening at once, it is almost impossible to not mess up on something. Which is why **Project Shopping Planner** will be critical to your plans._

<br>

## MVP

### Goals

- Working, responsive app built using React, Ruby on Rails, Postgres, 
- API with full CRUD functionality
- Styled with CSS and Flexbox or Grid
- Deployed online
- Full front-end and back-end interlinking
- Working associations between tables
- Form for adding projects or items to their respective databases

<br>

### Libraries and Dependencies

|    Library     | Description                                                  |
| :------------: | :----------------------------------------------------------- |
|     React      | React is a declarative, efficient, and flexible JavaScript library for building user interfaces. |
|  React Router  | React Router is a standard library for navigating between components. |
| Axios | Axios is a promise based HTTP client for the browser and Node.js. |
|      Ruby      | Ruby is an open source, interpreted, object-oriented programming language. |
| Ruby on Rails  | Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. |
| PostgreSQL | PostgreSQL is an open source relational database management system. |

<br>

### Client (Front End)

#### Wireframes

![Home](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/web1.png)

- Desktop Landing

![Projects](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/web3.png)

![Projects](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/web4.png)

- All Pages

![Mobile1](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/mobile1.png)

- Mobile Page

![Tablet](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/tablet1.png)

- Tablet Page

#### Component Tree

![schema2](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/schema1.png)

#### Component Architecture

``` structure
src
|__ App.js
|__ App.css
|__ index.js
|__ index.css
|__ assets/
    |__ fonts
    |__ images
|__ components/
 		|__ About
        |__ About.jsx
        |__ About.css
    |__ Footer
        |__ Footer.jsx
        |__ Footer.css
    |__ Item
        |__ Item.jsx
        |__ Item.css
    |__ ItemCard
        |__ ItemCard.jsx
        |__ ItemCard.css
    |__ Layout
        |__ Layout.jsx
        |__ Layout.css
    |__ Main
        |__ Main.jsx
        |__ Main.css
    |__ Project
        |__ Project.jsx
        |__ Project.css
    |__ ProjectCard
        |__ ProjectCard.jsx
        |__ ProjectCard.css
    |__ Login
        |__ Login.jsx
        |__ Login.css
    |__ Register
        |__ Register.jsx
        |__ Register.css
|__ screens/
    |__ Home.jsx
	      |__ Home.jsx
        |__ Home.css
    |__ ItemCreate
        |__ ItemCreate.jsx
        |__ ItemCreate.css
		|__ ItemDetail
        |__ ItemDetail.jsx
        |__ ItemDetail.css
    |__ ItemEdit
        |__ ItemEdit.jsx
        |__ ItemEdit.css
 	  |__ Items
        |__ Items.jsx
        |__ Items.css
    |__ ProjectCreate
        |__ ProjectCreate.jsx
        |__ ProjectCreate.css
    |__ ProjectDetail
        |__ ProjectDetail.jsx
        |__ ProjectDetail.css
    |__ ProjectEdit
        |__ ProjectEdit.jsx
        |__ ProjectEdit.css
		|__ Projects
        |__ Projects.jsx
        |__ Projects.css
    |__ Login
        |__ Login.jsx
        |__ Login.css
    |__ Register
        |__ Register.jsx
        |__ Register.css
|__ services/
    |__ api-config.js
    |__ auth.js
    |__ items.js
    |__ projects.js
    |__ users.js
```

#### Time Estimates

| Task                        | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Ruby                  |    H     |     3 hrs      | 2 hours |             |
| Create Models |    H     |     4 hrs     | 4 hours |             |
| Migration | H | 2 hrs | 2.5 hours | |
| Ruby Testing | H | 2 hrs | 2 hours | |
| Setup SQL | H | 1 hrs | ||
| SQL data & seed | H | 3 hrs | 1 hour ||
| Ruby Routes | H | 2 hrs | 1 hour ||
| Setup React | H | 3 hrs | 3.5 hours ||
| React Routes | H | 2 hrs | ||
| Create Components | H | 3 hrs | 2 hours ||
| Create Screens | H | 3 hrs | 2 hours ||
| React Testing | H | 2 hrs |  ||
| CSS | H | 6 hrs | ||
| Testing | H | 4 hrs | ||
| Clean-up | M | 2 hrs | ||
| TOTAL                       |          |     42 hrs     |          |          |

<br>

### Server (Back End)

#### ERD Model

![schema3](https://github.com/texasrachel/Personal_Projects-/blob/main/public/images/Project%20Project.jpg)

***

## Post-MVP

> - A carousel on the main page of project pictures. 
> - Categories on the main projects and items pages.

***

## Code Showcase

> 

## Code Issues & Resolutions

> 

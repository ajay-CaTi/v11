# git

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ajay-CaTi/v11.git
git push -u origin main

# Why use React

React just give some helper methods to develop faster application.

# Execute the app

Use npx

# What parcel do?

Dev Build
Local Server
HMR-Hote Module Replacement
How Parcel doing HMR ::- File Watching Algorithm written in C++
Caching Faster Build [ Make caching to build next development fast ]
Image Optimization
Minification
Bundling
Compress
Consistent Hashing
Code splitting
Differencial Bundeling - support older browsers
Diagnostics
Error Handling
HTTPs
Tree Shaking Algo -remove unsual code.

# JSX?

JSX is html like syntax not writing HTML in JS
JSX is transpile by Parcel basically Babel

# React Component

function component is normal js function thta returns some jsx

# Babel understand JSX?

Babel understand JSX

# Component Composition

using compoennt to another

# Both works same

-<E1 />
-{E1()}

# JSX sanitaze the data brfore execution

# Process of Building an App?

- Planning
- Requirement
- Design
- S/W Development
- Testing
- Deployment
- Operation & Mentainance

Header

- Logo
- Nav Items

Body

- Search bar
- restaurant Container
- restaurant Card
  Foter
- Content

# config driven UI

# fetch url

https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# what if key is not present?

- React will clean the container and rerender all components
- if key is present reat will only render that card only
- Index is not recommended

# React do?

development experience easier write less code and do more, make code experience fast.

React is fast in DOM menupulation
Fater and efficient dom Menupulation
Virtual dom
cliff algo
reconcillation

# React hooks

Normal JS function, utility functions
state variable, update statefunction two arguementin useState();

when state variable chages react rerender component

React keep sink UI layer with data layer

React makes DOM operation fast

React Reconcillation algo also called React fiber

Virtual dom is actual represenation of actual dom

Diff Algo:- find diff between vDOM and aDOM

React Fiber is an ongoing reimplementation of React's core algorithm.
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Efficient dom menupulation

As soon as state variable schanges react start reconcillation algo, find diff between real and actual dom and update uI

Monolith Arcticture:-
API code
UI code
Auth code
DB connetivity code
SMS sending same code

Even make a single change need to build whole project and deploy it

JSP(Java Servlet PAges)?

Microservice

Backend service
UI
Auth
DB
SMS
EMail notification
all these service to form a whole back

for each thing we have different project( Seperation of principle / Single Responsibilty Principle )

Microservice have different peoject with diff repositories connected together with api

Useeffect() function will call after body component render

When ever change in state variable react call the function component again to rerender whole component

When ever the state variable updates react trigger the reconcillation cycle (rerender whole component)

React fiber is new reconcillatin process i.e efficiently menupulating the DOM. find the difference bwt RDOM VDOM and updated teh updated value inside DOM

Why, Why, When?

Alwayas remenber this

# Why hooks is created?

Use to crate local state variable inside function component, at the top.

# ERROR

error: failed to push some refs to
I am not following below insted make new branch one
git pull origin main
git push -u origin main

# class

When ever an instance of class created or invoked first constructer then render is called

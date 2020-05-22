# Project made by *Karol Guzikowski* for recruitment purposes.

This project was bootstrapped with Create React App.

## Used technologies:
React, ReactDOM, React Router, TypeScript, styled-components and Redux among others.

Tests are written using Jest and react test renderer.

App uses Redux Persist for persisting last search query and results, as well as user data.

Redux Thunk is used for Redux async behaviour.

## Little bit about testing
Redux actions and reducers have not been tested with jest because they are typed with TypeScript which defines how they behave, therefore testing is not needed for them. React components have snapshot tests(written with jest and react test renderer).

Fetching repos functionality has not been tested because GitHub tests their API and our simple fetch works as long as GitHub's API works. And fetch function doesn't need to be tested because browser creators are responsible for testing it.

Basically there are not many tests written because this app is rather small and very simple plus when using TypeScript we automatically have another great layer of protection.

## App details
Users only use **MainPage** component which is responisble for rendering the entire app, because app is very simple. It's one page app.

There is also other page. It uses **CallbackPage** component and it is used to interact with GitHub's callback when user is logging in. GitHub sends us a code which is needed to later get user's access token. So this component deals with getting that code and disatching async log in action. Then it redirects us to main page where we can see a spinner while user is logging in or regular main page.

## What about Redux?
App has three reducers:
* repos reducer - reducer used to manage repositories.
* user reducer - reducer used to manage user.
* third reducer - used for cookies

## About given requirements
* Pagination is implemented locally.
* User can change how many items per page are visible.
* User can sort table
* When user is logged in, their repos are highlighted.
* Results are being cached in local storage.
* Debounce is used for fetching repos when user is typyng.
* Last search query and results are persisted.
* User can log in with GitHub.

## Final thoughts
App might not be the most beautifull in the world but I think it looks pretty good. It's responsive and it has nice color theme.

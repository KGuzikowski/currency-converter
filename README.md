# Project made by *Karol Guzikowski* for recruitment purposes.

live version of app:
https://lets-convert.herokuapp.com/

This project was bootstrapped with Create React App.

## Used technologies:
React, ReactDOM, React Router, TypeScript, Redux and MaterialUI among others.

Tests are written using Jest and react test renderer.

App uses Redux Persist for persisting state.

Persisted data:
 * exchange rates
 * historical data
 * user search inut
 * some options user uses

Redux Thunk is used for Redux async behaviour.

## Little bit about testing
Redux actions and reducers have not been tested with jest because they are typed with TypeScript which defines how they behave, therefore testing is not needed for them.

React components have snapshot tests(written with jest and react test renderer) - well, some of them. I didn;t have enough time to write more tests but I show how it's done. I recommend to go and have look at my other repos because I have more tests written there.

Here I show how to test react components, how to mock stores and hot to test normal js functions.

Fetching repos functionality has not been tested because API creators test their API and our simple fetch works as long as API works. And fetch function doesn't need to be tested because browser creators are responsible for testing it.

Basically there are not many tests written because this app is rather small and very simple plus when using TypeScript we automatically have another great layer of protection.

## App details
Users only use **MainPage** component which is responisble for rendering the entire app, because app is very simple. It's one page app.

## What about Redux?
App has two reducers:
* currencies reducer - reducer used to manage currencies
* second reducer - used for cookies

## About the app
I believe that this app speaks for itself. It's clear which component does what and the interface tells user what to do.

I recommend going through code and reading comments.

## Final thoughts
App might not be the most beautifull in the world but I think it looks pretty good. It's responsive and it has nice color theme.

It's not prefect because I made that in less than a day.

## UPDATE:
I noticed today that when you choose euro as a base currency, no data nad no error is displayed. The problem is simple, so is the solution. Fix could take 10 minutes but unfortunately I'm out of time.

So let me just tell you what the issue is. The error is with API because API uses euro as a base currency by default. So when I change base currency from uro to euro there is some unexpected behaviour.

How to fix? I just need to add a simple if statement when making url for api call.

# Sleep project front end
## Backend Information:

Backend Repo:https://github.com/caleybennett/sleep-project-backend
Backend Deployed site: https://github.com/caleybennett/sleep-project-backend

## Technologies Used

Javascript, jQuery, HTML, CSS

## Planning

After creating the backend for this project I focused first on getting the User
authentication to work. After making sure a user can sign in, sign up, sign out,
and change password, I moved onto making my sleep tracker work.

First I made the get sleeps function work, then moving onto creating a sleep,
updating a sleep, and deleting a sleep. I then wanted to be able to get sleeps
that matched a date. In order to do this, I first started by making an api request
to get all sleeps. I then used an array iteration method to filter through each
date from the api request and match it to the date that was given by the user and
return the sleeps that matched that date.

While continuing to work on this project, I want to create an average sleep
function that would take in two dates and return the average amount of hours
slept between these dates. I tried to do this, but had trouble finding a way to
use two dates on one form and generate all the dates in between these dates.

## Unsolved problems:
Can enter empty data and have it logged as a "sleep"

## Wireframes
<img src="https://imgur.com/WKfnNK6" alt="wireframes">
<img src="https://imgur.com/IHBFpW2" alt="wireframes">
<img src="https://imgur.com/EH3b1Aw" alt="wireframes">
<img src="https://imgur.com/UQpJRFP" alt="wireframes">
<img src="https://imgur.com/2drNeyy" alt="wireframes">

## User Stories
As a not signed in user, I want to be able to sign up.
As a not signed in user, I want to be able to sign in.
As a not signed in user, I don't want to be able to see any other users "sleeps".
As a signed-in user, I want to be able to create a new "sleep".
As a signed-in user, I want to be able to read my previous "sleeps".
As a signed-in user, I want to be able to read a previous "sleep" by searching by date.
As a signed-in user, I want to be able to update my "sleep" by entering a date.
As a signed-in user, I want to be able to delete a "sleep" by entering the date it was recorded.
As a signed-in user, I want to be able to change my password.
As a signed-in user, I want to be able to log out.
As a new user, I do not want to see any other users data.

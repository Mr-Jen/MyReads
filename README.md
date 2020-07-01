# MyReads Project

This is my final 'MyReads' submission for the React.js Udacity course. 
On the home page, the app allows to categorize book into different shelves. If a select on top of each book, the user can decide, 
whether he is currently reading the book, wants to read it in the future, or has already read it.

If neither of these cases are true, then the user can simply remove the book from his book list.

To add a new book to one of the shelves, the user can simply click the button at the app bar at the top right of the screen.
He will be send to a new page with the url '/search'. Here, he can search for categories like Fitness or Comics via the input field at the top.
Depending on the query, either a list of fitting books is presented or nothing, when the query wasn't valid.

When the user found an interesting book, he can select it the same way as he did before on the home screen to add it to one of the existing shelves.

With the arrow at the top left of the screen, the user can simply go back to the home screen to see his collection of books.

## Info

The browser will show some warnings because I used Material UI components that threw some warnings as help.
Though, none of these warning cause trouble when the application is run.

Also, in on the /search page, instead of showing 'none' when a book isn't placed on a shelf yet, I decided to leave out the option of 'none', since the books aren't placed anywhere.
Instead, the shelf is highlighted when the book exists on there.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`








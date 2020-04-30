# Part 0: How to read this guide
This guide will outline the steps needed to build your own basic web app! The language used here is Javascript and an important technology is React.

### What is Javascript?
Javascript is one of the world's most popular programming languages, due in large part to the fact that it's the only programming language that runs on the web! It's a high-level language that is relatively easy to use and the learning curve for beginner programmers is relatively low.

### What is React?
React is a popular javscript library whose only goal is to make working with the "view" layer of the web (what you see) as easy and ergonomic as possible. Given its relative maturity and popularity, React boasts a vast ecosystem of libraries tutorials, and more.

## Some helpful tips
Code will be denoted in `code blocks`. You *should* be able to copy-paste these commands and run them on your system. Additional information will be after the dash symbol (-). And remember, google is a programmer's best friend.

# Part 1: Getting up and running
1. Install [nodejs](https://nodejs.org/en/download/) - windows installer (64-bit .msi) or macOS installer (.pkg)
2. Perform the following steps in a node shell:
  a. Move to a directory you want to store the project in ex. `cd Documents` - cd means change directory
  b. Install npx (`npm i npx`) - a utility for executing arbitrary scripts
  c. Run `npx create-react-app react-tutorial`
  d. Move into the directory (`cd react-tutorial`) and run the app (`npm start`) and inspect what's running in the browser (take a look at localhost:3000)
3. Install a code editor like [sublime text](https://www.sublimetext.com/)
4. Open your project folder, the `src` folder and then a file named `App.js`

# Part 2: Cracking into the React code
Before diving straight into this file, let's go over a few helpful basic concepts.

## Here are some explanations that may help you understand this code better:

##### Q1: What is a function?
##### A: A function is a piece of code that is designed to do a particular task. It can take inputs and produce (or return) outputs.
A function is defined in two ways, the first of which we see in the `App.js` file:

1. The `function` keyword followed by the name of the function, followed by parentheses containing comma separated parameters.

```javascript
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

2. The second way of defining a function is using "fat arrow" syntax. This looks like parentheses containing comma separated parameters, followed by a "fat arrow" and then the function body. An interesting point here is that you then want to *assign* this function to something (typically a variable)

```javascript
const myFunction = (parameter1, parameter2, parameter3) => {
  // code to be executed
}
```

Functions frequently end in a `return` statement. This keyword "returns" a value directly after it as the result of executing its containing function.

##### Q2: What is a tag?
##### A: A tag is shorthand syntax for function calls that render elements.

These tags we see here are simple and common such as:
* `div` (division) - for dividing elements on a page
* `p` (paragraph) - to contain blocks of text
* `img` (image) - to show an image on the screen
* `a` (anchor) - to make a hyperlink

Tags must either have a matching opening and closing tag ex. `<p>Some paragraph content</p>` or be self-closing: `<div />`

We can define our own tags that behave in exactly the same way to the built-in ones, only we call them components.

##### Q3: What is a prop!?
##### A: A prop is a special kind of parameter that you pass to a React tag/component.

It takes the form: `<div tag1Name={tag1Content} tag2Name={tag2Content} />`

Examples of common props include:
* `className` - used to apply a class to elements for styling
* `onChange` - accepts a function that it calls when the component changes

Read the following bit of code for a primer in React.
Lines beginning with `//` are comments

```javascript
// These first three lines import other things into this file.
import React from 'react'; // React is the library we are using to build the app.
import logo from './logo.svg'; // This is static image that we can embed inside a `src` tag
import './App.css'; // This is a stylesheet, more on that later

// This is one way to declare a function in JavaScript (see Q1).
function App() {
  return (
    // We put the content we want to show up on the page as tags (see Q2) inside this return statement.
    <div className="App"> // The className prop (see Q3) allow us to target this component with styling.
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          // Here, we embed a `code` tag straight into the line of text.
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          // `a` makes a link that redirects us to reactjs.org (see Q2 & Q3)
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        // These three tags that begin with a slash (/) are necessary to "close" the tags that we opened.
        </a>
      </header>
    </div>
  );
}

// Exporting our function will provide it to other files. We don't have to worry much about this for now.
export default App;
```


## Playing with the code
Make a couple tweaks to this file and see what happens!
* Add a new line of text directly after the "header" opening tag. Type anything you'd like, for example: This is my app! and save the file.
* Change the anchor tag to say "Go to google" and to link to http://google.ca

# Part 3: Learning some styling

If all we gave the browser was the code we just looked at, the internet would be a very dull place. This is because we're missing a stylesheet, a bit of code whose entire purpose for existing is to make plain elements such as `div`, `img`, and `a` tags look visually appealing. While it may seem simple compared to writing JavaScript code, styling manipulates elements in a lot of ways such as placing them on the correct spot on the page, sizing them, and making animations. Let's take a look at all three of these scenarios in action. The basic structure of CSS is pretty simple. Though a bit of an oversimplification, CSS "blocks" typically consist of two parts: a selector and one or more property-value pairs.
Lines beginning with `/*` and ending with `*/` are comments.

```css
/* The following line is a selector. It selects the App "class" */
.App {
 /* In the following property-value pair, "text-align" is the property and "center" is the value */
 text-align: center;
}
```

Inside your project folder, inside the `src` folder, open the file named `App.css`. You should immediately notice the CSS block structure from the previous example: there are 6 blocks in this file. Read through this file to learn about some of the many css selectors and properties.

```css
.App {
  text-align: center;
}

/* Much like the previous block, this selector will select a class. */
/* Typically class names are separated by a dash (-) */
.App-logo {
  /* Height can be set to a fixed size (ex. 10px) or a relative one like vmin */
  /* This takes a percentage of the smaller size of the width and height of the whole page */
  height: 40vmin;
  pointer-events: none;
}

/* Don't worry about media queries (the following line) for now */
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    /* The animation property gets an animation up and running! */
    /* Here it references "App-logo-spin", an animation defined later on */
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  /* min-height is a common property-value pair for ensuring that an element */
  /* (usually background) fills the entire screen */
  min-height: 100vh;
  /* The following 4 blocks pertain to flex boxes, an incredibly useful tool */
  /* for laying out elements next to each other on a page */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* This next line makes the font size semi-dynamic - to a minimum of 10px. */
  /* You can see the effect if shrink the page horizontally */
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Playing with the code
Try to make changes to this file to produce the following effect
* Change the background color (use the name of a color or a hex code)
* Spin the logo in the opposite direction

### For bonus points
* Try to make the logo flip over itself in all directions (hint: [3D transforms](https://www.w3schools.com/css/css3_3dtransforms.asp))

# Part 4: Adding some user interaction

Right now our app is kind of boring. We can't do anything other than watch the React logo spin and click on the link. Let's make it marginally less boring!

We are going to make a small simulation of a "like/dislike" counter. This feature should do the following three things:
* Implement buttons that users can click to "Upvote" and "Downvote" the website
* Counter values to show the number of likes and dislikes (that dynamically update with the buttons)
* Extra Challenge: Show the percentage of likes to dislikes AND Show this value as red if below 50% and green if above 50%

## Step 1: Adding state

Inside `App.js`, Underneath the app header opening tag, add some new text to represent the number of likes and dislikes. You may wonder how we could possibly show like and dislike counts that update dynamically. The answer is that with what we've learned so far, we can't. Enter state!

In the general sense, state is a way of recording the condition of the app at a given moment of time. We could record (and then subsequently choose to update) a number of things in state including whether a button has been pressed, if a user is logged in, or the value of a counter. To make use of state in react, let's first import the `useState` hook. Modify the line that contains the react import to look like:

```
import React, { useState } from "react";
```

Then within our App component, let's make a new state object with some initial values; this will be the starting state for our app. Within the app function body, but outside of the return statement, add the following line:

```
const [userFeedback, setUserFeedback] = useState({ likes: 0, dislikes: 0 });
```

There's a lot of new stuff going on here so let's take a moment to break it down.

`const` is a keyword in the javascript language that is short for constant. When we say `const [userFeedback, setUserFeedback] = ...`, we are setting two const values, the first of which is going to be our state (`{ likes: 0, dislikes: 0 }`) and the second of which is going to be a function that updates our state object. How do we know what these values are going to be? Because the [documentation](https://reactjs.org/docs/hooks-state.html) for useState tells us!

On the right side of the equals sign, we call the `useState` function with our initial state: (`{ likes: 0, dislikes: 0 }`). In this case, we've chosen to make our state an object, meaning it has `key: value` pairs, where the values can be accessed by their corresponding keys like so:

```
let likes = userFeedback.likes;
```

Now that we have some state to play with, we can show this to our users. Within the text that you wrote to represent the number of likes and dislikes (go back to the beginning of the section if you need a refresher), add the like and dislike counts in the appropriate spots.
* Hint 1: You will need to write your javascript code within curly brackets (`{}`) to denote that this isn't just plain text.
* Hint 2: For each value (like, dislike), you will need to use the appropriate key to access the part of the `userFeedback` object you want.

## Step 2: Updating state

Our next step in implementing our "like/dislike" counter feature is to add buttons for each event. Within the body of the return statement, add two new `button` tags with the text "Upvote" and "Downvote" like so:

```
<button>Upvote</button>
```

You should see two buttons show up on the webpage that don't do anything yet. Let's wire them up!

We are going to make a new function underneath where we added our state called `handleUpvote`. This function will be responsible for updating the `like` count to the existing number of likes plus one. Fortunately we have a handy `setUserFeedback` function to help us do just this! Our `handleUpvote` function can then look something like this:

```
const handleUpvote = () => {
 setUserFeedback({ likes: userFeedback.likes + 1 });
}
```

Now we have a function that we can call every time the "Upload" button is clicked. Let's hook it up and see it in action:

```
<button onClick={handleUpvote}>Upvote</button>
```

You should now see the number of likes increase every time you click the button (up to infinity - ok well not quite, but it can go pretty high). There's just one little problem: take a minute to see if you can spot it.

Hopefully you noticed that the dislike count disappeared after the first click of the "Upvote" button. The problem here is that the object we set our state to is incomplete, it no longer has a dislike entry! We can fix this using a nifty trick in JavaScript: the object spread operator. What this will do is take the "rest" of the object and merge it in with our new updated piece of state. Our new `handleUpvote` function thus looks like:

```
const handleUpvote = () => {
 setUserFeedback({ ...userFeedback, likes: userFeedback.likes + 1 });
}
```

You might be wondering how this works. Recall that `userFeedback` contains our old state object. Using the object spread operator, we take each of its fields to be in our new object, except the `likes` key, which we assign a new value. It's as simple as that.

To complete this section, implement the downvote handler function.

## Step 3: Add some styling

These buttons look pretty ugly on their own. See if you can figure out how to arrange them in a way you'd like and make them look pretty using CSS. Remember, google is your friend :)

## Step 4: Go for the extra challenge feature if you're up for it

(Look back at the instructions for details about that)

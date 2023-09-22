<div align="center">
<a name="readme-top" height="0"></a>
  <a href="https://github.com/hyradar/https://simple-video-app-65c11037cb08.herokuapp.com/">
    <img src="https://github.com/hyradar/CozyVideoCorner/blob/main/ReadMeImages/tanmagpie.png" alt="Study Decks Logo" width="40%" height="40%">
  </a>

  <p align="center">
    Create and study flashcard decks on StudyDecks! We store your decks locally on your machine for easy access without the hassle of logging in.
    <br />
    <a href="https://github.com/hyradar/Cozy-Video-Corner"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://simple-video-app-65c11037cb08.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/hyradar/Cozy-Video-Corner/issues">Report Bug</a>
    ·
    <a href="https://github.com/hyradar/Cozy-Video-Corner/issues">Request Feature</a>
  </p>
</div>

<!-- Table of Contents -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contact">Contact</a></li>
      </ul>
    </li>
  </ol>
</details>

## About this Project

I've always found recommended videos on YouTube really distracting. So I've decided to create a React App which allows the user to watch youtube videos in a cozy environment away from the YouTube site itself so that they can watch content without being tempted by the distracting recommended videos.

**Creation of a Deck, Studying it, and Resetting user data:**
  <img src="https://github.com/hyradar/CozyVideoCorner/blob/main/ReadMeImages/searchingvids.gif" alt="Gif of Study Decks Live Demo" width="90vw"/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With:

**Tech:** HTML, SCSS, JavaScript, Webpack
<br>
**Design:** MVC, Observer, Single Page Application

**HTML:**

HTML is dynamically rendered with Javascript and focuses on using semantic elements to comply with Web Content Accessibility Guidelines.

**SCSS:** 

Responsive design without media queries. Mixins and modules were used to follow the DRY principle and reduce file sizes. I used Andy Bell's CSS [Reset](https://andy-bell.co.uk/a-modern-css-reset/) to reduce browser inconsistencies.

**Javascript:** 

I used the WebStorage API to store user decks locally on their device. For form validation I  implemented the Constraint Validation API to display custom error messages for each form input. Upon successful submission of the form, I convert the input values into a data object using the FormData API and send it to the model to create a Deck object. Additionally, I used a function from the date-fns library to ensure that the chosen due-date for the deck is in the future.

**Resetting user data in local storage:**
  <img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/resetingdata.gif" alt="Gif showing demo of resetting local storage" width="90vw"/>

**Webpack**

I utilized the Webpack Dev Server for better efficiency when building my project. I also configured the loaders to be able to bundle all assets into a single .js file.

**Design Pattern**

In this Single Page Application, I used the Model-View-Controller design pattern as the foundation for the project, and implemented the Observer pattern to update other parts of the page when there is new data to display.

**The View updating the screen via the Observer:**
  <img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/addingdeck.gif" alt="Demo of the view updating the screen via the observer pattern" width="90vw"/>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

### Responsiveness

This site uses **zero** media queries. Instead, I used other SCSS techniques such as rem units and functions like clamp() and min() to give the site natural responsiveness.

**Responsiveness without media queries:**
<img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/studydecksreponsivedesign.gif" alt="Gif of Study Decks Live Demo" width="90vw"/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Lessons Learned:

This project I implemented techniques to write cleaner code I learned from "Clean Code" by Robert Martin. I also implemented the Observer Pattern for the first time within a Model-View-Controller framework. Finally, I utilized WebStorage, Constraint Validation, and Form Data APIs in addition to the data-fns external library to add more complexity to the application.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact
Hunter Yeago - hyeago@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
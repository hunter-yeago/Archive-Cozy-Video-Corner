<div align="center">
<a name="readme-top" height="0"></a>
  <a href="https://github.com/hyradar/https://simple-video-app-65c11037cb08.herokuapp.com/">
    <img src="https://github.com/hyradar/Cozy-Video-Corner/blob/main/ReadMeImages/tanmagpie.png" alt="Cozy Video Corner Logo" width="40%" height="40%">
  </a>

  <p align="center">
    Watch YouTube videos in a cozy, distraction free environment!
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
  <img src="https://github.com/hyradar/Cozy-Video-Corner/blob/main/ReadMeImages/searchingvids.gif" alt="Gif of Study Decks Live Demo" width="90vw"/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With:

**Tech:** HTML, SCSS, JavaScript, Webpack
<br>
**Design:** MVC, Observer, Single Page Application

**State Management:**
Redux is used to share state between components that are far from each other in the component tree. Otherwise, the UseState hook is used.

**Responsiveness:** 

Responsive design with only one media breakpoint. Ternary operator is used in App.JS file to re-render the page based on window size. Mixins and modules were used to follow the DRY principle and reduce file sizes. I used Andy Bell's CSS [Reset](https://andy-bell.co.uk/a-modern-css-reset/) to reduce browser inconsistencies. 

**Proxy Server:** 

Stuff about Proxy Server

**Resetting user data in local storage:**
  <img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/resetingdata.gif" alt="Gif showing demo of resetting local storage" width="90vw"/>

**Webpack**

I utilized the Webpack Dev Server for better efficiency when building my project. I also configured the loaders to be able to bundle all assets into a single .js file.

**Design Pattern**

In this Single Page Application, I used the Model-View-Controller design pattern as the foundation for the project, and implemented the Observer pattern to update other parts of the page when there is new data to display.

**The View updating the screen via the Observer:**

<div style="display: flex; justify-content: center; align-items: center; height: 300px; flex-direction: column;" width=100%>
    <img src="https://github.com/hyradar/Cozy-Video-Corner/blob/main/ReadMeImages/Mobile.png" alt="Gif showing demo of resetting local storage" width="40%"/>
    <img src="https://github.com/hyradar/Cozy-Video-Corner/blob/main/ReadMeImages/Desktop.png" alt="Gif showing demo of resetting local storage" width="90%"/>
</div>
  
  <img src="">
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
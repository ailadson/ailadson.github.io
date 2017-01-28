'use strict';

let projects = [
  {
    name : 'About Me',
    thumbURL : '__black',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : '',
    blurb : `
<div class="blurb">
  <p>My name is Anthony. I really enjoy making art, writing computer programs, designing systems, teaching, and musing about the nature of consciousness.</p>
  <p>Currently, my day job is Product Engineer for <a target="_blank" href"http://appacademy.io">App Academy</a>. I have two main responsibilities: give lectures on a wide variety of topics (algorithms, networks, languages, tools, etc), and lead the development App Academy products outside of the main course.</p>
  <p>I went to art school (<a target="_blank" href="http://saic.edu">SAIC</a>) initially to become a working artist. While in school, I found a book called <a href="https://www.cs.cmu.edu/~dst/LispBook/book.pdf" target="_blank">A Gentle Introduction To Symbolic Computation</a> and fell in love with programming and, more fundamentally, computer science.</p>
  <p>I consider myself an artist. Computer science and programming exercise my artistic instinct for creative problem solving in ways that no other medium have ever come close.</p>
</div>
    `,
  },{
    name : 'Notes',
    thumbURL : 'notes_thumb.png',
    imgURL : '',
    githubLink : 'https://github.com/ailadson/notes',
    liveLink : '',
    thumbBlurb : 'All of my tech notes! Check if out to see what I\'m thinking about.',
    blurb : `__github`,
  },
  {
    name : 'Bootcamp Prep',
    thumbURL : 'bootcamp_thumb.png',
    imgURL : 'bootcamp.png',
    githubLink : '',
    liveLink : 'https://www.appacademy.io/bootcamp-prep',
    thumbBlurb : 'React/Redux, Ruby/Rails, PostgreSQL<br/>Heroku, Product Management',
    blurb : `
<div class="blurb">
  <p>This was my first big project at App Academy in my role as Product Engineer.
  I was tasked with developing a Beginner/Intermediate JavaScript course. Before
  coming to App Academy, I had taught programming to students as young 8 years
  old all the way up to college students. At the risk of cocky , I can with
  confidence that I'm really good at teaching computer science topics, which made
  this the perfect project for me.</p>
  <p>After developing the curriculum and teaching the first several cohorts, we
  decided to expand the course to several cities and make an online version. I
  coordinated the hiring and training of new instructors. I also produced the
  200+ videos needed for the online course. </p>
  <p>But I did more than curriculum building and management, I also architected
  and engineered several of the internal tools we used for the course. I designed
  and implemented a progress tracker that allowed us to gather feedback and data
  from the students. Using this data, we were able to make more informed decisions,
  resulting in Net Promoter Score (NPS) increases that continue to this day
  (about 20% so far). Progress Tracker's stack consists of React/Redux, Ruby on
  Rails, PostgreSQL. It uses Heroku as the production environment.</p>
  <p>App Academy's online presence is distributed across a bunch different
  services - Progress Tracker being one of them. To properly enroll students, I
  had to write secure API endpoints that allowed Progress Tracker to communicate
  with the other sites App Academy manages.</p>
  <p>The course is very successful. Our students have gone on to the top bootcamps
  (App Academy + Hack Reactor included). It grossed over 1 million dollars in its
  less than a year lifespan, and is still going strong!</p>
</div>
    `
  },
  {
    name : '',//'Introduction to VR',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Unity, C#, Google Cardboard SDK',
    blurb : ``
  },
  {
    name : "The Whole World is Watching",
    thumbURL : "www_thumb.png",
    imgURL : "www.png",
    githubLink : "https://github.com/ailadson/the_whole_world_is_watching/",
    liveLink : "http://famous-crossing-850.appspot.com/",
    thumbBlurb : "Python, webapp2, NoSQL, ffmpeg<br/>Google App Engine, Grunt",
    blurb : `
<div class="blurb">
  <p>The Whole World is Watching is a web application that allows citizens to
  upload self-made news videos directly from their camera phone. Using the
  geolocation API, these videos are positioned on a Google Map for other users
  to see.</p>
  <p>Built on top of Google App Engine Python runtime, the Whole World is Watching
  uses a NoSQL datastore to store the semi-structured metadata of each video.
  I decided to go with a NoSQL database not only because of its simplicity and
  flexibility; the data simply wasn't relational in nature, and I had never worked
  with a NoSQL database and wanted to try it out. :)</p>
  <p>Each video that a user uploads needs to be converted to a variety of file
  formats to allow complete cross-browser compatability. To achieve this, I utilized
  Google Compute Engine to run a cron-like background task: ffmpeg transcodes
  each new video to mp4, webm, and ogv formats and save each of these videos to
  Google's Cloud Storage. If I had to change one thing, I'd have ffmpeg also
  transcode high-resolution videos to a lower resolution, for mobile devices.</p>
  <p>There is clearly a political element to this application, and it would be
  ingenuine of me to ignore that, despite it's potential polarizing effect. As
  an African-American, the issue of police brutality on African-American
  communities is an issue that has deeply affected me, both personally and in
  the collective black experience. The site isn't currently active due to (1) the
  potential legal issues with filming a person's arrest without their explicit
  consent and (2) because, after creating this site, I didn't have the time to
  maintain it because I was accepted into App Academy. Even still, I find that seeing these
  videos located in space makes them less abstract, more real, and a very powerful
  visual experience (art school!).</p>
</div>
    `
  },
  {
    name : '',//'Zapier Questions',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Zapier Interview Questions',
    blurb : ``
  },
  {
    name : 'Levenshtein Visualization',
    thumbURL : 'leven_thumb.png',
    imgURL : 'leven.png',
    githubLink : 'https://github.com/ailadson/levenshtein_viz',
    liveLink : 'http://leven-viz.herokuapp.com/',
    thumbBlurb : 'HTML5, React, CSS<br/>Levenshtein Distance Algorithm',
    blurb : `
<div class="blurb">
  <p>This project visualizes the Levenshtein Distance algorithm. This famous
  algorithm is the standard to determining the 'cost' of transforming one string
  into another string.</p>
  <p>By default, matching two characters has a cost of 0 (it takes no effort to
  convert 'a' to 'a'), but switching, inserting, or deleting characters have a
  cost of 1. Users can configure the algorithm by setting the cost of of these
  operations. Users can also write functions that return the cost given specific
  characters. For example, it may be very costly to switch the letter 'c' to
  the letter 'k', but very easy to switch any other letter to any other letter.</p>
  <p>The visualization uses React for its rendering library, ES6 syntax, and
  webpack/babel for transcompolation</p>
</div>
    `
  },
  {
    name : '',//'LRU Cache',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Hash Map, Linked List',
    blurb : ``
  },
  {
    name : 'Tic-Tac-Toe AI',
    thumbURL : 'ttt_ai_thumb.png',
    imgURL : 'ttt_ai.png',
    githubLink : 'https://github.com/ailadson/TicTacToeAI',
    liveLink : '',
    thumbBlurb : 'An unbeatable tic-tac-toe AI',
    blurb : `
<div class="blurb">
  <p>This is an unbeatable Tic-Tac-Toe AI. How does it work? Glad you asked.</p>
  <p>It works very similar to how an expert Tic-Tac-Toe player would play. From the board's current state, it 'imagines' what future board states would look like if a given move is made. It simply avoids any move that would cause a loss.</p>
  <p>Now what do I mean by the AI imagining a board state? Each state can be thought of as a node. From this node, we can create news 'board-state' nodes by placing the next players piece at each position. Repeat this process until the board is complete. In this fashion, we know which board states lead to a loss, tie, or win.</p>
</div>
    `
  },
  {
    name : '',//'Linear Systems',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Library to solve systems of linear equations',
    blurb : ``
  },
  {
    name : '',//'Your Charts',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Chartio Clone, d3.js, React/Flux, Ruby/Rails, PostgreSQL',
    blurb : ``
  },
  {
    name : '',//'Piano Keyboard',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'React/Flux, Web Audio Api',
    blurb : ``
  },
  {
    name : '',//'Sitting Tree BnB',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'AirBnb Clone, React/Flux, Ruby/Rails, PostgreSQL',
    blurb : ``
  },
  {
    name : '',//'Chess',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Ruby',
    blurb : ``
  },
  {
    name : '',//'Minesweepers',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'Ruby, React',
    blurb : ``
  },
  {
    name : '',//'Quintessence',
    thumbURL : '',
    imgURL : '',
    githubLink : '',
    liveLink : '',
    thumbBlurb : 'HTML5 Canvas',
    blurb : ``
  }
];

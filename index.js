"use strict";

let activeProjects = projects.filter(p => p.name);
let root = document.getElementById('root');

let mainBackground = document.getElementById('main-background');
let main = document.getElementById('main');
let mainHeader = document.getElementById('main-header');
let mainBlurb = document.getElementById('main-blurb');
let mainLinks = document.getElementById('main-links');
let mainLiveLink = document.getElementById('main-live-link');
let mainGithubLink = document.getElementById('main-github-link');

function createLink(text, link) {
  let a = document.createElement('a');
  a.href = link;
  a.target = "_blank";
  a.innerHTML = text;
  return a;
}

mainBackground.addEventListener('click', () => {
  mainBackground.classList.add('hidden');
});

activeProjects.forEach(p => {
  let container = document.createElement('div');
  let pDiv = document.createElement('div');
  let nameHeader = document.createElement('header');
  let thumbDiv = document.createElement('div');

  container.className = "container";
  pDiv.className = "thumbnail";
  if (p.thumbURL === "__black") {
    pDiv.style.backgroundColor = "black";
  } else {
    pDiv.style.backgroundImage = `url(imgs/${p.thumbURL})`;
  }

  pDiv.addEventListener('mouseenter', () => {
    nameHeader.classList.add('visible');
    thumbDiv.classList.add('visible');
  });

  pDiv.addEventListener('mouseleave', () => {
    nameHeader.classList.remove('visible');
    thumbDiv.classList.remove('visible');
  });

  pDiv.addEventListener('click', () => {
    if (p.blurb === '__github') {
      let tab = window.open(p.githubLink, '_blank');
      tab.focus();
    } else {
      mainBackground.classList.toggle('hidden');
      mainHeader.innerHTML = p.name;
      mainBlurb.innerHTML = p.blurb;

      while (mainLinks.firstChild) {
        mainLinks.removeChild(mainLinks.firstChild);
      }

      mainLinks.innerHTML = "";

      if (p.liveLink) {
        let span = document.createElement('span');
        span.appendChild(createLink("Live", p.liveLink));
        mainLinks.appendChild(span);
      }

      if (p.githubLink) {
        let span = document.createElement('span');
        span.appendChild(createLink("Github", p.githubLink));
        mainLinks.appendChild(span);
      }
    }
  });

  nameHeader.innerHTML = p.name;
  thumbDiv.innerHTML = p.thumbBlurb;

  pDiv.appendChild(nameHeader);
  pDiv.appendChild(thumbDiv);
  container.appendChild(pDiv);
  root.appendChild(container);
});

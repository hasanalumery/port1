// port.js

document.addEventListener('DOMContentLoaded', () => {
  // Color palette for cards
  const cardColors = [
    '#e57373', '#81c784', '#64b5f6', '#ffb74d', '#ba68c8',
    '#4db6ac', '#f06292', '#9575cd', '#7986cb', '#a1887f'
  ];

  // Project data (expanded info)
  const projects = [
    {
      title: 'API Collage',
      info: `Een dynamisch dashboard dat data van de PokéAPI, REST Countries en OpenWeather combineert. 
             Gebruikers kunnen landen vergelijken, Pokémon-gegevens bekijken en het huidige weer zien. 
             Volledig asynchroon opgezet met fetch-requests en error-handling voor robuuste UX.`,
      image: '/img/apicollage.png',
      link: 'https://github.com/hasanalumery/periode3skill/tree/main/pokemon'
    },
    {
      title: 'BEM',
      info: `Een schaalbare CSS-architectuur opgezet volgens de Block-Element-Modifier­methodologie. 
             Bevat herbruikbare componenten voor buttons, kaarten en lay-out. 
             Alle styling is modulair en future-proof gemaakt met duidelijke naamconventies.`,
      image: '/img/bemm.png',
      link: 'https://github.com/hasanalumery/bem'
    },
    {
      title: 'Neonheader',
      info: `Een levendige set headers met neon­kleuren, opgebouwd met CSS keyframes en gradients. 
             Inclusief hover­-effects en responsive typografie voor zowel desktop als mobiel. 
             Perfect voor creatieve landingpages en entertainment­sites.`,
      image: '/img/neonheader.png',
      link: 'https://github.com/hasanalumery/neonheader'
    },
    {
      title: 'Game Trailer',
      info: `Interactieve trailerpagina voor een gameconcept, met custom HTML5‐video‐controls. 
             Speelt animaties af bij scroll­events en heeft subtiele fade-in effecten. 
             Gebouwd met puur JavaScript zonder externe bibliotheken.`,
      image: '/img/pikpikmin.png',
      link: 'https://github.com/hasanalumery/pikpikpik'
    },
    {
      title: 'Webshop',
      info: `Volledig functionele e-commerce prototype met productlijsten, winkelwagen en checkout. 
             Checkout‐flow valideert gebruikersinput en slaat sessie­data op in LocalStorage. 
             Inclusief mock-betaling en orderoverzicht.`,
      image: '/img/xzykhoops.png',
      link: 'https://github.com/hasanalumery/pd4bo'
    },
    {
      title: 'MovieDB Explorer',
      info: `React-app die de TMDB API benut om filmzoekopdrachten en details te tonen. 
             Gebruikers kunnen favorieten toevoegen, sorteren en filteren. 
             State­management via hooks en context API.`,
      image: '/img/project6.png',
      link: 'https://github.com/hasanalumery/project6'
    },
    {
      title: 'Weather App',
      info: `Realtime weersvoorspelling met de OpenWeatherMap API. 
             Toont huidige condities, icoontjes en een 7-daagse forecast. 
             Inclusief automatische geolocatie en error­meldingen.`,
      image: '/img/project7.png',
      link: 'https://github.com/hasanalumery/project7'
    },
    {
      title: 'Management App',
      info: `Eenvoudige CRUD­applicatie in vanilla JS en PHP met MySQL. 
             Gebruikers kunnen taken toevoegen, bewerken, verwijderen en markeren als voltooid. 
             Beveiliging met prepared statements.`,
      image: '/img/project8.png',
      link: 'https://github.com/hasanalumery/project8'
    },
    {
      title: 'Task Manager',
      info: `To-do lijst met drag-and-drop functionaliteit en LocalStorage­-sync. 
             Gebouwd met de HTML5 Drag & Drop API en minimalistische UI. 
             Focus op toegankelijkheid en keyboard­navigatie.`,
      image: '/img/project9.png',
      link: 'https://github.com/hasanalumery/project9'
    },
    {
      title: 'Dashboard',
      info: `Admin dashboard met CSS Grid & Chart.js voor data­visualisaties. 
             Laat realtime grafieken zien, tabel filters en responsive cards. 
             Gebouwd vanuit een componentgedreven aanpak.`,
      image: '/img/project10.png',
      link: 'https://github.com/hasanalumery/project10'
    }
  ];

  // Skill data (expanded info)
  const skills = [
    {
      title: 'JavaScript',
      info: `Diepgaande kennis van ES6+ features: let/const, arrow functions, spread/rest. 
             Ervaring met DOM­manipulatie, event handling en het schrijven van asynchrone code met async/await.`,
      icon: '/img/jslogo.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'CSS',
      info: `Expertise in Flexbox en CSS Grid voor responsive layouts. 
             Styling van animaties, transitions en custom media queries voor alle schermgroottes.`,
      icon: '/img/css-3.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'React',
      info: `Component­-gebaseerde architectuur met function components en hooks. 
             State en context API voor globale data, prop drill minimaliseren en performance optimalisatie.`,
      icon: '/img/react-native-firebase-1.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'Docker',
      info: `Containerisatie van apps met Dockerfiles, multi­stage builds en Docker Compose. 
             Ontwikkel- en productieworkflows gestroomlijnd met geïsoleerde omgevingen.`,
      icon: '/img/docker-4.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'Scrum',
      info: `Agile sprints plannen en uitvoeren, daily stand­ups, backlog grooming en sprint retrospectives. 
             Gebruik van Jira en Trello voor visueel projectmanagement.`,
      icon: '/img/scrum-1.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'Laravel',
      info: `Basis Laravel MVC: routing, controllers, Eloquent ORM en Blade templating. 
             Rapid prototyping van REST API endpoints met middleware en resource controllers.`,
      icon: '/img/php.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'Tailwind CSS',
      info: `Utility-first styling met Tailwind, custom thema’s via config. 
             Snelle prototyping en minimalistische CSS builds met PurgeCSS integratie.`,
      icon: '/img/tailwindcss.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'PHP',
      info: `Backend scripting met pure PHP: form handling, sessions en eenvoudige REST API’s. 
             Ervaring met best practices en beveiligingsmaatregelen zoals input sanitization.`,
      icon: '/img/php.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'MySQL',
      info: `Database­ontwerp en query­optimalisatie: joins, indexing en normalisatie. 
             Samenwerking tussen PHP en MySQL voor dynamische webapplicaties.`,
      icon: '/img/mysql.svg',
      link: 'https://github.com/hasanalumery'
    },
    {
      title: 'Git',
      info: `Versiebeheer met Git: branching, merging, pull requests en conflict resolution. 
             Samenwerking via GitHub workflows, CI/CD pipelines en code reviews.`,
      icon: '/img/git.svg',
      link: 'https://github.com/hasanalumery'
    }
  ];

  // Create card: colored background + title span
  function createCard(item, isSkill = false, index = 0) {
    const card = document.createElement('div');
    card.className = 'tile';
    card.dataset.info  = item.info;
    card.dataset.image = isSkill ? item.icon : item.image;
    card.dataset.link  = item.link;

    // Unique background color
    const bg = cardColors[index % cardColors.length];
    card.style.background = bg;
    card.style.color      = '#fff';

    card.innerHTML = `
      <div class="tile-inner">
        <h3><span>${item.title}</span></h3>
      </div>
    `;

    card.addEventListener('click', () => openModal(item, isSkill));
    return card;
  }

  // Render grids
  const projectContainer = document.querySelector('.projects-container');
  projects.forEach((p, i) => projectContainer.appendChild(createCard(p, false, i)));

  const skillContainer = document.querySelector('.skills-container');
  skills.forEach((s, i) => skillContainer.appendChild(createCard(s, true, i)));

  // SPA Navigation
  const sections = document.querySelectorAll('.content-section');
  document.querySelectorAll('nav a[data-section]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      sections.forEach(s => s.hidden = true);
      document.getElementById(link.dataset.section).hidden = false;
      closeModal();
    });
  });
  sections.forEach(s => s.hidden = true);
  document.getElementById('about').hidden = false;

  // Modal logic
  const modal    = document.querySelector('.dynamic-project-details');
  const titleEl  = modal.querySelector('.project-title');
  const imgEl    = modal.querySelector('.project-image');
  const descEl   = modal.querySelector('.project-description');
  const linkEl   = modal.querySelector('.project-link');
  const closeBtn = modal.querySelector('.close-btn');

  function openModal(item, isSkill) {
    titleEl.textContent = item.title;
    imgEl.src           = isSkill ? item.icon : item.image;
    descEl.textContent  = item.info;
    linkEl.href         = item.link;
    modal.classList.remove('hidden');
  }
  function closeModal() {
    modal.classList.add('hidden');
  }
  closeBtn.addEventListener('click', closeModal);

  // Header shrink on scroll
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('shrink', window.scrollY > 50);
  });
});

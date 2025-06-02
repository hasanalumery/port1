// port.js - Fixed version

document.addEventListener('DOMContentLoaded', () => {
  // Color palette for cards
  const cardColors = [
    '#e57373', '#81c784', '#64b5f6', '#ffb74d', '#ba68c8',
    '#4db6ac', '#f06292', '#9575cd', '#7986cb', '#a1887f'
  ];

  // Project data (fixed URLs with proper protocols)
  const projects = [
  {
    title: 'API Collage',
    info: `Een collage van verschillende APIs die samen één interface vormen. PokéAPI, Anime API en Sport API 
           data wordt gecombineerd in visuele blokken die je kunt vergelijken en sorteren. 
           Elke API heeft zijn eigen sectie maar ze werken samen als één geheel.`,
    image: '/img/apicollage.png',
    link: 'http://api-collage.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Music Site',
    info: `Website voor een muziekproject met clean CSS architectuur. Clean layout voor albums, 
           tracks en artiest info. Modulaire components maken het makkelijk om nieuwe secties 
           toe te voegen zonder de bestaande styling te breken.`,
    image: '/img/musicappsite.png',
    link: 'http://music-site.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Tomodatchi',
    info: `Virtual pet game geïnspireerd op Tamagotchi. Je zorgt voor je digitale vriend door 
           te voeden, spelen en verzorgen. Neon styling en retro animaties geven het een 
           nostalgische maar moderne uitstraling.`,
    image: '/img/tomo2.png',
    link: 'http://tomodatchi.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Game Trailer',
    info: `Trailer website voor een indie game project. Custom video player met game-themed controls 
           en scroll-triggered animaties die de verhaal elementen onthullen. Vanilla JS zorgt 
           voor snelle loading en smooth gameplay preview.`,
    image: '/img/gametrailer.png',
    link: 'http://game-trailer.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Webshop',
    info: `E-commerce platform met volledige shopping ervaring. Product catalogus, winkelwagen, 
           checkout proces en order bevestiging. LocalStorage houdt je winkelwagen bij en 
           mock payments testen de hele flow zonder echte transacties.`,
    image: '/img/webshop2.png',
    link: 'http://webshop.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'MovieDB Explorer',
    info: `Film database explorer die TMDB API gebruikt om movies te ontdekken. Zoek op titel, 
           genre of jaar, bekijk trailers en details, en hou favorieten bij. React hooks 
           en context maken de app responsive en gebruiksvriendelijk.`,
    image: '/img/moviedb.png',
    link: 'http://moviedb.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Weather App',
    info: `Simpele weer applicatie met real-time voorspellingen. Huidige temperatuur, wind, 
           luchtvochtigheid en 7-daagse forecast. Automatische locatie detectie of handmatig 
           stad invoeren - alles wat je nodig hebt voor het weer.`,
    image: '/img/wezz.png',
    link: 'http://weather.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Recipe Finder',
    info: `Recepten zoeker waar je gerechten kunt vinden op basis van ingrediënten die je hebt. 
           Zoek, filter en bewaar je favoriete recepten. PHP backend met MySQL database 
           voor veilige opslag van alle recepten data.`,
    image: '/img/cookbook.png',
    link: 'http://recipe-finder.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Task Manager',
    info: `Taken beheer systeem voor persoonlijke productiviteit. Maak taken aan, organiseer 
           met drag & drop, stel deadlines in en houd voortgang bij. LocalStorage sync 
           zorgt dat je taken bewaard blijven tussen sessies.`,
    image: '/img/listsite.png',
    link: 'http://tasklist.hasanalumery.nl' // Using HTTP for now
  },
  {
    title: 'Dashboard',
    info: `Admin dashboard voor data overzicht en beheer. Grafieken, statistieken en KPI widgets 
           geven inzicht in belangrijke metrics. Chart.js visualisaties en CSS Grid layout 
           maken complexe data makkelijk te begrijpen.`,
    image: '/img/dashbeard.png',
    link: 'http://dash.hasanalumery.nl' // Using HTTP for now
  }
];

  // Skill data (unchanged)
 const skills = [
  {
    title: 'JavaScript',
    info: `Van DOM manipulatie tot moderne ES6+ features. Werk veel met async/await voor API calls 
           en arrow functions voor cleaner code. Event handling en interactive features zijn 
           dagelijkse kost geworden.`,
    icon: 'Code2',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'CSS',
    info: `Flexbox en Grid zijn mijn go-to voor layouts. Hou van experimenteren met animaties 
           en transitions. Responsive design vanaf mobile-first - elk project moet er goed 
           uitzien op alle schermen.`,
    icon: 'Palette',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'React',
    info: `Hooks hebben mijn manier van React schrijven veranderd. Context API gebruik ik voor 
           shared state en function components houden alles clean. Performance optimalisatie 
           is belangrijk, vooral bij grotere apps.`,
    icon: 'Component',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'Docker',
    info: `Containers maken development zoveel makkelijker. Multi-stage builds houden images 
           klein en Docker Compose helpt bij complexere setups. Vooral handig voor consistent 
           werken tussen verschillende machines.`,
    icon: 'Container',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'Scrum',
    info: `Sprint planning en daily standups zijn routine geworden. Retrospectives geven goede 
           insights over wat beter kan. Jira is handig voor tracking, maar soms is een simpel 
           Trello board net zo effectief.`,
    icon: 'Users',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'Laravel',
    info: `MVC structuur maakt backend development overzichtelijk. Eloquent ORM is krachtig voor 
           database queries en Blade templating werkt prettig. Vooral goed voor snel prototypes 
           bouwen met ingebouwde authenticatie.`,
    icon: 'Server',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'Tailwind CSS',
    info: `Utility classes maken styling veel sneller. Custom config voor consistent design systems 
           en PurgeCSS houdt builds klein. Soms mis je custom CSS, maar voor prototyping is het 
           perfect.`,
    icon: 'Paintbrush2',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'PHP',
    info: `Begonnen met pure PHP voor form handling en sessions. Input sanitization en prepared 
           statements zijn essentieel voor veiligheid. Nog steeds handig voor snelle scripts 
           en simpele backend logica.`,
    icon: 'Terminal',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'MySQL',
    info: `Database design en query optimalisatie zijn puzzels die ik graag oplos. Joins kunnen 
           complex worden maar indexing helpt veel. De combinatie met PHP werkt goed voor 
           dynamische content.`,
    icon: 'Database',
    link: 'https://github.com/hasanalumery/hasanalumery'
  },
  {
    title: 'Git',
    info: `Feature branches en pull requests houden code georganiseerd. Merge conflicts gebeuren, 
           maar zijn meestal makkelijk op te lossen. GitHub workflows en code reviews maken 
           samenwerken veel beter.`,
    icon: 'GitBranch',
    link: 'https://github.com/hasanalumery/hasanalumery'
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

  // Modal logic with better link handling
  const modal    = document.querySelector('.dynamic-project-details');
  const titleEl  = modal.querySelector('.project-title');
  const imgEl    = modal.querySelector('.project-image');
  const descEl   = modal.querySelector('.project-description');
  const linkEl   = modal.querySelector('.project-link');
  const closeBtn = modal.querySelector('.close-btn');

  function openModal(item, isSkill) {
    titleEl.textContent = item.title;
    
    // Handle skills differently - they use icon names, not image URLs
    if (isSkill) {
      // Hide or replace image for skills, or use a placeholder
      imgEl.style.display = 'none'; // Hide image for skills
      // Alternative: imgEl.src = '/img/skill-placeholder.png'; // Use a placeholder
    } else {
      imgEl.style.display = 'block'; // Show image for projects
      imgEl.src = item.image;
    }
    
    descEl.textContent  = item.info;
    linkEl.href         = item.link;
    
    // Make sure the link opens in a new tab and has proper attributes
    linkEl.target = '_blank';
    linkEl.rel = 'noopener noreferrer';
    
    // Debug: log the link to console
    console.log('Modal opened for:', item.title, 'Link:', item.link);
    
    modal.classList.remove('hidden');
  }
  
  function closeModal() {
    modal.classList.add('hidden');
  }
  
  closeBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside of it
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Header shrink on scroll
  window.addEventListener('scroll', () => {
    document.querySelector('header').classList.toggle('shrink', window.scrollY > 50);
  });
});
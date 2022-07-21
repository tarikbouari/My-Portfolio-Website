const project = [
  {
    id: 'project1',
    title: 'Tonic',
    img: 'images/Snapshoot.jpg',
    subtitle: ['Canopy', 'Backend', '2015'],
    technologies: ['javascript', 'Css', 'Html','Github','ruby','bootstrap'],
    description:
      'sudja Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website',
  },
  {
    id: 'project2',
    title: 'Tonic',
    img: 'images/tonic.png',
    subtitle: ['Canopy', 'Backend', '2015'],
    technologies: ['javascript', 'Css', 'Html','Github','ruby','bootstrap'],
    description:
      'Meshu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website',
  },
  {
    id: 'project3',
    title: 'Tonic',
    img: 'images/multi.png',
    subtitle: ['Canopy', 'Backend', '2015'],
    technologies: ['javascript', 'Css', 'Html','Github','ruby','bootstrap'],
    description:
      'tarik Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website',
  },
  {
    id: 'project4',
    title: 'Multi-Post stories',
    img: 'images/gray.png',
    subtitle: ['Canopy', 'Backend', '2015'],
    technologies: ['javascript', 'Css', 'Html', 'Github','ruby','bootstrap'],
    description:
      'hello Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website',
  },
  {
    id: 'project5',
    title: 'Multi-Post stories',
    img: 'images/dance.png',
    subtitle: ['Canopy', 'Backend', '2015'],
    technologies: ['javascript', 'Css', 'Html','Github','ruby','bootstrap'],
    description:
      'hi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website',
  },
];

const proContainer = document.getElementById('pro-container');
const boxContainer = document.createElement('div');
boxContainer.className = 'note';
const mainPage = document.getElementById('projects');
const about = document.getElementById('about');
const footerSection = document.querySelector('footer');
const presentation = document.getElementById('presentation');
const header = document.querySelector('header');
const btnProject = document.querySelectorAll('.primary-button');

function addBlur() {
  presentation.classList.add('blur');
  header.classList.add('blur');
  mainPage.classList.add('blur');
  footerSection.classList.add('blur');
  about.classList.add('blur');
  mainPage.style.display = 'none';
  footerSection.style.display = 'none';
}

function removeBlur() {
  presentation.classList.remove('blur');
  header.classList.remove('blur');
  mainPage.classList.remove('blur');
  footerSection.classList.remove('blur');
  about.classList.remove('blur');
}

function projectLoad(item) {
  const box = `
  <div class="title-container">
   <h2 class='title'>${item.title}</h2>
  <img src="images/close.svg" id="closebtn" class="closebtn" alt="close-icon">
  </div>

  <ul class="specific">
  <li>${item.subtitle[0]}</li>
  <li>${item.subtitle[1]}</li>
  <li>${item.subtitle[2]}</li>
  </ul>
  <img class="image" src='${item.img}'>
  <div class="box-lang">
  <p>${item.description}</p>
  <div class=""box-tech>
  <ul class="language">
  <li>${item.technologies[0]}</li>
  <li>${item.technologies[1]}</li>
  <li>${item.technologies[2]}</li>
  </ul>
  <ul class="languages">
  <li>Github</li>
  <li>Ruby</li>
  <li>Bootstrap</li>
  </ul>
  <div class="links">
  <a href="${item.liveDemo}"><span>See live</span><img src="./images/arraw.svg" alt="ellipse icon"></a>
 
  <a href="${item.source}"><span>See Source</span><img src="./images/github.svg" alt="ellipse icon"></a>
  </div>
  </div>
  </div>
  </div>
   `;
  proContainer.innerHTML = box;
  proContainer.classList.add('popbox');
  proContainer.style.display = 'flex';
  addBlur();
  const closeBtn = document.getElementById('closebtn');
  closeBtn.addEventListener('click', () => {
    proContainer.classList.remove('popbox');
    proContainer.style.display = 'none';
    closeBtn.style.display = 'none';
    mainPage.style.display = 'grid';
    footerSection.style.display = 'block';
    removeBlur();
  });
}

btnProject.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
    const btnData = e.target.dataset.id;
    projectLoad(project[btnData]);
  });
});

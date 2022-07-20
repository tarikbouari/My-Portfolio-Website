
let project = [
  {
    id: 'project1',
    title: 'Tonic',
    img: 'images/Snapshoot.jpg',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'sudja Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project2',
    title: 'Tonic',
    img: 'images/tonic.png',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'Meshu Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project3',
    title: 'Tonic',
    img: 'images/multi.png',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'tarik Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project4',
    title: 'Multi-Post stories',
    img: 'images/gray.png',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'hello Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project5',
    title: 'Multi-Post stories',
    img: 'images/dance.png',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'hi Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  }
]

const proContainer = document.getElementById('pro-container');
const boxContainer = document.createElement('div');
boxContainer.className = 'note';
const closeBtn = document.getElementById('closebtn');
const mainPage = document.getElementById('projects');
const about = document.getElementById('about');
const footerSection = document.querySelector('footer'); 
const presentation = document.getElementById('presentation'); 
const header = document.querySelector('header');

console.log(mainPage);



const btnProject = document.querySelectorAll('.primary-button');

btnProject.forEach( (btn) => {
  btn.addEventListener('click', (e) =>{
    // e.preventDefault();
  let btnData = e.target.dataset.id;
  console.log(btnData);
  projectLoad(project[btnData]);
}) 
})

function projectLoad(item) {

  box = `<h2 class='title'>${item.title}</h2>
  <ul class="specific">
  <li>${item.subtitle[0]}</li>
  <li>${item.subtitle[1]}</li>
  <li>${item.subtitle[2]}</li>
  </ul>
  <img src='${item.img}'>
  <div class="box-lang">
  <p>${item.description}</p>
  <div class=""box-tech>
  <ul class="language">
  <li>${item.technologies[0]}</li>
  <li>${item.technologies[1]}</li>
  <li>${item.technologies[2]}</li>
  </ul>
  <div class="links">
  <a href="${item.liveDemo}">See live</a>
  <a href="${item.source}"> See Source</a>
  <div>
  <div>
  <div>
   `;
  proContainer.innerHTML = box;
  proContainer.classList.add('popbox');
  // closeBtn.classList.add('closebtn');
  closeBtn.style.display = 'block'
  proContainer.style.display ='flex';
  mainPage.style.display="none";
  about.style.display="none";
  footerSection.style.display="none";
  presentation.classList.add('blur');
  header.classList.add('blur');
}

closeBtn.addEventListener('click', () =>{  
  proContainer.classList.remove('popbox')
  // closeBtn.classList.remove('closebtn');
  proContainer.style.display ='none';
  closeBtn.style.display = 'none';
  mainPage.style.display="grid";
  footerSection.style.display="block";
  about.style.display="flex";
  presentation.classList.remove('blur');
  header.classList.remove('blur');
  location.reload();

})

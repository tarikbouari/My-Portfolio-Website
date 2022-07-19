
let project = [
  {
    id: 'project1',
    title: 'Tonic',
    img: '/images/',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project2',
    title: 'Tonic',
    img: '/images/',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project3',
    title: 'Tonic',
    img: '/images/',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project4',
    title: 'Multi-Post stories',
    img: '/images/',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  },
  {
    id: 'project5',
    title: 'Multi-Post stories',
    img: '/images/',
    subtitle: ['Canopy','Backend','2015'],
    technologies: ['javascript', 'Css', 'Html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    liveDemo: 'https://tarikbouari.github.io/My-Portfolio-Website/',
    source: 'https://github.com/tarikbouari/My-Portfolio-Website'
  }
]

const proContainer = document.getElementById('pro-container');
const boxContainer = document.createElement('div');
boxContainer.className = 'note';




const btnProject = document.querySelectorAll('.primary-button');

btnProject.forEach( (btn) => {
  btn.addEventListener('click', (e) =>{
    // e.preventDefault();
  let btnId = e.target.dataset.id;
  // console.log(btnId);
  // console.log(project[btnId]);
  projectLoad(project[btnId]);
    
  })
}) 

function projectLoad(item){
  console.log("Title"+item.title);
  console.log(item.subtitle[0]);

    boxContainer.innerHtml = `<h2 class="title">${item.title}</h2>
    <ul class="specific">
        <li>${item.subtitle[0]}</li>
        <li>${item.subtitle[1]}</li>
        <li>${item.subtitle[2]}</li>
    </ul>
    <p>${item.description}</p>
    <ul class="language">
    <li>${item.technologies[0]}</li>
    <li>${item.technologies[1]}</li>
    <li>${item.technologies[2]}</li>
    </ul>
    <a href="${item.liveDemo}">Live<a>
    <a href="${item.source}">Source<a>
   `  ;
   proContainer.appendChild(boxContainer);
}


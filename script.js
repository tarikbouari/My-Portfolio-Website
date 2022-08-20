const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('hello');
  const container = document.createElement('div');
  container.classList.add('menu-mobile');

  const menuDiv = ` <div>
                      <ul class="nav-ul">
                          <li class="nav-item"> <a class="nav-a" href="#projects"> Portfolio </a><img src="images/close.svg" class="close-icon" alt="close-icon"> </li>
                          <li class="nav-item"><a  class="nav-a" href="#about">About</a> </li>
                          <li class="nav-item"><a class="nav-a" href="#contact">Contact</a> </li>
                      </ul>
                    <div>`;

  container.innerHTML += menuDiv;

  document.body.appendChild(container);
  const closeIcon = document.querySelector('.close-icon');
  container.style.transform = 'translateX(0)';
  container.style.transition = '0.5s all ease';

  closeIcon.addEventListener('click', (e) => {
    document.location.reload();
  });

  $('.nav-a').on('click', function (e) {
    if (this.hash !== '') {
      const { hash } = this;
      container.style.display = 'none';
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
      );
    }
  });
});

// Smoth scroll to section with Jquery

$('.nav-a').on('click', function (e) {
  if (this.hash !== '') {
    const { hash } = this;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
    );
  }
});

//Smoth scroll to section with Jquery

$(".nav-a").on("click", function (e) {
  if (this.hash !== "") {
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

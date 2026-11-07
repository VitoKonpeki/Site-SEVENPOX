const cards = document.querySelectorAll(".flip-card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const flipped = card.classList.toggle("flipped");

        card.setAttribute("aria-pressed", flipped);
    });

    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            card.click();
        }
    });
});

// $(function() {
//   $('.scroll-page').on('click', function() {
//     var offset = 0;
//     var speed = 800;
//     var target = $(this.hash);

//     $('nav .menu a').each(function() {
//       $(this).removeClass('active');
//     });

//     $(this).addClass('active');

//     $('html, body').animate({
//       scrollTop: target.offset().top - offset
//     }, speed, 'swing'); });

// });

// $(window).scroll(function(event) {
//   var scrollPos = $(document).scrollTop();
//   console.log(scrollPos);
//   $('nav .menu a').each(function() {
//     var curLink = $(this);
//     var refElement = $(curLink.attr('href'));

//     if (refElement.position().top <= scrollPos + 60) {
//       $('nav .menu a').removeClass('active');
//       curLink.addClass('active');

//     } else {
//       curLink.removeClass('active');
//     }
//   });
// });
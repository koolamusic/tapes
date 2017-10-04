/** Testimonial Carousel Section =====
======================================  **/
$('#carouselTestimonial').on('slide.bs.carousel', function (colBreak) {

    var $colBreak = $(colBreak.relatedTarget);
    var idx = $colBreak.index();
    var itemsPerSlide = 1;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (colBreak.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

/** End Carousel Section =====
======================================= **/

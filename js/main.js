$(document).ready(() => {

    $('.projects-image').magnificPopup({
        type: 'image',
        delegate: 'a'
    });


    $(".home").click(function () {
        $("#menu").css('display', 'block');
    });


    $('.menu-cancel-img, #titles, #header').click((e) => {
        if (e.target.id === 'menu-cancel-img' || e.target.id === 'titles' || e.target.id === 'header') {
            $('#menu').hide();
        }
    })


    $('#project-item').click(() => {
        $('#project > .projects.p-3, .projects.p-4, .projects.p-5').css('display', 'flex');
        $('#project-item').remove();
    });


    $('#consultation-block .btn-action > button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let ok = $('#ok');
        let text = $('.checkbox-text');

        name.css('border-color', 'white');
        phone.css('border-color', 'white');
        text.css('color', 'white');

        $('.consultation-error-1, .consultation-error-2, .consultation-error-3').hide();

        if (!name.val()) {
            name.css('border-color', 'red');
            name.siblings('.consultation-error-1').show();
        }

        if (!phone.val()) {
            phone.css('border-color', 'red');
            phone.siblings('.consultation-error-2').show();
        }

        if (!ok.is(":checked") === true) {
            text.css('margin-bottom', '10px').show();
            ok.siblings('.consultation-error-3').show();
            $('.checkbox').css('border-color', 'red').show();
        }


        if (name.val() && phone.val() && ok.is(":checked") === true) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#consultation-block').hide();
                    $('.consultation-text').show();
                }, error: () => {
                    $('#consultation-block').hide();
                    $('.consultation-text').show();
                    // alert('Ошибка записи. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        }
    });


    $('#entry-excursion .btn-action > button').click((e) => {
        $('#entry-container-form').css('display', 'flex');
    })


    $('#entry-content .btn-action > button').click((e) => {

        let name_entry = $('#name-entry');
        let phone_entry = $('#phone-entry');
        let ok_entry = $('#ok-entry');
        let text_entry = $('.checkbox-text');

        name_entry.css('border-color', 'white');
        phone_entry.css('border-color', 'white');

        $('.entry-error-1, .entry-error-2, .entry-error-3').hide();

        if (!name_entry.val()) {
            name_entry.css('border-color', 'red');
            name_entry.siblings('.entry-error-1').show();
        }

        if (!phone_entry.val()) {
            phone_entry.css('border-color', 'red');
            phone_entry.siblings('.entry-error-2').show();
        }

        if (!ok_entry.is(":checked") === true) {
            ok_entry.siblings('.entry-error-3').show();
            $('.checkbox').css('border-color', 'red').show();
        }

        if (name_entry.val() && phone_entry.val() && ok_entry.is(":checked") === true) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name_entry=' + name_entry.val() + '&phone=' + phone_entry.val(),
                success: () => {
                    $('#entry-container-form').hide();
                    $('#entry-excursion').hide();
                    $('.entry-text').show();
                }, error: () => {
                    $('#entry-container-form').hide();
                    $('#entry-excursion').hide();
                    $('.entry-text').show();
                    // alert('Ошибка записи. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        }
    })


    $('#entry-cancel-close, #entry-container-form').click((e) => {
        if (e.target.id === 'entry-container-form' || e.target.id === 'entry-cancel-close') {
            $('#entry-container-form').hide();
        }
    })

    $('.bef').show();
    $('.odd').show();
    $('.info-items').show();

    $('.od').click((e) => {
        $('.info-items').hide();
        $('.odd').show();
        $('.bef').show();
        $('.od').addClass("active-cursor");
    })

    $('.dv').click((e) => {
        $('.info-items').hide();
        $('.dvv').show();
        $('.bef').show();
        $('.od, .dv, .tr, .ch, .pt').removeClass('active-cursor')
        $('.dv').addClass("active-cursor");
    })

    $('.tr').click((e) => {
        $('.info-items').hide();
        $('.trr').show();
        $('.bef').show();
        $('.od, .dv, .tr, .ch, .pt').removeClass('active-cursor')
        $('.tr').addClass("active-cursor");
    })

    $('.ch').click((e) => {
        $('.info-items').hide();
        $('.chh').show();
        $('.bef').show();
        $('.od, .dv, .tr, .ch, .pt').removeClass('active-cursor')
        $('.ch').addClass("active-cursor");
    })

    $('.pt').click((e) => {
        $('.info-items').hide();
        $('.ptt').show();
        $('.bef').show();
        $('.od, .dv, .tr, .ch, .pt').removeClass('active-cursor')
        $('.pt').addClass("active-cursor");
    })


    $('.example-container-image').slick({
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

});


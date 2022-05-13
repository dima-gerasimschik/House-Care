$(document).ready(() => {

    $('.projects-image').magnificPopup({
        type: 'image',
        delegate: 'a'
    });


    $("#home").click(function () {
        $("#menu").css('display', 'block');
    });


    $('#menu-cancel-img, #titles, #header').click((e) => {
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

        $('.consultation-error').hide();

        if (!name.val()) {
            name.css('border-color', 'red').css('margin-bottom', '10px');
            name.siblings('.consultation-error').show();
        }

        if (!phone.val()) {
            phone.css('border-color', 'red').css('margin-bottom', '10px');
            phone.siblings('.consultation-error').show();
        }

        if (!ok.is(":checked") === true) {
            text.css('margin-bottom', '10px').show();
            ok.siblings('.consultation-error').show();
            $('.checkbox').css('border-color', 'red').show();
            alert('Дайте свое согласие на обработку данных!');
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

        $('.entry-error').hide();

        if (!name_entry.val()) {
            name_entry.css('border-color', 'red').css('margin-bottom', '10px');
            name_entry.siblings('.entry-error').show();
        }

        if (!phone_entry.val()) {
            phone_entry.css('border-color', 'red').css('margin-bottom', '10px');
            phone_entry.siblings('.entry-error').show();
        }

        if (!ok_entry.is(":checked") === true) {
            text_entry.css('margin-bottom', '10px').show();
            ok_entry.siblings('.entry-error').show();
            $('.checkbox').css('border-color', 'red').show();
            alert('Дайте свое согласие на обработку данных!');
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


    $('.od').click((e) => {
        $('.info-items').hide();
        $('.odd').show();
        $('.bef').show();
    })

    $('.dv').click((e) => {
        $('.info-items').hide();
        $('.dvv').show();
        $('.bef').show();
    })

    $('.tr').click((e) => {
        $('.info-items').hide();
        $('.trr').show();
        $('.bef').show();
    })

    $('.ch').click((e) => {
        $('.info-items').hide();
        $('.chh').show();
        $('.bef').show();
    })

    $('.pt').click((e) => {
        $('.info-items').hide();
        $('.ptt').show();
        $('.bef').show();
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


$(function () {


    //탭박스
    $(function () {
        var content = $('.tabContent>div');
        var menu = $('.tabMenu li');
        content.hide().eq(0).show();
        menu.click(function () {
            menu.removeClass('active');
            $(this).addClass('active');

            var index = $(this).index();
            content.hide().eq(index).show();
        })
    });



    //포커스 뉴스 스와이퍼
    new Swiper('.focus .swiper', {
        direction: 'horizontal',
        autoplay: {
            delay: 3000
        },
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
    });



    //자바 숫자카운트
    $('.count-num').each(function () { // .count-num에 각각 적용
        var $this = $(this),
            countTo = $this.attr('data-count');
        // $this = 첫번째~세번째 .count-num
        // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)

        $({ countNum: $this.text() }).animate({
            countNum: countTo
            // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
            // 0에서 countNum이 된다
        },
            {
                duration: 3000, // 애니메이션이 완료될때까지 걸리는 시간
                easing: 'linear', // 애니메이션 효과 방식
                step: function () { // 움직임 각 스텝별로 실행될 함수
                    $this.text(Math.floor(this.countNum));
                    // Math.floor -> this.countNum의 값을 정수로 만들어준다
                },
                complete: function () { // 움직임이 멈춘 후 실행될 함수
                    $this.text(this.countNum);
                    // this.countNum이 $this의 text값이 된다
                    //alert('finished');
                }
            });
    });



    //푸터 토글
    $('.Footer .ft_top .right li').on('click', function () {
        var idx = $(this).index(); // 0,1,2
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $('.Footer .ft_top .content>ul').eq(idx).removeClass('on')
        } else {
            $(this).addClass('on').siblings().removeClass('on');
            $('.Footer .ft_top .content>ul').eq(idx).addClass('on').siblings().removeClass('on');
        }
    });



    //투탑
    $('.btn').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });









    /* health_wrap */
    $('.health_wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,

        // 반응형
        responsive: [{
            breakpoint: 1220,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        ]
    });

    $('.helth_cont>a').click(function (e) {
        e.preventDefault();
    });












})


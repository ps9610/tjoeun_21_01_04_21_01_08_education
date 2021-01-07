;(function($,window,document,undefined){
    var jason = {
        init : function(){
            var that = this;
                that.headerFn();
                that.section1Fn();
                that.section2Fn();
                that.section3Fn();
                that.section4Fn();
                that.section5Fn();
                that.footerFn();
        },
        headerFn   : function(){
            var $this = null;
            var $header = $("#header");
            var $window = $(window);
            var $scroll = false; //스크롤 여부를 알려주는 변수
            var $htmlBody = $("html,body");
            var $section2 = $("#section2");
            var $headerH = $("#header").innerHeight();
            var t = false;
            
            //마우스 오버시 헤더스타일 바뀌기
            $header.on({
                mouseenter : function(){
                    $this = $(this);
                    $this.addClass("addHeader");
                },
                mouseleave : function(){
                    $this = $(this);
                    if( $scroll === false ){ //스크롤 논리값이 false일때만 removeClass하고 아니라면 마우스리브를 해도 절대 removeClass하지 말아라
                        $this.removeClass("addHeader");
                    }
                }
            });

            //휠마우스이벤트
            $window.scroll(function(){
                $this = $(this);
                if( $this.scrollTop() >= 30 ){
                    $scroll = true; //스크롤 30px 이상인 경우 true로 변경하라
                    $header.addClass("addHeader"); 
                    if( t===false ){
                        t = true;
                        $htmlBody.stop().animate({ scrollTop : $section2.offset().top-$headerH },600),"easeInOutQuint";
                    }
                }
                else{
                    t = false;
                    $scroll = false; //스크롤 30px 이하인 경우 true로 변경하라
                    $header.removeClass("addHeader"); 
                }
            });

        },
        section1Fn : function(){
            var cnt = 0;
            var $slide = $(".slide");
            var n = $slide.length-2;
            var $nextBtn = $(".next-btn");
            var $prevBtn = $(".prev-btn");
            var $slideWrap = $(".slide-wrap");
            var $smoothBtn = $(".smooth-btn");
            var $htmlBody = $("html,body");
            var $url = null;
            var $headerH = $("#header").innerHeight();
            var $slideCon = $(".slide-container");
            var setId = null;
            var cnt2 = 0;
            var setId2 = null;
            var $pageBtn = $(".page-btn");
            var $seconds = 4;
            var $window = $(window);
            var $winW = $window.innerWidth();
            var $winH = $window.innerHeight();
            var $section2 = $("#section2");

            setTimeout(autoTimerFn, 100);

            function autoTimerFn(){
                setId = setInterval(nextCountFn,3000);
            }

            function mainSlideFn(){
                $slideWrap.stop().animate({ left: -(100*cnt) +"%" },600,function(){
                    if(cnt>n-1)cnt=0;
                    if(cnt<0)cnt=n-1;
                    $slideWrap.stop().animate({ left: -(100*cnt) +"%" },0)
                });
                pageCountFn(cnt);
            }

            function pageCountFn(z){
                z==n? z=0 : z;
                z==-1? z=n-1 : z;
                //console.log(z);
                $pageBtn.removeClass("addCurrent");
                $pageBtn.eq(z).addClass("addCurrent");
            };

            function nextCountFn(){
                cnt++;
                mainSlideFn();
            };

            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }

            function timerFn(){
                cnt2 = 0;
                clearInterval(setId2);

                setId2 = setInterval(function(){
                    cnt2++;
                    if(cnt2>$seconds){
                        clearInterval(setId2);
                        nextCountFn();
                        autoTimerFn();
                    }
                },1000);
            }

            $nextBtn.on({
               click : function(e){
                   e.preventDefault();
                   clearInterval(setId);
                   timerFn();
                   if( !$slideWrap.is(":animated") ){
                       nextCountFn();
                   }
               } 
            });

            $prevBtn.on({
                click : function(e){
                    e.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if( !$slideWrap.is(":animated") ){
                        prevCountFn();
                    }
                } 
             });

             $pageBtn.each(function(i){
                 $this = $(this);
                 $this.on({
                     click : function(e){
                         e.preventDefault();
                         clearInterval(setId);
                         timerFn();
                         cnt = i;
                        mainSlideFn();
                     }
                 })
             })

             $slideCon.swipe({
                swipeLeft : function(e){
                    e.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if( !$slideWrap.is(":animated") ){
                        nextCountFn();
                    }
                },
                swipeRight : function(e){
                    e.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if( !$slideWrap.is(":animated") ){
                        prevCountFn();
                    }
                }
             });

             //smooth-btn
             $smoothBtn.on({
                 click : function(e){
                     e.preventDefault();
                    var $this = $(this);
                    $url = $this.attr("href");
                    $htmlBody.stop().animate({ scrollTop : $($url).offset().top-$headerH },1000);
                 }
             });
             
             function resizeFn(){

                $winW = $(window).innerWidth();
                $winH = $(window).innerHeight();
                $section2 = $("#section2");
                
                $slide.css({ width : $winW });
                $slide.css({ height : $winH });
                $section2.css({ marginTop : $winH });
             };
            
             $window.resize(function(){
                 resizeFn();
             });

        },
        section2Fn : function(){
            var $gallery = $(".gallery li");
            var $galleryW = $gallery.innerWidth();
            var $galleryH = $galleryW * $galleryR;
            var $galleryR = 0.832443515;
            var $window = $(window);
        
            setTimeout(resizeFn,10);
            function resizeFn(){
                $galleryW = $gallery.innerWidth();
                $galleryH = $galleryW * $galleryR;
                $gallery.css({ height : $galleryH });
            }

            $window.resize(function(){
                resizeFn();
            })
        },
        section3Fn : function(){
            
        },
        section4Fn : function(){
            
        },
        section5Fn : function(){
            
        },
        footerFn : function(){
                
        }
    }

    jason.init();
})(jQuery,window,document,);
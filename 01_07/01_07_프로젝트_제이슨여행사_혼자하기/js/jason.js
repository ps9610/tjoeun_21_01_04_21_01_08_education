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
                }
                else{
                    $scroll = false; //스크롤 30px 이하인 경우 true로 변경하라
                    $header.removeClass("addHeader"); 
                }
            });

        },
        section1Fn : function(){
            var cnt = 0;
            var n = $(".slide").length-2;
            var $nextBtn = $(".next-btn");
            var $prevBtn = $(".prev-btn");
            var $slideWrap = $(".slide-wrap");

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
            }

            function nextCountFn(){
                cnt++;
                mainSlideFn();
            };

            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }

            $nextBtn.on({
               click : function(){
                   if( !$slideWrap.is(":animated") ){
                       nextCountFn();
                   }
               } 
            });

            $prevBtn.on({
                click : function(){
                    if( !$slideWrap.is(":animated") ){
                        prevCountFn();
                    }
                } 
             });

        },
        section2Fn : function(){
            
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
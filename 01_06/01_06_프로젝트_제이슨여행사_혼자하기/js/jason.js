;(function($,window,document,undefined){
    var agency = {
        init : function(){
            var _this = this;
                _this.headerFn();
                _this.section1Fn();
                _this.section2Fn();
                _this.section3Fn();
                _this.section4Fn();
                _this.section5Fn();
        },
        headerFn : function(){
            var _header = $("#header");
            var _window = $(window);
            var t = false;

            _header.on({
                mouseenter : function(){
                    _header.addClass("addHeader");
                },
                mouseleave : function(){
                    if( t===true ){
                        _header.removeClass("addHeader");
                    }
                }
            })

            _window.scroll(function(){
                if( _window.scrollTop() >= 30 ){
                    t = false;
                    _header.addClass("addHeader");
                }
                else{
                    t = true;
                    _header.removeClass("addHeader");
                }
            })
        },
        section1Fn : function(){

            var _cnt = 0;
            var _slideWrap = $(".slide-wrap");
            var _setId = 0;
            var n = $(".slide").length;
            var _nextBtn = $(".next-btn");
            var _prevBtn = $(".prev-btn");

            setTimeout(autoPlayFn, 10);
            function autoPlayFn(){
                _setId = setInterval(nextSlideFn, 3000)
            }

            function mainSlideFn(){
                _slideWrap.stop().animate({ left : -(100*_cnt) +"%" },600,function(){
                    if(_cnt>n)_cnt=0;
                    if(_cnt<0)_cnt=n;
                    _slideWrap.stop().animate({ left : -(100*_cnt) +"%" },0);
                });
            }

            function nextSlideFn(){
                _cnt++;
                mainSlideFn();
            }

            function prevSlideFn(){
                _cnt--;
                mainSlideFn();
            }

            _nextBtn.on({
                click : function(){
                    if( !_slideWrap.is(":animated") ){
                        nextSlideFn();
                    }
                }
            });
            _prevBtn.on({
                click : function(){
                    if( !_slideWrap.is(":animated") ){
                        prevSlideFn();
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
    agency.init();
})(jQuery,window,document,);
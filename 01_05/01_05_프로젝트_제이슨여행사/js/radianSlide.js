;(function($,document,window,undefined){
    
    var x = 0; //left
    var y = 0; //top
    var n = $(".slide").length;
    var r = $(".slide-container").innerWidth()/2;
    var angle = 360/n; //30
    var deg = []; //degree 12개 각각 30도씩 증가 0 30 ...... 330 12개 배치
    var setId = 0;

    //1. 각도넣기 for문으로
    function positionFn(){
        for( var i=0;i<n;i++ ){
            deg[i]=i*angle;//각도 = deg[0]=0, deg[1]=30(1*30), deg[2]=60(2*30) ... deg[11]330(11*30)
            x = Math.cos( deg[i]* (Math.PI/180) )*r+r; //1 radian(파이라디안 = 파이/180);
            y = Math.sin( deg[i]* (Math.PI/180) )*r+r; //1 radian(파이라디안 = 파이/180);
            $(".slide").eq(i).css({ left:x, top:y });
        }
        //console.log(deg);
    }
    setTimeout(positionFn,10);

    function slideMainFn(){
        for(var i=0;i<n;i++){
            //deg[i]+=angle;
            x = Math.cos( deg[i]* (Math.PI/180) )*r+r; //1 radian(파이라디안 = 파이/180);
            y = Math.sin( deg[i]* (Math.PI/180) )*r+r; //1 radian(파이라디안 = 파이/180);
            $(".slide").eq(i).animate({ left:x, top:y });
        }
    }
    
    setTimeout(autoPlayFn,100);
    function autoPlayFn(){
        setId = setInterval(nextFn,2000);
    }

    function nextFn(){
        for(var i=0;i<n;i++){
            deg[i]+=angle; //12개가 각각 30도씩 증가
        }
        slideMainFn();
    }

    function prevFn(){
        for(var i=0;i<n;i++){
            deg[i]-=angle; //12개가 각각 30도씩 감소
        }
        slideMainFn();
    }

    // 클릭이벤트 / 어러가지 이벤트핸들러 나열방법
    $(".nextBtn")
        .on("click", function(){
            nextFn();
        })
        .on("mouseenter", function(){
            clearInterval(setId);
        })
        .on("mouseleave", function(){
            clearInterval(setId);
            autoPlayFn();
        })
        .on("dbclick", function(){
            nextFn();
        })
        .on("focus", function(){
            nextFn();
        });

    $(".prevBtn")
        .on("click", function(){
            prevFn();
        })
        .on("mouseenter", function(){
            clearInterval(setId);
        })
        .on("mouseleave", function(){
            clearInterval(setId);
            autoPlayFn();
        })
        .on("dbclick", function(){
            prevFn();
        })
        .on("focus", function(){
            prevFn();
        });

    $(".slide").each(function(idx){
        $(this).on("click", function(e){
            e.preventDefault();
            $(".slide-container").css({backgroundImage:"url(./img/work-" + (idx+1) + ".jpg)"})
        })
    })

        
})(jQuery,document,window);
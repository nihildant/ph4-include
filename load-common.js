$(document).ready(function(){
            // 상단 영역 로드
            $("#top").load("header.html",function(){
                doc();
            });

            // aside 로드 
            function asideani(){
                (window).scroll(function(){

                    // 사이드 애니
                    if($(window).scrollTop()>$("#subtitle").height()+40){
                        // 탑 애니
                        //탑요소에 클래스를 붙이시오(topFix)
                        $("footer .btop").addClass("topFix");
                    }else{ // 위 조건이 안맞으면(그렇치 않으면)
                        $("footer .btop").removeClass("topFix"); // 탑버튼에 클래스를 없애시오
                    }

                });  

                $("aside .wrap ul.list > li h3").hover(function(){
                if($(window).width()>1200){
                    $("aside").addClass("sliding");
                    $(this).next().find(".listsub").show();
                    $(this).parent().siblings().find(".listsub").hide();
                    $(this).addClass("current");//노란표시
                    $(this).next().find(".listsub").addClass("wide");
                    $(this).parent().siblings().children("h3").removeClass("current");
                    $(this).parent().siblings().find(".listsub").hide().removeClass("wide");
                }
            });
                //h3 a을 클릭하면 실행하시오
                $("aside .wrap ul.list > li h3 a").click(function(){
                    // 마우스클릭한 요소 다음에 오는 것을 slideToggle하시오
                    $(this).parent().next().slideToggle();
                    $(this).parent().parent().siblings().children("div").slideUp();
                    return false;
                });

                $("aside").mouseleave(function(){
                    $("aside").removeClass("sliding");
                });
                //brand를 클릭하면 실행하시오
                $("header .wrap nav>h2").click(function(){
                    //aside에 클래스를 토글하시오
                    $("aside").toggleClass("asideSliding");
                    $("header .wrap nav .wgnb").removeClass("wgnbShow");
                });
            }
            $("aside").load("aside.html",function(){
                asideani();
            });

            // footer로드
            function topani(){
                // 스크롤이벤트    
                $(window).scroll(function(){
                    // 하단 탑버튼 페이지와 같이 이동
                    if($(window).scrollTop()>$("footer").offset().top-$(window).height()){
                        $("footer .btop").removeClass("topFix").css("opacity",1);
                    }
                });  
                // top버튼 클릭하면 실행하시오(문서를 애니메이트하시오)
                $("footer .btop").click(function(){
                    $("html,body").animate({scrollTop:0},1000);//문서스크롤 애니
                });
            }

            $("footer").load("footer.html",function(){
                topani();
            });
        });
    
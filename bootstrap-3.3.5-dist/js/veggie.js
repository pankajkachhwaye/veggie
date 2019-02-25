 $(document).ready(function(){
          $('.button').click(function (e) {
        //debugger;
        
        var buttonId = $(this).attr('id');

        var boxId = buttonId.replace('button', 'box');
         
        $('.box').fadeOut(1000);
        $('#' + boxId).fadeIn(1500);
        $('.initialmenu').hide(); 
    });
    $('#send').click(function(){      
    $('.form-val').each(function() {
                                    if ($(this).val() === '')
                                    {
                                        $(this).css("border-bottom", "1px solid #ff3333");
                                        $(this).next().find("span").addClass('glyphicon glyphicon-alert').html(' Required');
                                        formError = true;
                                      
                                    }
                                    else {
                                        $(this).css("border-bottom", "1px solid black");
                                        $(this).next().find("span").removeClass('glyphicon glyphicon-alert').html('');
                                      
                                    }
                                    });
                                    });
                                    $("#toTop").click(function (){
                                        var targethome=$('#home').offset();
                                        var targetbody=$('html, body').offset();
                                        if( targetbody=== targethome)
                                            {
                                                $(this).css("opacity","0");
                                            }
                                            else{
                                                $(this).css("opacity","1");
                                            }
                $('html, body').animate({
                    scrollTop: $("#home").offset().top
                }, 1000);
//                $("#toTop").css("display", "none");
            });
            $('.navi1').click(function(){
                var target = $(this.hash);
            $('html, body').animate({
                    scrollTop: (target).offset().top
                }, 1000);
        });
        
      
});
  
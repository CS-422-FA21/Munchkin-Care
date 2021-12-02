$(function() {
    var right = true;
    $(".contact-card").on('click', function(){
        var imgPath = $(this).find('img').attr('src');
        var name = $(this).find(".name").html();
        $(".contact-card").removeClass('active');
        $(this).addClass('active');
        $('.message-action-container .title img').attr('src', imgPath);
        $('.message-action-container .title .name').html(name);
        $('.msg-area').html("");
        $('.overlay-initial').fadeOut(200);
    });
    $(".input-control input").on("keydown", function(e){
        if(e.key == "Enter"){
            $(".send-btn").trigger('click');
        };
    });
   $(".send-btn").on('click', function(){
       if($('.input-control input').val().length == 0){
           return;
       }
        var msgText = $('.input-control input').val();
       $('.input-control input').val("");
       var msgHTML = "<div class='msg right'>"+msgText+"</div>";
       $('.msg-area').append($(msgHTML).hide().fadeIn(800));
       customcCallBack();
       $('.input-control input').focus();
   });
   $('.message-action-container .title').on('click', function(){
       window.location.href = 'caregiverProfile.html';
   });
});

function customcCallBack(){
    var msgText = "I don't know how to respond to that";
    msgHTML = "<div class='msg left'>"+msgText+"</div>";
    $('.msg-area').append($(msgHTML).hide().delay(1000).fadeIn(800));
}
function closePopUp(){
    $('.pop-up-container .close-btn-container .close-btn.new').remove();
    $(".pop-up-container").hide();    
}
function showPopUp( popup ){
        if(popup == "contact"){
            var title = "Add Contact";
            var body  = '<div class="form ">'+
                            '<label for="contactName">Name:</label>'
                            +'<input class="form-control" id="contactName" type="text">'+
                            '<label for="contactEmail">E-mail:</label>'+
                            '<input class="form-control" id="contactEmail" type="email">'+
                            '<label for="contactPhone">Phone #:</label>'+
                            '<input class="form-control" id="contactPhone" type="tel">'+
                        '</div>';
            console.log(body);
            $('.pop-up-container .close-btn-container').append('<div class="close-btn new">Add Contact</div>');

        }
        else if(popup == "share"){
            var title = "Share calendar via:"
            var body = "<div class='share-options-container'><div class='share-option'><img src='assets/images/icon-email.png'><div class='title'>Email</div></div>"+
            "<div class='share-option'><img src='assets/images/icon-msg.png'><div class='title'>Text/SMS</div></div>"+"<div class='share-option'><img src='assets/images/icon-wa.png'><div class='title'>WhatsApp</div></div>"+"</div>"
        }else{
            var title = "Upcoming Event Details:"
            var body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quisquam eveniet modi et facere? Ipsa in sit doloremque. Iste soluta nemo maiores amet molestias. Consequuntur voluptas explicabo dolorum eius dolorem."
        }
        $('.pop-up-container .title').html(title);
        $('.pop-up-container .body').html(body);
        $('.pop-up-container').fadeIn(500);
    }
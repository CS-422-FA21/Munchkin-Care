$(function() {
            
    $(".upcoming-event").on('click', showPopUp);
    $(".search-bar input").on('focus', function(){
        $('.search-options-container').fadeIn(300);
    });
    $('body').on('mouseup', function(e){
        var container = $(".search-bar");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.search-options-container').hide();
    }
    });
});
function closePopUp(){
        $(".pop-up-container").hide();    
}
function showPopUp( popup ){
        if(popup == "share"){
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

$(document).ready(function(){
  $('.submit-new-post-button').click(function(){
    if(confirm('Are you sure you want to post this?')){
      var newPostText = $('.new-post-text').val();
      var today = new Date();
      $.post('/blog/new', {text: newPostText, date: today}, function(err, success){
        location.reload();
      });
    }
  });
});

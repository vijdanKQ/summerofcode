var commentor;
var comment;	
 
 // Initialize Firebase 
  var config = {
    apiKey: "AIzaSyBzWZHlwDFGSwzhLj1wtZLBKflIzNWGyMM",
    authDomain: "forum-1169f.firebaseapp.com",
    databaseURL: "https://forum-1169f.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  /////////////////////////////////////////////////////////////////////////////////////////
  
  var ref = firebase.database().ref('/topic/'+window.location.hash.replace("#tid=",""));
  var refcomment = firebase.database().ref('/topic/'+window.location.hash.replace("#tid=","")+'/comment');

  ref.on('value',function(snapshot){
            $('#topic_div').append("<b>"+snapshot.val().title+"</b>");
			console.log(snapshot.val());
  });
  
  $("#comment_button").click(function(){
	  //alert('called');
		comment = $("#comment").val();
		commentor = $("#comment_user").val();

		refcomment.push({
			comment:comment,
			comment_user:commentor,
			comment_time:Date.now()
		});
		
		refcomment.on('child_added',function(snapshot){
					$("#comment_container").append("<div>"+snapshot.val().comment+"  posted by - <b>"+ snapshot.val().comment_user+" </b> </div>");
		});
 
		
  });
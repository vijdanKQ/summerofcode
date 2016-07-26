var name; 
var topic;
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzWZHlwDFGSwzhLj1wtZLBKflIzNWGyMM",
    authDomain: "forum-1169f.firebaseapp.com",
    databaseURL: "https://forum-1169f.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  
  var ref = firebase.database().ref('/topic');
  
  
  /*
        //ref.set();
        ref.on('child_added',function(snapshot){
            $('#chat_data').append("<div>"+snapshot.val()+"</div>");
        });
	*/
	ref.on('child_added',function(snapshot){
            $('#topic_container').append("<div><a href='topic.html#tid="+snapshot.key+"'>"+
							snapshot.val().title+"</a>: posted by <b> "+snapshot.val().user+"</b></div>");
	});
  
  $("#submit").click(function(){
		name = $("#name").val();
		topic = $("#topic").val();

		ref.push({
				title:topic,
				user:name,
				timestamp:Date.now()
		});
		
	//$("#submit").append("<div>"++"</div>")
      
  });
  
  
 
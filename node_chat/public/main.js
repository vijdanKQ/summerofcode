var data = [];
var end = 0;
setInterval(loadChat,1000);

$('#submit').click(
	function(){
		var val  = $('#message').val();
		var nick  = $('#person').val();
		data.push(nick+":"+val);
		$('#message').val('');
		save();
		loadChat();
	}
	
);

$('#clear').click(
	function(){
		clearChat();
	}
);
	
function renderJson(){
	    var nick = $('#person').val();
		$('#chat_data').empty();
					
		for(var i=data.length-1; i>=end; i--){
			//alert('called');
			$('#chat_data').append('<div> '+ data[i]+'  </div> ');	
		}
		
}

function save(){
	$.ajax({
			url: '/setTodo', 
			type: 'POST', 
			contentType: 'application/json', 
			data: JSON.stringify(data),
			success:function(res){console.log(res);}
		});
}

function loadChat(){
	
	$.get('/getTodo',function(res){
	data = res;
	renderJson(data);
	console.log(res);
	});
	
}

function clearChat(){
	
	var l = data.length;
	$('#chat_data').empty();
		end = l;
}

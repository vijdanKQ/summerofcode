var data = [];
load();
	
$('#submit').click(
	
	function(){
	var val  = $('#text').val();
	data.push(val);
	renderJson(data);
	$('#text').val('');
	save();
	}
	
);
	
function renderJson(){
	
	$('#container').empty();
	for(var i=0; i<data.length; i++){
		$('#container').append('<div id="'+data[i]+'"> <input type="checkbox" class="todo-checkbox" value='+ data[i]+'  /> <span  class="todo">'+ data[i] +'</span> </div>');
		$('#text').val('');
		$('#'+data[i]).click(
				
				function(){
					$(this).remove();
					var id_val = $(this).attr('id');
					
					for(var j=0; j<data.length; j++){
						if(data[j] == id_val){
							data.splice(j,1);
						}
					}
					save();
				}
			);
	}		
	
}

function save(){
	


$.ajax({
	    url: 'http://datastore.asadmemon.com/vijdan', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(data),
	success:function(res){console.log(res);}
	});
}

function load(){
	//$('#result').val(localStorage.myData);
	//data = JSON.parse(localStorage.myData);
    $.get('http://datastore.asadmemon.com/vijdan',function(res){
	data = res;
	renderJson(data);
	console.log(res);
	});
}



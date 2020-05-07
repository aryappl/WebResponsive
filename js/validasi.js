$(document).ready(function()
{
	$("#send").click(function()
	{
		var name = $("#name");
		var email = $("#email");
		var phone = $("#phone");
		var message = $("#message");
		
		
		if( name =='' ||  phone =='' || email =='')
		{
			
			alert('Please fill all fields...!!!!!!');
		}
		else
		{
				alert('Thank You');
			
		}
	});
	
});


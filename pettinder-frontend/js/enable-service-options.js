const petServices = document.getElementById("services");
petServices.addEventListener('click', enableOptions);

function enableOptions()
{
	let serviceOptions = document.getElementsByClassName("checkable-service-options");
	
	if(petServices.checked)
	{
		for(var i = 0; i < serviceOptions.length; i++)
		{
			serviceOptions[i].removeAttribute("disabled");
		}
	}
	else
	{		
		for(var i = 0; i < serviceOptions.length; i++)
		{
			serviceOptions[i].setAttribute('disabled', true);

			serviceOptions[i].checked = false;
		}
	}
}
// Logic for form validation / pet services

const petOwnership = document.getElementById("pet_owner");
petOwnership.addEventListener('click', enableOptions);

function enableOptions()
{
	const petOptions = document.getElementsByClassName("pet-options");
	const uncheck = document.getElementsByClassName("checkable-pet-options");
	
	if(petOwnership.checked)
	{
		for(var i = 0; i < petOptions.length; i++) petOptions[i].removeAttribute("disabled");
	}
	else
	{		
		for(var i = 0; i < petOptions.length; i++) petOptions[i].setAttribute('disabled', true);
		for(var i = 0; i < uncheck.length; i++) uncheck[i].checked = false;

		document.getElementById("pet_type").value = '';
		document.getElementById("pet_name").value = '';
		document.getElementById("pet_image").value = '';
	}
}
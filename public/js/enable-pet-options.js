// Logic for form validation / pet services

const petOwnership = document.getElementById("pet_owner");
petOwnership.addEventListener('click', enableOptions);

function enableOptions()
{
	//const petOptions = document.getElementsByClassName("pet_owner");
	const uncheck = document.getElementsByClassName("checkable-pet-options");
	console.log("Debug: pet_owner is checked");
	if(petOwnership.checked)
	{
		for(var i = 0; i < uncheck.length; i++) uncheck[i].removeAttribute("disabled");
		document.getElementById("pet_type").removeAttribute("disabled");
		document.getElementById("pet_type").required = this.checked;
		document.getElementById("pet_name").removeAttribute("disabled");
		document.getElementById("pet_name").required = this.checked;
	}
	else
	{		
		document.getElementById("pet_type").setAttribute('disabled', true);
		document.getElementById("pet_name").setAttribute('disabled', true);
		for(var i = 0; i < uncheck.length; i++) uncheck[i].setAttribute('disabled', true);
		for(var i = 0; i < uncheck.length; i++) uncheck[i].checked = false;

		document.getElementById("pet_name").value = '';
	}
}
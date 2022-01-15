// Logic for form validation / pet services

const petOwnership = document.getElementById("pet-owner");
petOwnership.addEventListener('click', enableOptions);

function enableOptions()
{
	const petOptions = document.getElementsByName("pet-options");
	const uncheck = document.getElementsByClassName("checkable-pet-options");
	
	if(petOwnership.checked)
	{
		for(var i = 0; i < petOptions.length; i++) petOptions[i].removeAttribute("disabled");

		document.getElementById("pet-type").required = this.checked;
		document.getElementById("pet-name").required = this.checked;
	}
	else
	{		
		for(var i = 0; i < petOptions.length; i++) petOptions[i].setAttribute('disabled', true);
		
		for(var i = 0; i < uncheck.length; i++) uncheck[i].checked = false;

		document.getElementById("pet-name").value = '';
	}
}
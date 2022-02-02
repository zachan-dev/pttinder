// Logic for form validation / pet services

const petOwnership = document.getElementById("owner");
petOwnership.addEventListener('click', enableOptions);

function enableOptions()
{
	const petOptions = document.getElementsByClassName("pet-options");
	const uncheck = document.getElementsByClassName("checkable-pet-options");
	
	if(petOwnership.checked)
	{
		for(var i = 0; i < petOptions.length; i++) petOptions[i].removeAttribute("disabled");

		document.getElementById("type").required = this.checked;
		document.getElementById("petname").required = this.checked;
		document.getElementById("petPic").required = this.checked;
	}
	else
	{		
		for(var i = 0; i < petOptions.length; i++) petOptions[i].setAttribute('disabled', true);
		for(var i = 0; i < uncheck.length; i++) uncheck[i].checked = false;

		document.getElementById("petname").value = '';
		document.getElementById("type").value = '';
		document.getElementById("petPic").value = '';
	}
}
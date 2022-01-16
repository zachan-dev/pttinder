function validate()
{
	const petServices = document.getElementById("services");
	const checkboxes = document.getElementsByClassName("checkable-service-options");
	var okay = false;

	if(petServices.checked)
	{
		for(var i = 0; i < checkboxes.length; i++)
		{
			if(checkboxes[i].checked)
			{
				okay = true;
				break;
			}
		}

		if(!okay)
		{
			alert("Select at least one service.");
			return false; // Do not submit form if no services selected
		}
	}

	// submit form if okay is true or petServices unchecked.
}
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
				return true;
			}
		}

		if(okay == false)
		{
			alert("Select at least one service.");
			return false; // Do not submit form if no services selected
		}
	}

	// submit form if okay is true or petServices unchecked.
}

// Does not submit if all fields empty
function checkBeforeSearch()
{
	const parameters = document.getElementsByClassName("parameters");

	for(var i = 0; i < parameters.length; i++)
	{
		if(parameters[i].value != '')
		{
			return true;
		}
	}
	return false;
}
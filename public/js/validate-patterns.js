function lettersWithSpace(el)
{
	var regex1 = /[^a-z\s-]/gi;
	var regex2 = /^[\s-]/g;
	el.value = el.value.replace(regex1, "");
	el.value = el.value.replace(regex2, "");
}

function numeric(el)
{
	var regex = /[^\d]/g;
	el.value = el.value.replace(regex, "");
}

function alphanumericWithSpace(el)
{
	var regex1 = /[^a-z\d\s-]/gi;
	var regex2 = /^[\s-]/g;
	el.value = el.value.replace(regex1, "");
	el.value = el.value.replace(regex2, "");
}

function alphanumeric(el)
{
	var regex = /[^a-z\d]/gi
	el.value = el.value.replace(regex, "");
}

function letters(el)
{
	var regex = /[^a-z]/gi;
	el.value = el.value.replace(regex, "");
}
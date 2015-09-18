function Validate() 
{
	if (document.getElenetById('login').value == "") 
	{
		alert("Введите логин");
		document.getElenetById('login').focus();
		return false;
	}
	if (document.getElenetById('mail').value == "")
	{
		alert("Введите правильный е-маил");
		document.getElenetById('mail').focus();
		return false;
	}
	if (document.getElenetById('pass1').value != document.getElenetById('pass2').value) 
	{
		alert("Введите одинаковые пароли");
		document.getElenetById('pass1').focus();
		return false;
	}
	alert("Всё введено верно");
	return true;
}	
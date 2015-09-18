function validate() 
{
	if (document.getElementById('login').value == "") 
	{
		alert("Введите логин");
		document.getElementById('login').focus();
		return false;
	}
	if (document.getElementById('mail').value == "")
	{
		alert("Введите правильный е-маил");
		document.getElementById('mail').focus();
		return false;
	}
	if (document.getElementById('pass1').value != document.getElementById('pass2').value) 
	{
		alert("Введите одинаковые пароли");
		document.getElementById('pass1').focus();
		return false;
	}
	alert("Всё введено верно");
	document.getElementById('submit').submit();
	return true;
}	
function validateEmail(email) 
{
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email)) 
	{
		return false;
	}
	var start=0;
	while (email.indexOf('.',start)>=0) 
	{
		if (start==email.indexOf('.',start)) 
		{
			return false;
		}
		start=email.indexOf('.',start)+1;
	}
	return true;
}

function Validate(form) 
{
	if (form.login.value == "") 
	{
		alert("Введите логин");
		form.fio.focus();
		return false;
	}
	if (form.mail.value == "")
	{
		alert("Введите правильный е-маил");
		form.mail.focus();
		return false;
	}
	if (form.pass1.value != form.pass2.value) 
	{
		alert("Введите одинаковые пароли");
		form.pass1.focus();
		return false;
	}
	alert("Всё введено верно");
	return true;
}	
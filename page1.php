<html>
	<head>
		<title>Проверка</title>
    <meta charset="utf-8">
	</head>
	<body>
    Вы зарегистрированы, введите данные:<br>
    Ваш логин: <? echo $_REQUEST['login']; ?> <br>
    Ваш е-маил: <? echo $_REQUEST['mail']; ?> <br>
    Ваш пароль: <? echo $_REQUEST['pass1']; ?> <br>
    <?
      $dblocation = "localhost"; //Имя сервера
      $dbuser = "root"; //Имя пользователя
      $dbpasswd = "1"; //Пароль
      $dbname="my_bd";
      $dbcnx = @ mysql_connect($dblocation, $dbuser, $dbpasswd);
      if (!$dbcnx) //Если дескриптор равен 0, соединение не установлено
      {
        //Выводим предупреждение
        echo("<P>B настоящий момент сервер базы данных не доступен, поэтому корректное отображение страницы невозможно.</Р>");
        exit ();
      }
      if (! @mysql_select_db($dbname, $dbcnx)) 
      {
        //Выводим предупреждение
        echo("<P> B настоящий момент база данных недоступна, поэтому корректное отображение страницы невозможно. </Р>");
        exit();
      }
      //обработка операции добавления записи
      $sql="insert into users (id, login, mail, password) values(0,'${_REQUEST["login"]}','${_REQUEST["mail"]}','${_REQUEST["pass1"]}')";
      $do_insert = mysql_query($sql) or die("Insert_Error:". mysql_error());
    ?>
	</body>
</html>

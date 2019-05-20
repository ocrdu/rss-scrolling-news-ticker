<?
   ini_set('user_agent', 'news-ticker/1.0');
   header("Content-type: text/xml");
   echo file_get_contents($_GET["feed"],0);
?>
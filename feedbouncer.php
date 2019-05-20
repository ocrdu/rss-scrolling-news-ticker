<?
   header("Content-type: text/xml");
   echo file_get_contents($_GET["feed"],0);
?>
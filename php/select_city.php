<?php
$con = mysql_connect('lab01pri.mysql.ukraine.com.ua', 'lab01pri_sweet', 'h4hrc7zj');
mysql_select_db("lab01pri_sweet", $con);
mysql_set_charset('utf8',$con);

$region = $_GET['region'];
$sql = "SELECT name, value FROM uygks_city_form WHERE code = '{$region}'";
$result = mysql_query($sql, $con);
$cities = array();

if (!$result) {
    echo "Could not successfully run query ($sql) from DB: " . mysql_error();
   	exit;
}

while ($row = mysql_fetch_assoc($result)) {

  $cities[] = $row;
}

#print_r($cities);
echo (json_encode($cities));

mysql_close($con);
?>
<?php
$conn = null;
$conn = checkDbConnection();
$clothes = new Clothes($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("clothesid", $_GET)) {
    checkPayload($data);

    $clothes->clothes_aid = $_GET['clothesid'];
    $clothes->clothes_image = checkIndex($data, "clothes_image");
    $clothes->clothes_image2 = checkIndex($data, "clothes_image2");
    $clothes->clothes_title = checkIndex($data, "clothes_title");
    $clothes->clothes_category_id = checkIndex($data, "clothes_category_id");
    $clothes->clothes_price = checkIndex($data, "clothes_price");

    $clothes->clothes_datetime = date("Y-m-d H:i:s");
    $clothes_name_old = checkIndex($data, 'clothes_name_old');
    compareName($clothes, $clothes_name_old, $clothes->clothes_title);
    checkId($clothes->clothes_aid);

    $query = checkUpdate($clothes);
    returnSuccess($clothes, "clothes", $query);
}

checkEndpoint();
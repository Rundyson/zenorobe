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
    $clothes->clothes_prep_time = checkIndex($data, "clothes_prep_time");

    $clothes->clothes_datetime = date("Y-m-d H:i:s");
    $clothes_title_old = strtolower($data["clothes_title_old"]);
    // checkId($clothes->clothes_aid);
    compareName($clothes, $clothes_title_old, $clothes->clothes_title);

    $query = checkUpdate($clothes);
    returnSuccess($clothes, "clothes", $query);
}

checkEndpoint();
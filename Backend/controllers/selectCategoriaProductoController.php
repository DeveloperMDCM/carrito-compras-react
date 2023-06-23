<?php
include './header.php';
require './Models/selectCategoriaProductoModel.php';
$creadorOrden= new selectCategoriaProductoModel();
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        $respuesta = (!isset($_GET['limite'])) ? 
        $creadorOrden->getCategorias() : 
        $creadorOrden->getCategorias($_GET['limite']);
            echo json_encode($respuesta);
    break;
}
<?php
include './header.php';
require './Models/productoModel.php';
$administradoresModel= new productosModel();
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        $respuesta = (!isset($_GET['limite']) || !isset($_GET['categoria'])) ? $administradoresModel->getAdmins() : $administradoresModel->getAdmins($_GET['limite'], $_GET['categoria']);
            echo json_encode($respuesta);
    break;

    case 'POST':
        $_POST = json_decode(file_get_contents('php://input',true));
          if(!isset($_POST->nombre) || is_null($_POST->nombre) || empty(trim($_POST->nombre)) ) {
            $respuesta= ['error','El nombre no debe estar vacio'];
        }
        else if(!isset($_POST->description) || is_null($_POST->description) || empty(trim($_POST->description))){
            $respuesta= ['error','La description no debe estar vacia'];
        }
        else if(!isset($_POST->foto)){
            $respuesta= ['error','Foto vacia'];
        }
        else if(!isset($_POST->unidadmedida) || is_null($_POST->unidadmedida) || empty(trim($_POST->unidadmedida))){
            $respuesta= ['error','La uninidad de medida no puede estar vacia'];
        }
        else if(!isset($_POST->referencia) || is_null($_POST->referencia) || empty(trim($_POST->referencia))){
            $respuesta= ['error','La referencia no puede estar vacia'];
        }
        else if(!isset($_POST->marca) || is_null($_POST->marca) || empty(trim($_POST->marca))){
            $respuesta= ['error','La marca no debe estar vacia'];
        }
        else if(!isset($_POST->cantidad) || is_null($_POST->cantidad) || empty(trim($_POST->cantidad)) || !is_numeric($_POST->cantidad) || strlen($_POST->cantidad) > 10){
            $respuesta= ['error','La cantidad no debe estar vacia'];
        }
        else if(!isset($_POST->id_administrador) || is_null($_POST->id_administrador) || empty(trim($_POST->id_administrador))){
            $respuesta= ['error','Rol invalido'];
        }
        else if(!isset($_POST->categoriaId) || is_null($_POST->categoriaId) || empty(trim($_POST->categoriaId))){
            $respuesta= ['error','Seleccione un usuario'];
        }
        else{
            $respuesta = $administradoresModel->saveAdmins($_POST->nombre,$_POST->description,$_POST->foto,$_POST->unidadmedida, $_POST->referencia, $_POST->marca,$_POST->cantidad,$_POST->id_administrador,$_POST->categoriaId);
        }
        echo json_encode($respuesta);
    break;

    case 'PUT':
        $_PUT= json_decode(file_get_contents('php://input',true));
        if(!isset($_PUT->id) || is_null($_PUT->id) || empty(trim($_PUT->id))){
                        $respuesta= ['error','El nombre no debe estar vacio'];
        }
        else if(!isset($_PUT->nombre) || is_null($_PUT->nombre) || empty(trim($_PUT->nombre))) {
                       $respuesta= ['error','La description no debe estar vacia'];
        }
        else if(!isset($_PUT->description) || is_null($_PUT->description) || empty(trim($_PUT->description))){
                        $respuesta= ['error','El precio no debe estar vacio'];
        }
        else if(!isset($_PUT->foto)){
            $respuesta= ['error','Foto vacia'];
        }
        else if(!isset($_PUT->unidadmedida) || is_null($_PUT->unidadmedida) || empty(trim($_PUT->unidadmedida) ) ){
                        $respuesta= ['error','La referencia no puede estar vacia'];
        }
        else if(!isset($_PUT->referencia) || is_null($_PUT->referencia) || empty(trim($_PUT->referencia))){
                        $respuesta= ['error','La marca no debe estar vacia'];
        }
        else if(!isset($_PUT->marca) || is_null($_PUT->marca) || empty(trim($_PUT->marca))){
                        $respuesta= ['error','La cantidad no debe estar vacia'];
        }
        else if(!isset($_PUT->cantidad) || is_null($_PUT->cantidad) || empty(trim($_PUT->cantidad))){
                        $respuesta= ['error','Rol invalido'];
        }
        else if(!isset($_PUT->id_administrador) || is_null($_PUT->id_administrador) || empty(trim($_PUT->id_administrador))){
                        $respuesta= ['error','Seleccione un usuario'];
        }
        else if(!isset($_PUT->categoriaId) || is_null($_PUT->categoriaId) || empty(trim($_PUT->categoriaId))){
                        $respuesta= ['error','Seleccione un usuario'];
        }
        else{
            $respuesta = $administradoresModel->updateAdmins($_PUT->id,$_PUT->nombre,$_PUT->description,$_PUT->foto,$_PUT->unidadmedida, $_PUT->referencia, $_PUT->marca,$_PUT->cantidad,$_PUT->id_administrador,$_PUT->categoriaId);
        }
        echo json_encode($respuesta);
    break;

    case 'DELETE';
        $_DELETE= json_decode(file_get_contents('php://input',true));
        if(!isset($_DELETE->id) || is_null($_DELETE->id) || empty(trim($_DELETE->id))){
            $respuesta= ['error','El ID del producto no debe estar vacío'];
        }
        else{
            $respuesta = $administradoresModel->deleteAdmins($_DELETE->id);
        }
        echo json_encode($respuesta);
    break;
}
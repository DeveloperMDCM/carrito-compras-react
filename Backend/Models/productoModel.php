<?php
class productosModel{
    public $conexion;
    public function __construct(){
        $this->conexion = new mysqli('localhost','root','','tienda_artesanias');
        mysqli_set_charset($this->conexion,'utf8');
        
    }

    public function getAdmins($limite=15, $categoria=''){       
        if($limite>0 && is_numeric($limite) && $categoria>0 && is_numeric($categoria)){
            
            if($limite === 15) {
                $where = "WHERE  productos.categoriaId = $categoria LIMIT $limite";
            } 
            else {
                $where = ($limite === ''  || $limite != is_numeric($limite)) ? "WHERE  productos.categoriaId = $categoria" : "WHERE  productos.categoriaId = $categoria LIMIT $limite";
            } 
        }else if($limite>0 && is_numeric($limite) || $categoria>0 && is_numeric($categoria)) {
         
            $where = ($limite >0 ) ? "LIMIT $limite" : "WHERE  productos.categoriaId = $categoria";
        }else {
            $where = '';
        }
        $sql="SELECT * FROM productos ".$where;
        $username = "SELECT productos.categoriaId, categoria_producto.categoria FROM productos INNER JOIN categoria_producto ON categoria_producto.id = productos.categoriaId ". $where;
        $registros = mysqli_query($this->conexion,$sql);
        $registos2 = mysqli_query($this->conexion,$username);
        if(mysqli_num_rows($registros) > 0){
            while($row = mysqli_fetch_assoc($registros)){
            $login = mysqli_fetch_assoc($registos2);
            $viewjson["id"] = floatval($row['id']);
            $viewjson["nombre"] = $row['nombre'];
            $viewjson["description"] = $row['description'];
            $viewjson["foto"] = $row['foto'];
            $viewjson["foto_uno"] = $row['foto_uno'];
            $viewjson["foto_dos"] = $row['foto_dos'];
            $viewjson["foto_tres"] = $row['foto_tres'];
            $viewjson["quantity"] = floatval($row['quantity']);
            $viewjson["cantidad"] = floatval($row['cantidad']);
            $viewjson["precio"] =  floatval($row['precio']);
            $viewjson["rating"] =  ($row['rating']);
            $viewjson["categoriaId"] =  ($row['categoriaId']) ;
            $viewjson["categorias"]   = $login;
            $json_array['productos'][] = ($viewjson);
    }
    return  $json_array;
    }
    
    else {
      return  $json_array = 'sin resultados';
    }
}
  
    public function saveAdmins($nombre,$description,$foto,$unidadmedida,$referencia,$marca,$cantidad,$id_administrador,$categoriaId){
       
        $valida = $this->validateAdmins($nombre,$description,$foto,$unidadmedida,$referencia,$marca,$cantidad,$id_administrador,$categoriaId);
            if(count($valida)==0){
                $sql="INSERT INTO `productos` (`id`, `nombre`, `description`, `foto`, `unidadmedida`, `referencia`, `marca`, `cantidad`, `active`, `creacion`, `actualizacion`, `id_administrador`, `categoriaId`)  VALUES(null,'$nombre','$description','$foto','$unidadmedida','$referencia', '$marca', '$cantidad', '1' ,current_timestamp(), current_timestamp() , '$id_administrador','$categoriaId')";
                mysqli_query($this->conexion,$sql);
                $resultado=['success','Producto registrado'];
            
        }
        return $resultado;
    }

    public function updateAdmins($id,$nombre,$description,$foto,$unidadmedida,$referencia,$marca,$cantidad,$id_administrador,$categoriaId){
        $existe= $this->getAdmins($id);
        $resultado=['error','No existe el administrador con ID '.$id];
        if(count($existe)>0){
            $valida = $this->validateAdmins($nombre,$description,$foto,$unidadmedida,$referencia,$marca,$cantidad,$id_administrador,$categoriaId);
            $resultado=['error','Producto sin cambios nue'];
            if(count($valida)==0){
                $sql="UPDATE productos SET nombre='$nombre', description='$description',foto='$foto',unidadmedida='$unidadmedida',referencia='$referencia',marca='$marca',cantidad='$cantidad',id_administrador='$id_administrador', categoriaId='$categoriaId' WHERE id='$id' ";
                mysqli_query($this->conexion,$sql);
                $resultado=['success','Administrador actualizado'];
            }
        }
        return $resultado;
    }
    
    public function deleteAdmins($id){
        $valida = $this->getAdmins($id);
        $resultado=['error','No existe el producto con ID '.$id];
        if(count($valida)>0){
            $sql="DELETE FROM productos WHERE id='$id' ";
            mysqli_query($this->conexion,$sql);
            $resultado=['success','producto eliminado'];
        }
        return $resultado;
    }
    
    public function validateAdmins($nombre,$description,$foto,$unidadmedida,$referencia,$marca,$cantidad,$id_administrador,$categoriaId){
        $products=[];
        $sql="SELECT * FROM productos WHERE nombre='$nombre' AND description='$description'  AND foto='$foto' AND unidadmedida='$unidadmedida' AND referencia='$referencia' AND marca='$marca' AND cantidad='$cantidad' AND id_administrador='$id_administrador' AND categoriaId='$categoriaId' ";
        $registos = mysqli_query($this->conexion,$sql);
        while($row = mysqli_fetch_assoc($registos)){
            array_push($products,$row);
        }
        return $products;
    }
}
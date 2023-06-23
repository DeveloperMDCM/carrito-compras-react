<?php
require './vendor/autoload.php';

use Firebase\JWT\JWT;

class JwtHandler
{
    protected $jwt_secrect;
    protected $token;
    protected $issuedAt;
    protected $expire;
    protected $jwt;

    public function __construct()
    {
        // set your default time-zone
        date_default_timezone_set('America/Bogota');
        $this->issuedAt = time();

        // Token valido por 5  dias
        $this->expire = $this->issuedAt + 432000;

        // Set your secret or signature
        $this->jwt_secrect = "palabrasupersecreta";
    }

    public function jwtEncodeData($data)
    {

        $this->token = array(
            //Adding the identifier to the token (who issue the token)
            // "iss" => $iss,
            // "aud" => $iss,
            "iat" => $this->issuedAt,
            // Token expiration
            "exp" => $this->expire,
            // Payload
            "data" => $data,
           
        );

        $this->jwt = JWT::encode($this->token, $this->jwt_secrect, 'HS256');
        return $this->jwt;
    }

    public function jwtDecodeData($jwt_token)
    {
        try {
            $decode = JWT::decode($jwt_token, $this->jwt_secrect, array('HS256'));
            return [
                "data" => $decode->data
            ];
        } catch (Exception $e) {
            return [
                "message" => $e->getMessage()
            ];
        }
    }
}
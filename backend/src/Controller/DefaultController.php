<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class DefaultController
{
    public function index()
    {
        $number = ['number'=>random_int(0, 100)];
        
    
        return new JsonResponse($number);
    }
}
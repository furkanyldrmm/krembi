<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class pageController extends Controller
{
   function    detayResponse($id){

       return view('detay');

}
}

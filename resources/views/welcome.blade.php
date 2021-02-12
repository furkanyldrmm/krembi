<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" href="{{asset('css/add.css')}}">

        <!-- Styles -->

    </head>
    <body>
      <div id="app">
          <navbar></navbar>
          <div class="container">
              <router-view></router-view>
          </div>

<footer-vue></footer-vue>
      </div>
    </body>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="{{asset('js/add.js')}}"></script>
<script src="{{asset('js/app.js')}}"></script>
</html>

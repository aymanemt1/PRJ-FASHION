<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function userLogin(Request $request) {
        $credentials = $request->only('email', 'password');
    
        if (Auth::attempt($credentials)) {
            
            return response()->json([
                'msg' => 'You are logged in successfully',
                'user' => Auth::user(),
            ]);
        } else {
           
            return response()->json([
                'msg' => 'Login failed',
            ]);
        }
    }

    
    public function UserRegister(Request $request){
       $UserCreat = User::create([
            'first_name' => $request->input('firstname'),
            'last_name' => $request->input('lastname'),
            'email' => $request->input('emailregister'),
            'password' => Hash::make($request->input('passwordregister')),
        ]);
        if ($UserCreat) {
            
            return response()->json([
                'msg' => 'You are Registered with successfully',
                'user' => $UserCreat,
            ]);
        } else {
           
            return response()->json([
                'msg' => 'Something wrong !!',
            ]);
        }
        
           
        }

        public function GetUsers(){
          $users = User::all();  
          return response()->json($users);
        }
      
}

       

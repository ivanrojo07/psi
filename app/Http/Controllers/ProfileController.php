<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Perfil\RequestCreate;
use App\Http\Requests\Perfil\RequestUpdate;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = Auth::user();
        return Inertia::render('Profile/Show',['user'=>$user, 'profile'=>$user->profile]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $profile = new Profile();
        return Inertia::render('Profile/Form',['profile'=>$profile, 'title'=>'Crea tu Perfil', 'method'=>'POST']);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RequestCreate $request)
    {
        //
        $profile = new Profile($request->all());
        $user = Auth::user();
        $user->profile()->save($profile);
        return redirect()->route('dashboard');
    }

    

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Profile $profile)
    {
        return Inertia::render('Profile/Form', ['profile'=>$profile, 'title'=>'Editar tu Perfil', 'method'=>'PUT']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(RequestUpdate $request,Profile $profile)
    {
        //
        $profile->update($request->all());
        return redirect()->route('profile.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

<?php

namespace App\Http\Requests\Perfil;

use Illuminate\Foundation\Http\FormRequest;

class RequestCreate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'f_last_name' => ['required', 'string'],
            'm_last_name' => ['nullable', 'string'],
            'birthday' => ['required', 'date'],
            'phone' => ['nullable', 'digits:10'],
            'mobile_phone' => ['nullable', 'digits:10']
        ];
    }
}

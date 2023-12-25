<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class requestAddTocart extends FormRequest
{
 
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'size'=>'required'
        ];
    }
    public function messages()
    {
        return [
            'size.required'=>'chose a size please !!'
        ];
    }
}

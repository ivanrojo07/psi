import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, useForm } from '@inertiajs/inertia-react';
import Label from '@/Components/Label';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import ValidationErrors from '@/Components/ValidationErrors';

export default function Form(props) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: props.profile.name ? props.profile.name : '',
        f_last_name: props.profile.f_last_name ? props.profile.f_last_name : '',
        m_last_name: props.profile.m_last_name ? props.profile.m_last_name : '',
        birthday: props.profile.birthday ? props.profile.birthday : '',
        phone: props.profile.phone ? props.profile.phone : '',
        mobile_phone: props.profile.mobile_phone ? props.profile.mobile_phone : ''
    });
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        if (props.method === "POST") {
            post(route('profile.store'));
        }
        else {
            put(route('profile.update', [props.profile]));
        }
    }
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">{props.title}</h2>
            }
        >
            <Head title="Profile" />
            <ValidationErrors errors={errors} />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            This information will be displayed for information from the pacient and doctor.
                        </p>
                    </div>
                    <div className="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <form onSubmit={submit}>

                            <div>
                                <Label className="hover:font-semibold" for="name" value="Name" />

                                <Input id="name" className="block mt-1 w-full" type="text" name="name" value={data.name} handleChange={onHandleChange} isFocused={true} required />
                            </div>
                            <div>
                                <Label className="hover:font-semibold" for="f_last_name" value="Fatherast Name" />

                                <Input id="f_last_name" className="block mt-1 w-full" type="text" name="f_last_name" value={data.f_last_name} handleChange={onHandleChange} required />
                            </div>
                            <div>
                                <Label className="hover:font-semibold" for="m_last_name" value="Motherast Name" />

                                <Input id="m_last_name" className="block mt-1 w-full" type="text" name="m_last_name" value={data.m_last_name} handleChange={onHandleChange} required />
                            </div>
                            <div>
                                <Label className="hover:font-semibold" for="birthday" value="Birthday" />

                                <Input id="birthday" className="block mt-1 w-full" type="date" name="birthday" value={data.birthday} handleChange={onHandleChange} required />
                            </div>
                            <div>
                                <Label className="hover:font-semibold" for="phone" value="Phone Number" />

                                <Input id="phone" className="block mt-1 w-full" type="tel" pattern="[0-9]{10}" name="phone" value={data.phone} handleChange={onHandleChange} />
                            </div>
                            <div>
                                <Label className="hover:font-semibold" for="mobile_phone" value="Mobile Phone Number" />

                                <Input id="mobile_phone" className="block mt-1 w-full" type="tel" pattern="[0-9]{10}" name="mobile_phone" value={data.mobile_phone} handleChange={onHandleChange} />
                            </div>
                            {
                                props.method === "POST" 
                                &&
                                (<div>
                                    <Label className="hover:font-semibold" for="type" value="Type of user" />
                                    <select name="type" id="type" className='border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full'>
                                       {
                                           Object.keys(props.types).map((key) => <option value={key} >{props.types[key]}</option>)
                                       }
                                    </select>
                                </div>)
                                
                            }

                            <div className="flex items-center justify-end mt-4">
                                <Button className="ml-3" processing={processing}>
                                    {props.method === "POST" ? "Save" : "Edit"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
        </Authenticated>
    )
}
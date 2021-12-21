<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Create Profile') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <x-card>
                        <x-slot name="title">
                            <h3 class="font-sans hover:font-semibold text-3xl">
                                {{$title}}
                            </h3>
                        </x-slot>
                        <!-- Session Status -->
                        <x-auth-session-status class="mb-4" :status="session('status')" />

                        <!-- Validation Errors -->
                        <x-auth-validation-errors class="mb-4" :errors="$errors" />
                        <form action="{{ route('profile.store') }}" method="POST">
                            @csrf

                            <!-- Name  -->
                            <div>
                                <x-label class="hover:font-semibold" for="name" :value="__('Name')" />

                                <x-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name') ? old('name') : $profile->name" required />
                            </div>
                            <!-- f_last_name  -->
                            <div>
                                <x-label class="hover:font-semibold" for="f_last_name" :value="__('Father Last Name')" />

                                <x-input id="f_last_name" class="block mt-1 w-full" type="text" name="f_last_name" :value="old('f_last_name') ? old('f_last_name') : $profile->f_last_name" required />
                            </div>
                            <!-- m_last_name  -->
                            <div>
                                <x-label class="hover:font-semibold" for="m_last_name" :value="__('Mother Last Name')" />

                                <x-input id="m_last_name" class="block mt-1 w-full" type="text" name="m_last_name" :value="old('m_last_name') ? old('m_last_name') : $profile->m_last_name" required />
                            </div>
                            <!-- birthday  -->
                            <div>
                                <x-label class="hover:font-semibold" for="birthday" :value="__('Birthday')" />

                                <x-input id="birthday" class="block mt-1 w-full" type="date" name="birthday" :value="old('birthday') ? old('birthday') : $profile->birthday" required />
                            </div>
                            <!-- phone  -->
                            <div>
                                <x-label class="hover:font-semibold" for="phone" :value="__('Phone Number')" />

                                <x-input id="phone" class="block mt-1 w-full" type="tel" pattern="[0-9]{10}" name="phone" :value="old('phone') ? old('phone') : $profile->phone" />
                            </div>
                            <!-- mobile_phone  -->
                            <div>
                                <x-label class="hover:font-semibold" for="mobile_phone" :value="__('Mobile Phone Number')" />

                                <x-input id="mobile_phone" class="block mt-1 w-full" type="tel" pattern="[0-9]{10}" name="mobile_phone" :value="old('mobile_phone') ? old('mobile_phone') : $profile->mobile_phone" />
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <x-button class="ml-3">
                                    {{ __('Save') }}
                                </x-button>
                            </div>
                        </form>
                    </x-card>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

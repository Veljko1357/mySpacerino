<template>
    <header class="bg-indigo-600 h-[120px]">
        <nav
            class="mx-auto flex flex-col max-w-7xl items-center justify-between p-6 lg:px-8 h-full"
            aria-label="Global"
        >
            <div class="flex flex-row w-full items-center justify-between">
                <div class="flex-1 items-center justify-start">
                    <inertia-link :href="`/profiles`">
                        <h1 class="text-xl text-white font-semibold">MySpacerino</h1>
                    </inertia-link>
                </div>
                <div class="w-full lg:w-auto flex flex-1 justify-center items-center">
                    <form class="search flex items-center w-full" @submit.prevent="handleSearch">
                        <label
                            for="search"
                            class="text-sm font-semibold text-white mr-2 whitespace-nowrap"
                        >Search Users:</label>
                        <input
                            ref="searchInput"
                            type="text"
                            class="search-input border rounded p-1 mr-2 flex-1"
                            autocomplete="off"
                        />
                        <button
                            type="submit"
                            class="text-sm font-semibold text-white border rounded p-1"
                        >Search</button>
                    </form>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div class="flex flex-col items-end ml-4">
                        <h1
                            class="text-sm font-semibold text-white"
                        >{{ $page.props.auth.user.name }}</h1>
                        <form @submit.prevent="logout">
                            <button
                                class="bg-white px-4 py-1 rounded text-indigo-600"
                            >Logout</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 w-full justify-center mt-0">
                <ul class="header-list flex gap-x-4">
                    <li><inertia-link :href="`/profiles`">Home</inertia-link></li>
                    <li><inertia-link :href="`/profiles/display/1`">Browse</inertia-link></li>
                    <li><inertia-link :href="`/blogs`">Blog</inertia-link></li>
                    <li><a href="#" class="text-sm font-semibold text-white">About</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script setup>
import { ref } from 'vue'
import {router} from "@inertiajs/vue3";
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import {InertiaLink} from "@inertiajs/inertia-vue3";
import {Inertia} from "@inertiajs/inertia";

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Browse', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Art', href: '#' },
]


const searchInput = ref(null);

const handleSearch = async () => {
    const username = searchInput.value;
    if (!username) return;

    try {
        // Redirect to the profile's show page based on their username
        router.push({ name: 'profiles.show', params: { identifier: username } });
    } catch (error) {
        console.error('Error fetching user ID:', error);
    }
};



const logout = () => {
    router.post(route('logout'));
};
</script>

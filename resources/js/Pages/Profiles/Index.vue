<script setup>
import bodycss from "../../../css/body.css";
import { defineProps} from 'vue';
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink} from "@inertiajs/inertia-vue3";
import { computed } from 'vue';
import Header from "@/Components/Header.vue";

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    profiles: {
        type: Array,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    profile_picture: {
        type: String,
    },
    blogs: {
        type: Array,
        default: () => [],
    },
    randomProfiles: {
        type: Array,
        required: true,
    },
    profile: {
        type: Object
    },
    user: {
        type: Object,
        required: true,
    }


});




const truncate = (text, maxWords) => {              //Limits the blog text length
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
};

function viewAllBlogs() {
    this.$inertia.visit(`/profile/${props.id}/blogs`);
};

</script>

<template class="container">

    <Header>
    </Header>
    <div class="bg-gray-100 min-h-screen py-8">
        <div class="mx-auto max-w-7xl">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                <div class="border-2 border-[#60A5FA] rounded w-[350px] h-[275px]">
                    <div class="bg-[#60A5FA] h-[24px] ta-center"> <h1>Hello, {{  username ? username : user.name  }}!</h1>  </div>
                    <div class="flex items-center p-4">
                        <div class="w-1/3">
                            <img :src="props.profile_picture ? `/images/${profile_picture}` : '/images/placeholder.png'" alt="Profile picture" class="rounded w-32 h-32">
                        </div>
                        <div class="w-2/3 pl-16 space-y-2">
                            <p><inertia-link :href="`/profiles/${props.id}/edit`">Edit Profile</inertia-link></p>
                            <p><inertia-link :href="`/statuses/${props.id}/edit`">Edit Status</inertia-link></p>
                            <p><inertia-link :href="`/profiles/${props.id}/upload`">Add/Edit Photo</inertia-link></p>
                            <p><inertia-link :href="`/users/${props.id}/edit`">Account Settings</inertia-link></p>

                        </div>
                    </div>
                    <div class="px-4 pb-4">
                        <p>View my: <inertia-link :href="`/profiles/${props.id}/show`">Profile</inertia-link> or <inertia-link :href="'/blogs'">Blog</inertia-link></p>
                        <p>Link to my profile: <a :href="`/profiles/${props.id}/show`">/profiles/{{props.id}}/show</a></p>
                    </div>
                </div>
                    <div class="border-2 border-[#60A5FA] rounded w-[350px] h-[738px] mt-8">
                        <div class="bg-[#60A5FA] h-[24px] flex justify-between items-center px-4">
                            <span class="text-white">Cool new people</span>
                            <inertia-link :href="'/profiles/display/1'" class="text-white">[view more]</inertia-link>

                        </div>
                        <div class="grid grid-cols-2 gap-4 p-4">
                            <div v-for="profile in randomProfiles" :key="profile.id" class="flex flex-col items-center space-y-2">
                                <inertia-link :href="`/profiles/${profile.id}/show`">
                                    <span>{{ profile.username }}</span>
                                </inertia-link>
                                <inertia-link :href="`/profiles/${profile.id}/show`">
                                    <img :src="profile.profile_picture" alt="profile-picture" class="rounded w-20 h-20">
                                </inertia-link>
                            </div>
                        </div>
                    </div>
                </div>





                <div>
                    <div class="border-2 border-[#60A5FA] overflow-y-auto mt-[-10px] md:mt-0">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl">
                                <div class="flex justify-between items-center pt-2 pb-4">
                                    <p class="text-xl relative top-2">Your blog entries</p>
                                    <p class="text-xl relative top-2"><inertia-link :href="`/blogs/create`">[new entry]</inertia-link></p>
                                </div>
                                <div class="mt-0 sm:mt-16">
                                    <article v-for="(blog, index) in blogs.slice(0, 6)" :key="blog.id" class="flex max-w-xl flex-col items-start justify-between">

                                        <template v-if="index !== 0">
                                            <div class="border-t border-gray-200 w-full "></div>
                                        </template>

                                        <div class="group relative">
                                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                                <span class="absolute inset-0" />
                                                {{ blog.title }}

                                            </h3>
                                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ truncate(blog.text, 25) }}...</p>
                                        </div>

                                    </article>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" @click="viewAllBlogs">View All</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>


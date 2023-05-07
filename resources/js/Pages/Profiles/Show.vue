<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
</script>



<template class="container">
    <Header></Header>
    <div class="w-full bg-gray-100 max-w-50em mx-auto">
        <div class="flex">
            <div class="w-1/2 pr-4">
                <div class="text-xl font-bold">{{ profile.username }}</div>
                <div>
                    <inertia-link :href="'/profiles/' + profile.id + '/edit'">[edit username]</inertia-link>
                    <inertia-link :href="'/profiles/' + profile.id + '/upload'">[edit photo]</inertia-link>
                </div>
                <div class="flex items-center">
                    <img v-if="profile.profile_picture" :src="'/images/' + profile.profile_picture" alt="Profile Picture" class="w-48 h-48 object-cover">
                    <img v-else src="/images/placeholder.png" alt="Profile Picture" class="w-48 h-48 object-cover">                    <div class="ml-4">
                        <div>
                            <inertia-link :href="'/statuses/' + profile.id + '/edit'">[edit]</inertia-link>
                        </div>
                        <div>
                            Status: {{status.status}}
                            <br>
                            Mood: {{status.mood}}
                            <br>
                            {{status.about_you}}
                        </div>
                    </div>
                </div>
                <div class="border p-4 my-4">
                    My Url: {{ url }}
                </div>
                <div class="border p-4 my-4">
                    <div class="border-b-2 pb-2 font-semibold">{{ profile.username }}'s Interests</div>
                    <table class="w-full">
                        <tr>
                            <td class="bg-gray-200 text-blue-700 px-4 py-2">General:</td>
                            <td class="bg-gray-700 text-white px-4 py-2">{{ profile.general_interests }}</td>
                        </tr>
                        <tr>
                            <td class="bg-gray-200 text-blue-700 px-4 py-2">Music:</td>
                            <td class="bg-gray-700 text-white px-4 py-2">{{ profile.music }}</td>
                        </tr>
                        <tr>
                            <td class="bg-gray-200 text-blue-700 px-4 py-2">Movies:</td>
                            <td class="bg-gray-700 text-white px-4 py-2">{{ profile.movies }}</td>
                        </tr>
                        <tr>
                            <td class="bg-gray-200 text-blue-700 px-4 py-2">Television:</td>
                            <td class="bg-gray-700 text-white px-4 py-2">{{ profile.series }}</td>
                        </tr>
                        <tr>
                            <td class="bg-gray-200 text-blue-700 px-4 py-2">Books:</td>
                            <td class="bg-gray-700 text-white px-4 py-2">{{ profile.books }}</td>
                        </tr>
                        <tr>
                            <td class="bg-gray-200 text-blue-700 px-4 py-2">Heroes:</td>
                            <td class="bg-gray-700 text-white px-4 py-2">{{ profile.heroes }}</td>
                        </tr>
                    </table>
                    <div class="text-right mt-2">
                        <inertia-link :href="'/profiles/' + profile.id + '/edit'">[edit]</inertia-link>
                    </div>
                </div>
                <div class="border p-4 my-4">
                    <div class="border-b-2 pb-2 font-semibold">{{ profile.username }}'s Blurbs</div>
                    <div>
                        About me:<br>
                        {{ profile.bio }}<br>
                        <inertia-link :href="'/profiles/' + profile.id + '/edit'">[edit]</inertia-link>
                    </div>
                    <div>
                        Who I'd like to meet and what I'd like to do:<br>
                        {{ profile.bucket_list }}<br>
                        <inertia-link :href="'/statuses/' + profile.id + '/edit'">[edit]</inertia-link>
                    </div>
                </div>
            </div>
            <div class="w-1/2 pl-4">
                <div class="border p-4 my-4">
                    <inertia-link :href="'/profiles/' + profile.id + '/edit'">Edit Profile</inertia-link>
                </div>
                <div>
                    <div class="border-2 border-[#60A5FA] overflow-y-auto mt-[-10px] md:mt-0">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl">
                                <div class="flex justify-between items-center pt-2 pb-4">
                                    <p class="text-xl relative top-2">Your blog entries</p>
                                    <p class="text-xl relative top-2">[new entry]</p>
                                </div>
                                <div class="mt-0 sm:mt-16">
                                    <article v-for="(blog, index) in blogs" :key="blog.id" class="flex max-w-xl flex-col items-start justify-between">

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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/Components/Header.vue";
import bodycss from "../../../css/body.css";


export default {
    components: {Header},

    props: {
        profile: Object,
        blogs: Array,
        status: Object,
        profile_picture: String,
        url: String,
    }
};


const truncate = (text, maxWords) => {              //Limits the blog text length
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
};
</script>

<template>
    <div>
        <Header></Header>
        <div class="container mx-auto px-4">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight my-4">Create Blog</h2>

            <div>
                <form @submit.prevent="createBlog" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                        <input type="text" id="title" v-model="title" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>

                    <div class="mb-4">
                        <label for="text" class="block text-gray-700 text-sm font-bold mb-2">Content:</label>
                        <textarea id="text" v-model="content" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"></textarea>
                    </div>

                    <div class="mb-4">
                        <label for="privacy" class="block text-gray-700 text-sm font-bold mb-2">Privacy:</label>
                        <select id="privacy" v-model="privacy" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="favorites">Favorites</option>
                            <option value="link_only">Link-only</option>
                        </select>
                    </div>

                    <div class="mb-4">
                        <label for="comments_enabled" class="block text-gray-700 text-sm font-bold mb-2">Enable comments:</label>
                        <input type="checkbox" id="comments_enabled" v-model="commentsEnabled" class="form-checkbox h-5 w-5 text-blue-600" />
                    </div>

                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Create Blog</button>
                </form>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue"
import bodycss from "../../../css/body.css";

const title = ref('');
const content = ref('');
const privacy = ref('public');
const commentsEnabled = ref(true);

function createBlog() {
    Inertia.post("/blogs", {
        title: title.value,
        content: content.value,
        privacy: privacy.value,
        comments_enabled: commentsEnabled.value,
    });

}

</script>

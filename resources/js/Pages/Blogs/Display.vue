<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import Footer from "@/Components/Footer.vue";
</script>


<template class="container" xmlns="http://www.w3.org/1999/html">
    <Header></Header>
    <div class="bg-gray-100">
        <h1 class="text-center pt-8 text-3xl">Browse Blogs</h1>
        <div class="border-2 border-[#60A5FA] rounded w-full mt-8 mx-auto max-w-3xl">
            <div class="bg-[#60A5FA] h-[24px] flex justify-between items-center px-4">
                <span class="text-white">Cool blogs by cool people</span>
            </div>
            <div class="divide-y divide-gray-200 p-4">
            <article
                v-for="blog in blogs"
                :key="blog.id"
                class="flex flex-col items-start justify-between py-4 border-b border-gray-200" >
            <h3 class="text-lg font-semibold leading-6 text-gray-900">
                <inertia-link :href="`/blogs/${blog.id}/show`">{{ blog.title }}</inertia-link>
            </h3>
            <p v-if="blog.user && blog.user.profile" class="text-sm text-gray-600">
                <inertia-link :href="`/profile/${blog.user.profile.id}/show`">{{ blog.user.profile.username }}</inertia-link> - posted on
                {{ formatDate(blog.created_at) }}
            </p>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                <inertia-link :href="`/blogs/${blog.id}/show`">{{ blog.text ? truncate(blog.text, 100) : '' }}.</inertia-link>
            </p>
            </article>
        </div>
        </div>
        <div class="flex justify-between items-center w-full max-w-3xl mx-auto mt-4">
            <button
                @click="fetchBlogs(-1)"
                v-if="currentPage > 1"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Previous Page
            </button>
            <div v-else class="w-full"></div>
            <button
                @click="fetchBlogs(1)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap"
            >
                Next Page
            </button>
        </div>
       </div>>
    <Footer></Footer>
</template>

<script>
import Header from "@/Components/Header.vue";
import bodycss from "../../../css/body.css";


export default {
    components: { Header },
    props: {
        blogs: {
            type: Array,
            default: () => ([]),
        },
        page: {
            type: [Number, String],
            default: 1,
        },
    },
    data() {
        return {
            currentPage: this.page,
        };
    },
    methods: {
        fetchBlogs(newPage) {
            const updatedPage = parseInt(this.currentPage, 10) + newPage;
            this.$inertia.visit(`/blogs/display/${updatedPage}`);
        },
        formatDate(date) {
            const d = new Date(date);
            return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
        },
        truncate(text, maxLength) {
            if (text.length <= maxLength) return text;
            return text.slice(0, maxLength) + '...';
        },
    },
};
</script>

<script setup>
import { InertiaLink, usePage } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { ref, watchEffect } from "vue";
import { defineComponent, defineProps } from "vue";
import Footer from "@/Components/Footer.vue";

const { newComment } = usePage().props;
const props = defineProps();
const commentContent = ref("");

watchEffect(() => {
    if (newComment) {
        props.blog.comments.unshift(newComment);
    }
});

function submitComment() {
    Inertia.post(route("comments.store", props.blog.id), {
        content: commentContent.value,
    });
}

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

</script>

<template class="container">
    <div class="container mx-auto px-4 bg-gray-100">
        <Header></Header>
        <div class="bg-white shadow-md rounded p-8 mt-8">
            <div v-if="blog.unique_link" class="mb-4">
                <span class="font-bold">Unique Link:</span>
                <a :href="'/blogs/link/' + blog.unique_link" class="text-blue-600 hover:text-blue-800">{{ '/blogs/link/' + blog.unique_link }}</a>
            </div>
            <h1 class="text-3xl mb-4">{{ blog.title }}</h1>
            <p class="text-gray-600 mb-4">
                <inertia-link :href="`/profile/${blog.user.profile.id}/show`">{{ blog.user.profile.username }}</inertia-link> - posted on {{ formatDate(blog.created_at) }}
            </p>
            <div class="text-gray-700 text-lg leading-relaxed">
                {{ blog.text }}
                <div v-if="blog.unique_link" class="mt-4 text-blue-600">
                    <span class="font-semibold">Unique link:</span>
                    <inertia-link :href="`/blogs/link/${blog.unique_link}`">{{ `${
                        location.protocol
                    }//${location.host}/blogs/link/${blog.unique_link}` }}</inertia-link>
                </div>
            </div>
        </div>

        <form @submit.prevent="submitComment()" v-if="blog.comments_enabled" class="bg-white shadow-md rounded p-8 mt-8" novalidate>
            <label for="comment" class="block text-sm font-medium text-gray-700">Add a comment:</label>
            <textarea id="comment" v-model="commentContent" required class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
            <button type="submit" class="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit Comment</button>
        </form>

        <div v-for="comment in blog.comments" :key="comment.id">
            <p>{{ comment.user.profile.username }}: {{ comment.content }}</p>

        </div>
    </div>
<Footer></Footer>
</template>


<script>
import Header from "@/Components/Header.vue";
import bodycss from "../../../css/body.css";

export default {

    components: { Header },
    props: {
        blog: Object,
    },
};
</script>

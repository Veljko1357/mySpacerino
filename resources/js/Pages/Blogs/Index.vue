<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
import bodycss from "../../../css/body.css";

</script>

<template class="container" title="blogs">


    <div>
        <Header></Header>
        <div class="container mx-auto px-4 bg-gray-100 mt-10">
            <div class="border-2 border-[#60A5FA] overflow-y-auto mt-[-10px] md:mt-0">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl">
                        <div class="flex justify-between items-center pt-2 pb-4">
                            <p class="text-xl relative top-2">Your blog entries</p>
                            <inertia-link href="/blogs/create" class="text-xl relative top-2">
                                [new entry]
                            </inertia-link>
                        </div>
                        <div class="mt-0 sm:mt-16">
                            <article
                                 v-for="(blog, index) in blogs"
                                :key="blog.id"
                                class="flex max-w-xl flex-col items-start justify-between"
                            >
                                <template v-if="index !== 0">
                                    <div class="border-t border-gray-200 w-full"></div>
                                </template>

                                <div class="group relative">
                                    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <inertia-link :href="`/blogs/${blog.id}/show`">
                                            <span class="absolute inset-0" />
                                            {{ blog.title }}
                                        </inertia-link>
                                    </h3>
                                    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                        {{ truncate(blog.text, 25) }}...
                                    </p>
                                    <p class="mt-2 text-sm text-gray-600">Comments: {{ blog.comments.length }}</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/Components/Header.vue";
import {defineProps} from 'vue';
export default {
    components: { Header },
    props: {
        blogs: Array,
    },
    methods: {
        truncate(text, maxLength) {
            if (text.length <= maxLength) return text;
            return text.slice(0, maxLength) + "...";
        },
    },
};
</script>

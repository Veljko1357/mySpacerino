<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    blogs: {
        type: Array,
        default: () => [],
    },
    user: {
        type: Object,
        required: true,
    }


});
console.log('Blogs data:', props.blogs);
</script>




<template>
    <div>
        <h1>{{ user.profile.username }}'s Blogs</h1>
        <article v-for="(blog, index) in user.blogs"
                 :key="blog.id"
                 class="flex max-w-xl flex-col items-start justify-between">
            <div>
                <div class="border-2 border-[#60A5FA] overflow-y-auto mt-[-10px] md:mt-0">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl">
                            <div class="flex justify-between items-center pt-2 pb-4">
                                <p class="text-xl relative top-2">Your blog entries</p>
                                <p class="text-xl relative top-2">[new entry]</p>
                            </div>
                            <div class="mt-0 sm:mt-16">
                                <article v-for="(blog, index) in blogs.slice(0, 6)" :key="blog.id" class="flex max-w-xl flex-col items-start justify-between">

                                    <template v-if="index !== 0">
                                        <div class="border-t border-gray-200 w-full "></div>
                                    </template>

                                    <div class="group relative">
                                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">

                                            <span class="absolute inset-0" />
                                            {{ props.blog.title }}

                                        </h3>
                                        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ blog.text }}...</p>
                                    </div>

                                </article>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    props: {
        user: Object,
        blog: Object,
    },
};
</script>







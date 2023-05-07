<script setup>
import {InertiaLink} from "@inertiajs/inertia-vue3";
</script>

<template class="container">
    <Header>
    </Header>
    <div class="bg-gray-100">
        <h1 class="text-center text-3xl">Browse People</h1>
        <div class="border-2 border-[#60A5FA] rounded w-full mt-8 mx-auto max-w-3xl">
            <div class="bg-[#60A5FA] h-[24px] flex justify-between items-center px-4">
                <span class="text-white">New People</span>
            </div>
            <div class="grid grid-cols-5 gap-4 p-4">
                <div
                    v-for="profile in profiles"
                    :key="profile.id"
                    class="flex flex-col items-center space-y-2"
                >
                    <inertia-link :href="`/profiles/${profile.id}/show`">{{ profile.username }}</inertia-link>

                    <inertia-link :href="`/profiles/${profile.id}/show`">
                        <img
                            :src="profile.profile_picture"
                            alt="profile-picture"
                            class="rounded w-20 h-20"
                        />
                    </inertia-link>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-center w-full max-w-3xl mx-auto mt-4">
            <button @click="fetchProfiles(-1)" v-if="currentPage > 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Previous Page
            </button>
            <div v-else class="w-full"></div>
            <button @click="fetchProfiles(1)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap">
                Next Page
            </button>
        </div>
    </div>
</template>

<script>

import Header from "@/Components/Header.vue";
import bodycss from "../../../css/body.css";


export default {
    components: {Header},

    props: {
        profiles: Array,
        page: Number,
        id: Number,
    },
    data() {
        return {
            currentPage: this.page,
        };
    },
    methods: {
        fetchProfiles(newPage) {
            const updatedPage = parseInt(this.currentPage, 10) + newPage;
            this.$inertia.visit(`/profiles/display/${updatedPage}`);
        },

    },
};
</script>


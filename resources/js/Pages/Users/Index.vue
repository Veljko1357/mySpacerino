<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";

defineProps({
    users: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <AppLayout title="Users">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Users
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <h1 class="text-2xl">List of users</h1>
                    <ul>
                        <li v-for="user in users" :key="user.id">
                            {{ user.name }}  - {{user.email}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </AppLayout>
</template>



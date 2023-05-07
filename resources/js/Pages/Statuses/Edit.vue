<script setup>
import { defineProps } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';
import Header from "@/Components/Header.vue";
import bodycss from "../../../css/body.css";





const props = defineProps({
    status: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    status: props.status.status || "",
    mood: props.status.mood || "",
    about_you: props.status.about_you || "",
});


const updateStatus = () => {
    Inertia.put(`/statuses/${props.status.id}`, form);
};
</script>



<template>
    <Header>

    </Header>
    <div class="container mx-auto my-10 px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">

            <h2 class="text-2xl font-semibold mb-4">Edit Your Status</h2>
            <p class="text-gray-600 mb-6">All fields are optional and can be left empty if you want.</p>

            <form @submit.prevent="updateStatus">
                <div class="mb-6">
                    <label for="status" class="block mb-2 font-medium text-gray-700">Status:</label>
                    <p class="text-sm text-gray-600 mb-2">What are you doing right now.</p>
                    <input type="text" id="status" v-model="form.status" class="border border-gray-300 rounded-lg w-full px-3 py-2 focus:border-indigo-500">
                    <p class="text-sm text-gray-600 mt-2">
                        <b>Examples:</b>
                        <i>reading, chilling, studying, sleeping, ...</i>
                    </p>
                </div>

                <div class="mb-6">
                    <label for="mood" class="block mb-2 font-medium text-gray-700">Mood:</label>
                    <p class="text-sm text-gray-600 mb-2">How are you feeling right now?</p>
                    <input type="text" id="mood" v-model="form.mood" class="border border-gray-300 rounded-lg w-full px-3 py-2 focus:border-indigo-500">
                    <p class="text-sm text-gray-600 mt-2">
                        <b>Examples:</b>
                        <i>busy, bored, happy, sad, ...</i>
                    </p>
                </div>

                <div class="mb-6">
                    <label for="about_you" class="block mb-2 font-medium text-gray-700">You:</label>
                    <p class="text-sm text-gray-600 mb-2">A few short words about yourself.</p>
                    <input type="text" id="about_you" v-model="form.about_you" class="border border-gray-300 rounded-lg w-full px-3 py-2 focus:border-indigo-500">
                    <p class="text-sm text-gray-600 mt-2">
                        <b>Examples:</b>
                        <i>Your age, country, ...</i>
                    </p>
                </div>

                <button type="submit" class="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-500">
                    Save all
                </button>
            </form>
        </div>
    </div>
</template>

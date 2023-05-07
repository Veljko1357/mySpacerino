<template>
    <Header>

    </Header>
    <div class="container bg-gray-100 mx-auto px-4 py-8 w-[50em]">
        <div v-if="successMessage" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            {{ successMessage }}
        </div>
        <div>
            <h2 class="text-2xl mb-4">Update Profile Picture</h2>

            <form @submit.prevent="uploadImage" class="mb-4">
                <label for="profile_picture" class="block mb-2">Choose an image:</label>
                <input type="file" id="profile_picture" ref="profile_picture" @change="handleImageSelect" class="mb-4" />
                <button class="upload bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!selectedImage">Upload Image</button>
            </form>
            <button class="remove bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="removeImage">Remove Image</button>

            <!-- Image preview -->
            <div v-if="selectedImage" class="mt-6">
                <h3 class="text-lg mb-2">Image Preview:</h3>
                <img :src="imagePreview" alt="Selected image preview" class="w-auto h-48" />
            </div>
        </div>
    </div>
</template>



<script setup>
import { defineProps, ref } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import {Inertia} from "@inertiajs/inertia";
import bodycss from "../../../css/body.css";
import AppLayout from "@/Layouts/AppLayout.vue";
import { computed } from 'vue';
import Header from "@/Components/Header.vue";

const successMessage = ref('');
const props = defineProps({
    profile_picture: String,
    id: Number, // Add this line
});

const { props: pageProps } = usePage();
const selectedImage = ref(null);
const imagePreview = computed(() => (selectedImage.value ? URL.createObjectURL(selectedImage.value) : null));


function handleImageSelect(e) {
    selectedImage.value = e.target.files[0];
}

async function uploadImage() {
    if (!selectedImage.value) return;

    const formData = new FormData();
    formData.append('profile_picture', selectedImage.value);

    await Inertia.post(`/profiles/${props.id}/upload`, formData, {
        preserveScroll: true,
        onSuccess: (page) => {
            successMessage.value = page.props.success;
        },
    });
}


async function removeImage() {
    await Inertia.put(`/profiles/${props.id}/remove-image`, {}, {
        onSuccess: (page) => {
            successMessage.value = page.props.success;
        },
    });
}
</script>

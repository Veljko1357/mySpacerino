<template class="container">
    <Header></Header>
    <div class="container bg-gray-100 mx-auto px-4 py-8 w-[50em]">

        <div class="text-center">
            <h2 class="text-2xl font-semibold mb-2">Edit Your Profile</h2>
            <p class="mb-4">All fields are optional and can be left empty if you want.</p>
            <form @submit.prevent="updateProfile" class="space-y-6">
                <input type="hidden" name="_method" value="PUT" />
                <button type="submit" class="bg-gray-500 text-white px-4 py-2 rounded">Save All</button>
                <h3 class="text-xl font-semibold mb-2"><u>Blurbs:</u></h3>
                <div class="space-y-4">
                    <div class="flex flex-col">
                        <label for="bio" class="text-lg font-medium mb-2">About me:</label>
                        <textarea id="bio" v-model="form.bio" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="bucket_list" class="text-lg font-medium mb-2">Who I'd like to meet and I would like to do:</label>
                        <textarea id="bucket_list" v-model="form.bucket_list" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="general_interests" class="text-lg font-medium mb-2">What I am interested in:</label>
                        <textarea id="general_interests" v-model="form.general_ineterests" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="music" class="text-lg font-medium mb-2">Music I like to listen to:</label>
                        <textarea id="music" v-model="form.music" class="border border-gray-300 w-full h-32 p-2 rounded">:</textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="movies" class="text-lg font-medium mb-2">Movies I like to watch:</label>
                        <textarea id="movies" v-model="form.movies" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="series" class="text-lg font-medium mb-2">Series I like to watch</label>
                        <textarea id="series" v-model="form.series" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="books" class="text-lg font-medium mb-2">Books I like to read:</label>
                        <textarea id="books" v-model="form.books" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                    <div class="flex flex-col">
                        <label for="heroes" class="text-lg font-medium mb-2">My Favourite Heroes:</label>
                        <textarea id="heroes" v-model="form.heroes" class="border border-gray-300 w-full h-32 p-2 rounded"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <Footer></Footer>
</template>






<script>



import Header from "@/Components/Header.vue";
import { defineProps, ref } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import { omit } from 'lodash-es';
import { resolveComponent } from 'vue';
import bodycss from "../../../css/body.css";
import Footer from "../../Components/Footer.vue";
export default {

    props: {
        profile: Object,
    },
    components: {
        Footer,
      Header
    },
    setup(props) {
        const form = ref({ ...props.profile });

        const updateProfile = () => {
            const formData = omit(form.value, 'id');
            Inertia.put(`/profiles/${form.value.id}`, formData, {
                onSuccess: () => {
                    console.log('Profile updated successfully');
                },
            });
        };

        return {
            form,
            updateProfile,
        };
    },
};

</script>

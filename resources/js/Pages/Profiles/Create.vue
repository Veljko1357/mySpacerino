<template>
    <div>
        <h1>Create New Profile</h1>
        <form @submit.prevent="storeProfile">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="form.username" />
            <br />
            <label for="bio">Bio:</label>
            <textarea id="bio" v-model="form.bio"></textarea>
            <br />
            <label for="profile_picture">Profile Picture:</label>
            <input type="file" id="profile_picture" ref="profile_picture" @change="onFileSelected" />
            <br />
            <button type="submit">Create Profile</button>
        </form>
    </div>
    <Footer></Footer>
</template>

<style>
template{
    background-color: #1D4ED8;
}

</style>


<script>
import { ref } from 'vue';
import { usePage } from '@inertiajs/inertia-vue3';
import { Inertia } from '@inertiajs/inertia';
import Footer from "@/Components/Footer.vue";

export default {
    components: {Footer},
    setup() {
        const form = ref({
            username: '',
            bio: '',
            profile_picture: '',
        });

        const {flash} = usePage().props;

        const onFileSelected = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                form.value.profile_picture = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        };

        const storeProfile = () => {
            Inertia.post('/profiles', form.value);
        };

        return {
            form,
            flash,
            onFileSelected,
            storeProfile,
        };
    }
};
</script>

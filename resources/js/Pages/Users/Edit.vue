<template>
    <Header>

    </Header>
    <div class="container bg-gray-100 mx-auto px-4 py-8 w-[50em]">
        <div class="text-center">
            <h2 class="text-2xl font-semibold mb-2">Edit Your Account</h2>
            <p class="mb-4">Update your name and username.</p>
            <form @submit.prevent="submitForm" class="space-y-6">
                <div class="space-y-4">
                    <div class="flex flex-col">
                        <label for="id" class="block text-lg font-medium mb-2">ID</label>
                        <input type="text" id="id" :value="form.id" readonly class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div class="flex flex-col">
                        <label for="name" class="block text-lg font-medium mb-2">Name</label>
                        <input type="text" id="name" v-model="form.name" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                    <div class="flex flex-col">
                        <label for="username" class="block text-lg font-medium mb-2">Username</label>
                        <input type="text" id="username" v-model="form.username" class="w-full border border-gray-300 p-2 rounded" />
                    </div>
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">Save</button>
            </form>
        </div>
    </div>
</template>


<script>
import { ref } from "vue";
import { Inertia } from "@inertiajs/inertia";
import Header from "@/Components/Header.vue";
import bodycss from "../../../css/body.css";
export default {
    components: {Header},
    props: {
        user: Object,
        profile: Object,
    },
    setup(props) {
        const form = ref({
            id: props.user.id,
            name: props.user.name,
            username: props.profile.username,
        });

        const submitForm = () => {
            Inertia.put(`/users/${form.value.id}`, form.value);
        };

        return {
            form,
            submitForm,
        };
    },
};
</script>

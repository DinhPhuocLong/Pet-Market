<template>
    <div>
        <h1>Quên mật khẩu</h1>
        <label for="email"> Email </label>
        <input type="text" 
        placeholder="email" 
        class="border border-solid border-black"
        v-model="email"
        >
        <button class="bg-blue-500 text-white" @click="requestPassword();">
            Lấy lại mật khẩu
        </button>

    </div>
</template>

<script>

import axios from 'axios';
export default {
    layout: 'login',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async requestPassword() {
            try {
                const response = await axios.post(`localhost:8000/api/reset-password/`, this.email);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>
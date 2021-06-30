<template>
    <client-only>
    <div class="font-mono bg-gray-400 h-screen">
		<!-- Container -->
		<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @keyup.enter="register();">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Username"
                                    v-model="registerCredentials.email"
								/>
							</div>

                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Name
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Username"
                                    v-model="registerCredentials.name"
								/>
							</div>

                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Username
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Username"
                                    v-model="registerCredentials.username"
								/>
							</div>

							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
                                    v-model="registerCredentials.password"
								/>
								<p class="text-xs italic text-red-500">Please choose a password.</p>
							</div>


                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Password confirm
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
                                    v-model="registerCredentials.password_confirm"
								/>
								<p class="text-xs italic text-red-500">Please choose a password.</p>
							</div>
							<div class="mb-4">
								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label class="text-sm" for="checkbox_id">
									Remember Me
								</label>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="button"
                                    @click.prevent="register();"
								>
									Đăng ký
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./register.html"
								>
									Create an Account!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Forgot Password?
								</a>
							</div>
						</form>
	</div>
	</client-only>
</template>

<script>
export default {
    layout: 'login',
    data () {
        return {
            registerCredentials: {
                name: '',
                username: '',
                email: '',
                password: '',
                password_confirm: '',
            },
            data: {
                data: ''
            }
        }
    },
    methods: {
        async register() {
            try {
                const response = await this.$services.Auth.register(this.registerCredentials);
                console.log(response);
            } catch (error) {
                console.log(`lỗi`);
            }
        },
    }
}
</script>

<style>

</style>
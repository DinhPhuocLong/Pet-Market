<template>
    <client-only>
	 <div class="font-mono bg-gray-400 h-screen">
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex mt-32">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
						style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"
					></div>
					<!-- Col -->
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" @keyup.enter="register();">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Email
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Email"
                                    v-model="registerCredentials.email"
								/>
								<p class="text-xs italic text-red-500">Vui lòng nhập Email.</p>
							</div>

                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="name">
									Họ và Tên
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="name"
									type="text"
									placeholder="Ho va ten"
                                    v-model="registerCredentials.name"
								/>
								<p class="text-xs italic text-red-500">Vui lòng nhập đầy đủ họ và tên.</p>
							</div>

                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Tên tài khoản
								</label>
								<input
									class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Ten tai khoan"
                                    v-model="registerCredentials.username"
								/>
								<p class="text-xs italic text-red-500">Vui lòng nhập tên đăng nhập tài khoản.</p>
							</div>

							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Mật khẩu
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
                                    v-model="registerCredentials.password"
								/>
								<p class="text-xs italic text-red-500">Vui lòng nhập mật khẩu.</p>
							</div>


                            <div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Xác nhận mật khẩu
								</label>
								<input
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
                                    v-model="registerCredentials.password_confirm"
								/>
								<p class="text-xs italic text-red-500">Vui lòng xác nhận mật khẩu.</p>
							</div>
							<div class="mb-4">
								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label class="text-sm" for="checkbox_id">
									Đồng ý
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
									Tạo tài khoản!
								</a>
							</div>
							<div class="text-center">
								<a
									class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
									href="./forgot-password.html"
								>
									Quên mật khẩu?
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
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
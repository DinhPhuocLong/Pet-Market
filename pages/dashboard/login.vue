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
						<h3 class="pt-4 text-2xl text-center">Đăng nhập</h3>
						<ValidationObserver ref="form">
						<form 
						@submit.prevent="onSubmit();" 
						@keyup.enter="onSubmit();"
						class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="username">
									Email
								</label>
								<ValidationProvider rules="required|isValidateEmail" :custom-messages="customErrorMessages.email" v-slot="{ errors }">
								<input
								id="field"
									name="field"
									class="w-full px-3 py-2  mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									type="text"
									placeholder="Email"
									v-model="credentials.email"
									:class="{ 'border-red-600': errors[0] }"
								/>
								<p class="text-xs italic text-red-500">{{ errors[0] }}</p>
								</ValidationProvider>
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Mật khẩu
								</label>
								<ValidationProvider rules="required" :custom-messages="customErrorMessages.password" v-slot="{ errors }">
								<input
									name="email"
									class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"
									v-model="credentials.password"
									:class="{ 'border-red-600': errors[0] }"
								/>
								<p class="text-xs italic text-red-500">{{ errors[0] }}</p>
								</ValidationProvider>
							</div>
							<div class="mb-4">
								<input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
								<label class="text-sm" for="checkbox_id">
									Lưu đăng nhập
								</label>
							</div>
							<div class="mb-6 text-center">
								<button
									class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
									type="submit"
								>
									Đăng nhập
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
						</ValidationObserver>
					</div>
				</div>
			</div>
		</div>
	</div>
	</client-only>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    layout: 'login',
	middleware: 'unauthenticated',
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data() {
		return {
			credentials: {
				email: 'l0978011552l@gmail.com',
				password: '127.0.0.1',
			},
			customErrorMessages: {
				email: {required: 'Hãy nhập email của bạn!'},
				password: {required: 'Hãy nhập mật khẩu của bạn!'},
			}
		}
	},
	methods: {

		//TODO: Test case 1 => catching form error before can send login request to server
		async login() {
			try {
				await this.$auth.loginWith('laravelJWT', {
					data: this.credentials
				});
				Message({
					message: 'Đăng nhập thành công',
					type: 'success'
				});
			
				setTimeout(_=> {
					this.$router.push({
						name: "dashboard",
					});
				}, 2000); //MS
			} catch (error) {
				Message({
					message: error.response.data.error,
					type: 'error'
				});
			}
		},

		// form validate
		onSubmit() {
			this.$refs.form.validate().then(success => {
				if (!success) {
					return;
				} else {
					this.login();
				}
			});
		}
	},
	beforeDestroy() {
		Message.closeAll()
	},
}
</script>

<style>

</style>
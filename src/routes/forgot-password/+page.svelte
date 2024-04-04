<script lang="ts">
	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = 'Forgot Password';
</script>

<div class="min-h-screen bg-base-200 flex items-center">
	<div class="card mx-auto w-full max-w-5xl shadow-xl">
		<div class="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
			<div>
				<div class="hero min-h-full rounded-l-xl bg-base-200">
					<div class="hero-content py-12">
						<div class="max-w-md">
							<h1 class="text-3xl text-center font-bold">
								<img
									src="/logo192.png"
									class="w-12 inline-block mr-2 mask mask-circle"
									alt="dashwind-logo"
								/>
								DashWind
							</h1>
							<div class="text-center mt-12">
								<img src="./intro.png" alt="Dashwind Admin Template" class="w-48 inline-block" />
							</div>
							<h1 class="text-2xl mt-8 font-bold">Admin Dashboard Starter Kit</h1>
							<p class="py-2 mt-4">✓ <span class="font-semibold">Light/dark</span> mode toggle</p>
							<p class="py-2">
								✓ <span class="font-semibold">Redux toolkit</span> and other utility libraries configured
							</p>
							<p class="py-2">
								✓ <span class="font-semibold">Calendar, Modal, Sidebar </span> components
							</p>
							<p class="py-2">✓ User-friendly <span class="font-semibold">documentation</span></p>
							<p class="py-2 mb-4">
								✓ <span class="font-semibold">Daisy UI</span> components,
								<span class="font-semibold">Tailwind CSS</span> support
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="py-24 px-10">
				<h2 class="text-2xl font-semibold mb-2 text-center">{pageTitleState.pageTitle}</h2>
				<p class="my-8 font-semibold text-center">
					We will send password reset link on your email Id
				</p>
				<form>
					<div class="mb-4">
						<div class="form-control w-full mt-4">
							<span class="label"
								><span class="label-text text-base-content undefined">Email Id</span>
							</span>
							<input type="emailId" class="input input-bordered w-full" />
						</div>
					</div>
					<p class="text-center text-error mt-12"></p>
					<button type="submit" class="btn mt-2 w-full btn-primary">Send Reset Link</button>
					<div class="text-center mt-4">
						Don't have an account yet?
						<a
							class="  inline-block hover:text-primary hover:underline hover:cursor-pointer transition duration-200"
							href="/register"
						>
							Register
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

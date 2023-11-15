<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A } from "flowbite-svelte";
	import LoginShapeCanvas from "../components/LoginShapeCanvas.svelte";
	import Cookies from "js-cookie";

	let email: string = "";
	let password: string = "";
	let remember: boolean = false;

	async function login() {
		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				remember
			}),
		})

		const json = await response.json();

		if (json.success) {
			const { token } = json.data
			Cookies.set("token", token, { expires: remember ? 30 : 1 });
			window.location.href = "/profile";
		}
	}

</script>

<section class="w-screen h-screen bg-primary-100 relative p-2 grid md:grid-cols-[1.5fr,1fr] gap-2">
	<div class="hidden md:block">
		<LoginShapeCanvas></LoginShapeCanvas>
	</div>
	<div class="w-full bg-white rounded-lg  py-8 px-8 flex items-center flex-col">
		<form class="max-w-[80%] w-full text-center flex flex-col gap-4">
			<img src="" alt="">
			<h1 class="text-4xl font-bold">Welcome back!</h1>
			<p class="text-gray-500">Please enter your details</p>
			<FloatingLabelInput style="filled" name="email" type="email" bind:value={email}>
				Email
			</FloatingLabelInput>
			<FloatingLabelInput style="filled" name="password" type="password" bind:value={password}>
				Password
			</FloatingLabelInput>
			<div class="flex justify-between">
				<Checkbox bind:checked={remember}>
					Remember for 30 days
				</Checkbox>
				<A href="/forgot-password">Forgot password?</A>
			</div>
			<Button on:click={login} disabled={!email || !password} color="dark">Log In</Button>

			<p>Don't have an account? <A href="/signup">Sign Up</A></p>
		</form>
	</div>
</section>
<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A } from "flowbite-svelte";
	import LoginShapeCanvas from "../components/LoginShapeCanvas.svelte";
	import Cookies from "js-cookie";

	let email: string = "";
	let password: string = "";
	let remember: boolean = false;

	async function submit() {
		const response = await fetch("/api/forgot-password", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email
			}),
		})

		const json = await response.json();

		if (json.success) {
			console.log(json.data);
			
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
			<h1 class="text-4xl font-bold">Forgot your password?</h1>
			<p class="text-gray-500">Don't worry, we'll help you recover it.</p>
			<FloatingLabelInput style="filled" name="email" type="email" bind:value={email}>
				Email
			</FloatingLabelInput>
			<Button on:click={submit} disabled={!email} color="dark">Log In</Button>

			<p>Don't have an account? <A href="/signup">Sign Up</A></p>
		</form>
	</div>
</section>
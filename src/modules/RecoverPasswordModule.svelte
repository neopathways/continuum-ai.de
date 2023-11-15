<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A } from "flowbite-svelte";
	import LoginShapeCanvas from "../components/LoginShapeCanvas.svelte";

	export let token: string;

	let disableButton: boolean = false;

	let password: string = "";
	let repeatPassword: string = "";

	async function submit() {
		disableButton = true;
		const response = await fetch("/api/reset-password", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				password,
				token
			}),
		})

		if (response.status !== 200) {
			return;
		}

		const json = await response.json();

		if (json.success) {
			window.location.href = "/login";
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
			<h1 class="text-4xl font-bold">Recover your password</h1>
			<p class="text-gray-500">Let's reset your password and get you back up running.</p>
			<FloatingLabelInput style="filled" name="password" type="password" bind:value={password}>
				New password
			</FloatingLabelInput>
			<FloatingLabelInput style="filled" name="password" type="password" bind:value={repeatPassword}>
				Repeat password
			</FloatingLabelInput>
			<Button on:click={submit} disabled={disableButton || !password || password !== repeatPassword} color="dark">Reset password</Button>

			<p>Don't have an account? <A href="/signup">Sign Up</A></p>
		</form>
	</div>
</section>
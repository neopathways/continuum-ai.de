<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A } from "flowbite-svelte";

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

<section class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 gap-2">
	<div class="w-full bg-gray-50 dark:bg-gray-700 rounded-lg  py-8 px-12 flex items-center flex-col">
		<form class="w-full text-center flex flex-col gap-4">
			<h1 class="text-4xl font-bold dark:text-gray-50">Recover your password</h1>
			<p class="text-gray-500 dark:text-gray-400">Let's reset your password and get you back up running.</p>
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
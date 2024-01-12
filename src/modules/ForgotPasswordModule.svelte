<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A } from "flowbite-svelte";
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


<section class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 gap-2">
	<div class="w-full bg-gray-50 dark:bg-gray-700 rounded-lg  py-8 px-12 flex items-center flex-col">
		<form class="w-full text-center flex flex-col gap-4">
			<h1 class="text-4xl font-bold dark:text-gray-50">Forgot your password?</h1>
			<p class="text-gray-500 dark:text-gray-400">Don't worry, we'll help you recover it.</p>
			<FloatingLabelInput style="filled" name="email" type="email" bind:value={email}>
				Email
			</FloatingLabelInput>
			<Button on:click={submit} disabled={!email} color="dark">Send recovery email</Button>

			<p>Don't have an account? <A href="/signup">Sign Up</A></p>
		</form>
	</div>
</section>
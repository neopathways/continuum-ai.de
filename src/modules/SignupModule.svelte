<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A, DarkMode } from "flowbite-svelte";

	let acceptedTermsOfService: boolean = false;

	let email: string = "";
	let password: string = "";
	let repeatPassword: string = "";
	let first_name: string = "";
	let last_name: string = "";

	async function signUp() {
		if (password !== repeatPassword) {
			alert("Passwords do not match!");
			return;
		}

		const response = await fetch("/api/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
				first_name,
				last_name
			}),
		})

		const json = await response.json();

		if (json.success) {
			window.location.href = "/login";
		}
	}

</script>

<section class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 gap-2">
	<div class="w-full bg-gray-50 dark:bg-gray-700 rounded-lg  py-8 px-12 flex items-center flex-col">
		<form class="w-full text-center flex flex-col gap-4">
			<h1 class="text-4xl font-bold dark:text-gray-50">Create your account!</h1>
			<p class="text-gray-500 dark:text-gray-400">Please enter your details</p>
			<FloatingLabelInput style="filled" name="email" bind:value={email} type="email">
				Email
			</FloatingLabelInput>
			<div class="flex justify-between gap-2">
				<div class="w-full">
					<FloatingLabelInput style="filled" name="first_name" bind:value={first_name} type="email">
						First name
					</FloatingLabelInput>
				</div>
				<div class="w-full">
					<FloatingLabelInput style="filled" name="last_name" bind:value={last_name} type="email">
						Last name
					</FloatingLabelInput>
				</div>
			</div>
			<FloatingLabelInput style="filled" name="password" bind:value={password} type="password">
				Password
			</FloatingLabelInput>
			<FloatingLabelInput style="filled" name="repeat_password" bind:value={repeatPassword} type="password">
				Repeat password
			</FloatingLabelInput>
			<Checkbox bind:checked={acceptedTermsOfService}>
				<span>I agree to the <A href="/terms-of-service" aClass="underline">terms of service</A></span>
			</Checkbox>
			<Button disabled={!acceptedTermsOfService} on:click={signUp} color="dark">Register</Button>
			<A href="/login">Already have an account?</A>
		</form>
	</div>
</section>
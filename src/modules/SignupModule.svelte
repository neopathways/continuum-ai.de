<script lang="ts">
	import { Button, Checkbox, FloatingLabelInput, A } from "flowbite-svelte";
	import LoginShapeCanvas from "../components/LoginShapeCanvas.svelte";

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

<section class="w-screen h-screen bg-primary-100 relative p-2 grid md:grid-cols-[1.5fr,1fr] gap-2">
	<div class="hidden md:block">
		<LoginShapeCanvas></LoginShapeCanvas>
	</div>
	<div class="w-full bg-white rounded-lg  py-8 px-8 flex items-center flex-col">
		<form class="max-w-[80%] w-full text-center flex flex-col gap-4">
			<img src="" alt="">
			<h1 class="text-4xl font-bold">Create your account!</h1>
			<p class="text-gray-500">Please enter your details</p>
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
			<div class="flex justify-between">
				<Checkbox bind:checked={acceptedTermsOfService}>
					<span>I agree to the <A href="/terms-of-service" aClass="underline">terms of service</A></span>
				</Checkbox>
				<A href="/login">Already have an account?</A>
			</div>
			<Button disabled={!acceptedTermsOfService} on:click={signUp} color="dark">Register</Button>

			<p>Learn more about our <A>privacy policy</A> and <A>terms of service</A></p>
		</form>
	</div>
</section>
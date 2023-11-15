<script>
  import { FooterBrand, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
</script>


<div class="mt-12 block py-8">
	<div class="grid gap-12 lg:grid-cols-6 lg:gap-24 max-w-screen-xl mx-auto px-4">
		<div class="col-span-2">
			<FooterBrand href="https://continuum-ai.de" src="/images/continuum-logo-no-text.svg" alt="Continuum" aClass="flex mb-6" imgClass="h-12" />
			<p class="text-gray-600 dark:text-gray-400">Your trusted OAuth provider for secure, seamless user authentication. Elevate your digital security with us today.</p>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Resources</h2>
			<FooterLinkGroup>
				<FooterLink liClass="mb-4" href="https://flowbite.com/">oAuth2 Provider</FooterLink>
				<FooterLink liClass="mb-4" href="https://tailwindcss.com/">Third party integration</FooterLink>
				<FooterLink liClass="mb-4" href="https://flowbite-svelte.com/">For developers</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">HELP & SUPPORT</h2>
			<FooterLinkGroup>
				<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
				<FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks">GitHub</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Follow us</h2>
			<FooterLinkGroup>
				<FooterLink liClass="mb-4" href="https://github.com/shinokada/flowbite-svelte-blocks">Gihub</FooterLink>
				<FooterLink liClass="mb-4" href="https://discord.gg/4eeurUVvTy">Discord</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
			<FooterLinkGroup>
				<FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks/blob/main/License">Privacy Policy</FooterLink>
				<FooterLink liClass="mb-4" href="https://github.com/themesberg/flowbite-svelte-blocks/blob/main/License">Terms of Use</FooterLink>
			</FooterLinkGroup>
		</div>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between  max-w-screen-xl mx-auto">
		<FooterCopyright href="/" by="Continuum-AI™" />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
		</div>
	</div>
</div>
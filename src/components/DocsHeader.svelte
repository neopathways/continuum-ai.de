<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Button,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Avatar,
		DropdownHeader,
		DarkMode,
		MegaMenu,
		Hr,
	} from "flowbite-svelte";
	import {
		ArrowRightOutline,
		ChevronDownOutline,
	} from "flowbite-svelte-icons";
	import type { User } from "@prisma/client";

	let menu2 = [
		{
			href: "/",
			image: "https://lirp.cdn-website.com/df735c7c/dms3rep/multi/opt/MicrosoftTeams-image+%28123%29-640w.png",
			name: "Online Stores",
			help: "Connect with third-party tools that you're already using.",
		},
		{
			href: "/",
			image: "https://lirp.cdn-website.com/df735c7c/dms3rep/multi/opt/MicrosoftTeams-image+%28123%29-640w.png",
			name: "Segmentation",
			help: "Connect with third-party tools that you're already using.",
		},
		{
			href: "/",
			image: "https://lirp.cdn-website.com/df735c7c/dms3rep/multi/opt/MicrosoftTeams-image+%28123%29-640w.png",
			name: "Marketing CRM",
			help: "Connect with third-party tools that you're already using.",
		},

		{
			href: "/",
			image: "https://lirp.cdn-website.com/df735c7c/dms3rep/multi/opt/MicrosoftTeams-image+%28123%29-640w.png",
			name: "Online Stores",
			help: "Connect with third-party tools that you're already using.",
		},
	];
</script>

<header
	class="w-screen border-b border-b-gray-700 dark:bg-gray-800 bg-gray-800"
>
	<Navbar
		let:toggle
		fluid={true}
		class="dark:bg-gray-800 bg-gray-800 mx-auto max-w-screen-xl"
	>
		<NavBrand href="/">
			<img
				src="/images/continuum-logo-no-text.svg"
				class="mr-3 h-8"
				alt="Continuum"
			/>
		</NavBrand>
		<div class="flex items-center gap-2">
			<NavUl
				divClass="justify-between items-center w-full lg:flex lg:w-auto mr-4"
				ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
			>
				<NavLi
					nonActiveClass="text-gray-50"
					href="/"
					active={true}
					activeClass="!font-extrabold">Articles</NavLi
				>
				<NavLi nonActiveClass="text-gray-50" href="/team">Quickstarts</NavLi>
				<NavLi nonActiveClass="text-gray-50" class="cursor-pointer">
					APIs<ChevronDownOutline
						class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
					/>
				</NavLi>
				<MegaMenu
					full={false}
					items={menu2}
					let:item
					class="!bg-gray-800 !border-gray-700 z-50"
					ulClass="grid !grid-cols-3 gap-4"
				>
					<a
						href={item.href}
						class="flex flex-row gap-4 items-start p-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 h-full"
					>
						<img class="w-12 h-12" src={item.image} alt="awd" />
						<div>
							<div class="font-semibold text-gray-50">
								{item.name}
							</div>
							<span class="text-sm font-light text-gray-400"
								>{item.help}</span
							>
						</div>
					</a>
				</MegaMenu>
				<NavLi nonActiveClass="text-gray-50" href="/pricing"
					>SDKs</NavLi
				>
			</NavUl>

			<Button href="/login" color="dark">Log in</Button>
			<Button href="/signup" class="ml-2" color="purple"
				>Sign Up</Button
			>

			<DarkMode
				btnClass="text-gray-50 dark:text-gray-50 hover:bg-gray-700 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-600 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5"
			/>

			<NavHamburger
				on:click={toggle}
				btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			/>
		</div>
	</Navbar>
</header>

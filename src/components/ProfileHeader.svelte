<script lang="ts">
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		Avatar,
		DropdownHeader,
		Button,
		DarkMode,
	} from "flowbite-svelte";
	import { BellOutline } from "flowbite-svelte-icons";
	import type { User } from "@prisma/client";

	export let user: User;
</script>

<header class="w-screen border-b border-b-gray-700">
	<Navbar
		let:toggle
		fluid={true}
		class="dark:bg-gray-800 bg-gray-800"
	>
		<NavBrand href="/">
			<img
				src="/images/continuum-logo-no-text.svg"
				class="mr-3 h-8"
				alt="Continuum"
			/>
		</NavBrand>
		<div class="flex items-center gap-4 lg:order-2">
			<DarkMode></DarkMode>
			<Button color="light" href="/docs">Documentation</Button>
			<Button color="alternative" class="border-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" type="button"><BellOutline size="md" class="text-gray-600"></BellOutline></Button>
			
			<Avatar id="user-drop" src={user.avatar_url} class="cursor-pointer" dot={{ color: 'green' }} />
			<Dropdown triggeredBy="#user-drop">
				<DropdownHeader>
					<span class="block text-sm">{user.first_name} {user.last_name}</span>
					<span class="block truncate text-sm font-medium">{user.email}</span>
				</DropdownHeader>
				<DropdownItem href="/profile">Profile</DropdownItem>
				<DropdownItem href="/settings">Settings</DropdownItem>
				<DropdownItem href="/apps">Apps</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/logout">Sign out</DropdownItem>
			</Dropdown>
			
			<NavHamburger
				on:click={toggle}
				btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			/>
		</div>
	</Navbar>
</header>

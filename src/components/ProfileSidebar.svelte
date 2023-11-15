<script lang="ts">
	import type { User } from '@prisma/client';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarCta, SidebarDropdownWrapper, SidebarDropdownItem, Hr } from 'flowbite-svelte';
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid, CloseOutline, ShoppingCartSolid } from 'flowbite-svelte-icons';
  let spanClass = 'flex-1 ml-3 whitespace-nowrap text-gray-50 group';
	import { Gear, Layers, LightningBolt } from "svelte-radix"

	export let user: User;
</script>

<Sidebar class="border-r border-r-gray-700 h-full bg-gray-800">
  <SidebarWrapper divClass="bg-gray-800 px-2 py-4">
    <SidebarGroup>
      <SidebarItem label="Getting started" {spanClass} href="/profile/getting-started">
        <svelte:fragment slot="icon">
          <LightningBolt class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
			<SidebarDropdownWrapper label="Applications" {spanClass}>
        <svelte:fragment slot="icon">
          <Layers class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <SidebarDropdownItem label="Applications" href="/apps" />
        <SidebarDropdownItem label="APIs" />
        <SidebarDropdownItem label="Settings" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-gray-200 rounded-full dark:bg-gray-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
			<Hr />
			<SidebarItem label="Settings" class="group" href="/profile/settings">
        <svelte:fragment slot="icon">
          <Gear class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
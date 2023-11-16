<script lang="ts">
	import type * as Prisma from '@prisma/client';
  import { Button, Card } from 'flowbite-svelte';
	import { Section, Page404 } from 'flowbite-svelte-blocks';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

	export let connections: (Prisma.AppConnections & { app: Prisma.Apps })[];
	console.log(connections);
	
</script>

	{#if connections.length > 0}
		{#each connections as connection}
	<Card img={connection.app.banner_url || undefined} reverse={false} class="mb-4 bg-primary-800 dark:bg-primary-800 border-primary-700 dark:border-primary-700"  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{connection.app.name}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{connection.app.description}</p>
    <Button color="purple" href="/apps/settings/{connection.app.uid}">Settings</Button>
		<Button href={connection.app.url} color="light">
      Visit <ArrowRightOutline class="w-3.5 h-3.5 ml-2" />
    </Button>
  </Card>
	{/each}
	{:else}
	<div class="flex items-center justify-center h-full">
		<Page404>
			<svelte:fragment slot="paragraph">
				<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">There's nothing here.</p>
				<p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Looks like you don't have any apps connected to your account...</p>
			</svelte:fragment>
		</Page404>
	</div>
	{/if}
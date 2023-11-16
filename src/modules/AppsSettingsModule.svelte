<script lang="ts">
	import type * as Prisma from '@prisma/client';
	import { Checkbox, Modal, Tooltip } from 'flowbite-svelte';
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import moment from 'moment';

	export let connection: (Prisma.AppConnections & { app: Prisma.Apps, events: Prisma.ConnectionEvents[] });

	let deleteModal = false;
</script>

<div>	
	<div>
		<h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Configure <strong>{connection.app.name}</strong></h2>
		<p class="mb-4">Adjust the permissions of your connected third party application. This will help keep your data secure.</p>
		
		<div class="grid grid-cols-3 gap-4 my-4">
			<ul>
				<h3 class="font-bold">Personal details</h3>
				<li class="ml-2 flex flex-col gap-1.5 mt-2">
					<Checkbox>
						Read your first name
					</Checkbox>
					<Checkbox>
						Read your last name
					</Checkbox>
					<Checkbox>
						Read your email address
					</Checkbox>
					<Checkbox>
						Read your address
					</Checkbox>
					<div class="ml-2.5 flex flex-col gap-1.5">
						<Checkbox>
							Country
						</Checkbox>
						<Checkbox>
							City
						</Checkbox>
						<Checkbox>
							ZIP code
						</Checkbox>
						<Checkbox>
							Street name
						</Checkbox>
					</div>
				</li>
			</ul>
			<ul>
				<h3 class="font-bold">Advanced Cross-Access</h3>
				<li class="ml-2 flex flex-col gap-1.5 mt-2">
					<Checkbox>
						List all connected (public) services
						<Tooltip>Tooltip content</Tooltip>
					</Checkbox>
					
					<Checkbox>
						Allow interaction with third parties
					</Checkbox>
					<Checkbox>
						Share data with Continuum-AI
					</Checkbox>
				</li>
			</ul>
		</div>
	</div>

	<div>
		<Timeline>
			{#each connection.events as event}
				<TimelineItem title={event.event_type} date={moment(event.created_at).format("MMM DD YYYY")}>
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.event_data}</p>
					<Button color="alternative">Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
				</TimelineItem>
			{/each}
			<TimelineItem title="Connected your account to {connection.app.name}" date={moment(connection.created_at).format("MMM DD YYYY")}>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">Your account was connected to a third party application, your data has been securely shared.</p>
			</TimelineItem>
		</Timeline>
		<Button color="red" type="button" on:click={() => (deleteModal = true)}>Disconnect</Button>
		<Modal title="" bind:open={deleteModal} autoclose size="sm" class="w-full">
			<svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
			<p class="mb-4 text-gray-500 dark:text-gray-300 text-center">Are you sure you want to disconnect your account from {connection.app.name}? Shared data might be lost and your configuration will be reset!</p>
			<div class="flex justify-center items-center space-x-4">
				<Button color="red" on:click={() => deleteModal = false}>No, cancel</Button>
				<Button color="light" on:click={() => {}}>Yes, I'm sure</Button>
			</div>
		</Modal>
	</div>
</div>
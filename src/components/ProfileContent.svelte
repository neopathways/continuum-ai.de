<script lang="ts">
	import { Svrollbar } from 'svrollbar'

	let viewport: Element
  let contents: Element
</script>

<section class="py-16 px-8 lg:px-12 relative">
	<div class="overflow-y-auto h-[calc(100vh-63px)] mx-auto max-w-screen-xl no-scrollbar" bind:this={viewport}>
		<div bind:this={contents} class="contents">
			<slot />
		</div>
	</div>
	<Svrollbar {viewport} {contents} />
</section>
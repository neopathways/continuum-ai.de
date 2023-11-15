<script lang="ts">
	import { onMount } from "svelte";
	import Two from "two.js";

	let canvas: HTMLCanvasElement;

	onMount(() => {
		// We want to draw four shapes on the canvas that follow the cursor movements
		// We will use two.js to draw everything
		// https://two.js.org/#introduction

		// Create a new instance of two.js
		const two = new Two({
			fullscreen: false,
			autostart: true,
			domElement: canvas,
			width: canvas.getBoundingClientRect().width,
			height: canvas.getBoundingClientRect().height,
		});

		// Create a new group that will hold all the shapes
		const group = two.makeGroup();
		// Create a rectangle with googly eyes
		const rect1 = two.makeRectangle(0, 0, 150, 300);
		rect1.stroke = "#6729ff";
		rect1.fill = "#6729ff";
		rect1.translation.set(two.width / 2, two.height / 2);
		const eye1 = two.makeCircle(two.width / 2 - rect1.width / 4, two.height / 2 - rect1.height / 2.5, 10);
		const eye2 = two.makeCircle(two.width / 2 + rect1.width / 4, two.height / 2 - rect1.height / 2.5, 10);
		const mouth = two.makeRectangle(two.width / 2, two.height / 2 - rect1.height / 4, 50, 10);
		// Add the eyes to the rectangle
		group.add(rect1)
		group.add(eye1);
		group.add(eye2, mouth);


		two.add(group)
	})
</script>

<canvas bind:this={canvas} class="w-full h-full">

</canvas>
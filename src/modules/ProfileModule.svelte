<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<Card>
  <GiftBoxSolid class="w-7 h-7 mb-3 text-gray-500 dark:text-gray-400" />
  <a href="/">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
  </a>
  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
  <a href="/" class="inline-flex items-center text-primary-600 hover:underline">
    See our guideline
    <ArrowUpRightFromSquareOutline class="w-3 h-3 ml-2.5" />
  </a>
</Card>
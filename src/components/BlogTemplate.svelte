<script lang="ts">
  import { Section, BlogTemplate, BlogHead, BlogBodyWrapper, ArticleWrapper, ArticleHead, ArticleBody, ArticleAuthor } from 'flowbite-svelte-blocks';
	import { Button } from "flowbite-svelte"
	import { ArrowRightOutline, NewspaperSolid } from "flowbite-svelte-icons"
  import blog from './blog-example.json';
	import "../style/blog.scss";
</script>

<Section name='content' classSection='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
  <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
    <div class="flex flex-row gap-2 mb-8">
			<img src={blog.author.profilePicture} alt={blog.author.name} class="rounded-full w-16">
			<div class="flex flex-col">
				<h3 class="font-bold text-lg text-gray-900 dark:text-gray-50">{blog.author.name}</h3>
				<span class="text-gray-400 text-sm font-normal">{blog.author.title}</span>
				<span class="text-gray-400 text-sm font-normal">{blog.date}</span>
			</div>
		</div>
		<h1 class="font-bold text-3xl text-gray-900 dark:text-gray-50 mb-4">{blog.title}</h1>
		{@html blog.content}
  </article>
</Section>
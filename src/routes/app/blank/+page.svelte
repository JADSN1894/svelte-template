<script>
	//* Icons
	import DocumentIcon from '$icons/hero-icons/DocumentIcon.svelte';

	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = 'Page Title';
</script>

<div class="hero h-4/5 bg-base-200">
	<div class="hero-content text-accent text-center">
		<div class="max-w-md">
			<DocumentIcon class="h-48 w-48 inline-block" />
			<h1 class="text-5xl mt-2 font-bold">Blank Page</h1>
		</div>
	</div>
</div>
<div class="h-16"></div>

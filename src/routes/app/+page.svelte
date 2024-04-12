<script lang="ts">
	//* Icons
	import FaceFrownIcon from '$icons/hero-icons/FaceFrownIcon.svelte';

	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = '';
</script>

<div class="hero h-4/5 bg-base-200">
	<div class="hero-content text-accent text-center">
		<div class="max-w-md">
			<FaceFrownIcon class="h-48 w-48 inline-block" />
			<h1 class="text-5xl font-bold">404 - Not Found</h1>
		</div>
	</div>
</div>
<div class="h-16"></div>

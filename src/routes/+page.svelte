<script lang="ts">
	import { getReactTailwindcssDatepickerState } from '$lib/components/ReactTailwindcssDatepicker/ReactTailwindcssDatepickerState.svelte';

	let reactTailwindcssDatepickerState = getReactTailwindcssDatepickerState();

	$inspect(reactTailwindcssDatepickerState).with((type, reactTailwindcssDatepickerState) => {
		if (type === 'update') {
			console.info(reactTailwindcssDatepickerState);
		}
	});
</script>

<div class="h-dvh w-dvw flex flex-col items-center justify-center gap-y-4">
	<h1 class="text-3xl font-bold font-mono text-primary underline">Welcome to Svelte template</h1>
	<a type="button" class="btn btn-primary font-mono uppercase" href="/app">Go to Template</a>
</div>

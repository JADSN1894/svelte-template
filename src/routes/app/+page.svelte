<script lang="ts">
	import { getReactTailwindcssDatepickerState } from '$root/src/lib/components/ReactTailwindcssDatepicker/ReactTailwindcssDatepickerState.svelte';

	let { classNames } = getReactTailwindcssDatepickerState();
</script>

<div class="w-full h-full flex items-center justify-center">
	{classNames}
</div>

<script lang="ts">
	// export const Arrow = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
	// return (

	// );
	// });
	type Props = {
		ref: HTMLDivElement;
	};

	let { ref }: Props = $props();
</script>

<div
	bind:this={ref}
	class="absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600"
/>

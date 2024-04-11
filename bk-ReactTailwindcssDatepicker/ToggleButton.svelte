<script lang="ts">
	import CloseIcon from './utils/icons/CloseIcon.svelte';
	import DateIcon from './utils/icons/DateIcon.svelte';

	type ToggleButtonProps = {
		isEmpty: boolean;
	};

	let { isEmpty }: ToggleButtonProps = $props();
</script>

<!-- const ToggleButton: React.FC<ToggleButtonProps> = (e: ToggleButtonProps): JSX.Element => {
    return e.isEmpty ? <DateIcon className="h-5 w-5" /> : <CloseIcon className="h-5 w-5" />;
}; -->

{#if isEmpty}
	<DateIcon className="h-5 w-5" />
{:else}
	<CloseIcon className="h-5 w-5" />
{/if}

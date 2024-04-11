<script lang="ts">
	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState';

	import { generateArrayNumber } from '../helpers';
	import RoundedButton from '../utils/RoundedButton.svelte';

	interface Props {
		year: number;
		currentYear: number;
		minYear: number | null;
		maxYear: number | null;
		clickYear: (data: number) => void;
	}

	let { dateLooking } = getReactTailwindcssDatepickerState();

	let { year, currentYear, minYear, maxYear, clickYear }: Props = $props();

	let startDate = $state(0);
	let endDate = $state(0);

	const _ = $derived.by(() => {
		switch (dateLooking) {
			case 'backward':
				startDate = year - 11;
				endDate = year;
				break;
			case 'middle':
				startDate = year - 4;
				endDate = year + 7;
				break;
			case 'forward':
			default:
				startDate = year;
				endDate = year + 11;
				break;
		}
	});
</script>

<div class="w-full grid grid-cols-2 gap-2 mt-2">
	{#each generateArrayNumber(startDate, endDate) as item}
		<RoundedButton
			padding="py-3"
			onclick={() => {
				clickYear(item);
			}}
			active={currentYear === item}
			disabled={(maxYear !== null && item > maxYear) || (minYear !== null && item < minYear)}
		>
			<div>
				{item}
			</div>
		</RoundedButton>
	{/each}
</div>

<script lang="ts">
	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState.svelte';

	import dayjs from 'dayjs';
	// import React, { useContext, useMemo } from 'react';

	import { DAYS } from '../constants';
	// import DatepickerContext from '../contexts/DatepickerContext';
	import { loadLanguageModule, shortString, ucFirst } from '../helpers';

	let { i18n, startWeekOn } = getReactTailwindcssDatepickerState();

	$effect(() => {
		loadLanguageModule(i18n);
	});

	const startDateModifier = $derived.by(() => {
		if (startWeekOn) {
			switch (startWeekOn) {
				case 'mon':
					return 1;
				case 'tue':
					return 2;
				case 'wed':
					return 3;
				case 'thu':
					return 4;
				case 'fri':
					return 5;
				case 'sat':
					return 6;
				case 'sun':
					return 0;
				default:
					return 0;
			}
		}
		return 0;
	});
</script>

<div class="grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2">
	{#each DAYS as item}
		<div class="tracking-wide text-gray-500 text-center">
			{ucFirst(
				shortString(
					dayjs(`2022-11-${6 + (item + startDateModifier)}`)
						.locale(i18n)
						.format('ddd')
				)
			)}
		</div>
	{/each}
</div>

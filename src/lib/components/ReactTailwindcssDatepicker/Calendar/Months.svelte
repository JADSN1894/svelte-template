<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useContext } from 'react';

	import { MONTHS } from '../constants';
	// import DatepickerContext from '../../contexts/DatepickerContext';
	// import { loadLanguageModule } from '../../helpers';
	// import { RoundedButton } from '../utils';

	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState.svelte';
	import { loadLanguageModule } from '../helpers';
	import RoundedButton from '../utils/RoundedButton.svelte';

	type Props = {
		currentMonth: number;
		clickMonth: (month: number) => void;
	};

	let { i18n } = getReactTailwindcssDatepickerState();

	let { currentMonth, clickMonth }: Props = $props();

	$effect(() => {
		loadLanguageModule(i18n);
	});
</script>

<div class="w-full grid grid-cols-2 gap-2 mt-2">
	{#each MONTHS as item}
		<RoundedButton
			padding="py-3"
			onclick={() => {
				clickMonth(item);
			}}
			active={currentMonth === item}
		>
			<div>{dayjs(`2022-${item}-01`).locale(i18n).format('MMM')}</div>
		</RoundedButton>
	{/each}
</div>

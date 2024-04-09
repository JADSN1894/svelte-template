<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useCallback, useContext } from 'react';

	import { DATE_FORMAT } from './constants';
	// import DatepickerContext from './contexts/DatepickerContext';

	import PrimaryButton from './utils/PrimaryButton.svelte';
	import SecondaryButton from './utils/SecondaryButton.svelte';
	import type { DatepickerContext } from './contexts/DatepickerContext';

	type Props = {
		// setContextRef?: (ref: React.RefObject<HTMLInputElement>) => void;
		// setContextRef?: (ref: HTMLInputElement) => void;

		datePicker: DatepickerContext;
	};

	const { hideDatepicker, period, changeDatepickerValue, configs, classNames }: DatepickerContext =
		$props();

	// Contexts
	// const { hideDatepicker, period, changeDatepickerValue, configs, classNames } =
	// 	useContext(DatepickerContext);

	// Functions
	// const getClassName = useCallback(() => {
	// if (typeof classNames !== 'undefined' && typeof classNames?.footer === 'function') {
	// return classNames.footer();
	// }

	// return 'flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700';
	// }, [classNames]);

	const getClassName = $state(() => {
		if (typeof classNames !== 'undefined' && typeof classNames?.footer === 'function') {
			return classNames.footer();
		}

		return 'flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700';
	});
</script>

<div class={getClassName()}>
	<div class="w-full md:w-auto flex items-center justify-center space-x-3">
		<SecondaryButton
			onclick={() => {
				hideDatepicker();
			}}
		>
			<div>{configs?.footer?.cancel ? configs.footer.cancel : 'Cancel'}</div>
		</SecondaryButton>
		<PrimaryButton
			onclick={() => {
				if (period.start && period.end) {
					changeDatepickerValue({
						startDate: dayjs(period.start).format(DATE_FORMAT),
						endDate: dayjs(period.end).format(DATE_FORMAT)
					});
					hideDatepicker();
				}
			}}
			disabled={!(period.start && period.end)}
		>
			<div>{configs?.footer?.apply ? configs.footer.apply : 'Apply'}</div>
		</PrimaryButton>
	</div>
</div>

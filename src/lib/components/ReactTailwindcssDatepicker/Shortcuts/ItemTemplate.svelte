<script lang="ts">
	import dayjs from 'dayjs';
	import type { Period, ShortcutsItem } from '../types';
	import type { Snippet } from 'svelte';
	// import type { DatepickerContext } from '../contexts/DatepickerContext';
	import { TAILWIND_CONFIG } from '$lib/utils/tailwind';
	import { TEXT_COLOR } from '../constants';
	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState.svelte';

	type ItemTemplateProps = {
		children?: Snippet;
		key: number;
		item: ShortcutsItem | ShortcutsItem[];
		// datePicker?: DatepickerContext;
	};

	const {
		primaryColor,
		period,
		changePeriod,
		updateFirstDate,
		dayHover,
		changeDayHover,
		hideDatepicker,
		changeDatepickerValue
	} = getReactTailwindcssDatepickerState();

	const { children, item, key }: ItemTemplateProps = $props();

	// let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[600];

	// const ItemTemplate = React.memo((props: ItemTemplateProps) => {
	// const {
	// 	primaryColor,
	// 	period,
	// 	changePeriod,
	// 	updateFirstDate,
	// 	dayHover,
	// 	changeDayHover,
	// 	hideDatepicker,
	// 	changeDatepickerValue
	// } = useContext(DatepickerContext);

	// Functions
	// const getClassName: () => string = useCallback(() => {
	// 	const textColor = TEXT_COLOR['600'][primaryColor as keyof (typeof TEXT_COLOR)['600']];
	// 	const textColorHover = TEXT_COLOR.hover[primaryColor as keyof typeof TEXT_COLOR.hover];
	// 	return `whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer ${textColor} ${textColorHover}`;
	// }, [primaryColor]);

	const getClassName = $state(() => {
		const textColor = TEXT_COLOR['600'][primaryColor as keyof (typeof TEXT_COLOR)['600']];
		const textColorHover = TEXT_COLOR.hover[primaryColor as keyof typeof TEXT_COLOR.hover];
		return `whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer ${textColor} ${textColorHover}`;
	});

	// const chosePeriod = useCallback(
	// 	(item: Period) => {
	// 		if (dayHover) {
	// 			changeDayHover(null);
	// 		}
	// 		if (period.start || period.end) {
	// 			changePeriod({
	// 				start: null,
	// 				end: null
	// 			});
	// 		}
	// 		changePeriod(item);
	// 		changeDatepickerValue({
	// 			startDate: item.start,
	// 			endDate: item.end
	// 		});
	// 		updateFirstDate(dayjs(item.start));
	// 		hideDatepicker();
	// 	},
	// 	[
	// 		changeDatepickerValue,
	// 		changeDayHover,
	// 		changePeriod,
	// 		dayHover,
	// 		hideDatepicker,
	// 		period.end,
	// 		period.start,
	// 		updateFirstDate
	// 	]
	// );

	// });

	const chosePeriod = $state((item: Period) => {
		if (dayHover) {
			changeDayHover(null);
		}
		if (period.start || period.end) {
			changePeriod({
				start: null,
				end: null
			});
		}
		changePeriod(item);
		changeDatepickerValue({
			startDate: item.start,
			endDate: item.end
		});
		updateFirstDate(dayjs(item.start));
		hideDatepicker();
	});
</script>

<div>
	<button class={getClassName()} onclick={() => {
			chosePeriod(period!);
		}}>
		{@render children?.()}
	</button>
</div>

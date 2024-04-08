<script lang="ts">
	import dayjs from 'dayjs';
	import type { Period, ShortcutsItem } from '../types';
	import type { Snippet } from 'svelte';

	type ItemTemplateProps = {
		children?: Snippet;
		key: number;
		item: ShortcutsItem | ShortcutsItem[];
	};

	const { children, key, item }: ItemTemplateProps = $props();

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
</script>

<!-- <li
	className={getClassName()}
	onClick={() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		chosePeriod(props?.item.period);
	}}
>
	{children}
</li> -->

<div>
	{@render children?.()}
</div>

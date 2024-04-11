<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useCallback, useContext, useEffect, useMemo, $state } from 'react';

	import { CALENDAR_SIZE, DATE_FORMAT } from '../constants';
	// import DatepickerContext from '../../contexts/DatepickerContext';
	import {
		formatDate,
		getDaysInMonth,
		getFirstDayInMonth,
		getFirstDaysInMonth,
		getLastDaysInMonth,
		getNumberOfDay,
		loadLanguageModule,
		nextMonth,
		previousMonth
	} from '../helpers';
	import ChevronLeftIcon from '../utils/icons/ChevronLeftIcon.svelte';

	import ChevronRightIcon from '../utils/icons/ChevronRightIcon.svelte';
	import DoubleChevronLeftIcon from '../utils/icons/DoubleChevronLeftIcon.svelte';
	import DoubleChevronRightIcon from '../utils/icons/DoubleChevronRightIcon.svelte';
	// import RoundedButto from '../utils/icons/RoundedButto.svelte'

	import Days from './Days.svelte';
	import Months from './Months.svelte';
	import Week from './Week.svelte';
	import Years from './Years.svelte';

	import type { DateType } from '../types';
	import RoundedButton from '../utils/RoundedButton.svelte';

	interface Props {
		date: dayjs.Dayjs;
		minDate?: DateType | null;
		maxDate?: DateType | null;
		onClickPrevious: () => void;
		onClickNext: () => void;
		changeMonth: (month: number) => void;
		changeYear: (year: number) => void;
	}

	let { date, minDate, maxDate, onClickPrevious, onClickNext, changeMonth, changeYear }: Props =
		$props();

	// const Calendar: React.FC<Props> = ({
	// 	date,
	// 	minDate,
	// 	maxDate,
	// 	onClickPrevious,
	// 	onClickNext,
	// 	changeMonth,
	// 	changeYear
	// }) => {
	// Contexts
	// const {
	// 	period,
	// 	changePeriod,
	// 	changeDayHover,
	// 	showFooter,
	// 	changeDatepickerValue,
	// 	hideDatepicker,
	// 	asSingle,
	// 	i18n,
	// 	startWeekOn,
	// 	input
	// } = useContext(DatepickerContext);
	// loadLanguageModule(i18n);

	// States
	// const [showMonths, setShowMonths] = $state(false);
	const showMonths = $state(false);

	// const [showYears, setShowYears] = $state(false);
	const showYears = $state(false);

	// const [year, setYear] = $state(date.year());
	const year = $state(date.year());

	// Functions
	// const previous = useCallback(() => {
	// 	return getLastDaysInMonth(
	// 		previousMonth(date),
	// 		getNumberOfDay(getFirstDayInMonth(date).ddd, startWeekOn)
	// 	);
	// }, [date, startWeekOn]);

	// const current = useCallback(() => {
	// 	return getDaysInMonth(formatDate(date));
	// }, [date]);

	// const next = useCallback(() => {
	// 	return getFirstDaysInMonth(
	// 		previousMonth(date),
	// 		CALENDAR_SIZE - (previous().length + current().length)
	// 	);
	// }, [current, date, previous]);

	// const hideMonths = useCallback(() => {
	// 	showMonths && setShowMonths(false);
	// }, [showMonths]);

	// const hideYears = useCallback(() => {
	// 	showYears && setShowYears(false);
	// }, [showYears]);

	// const clickMonth = useCallback(
	// 	(month: number) => {
	// 		setTimeout(() => {
	// 			changeMonth(month);
	// 			setShowMonths(!showMonths);
	// 		}, 250);
	// 	},
	// 	[changeMonth, showMonths]
	// );

	// const clickYear = useCallback(
	// 	(year: number) => {
	// 		setTimeout(() => {
	// 			changeYear(year);
	// 			setShowYears(!showYears);
	// 		}, 250);
	// 	},
	// 	[changeYear, showYears]
	// );

	// const clickDay = useCallback(
	// 	(day: number, month = date.month() + 1, year = date.year()) => {
	// 		const fullDay = `${year}-${month}-${day}`;
	// 		let newStart;
	// 		let newEnd = null;

	// 		function chosePeriod(start: string, end: string) {
	// 			const ipt = input?.current;
	// 			changeDatepickerValue(
	// 				{
	// 					startDate: dayjs(start).format(DATE_FORMAT),
	// 					endDate: dayjs(end).format(DATE_FORMAT)
	// 				},
	// 				ipt
	// 			);
	// 			hideDatepicker();
	// 		}

	// 		if (period.start && period.end) {
	// 			if (changeDayHover) {
	// 				changeDayHover(null);
	// 			}
	// 			changePeriod({
	// 				start: null,
	// 				end: null
	// 			});
	// 		}

	// 		if ((!period.start && !period.end) || (period.start && period.end)) {
	// 			if (!period.start && !period.end) {
	// 				changeDayHover(fullDay);
	// 			}
	// 			newStart = fullDay;
	// 			if (asSingle) {
	// 				newEnd = fullDay;
	// 				chosePeriod(fullDay, fullDay);
	// 			}
	// 		} else {
	// 			if (period.start && !period.end) {
	// 				// start not null
	// 				// end null
	// 				const condition =
	// 					dayjs(fullDay).isSame(dayjs(period.start)) ||
	// 					dayjs(fullDay).isAfter(dayjs(period.start));
	// 				newStart = condition ? period.start : fullDay;
	// 				newEnd = condition ? fullDay : period.start;
	// 			} else {
	// 				// Start null
	// 				// End not null
	// 				const condition =
	// 					dayjs(fullDay).isSame(dayjs(period.end)) || dayjs(fullDay).isBefore(dayjs(period.end));
	// 				newStart = condition ? fullDay : period.start;
	// 				newEnd = condition ? period.end : fullDay;
	// 			}

	// 			if (!showFooter) {
	// 				if (newStart && newEnd) {
	// 					chosePeriod(newStart, newEnd);
	// 				}
	// 			}
	// 		}

	// 		if (!(newEnd && newStart) || showFooter) {
	// 			changePeriod({
	// 				start: newStart,
	// 				end: newEnd
	// 			});
	// 		}
	// 	},
	// 	[
	// 		asSingle,
	// 		changeDatepickerValue,
	// 		changeDayHover,
	// 		changePeriod,
	// 		date,
	// 		hideDatepicker,
	// 		period.end,
	// 		period.start,
	// 		showFooter,
	// 		input
	// 	]
	// );

	// const clickPreviousDays = useCallback(
	// 	(day: number) => {
	// 		const newDate = previousMonth(date);
	// 		clickDay(day, newDate.month() + 1, newDate.year());
	// 		onClickPrevious();
	// 	},
	// 	[clickDay, date, onClickPrevious]
	// );

	// const clickNextDays = useCallback(
	// 	(day: number) => {
	// 		const newDate = nextMonth(date);
	// 		clickDay(day, newDate.month() + 1, newDate.year());
	// 		onClickNext();
	// 	},
	// 	[clickDay, date, onClickNext]
	// );

	// // UseEffects & UseLayoutEffect
	// useEffect(() => {
	// 	setYear(date.year());
	// }, [date]);

	// // Variables
	// const calendarData = useMemo(() => {
	// 	return {
	// 		date: date,
	// 		days: {
	// 			previous: previous(),
	// 			current: current(),
	// 			next: next()
	// 		}
	// 	};
	// }, [current, date, next, previous]);
	// const minYear = React.useMemo(
	// 	() => (minDate && dayjs(minDate).isValid() ? dayjs(minDate).year() : null),
	// 	[minDate]
	// );
	// const maxYear = React.useMemo(
	// 	() => (maxDate && dayjs(maxDate).isValid() ? dayjs(maxDate).year() : null),
	// 	[maxDate]
	// );
	// };

	// export default Calendar;
</script>

<div class="w-full md:w-[296px] md:min-w-[296px]">
	<div
		class="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5"
	>
		{#if !showMonths && !showYears}
			<div class="flex-none">
				<!-- <RoundedButton onclick={onClickPrevious}  roundedfull={true} > -->
				<RoundedButton onclick={() => onClickPrevious()} roundedFull={true}>
					<ChevronLeftIcon class="h-5 w-5" />
				</RoundedButton>
			</div>
		{:else}{/if}
	</div>
</div>

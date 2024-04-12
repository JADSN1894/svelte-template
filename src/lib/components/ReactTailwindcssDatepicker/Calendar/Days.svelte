<script lang="ts">
	import dayjs from 'dayjs';
	import isBetween from 'dayjs/plugin/isBetween';
	// import React, { useCallback, useContext } from 'react';

	import { BG_COLOR, TEXT_COLOR } from '../constants';
	// import DatepickerContext from '../../contexts/DatepickerContext';
	import { formatDate, nextMonth, previousMonth, classNames as cn } from '../helpers';
	import { type Period } from '../types';

	//* Tailwind
	import { TAILWIND_CONFIG } from '$lib/utils/tailwind';

	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState.svelte';
	import { loadLanguageModule } from '../helpers';

	// let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple;

	dayjs.extend(isBetween);

	type Props = {
		calendarData: {
			date: dayjs.Dayjs;
			days: {
				previous: number[];
				current: number[];
				next: number[];
			};
		};
		onClickPreviousDays: (day: number) => void;
		onClickDay: (day: number) => void;
		onClickNextDays: (day: number) => void;
	};

	let { calendarData, onClickPreviousDays, onClickDay, onClickNextDays }: Props = $props();

	let {
		primaryColor,
		period,
		changePeriod,
		dayHover,
		changeDayHover,
		minDate,
		maxDate,
		disabledDates
	} = getReactTailwindcssDatepickerState();

	// Functions
	const currentDateClass = $state((item: number) => {
		const itemDate = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
			item >= 10 ? item : '0' + item
		}`;
		if (formatDate(dayjs()) === formatDate(dayjs(itemDate)))
			return TEXT_COLOR['500'][primaryColor as keyof (typeof TEXT_COLOR)['500']];
		return '';
	});

	const activeDateData = $state((day: number) => {
		const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${day}`;
		let className = '';

		if (dayjs(fullDay).isSame(period.start) && dayjs(fullDay).isSame(period.end)) {
			className = ` ${BG_COLOR['500'][primaryColor]} text-white font-medium rounded-full`;
		} else if (dayjs(fullDay).isSame(period.start)) {
			className = ` ${BG_COLOR['500'][primaryColor]} text-white font-medium ${
				dayjs(fullDay).isSame(dayHover) && !period.end ? 'rounded-full' : 'rounded-l-full'
			}`;
		} else if (dayjs(fullDay).isSame(period.end)) {
			className = ` ${BG_COLOR['500'][primaryColor]} text-white font-medium ${
				dayjs(fullDay).isSame(dayHover) && !period.start ? 'rounded-full' : 'rounded-r-full'
			}`;
		}

		return {
			active: dayjs(fullDay).isSame(period.start) || dayjs(fullDay).isSame(period.end),
			className: className
		};
	});

	const hoverClassByDay = $state((day: number) => {
		let className = currentDateClass(day);
		const fullDay = `${calendarData.date.year()}-${calendarData.date.month() + 1}-${
			day >= 10 ? day : '0' + day
		}`;

		if (period.start && period.end) {
			if (dayjs(fullDay).isBetween(period.start, period.end, 'day', '[)')) {
				return ` ${BG_COLOR['100'][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
			}
		}

		if (!dayHover) {
			return className;
		}

		if (period.start && dayjs(fullDay).isBetween(period.start, dayHover, 'day', '[)')) {
			className = ` ${BG_COLOR['100'][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
		}

		if (period.end && dayjs(fullDay).isBetween(dayHover, period.end, 'day', '[)')) {
			className = ` ${BG_COLOR['100'][primaryColor]} ${currentDateClass(day)} dark:bg-white/10`;
		}

		if (dayHover === fullDay) {
			const bgColor = BG_COLOR['500'][primaryColor];
			className = ` transition-all duration-500 text-white font-medium ${bgColor} ${
				period.start ? 'rounded-r-full' : 'rounded-l-full'
			}`;
		}

		return className;
	});

	const isDateTooEarly = $state((day: number, type: 'current' | 'previous' | 'next') => {
		if (!minDate) {
			return false;
		}
		const object = {
			previous: previousMonth(calendarData.date),
			current: calendarData.date,
			next: nextMonth(calendarData.date)
		};
		const newDate = object[type as keyof typeof object];
		const formattedDate = newDate.set('date', day);
		return dayjs(formattedDate).isSame(dayjs(minDate), 'day')
			? false
			: dayjs(formattedDate).isBefore(dayjs(minDate));
	});

	const isDateTooLate = $state((day: number, type: 'current' | 'previous' | 'next') => {
		if (!maxDate) {
			return false;
		}
		const object = {
			previous: previousMonth(calendarData.date),
			current: calendarData.date,
			next: nextMonth(calendarData.date)
		};
		const newDate = object[type as keyof typeof object];
		const formattedDate = newDate.set('date', day);
		return dayjs(formattedDate).isSame(dayjs(maxDate), 'day')
			? false
			: dayjs(formattedDate).isAfter(dayjs(maxDate));
	});

	const isDateDisabled = $state((day: number, type: 'current' | 'previous' | 'next') => {
		if (isDateTooEarly(day, type) || isDateTooLate(day, type)) {
			return true;
		}
		const object = {
			previous: previousMonth(calendarData.date),
			current: calendarData.date,
			next: nextMonth(calendarData.date)
		};
		const newDate = object[type as keyof typeof object];
		const formattedDate = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : '0' + day}`;

		if (!disabledDates || (Array.isArray(disabledDates) && !disabledDates.length)) {
			return false;
		}

		let matchingCount = 0;
		disabledDates?.forEach((dateRange) => {
			if (
				dayjs(formattedDate).isAfter(dateRange.startDate) &&
				dayjs(formattedDate).isBefore(dateRange.endDate)
			) {
				matchingCount++;
			}
			if (
				dayjs(formattedDate).isSame(dateRange.startDate) ||
				dayjs(formattedDate).isSame(dateRange.endDate)
			) {
				matchingCount++;
			}
		});
		return matchingCount > 0;
	});

	const buttonClass = $state((day: number, type: 'current' | 'next' | 'previous') => {
		const baseClass = 'flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10';
		if (type === 'current') {
			return cn(
				baseClass,
				!activeDateData(day).active ? hoverClassByDay(day) : activeDateData(day).className,
				isDateDisabled(day, type) && 'line-through'
			);
		}
		return cn(baseClass, isDateDisabled(day, type) && 'line-through', 'text-gray-400');
	});

	const checkIfHoverPeriodContainsDisabledPeriod = $state((hoverPeriod: Period) => {
		if (!Array.isArray(disabledDates)) {
			return false;
		}
		for (let i = 0; i < disabledDates.length; i++) {
			if (
				dayjs(hoverPeriod.start).isBefore(disabledDates[i].startDate) &&
				dayjs(hoverPeriod.end).isAfter(disabledDates[i].endDate)
			) {
				return true;
			}
		}
		return false;
	});

	const getMetaData = $state(() => {
		return {
			previous: previousMonth(calendarData.date),
			current: calendarData.date,
			next: nextMonth(calendarData.date)
		};
	});

	const hoverDay = $state((day: number, type: string) => {
		const object = getMetaData();
		const newDate = object[type as keyof typeof object];
		const newHover = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : '0' + day}`;

		if (period.start && !period.end) {
			const hoverPeriod = { ...period, end: newHover };
			if (dayjs(newHover).isBefore(dayjs(period.start))) {
				hoverPeriod.start = newHover;
				hoverPeriod.end = period.start;
				if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
					changePeriod({
						start: null,
						end: period.start
					});
				}
			}
			if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
				changeDayHover(newHover);
			}
		}

		if (!period.start && period.end) {
			const hoverPeriod = { ...period, start: newHover };
			if (dayjs(newHover).isAfter(dayjs(period.end))) {
				hoverPeriod.start = period.end;
				hoverPeriod.end = newHover;
				if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
					changePeriod({
						start: period.end,
						end: null
					});
				}
			}
			if (!checkIfHoverPeriodContainsDisabledPeriod(hoverPeriod)) {
				changeDayHover(newHover);
			}
		}
	});

	const handleClickDay = $state((day: number, type: 'previous' | 'current' | 'next') => {
		function continueClick() {
			if (type === 'previous') {
				onClickPreviousDays(day);
			}

			if (type === 'current') {
				onClickDay(day);
			}

			if (type === 'next') {
				onClickNextDays(day);
			}
		}

		if (disabledDates?.length) {
			const object = getMetaData();
			const newDate = object[type as keyof typeof object];
			const clickDay = `${newDate.year()}-${newDate.month() + 1}-${day >= 10 ? day : '0' + day}`;

			if (period.start && !period.end) {
				dayjs(clickDay).isSame(dayHover) && continueClick();
			} else if (!period.start && period.end) {
				dayjs(clickDay).isSame(dayHover) && continueClick();
			} else {
				continueClick();
			}
		} else {
			continueClick();
		}
	});
</script>

<div class="grid grid-cols-7 gap-y-0.5 my-1">
	{#each calendarData.days.previous as item}
		<button
			type="button"
			disabled={isDateDisabled(item, 'previous')}
			class={`${buttonClass(item, 'previous')}`}
			onClick={() => handleClickDay(item, 'previous')}
			onMouseOver={() => {
				hoverDay(item, 'previous');
			}}
		>
			{item}
		</button>
	{/each}

	{#each calendarData.days.current as item}
		<button
			type="button"
			disabled={isDateDisabled(item, 'current')}
			class={`${buttonClass(item, 'current')}`}
			onClick={() => handleClickDay(item, 'current')}
			onMouseOver={() => {
				hoverDay(item, 'current');
			}}
		>
			{item}
		</button>
	{/each}

	{#each calendarData.days.next as item}
		<button
			type="button"
			disabled={isDateDisabled(item, 'next')}
			class={`${buttonClass(item, 'next')}`}
			onClick={() => handleClickDay(item, 'next')}
			onMouseOver={() => {
				hoverDay(item, 'next');
			}}
		>
			{item}
		</button>
	{/each}
</div>

<script lang="ts">
	import dayjs, { Dayjs } from 'dayjs';
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

	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState';

	interface Props {
		date: Dayjs;
		minDate?: DateType | null;
		maxDate?: DateType | null;
		onClickPrevious: () => void;
		onClickNext: () => void;
		changeMonth: (month: number) => void;
		changeYear: (year: number) => void;
	}

	let { date, onClickPrevious, onClickNext, changeMonth, changeYear, minDate, maxDate }: Props =
		$props();

	let {
		period,
		changePeriod,
		changeDayHover,
		showFooter,
		changeDatepickerValue,
		hideDatepicker,
		asSingle,
		i18n,
		startWeekOn,
		input
	} = getReactTailwindcssDatepickerState();

	// States
	// const [showMonths, setShowMonths] = $state(false);
	let showMonths = $state(false);

	// const [showYears, setShowYears] = $state(false);
	let showYears = $state(false);

	// const [year, setYear] = $state(date.year());
	let year = $state(date.year());

	$effect(() => {
		loadLanguageModule(i18n);
	});

	const previous = () => {
		return getLastDaysInMonth(
			previousMonth(date),
			getNumberOfDay(getFirstDayInMonth(date).ddd, startWeekOn)
		);
	};

	const current = () => {
		return getDaysInMonth(formatDate(date));
	};

	const next = () => {
		return getFirstDaysInMonth(
			previousMonth(date),
			CALENDAR_SIZE - (previous().length + current().length)
		);
	};

	const hideMonths = () => (showMonths = false);
	const hideYears = () => (showYears = false);

	const clickMonth = $state((month: number) => {
		setTimeout(() => {
			changeMonth(month);
			showMonths = !showMonths;
		}, 250);
	});

	const clickYear = $state((year: number) => {
		setTimeout(() => {
			changeYear(year);
			showYears = !showYears;
		}, 250);
	});

	const clickDay = $state((day: number, month = date.month() + 1, year = date.year()) => {
		const fullDay = `${year}-${month}-${day}`;
		let newStart;
		let newEnd = null;

		function chosePeriod(start: string, end: string) {
			const ipt = input;
			changeDatepickerValue(
				{
					startDate: dayjs(start).format(DATE_FORMAT),
					endDate: dayjs(end).format(DATE_FORMAT)
				},
				ipt
			);
			hideDatepicker();
		}

		if (period.start && period.end) {
			if (changeDayHover) {
				changeDayHover(null);
			}
			changePeriod({
				start: null,
				end: null
			});
		}

		if ((!period.start && !period.end) || (period.start && period.end)) {
			if (!period.start && !period.end) {
				changeDayHover(fullDay);
			}
			newStart = fullDay;
			if (asSingle) {
				newEnd = fullDay;
				chosePeriod(fullDay, fullDay);
			}
		} else {
			if (period.start && !period.end) {
				// start not null
				// end null
				const condition =
					dayjs(fullDay).isSame(dayjs(period.start)) || dayjs(fullDay).isAfter(dayjs(period.start));
				newStart = condition ? period.start : fullDay;
				newEnd = condition ? fullDay : period.start;
			} else {
				// Start null
				// End not null
				const condition =
					dayjs(fullDay).isSame(dayjs(period.end)) || dayjs(fullDay).isBefore(dayjs(period.end));
				newStart = condition ? fullDay : period.start;
				newEnd = condition ? period.end : fullDay;
			}

			if (!showFooter) {
				if (newStart && newEnd) {
					chosePeriod(newStart, newEnd);
				}
			}
		}

		if (!(newEnd && newStart) || showFooter) {
			changePeriod({
				start: newStart,
				end: newEnd
			});
		}
	});

	const clickPreviousDays = $state((day: number) => {
		const newDate = previousMonth(date);
		clickDay(day, newDate.month() + 1, newDate.year());
		onClickPrevious();
	});

	const clickNextDays = $state((day: number) => {
		const newDate = nextMonth(date);
		clickDay(day, newDate.month() + 1, newDate.year());
		onClickNext();
	});

	$effect(() => {
		year = date.year();
	});

	// Variables
	const calendarData = $state({
		date: date,
		days: {
			previous: previous(),
			current: current(),
			next: next()
		}
	});
	const minYear = $derived(minDate && dayjs(minDate).isValid() ? dayjs(minDate).year() : null);
	const maxYear = $derived(maxDate && dayjs(maxDate).isValid() ? dayjs(maxDate).year() : null);
</script>

<div class="w-full md:w-[296px] md:min-w-[296px]">
	<div
		class="flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5"
	>
		{#if !showMonths && !showYears}
			<div class="flex-none">
				<RoundedButton onclick={() => onClickPrevious()} roundedFull={true}>
					<ChevronLeftIcon class="h-5 w-5" />
				</RoundedButton>
			</div>
		{/if}

		{#if showYears}
			<RoundedButton
				roundedFull={true}
				onclick={() => {
					year = year - 12;
				}}
			>
				<DoubleChevronLeftIcon className="h-5 w-5" />
			</RoundedButton>
		{/if}

		<div class="flex flex-1 items-center space-x-1.5">
			<div class="w-1/2">
				<RoundedButton
					onclick={() => {
						showMonths = !showMonths;
						hideYears();
					}}
				>
					<div>
						{calendarData.date.locale(i18n).format('MMM')}
						<div />
					</div>
				</RoundedButton>
			</div>
			<div class="w-1/2">
				<RoundedButton
					onclick={() => {
						showYears = !showYears;
						hideMonths();
					}}
				>
					<div>
						{calendarData.date.year()}
						<div />
					</div>
				</RoundedButton>
			</div>
		</div>
		show

		{#if showYears}
			<div class="flex-none">
				<RoundedButton
					roundedFull={true}
					onclick={() => {
						year = year + 12;
					}}
				>
					<DoubleChevronRightIcon class="h-5 w-5" />
				</RoundedButton>
			</div>
		{/if}

		{#if !showMonths && !showYears}
			<div class="flex-none">
				<RoundedButton roundedFull={true} onclick={onClickNext}>
					<ChevronRightIcon class="h-5 w-5" />
				</RoundedButton>
			</div>
		{/if}
	</div>

	<div class="px-0.5 sm:px-2 mt-0.5 min-h-[285px]">
		{#if showMonths}
			<Months currentMonth={calendarData.date.month() + 1} {clickMonth} />
		{/if}

		{#if showYears}
			<Years {year} {minYear} {maxYear} currentYear={calendarData.date.year()} {clickYear} />
		{/if}

		{#if !showMonths && !showYears}
			<div>
				<Week />

				<Days
					{calendarData}
					onClickPreviousDays={clickPreviousDays}
					onClickDay={clickDay}
					onClickNextDays={clickNextDays}
				/>
			</div>
		{/if}
	</div>
</div>

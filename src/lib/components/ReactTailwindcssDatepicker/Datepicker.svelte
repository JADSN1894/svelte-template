<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

	import Calendar from './Calendar/Calendar.svelte';
	import Footer from './Footer.svelte';
	import Input from './Input.svelte';
	import Shortcuts from './Shortcuts.svelte';
	import { COLORS, DATE_FORMAT, DEFAULT_COLOR, LANGUAGE } from './constants';
	// import DatepickerContext from './contexts/DatepickerContext';
	import { formatDate, nextMonth, previousMonth } from './helpers';
	// import useOnClickOutside from './hooks';
	import type { Period, DatepickerType, ColorKeys } from './types';

	import Arrow from './utils/Arrow.svelte';
	import VerticalDash from './utils/VerticalDash.svelte';
	import { stub } from './contexts/DatepickerContext';

	const inputRef = $state(HTMLInputElement);

	const {
		primaryColor = 'blue',
		value = null,
		onChange,
		useRange = true,
		showFooter = false,
		showShortcuts = false,
		configs = undefined,
		asSingle = false,
		placeholder = null,
		separator = '~',
		startFrom = null,
		i18n = LANGUAGE,
		disabled = false,
		inputClassName = null,
		containerClassName = null,
		toggleClassName = null,
		toggleIcon = undefined,
		displayFormat = DATE_FORMAT,
		readOnly = false,
		minDate = null,
		maxDate = null,
		dateLooking = 'forward',
		disabledDates = null,
		inputId,
		inputName,
		startWeekOn = 'sun',
		classNames = undefined,
		popoverDirection = undefined
	}: DatepickerType = $props();

	// 	const Datepicker: React.FC<DatepickerType> = (
	// 		{
	// 		primaryColor = 'blue',
	// 		value = null,
	// 		onChange,
	// 		useRange = true,
	// 		showFooter = false,
	// 		showShortcuts = false,
	// 		configs = undefined,
	// 		asSingle = false,
	// 		placeholder = null,
	// 		separator = '~',
	// 		startFrom = null,
	// 		i18n = LANGUAGE,
	// 		disabled = false,
	// 		inputClassName = null,
	// 		containerClassName = null,
	// 		toggleClassName = null,
	// 		toggleIcon = undefined,
	// 		displayFormat = DATE_FORMAT,
	// 		readOnly = false,
	// 		minDate = null,
	// 		maxDate = null,
	// 		dateLooking = 'forward',
	// 		disabledDates = null,
	// 		inputId,
	// 		inputName,
	// 		startWeekOn = 'sun',
	// 		classNames = undefined,
	// 		popoverDirection = undefined
	// 	}
	// ) => {
	// Ref
	const containerRef = $state<HTMLDivElement | null>(null);
	let calendarContainerRef = $state<HTMLDivElement | null>(null);
	const arrowRef = $state<HTMLDivElement | null>(null);

	// State
	// const [firstDate, setFirstDate] = $state<dayjs.Dayjs>(
	// 	startFrom && dayjs(startFrom).isValid() ? dayjs(startFrom) : dayjs()
	// );

	let firstDate = $state<dayjs.Dayjs>(
		startFrom && dayjs(startFrom).isValid() ? dayjs(startFrom) : dayjs()
	);

	// const [secondDate, setSecondDate] = $state<dayjs.Dayjs>(nextMonth(firstDate));
	let secondDate = $state<dayjs.Dayjs>(nextMonth(firstDate));

	// const [period, setPeriod] = $state<Period>({
	// 	start: null,
	// 	end: null
	// });

	let period = $state<Period>({
		start: null,
		end: null
	});

	// const [dayHover, setDayHover] = $state<string | null>(null);
	let dayHover = $state<string | null>(null);

	// const [inputText, setInputText] = $state<string>('');
	let inputText = $state<string>('');

	// const [inputRef, setInputRef] = $state(React.createRef<HTMLInputElement>());

	// Custom Hooks use
	// useOnClickOutside(containerRef, () => {
	// 	const container = containerRef.current;
	// 	if (container) {
	// 		hideDatepicker();
	// 	}
	// });

	// Functions
	// const hideDatepicker = useCallback(() => {
	// 	const div = calendarContainerRef.current;
	// 	const arrow = arrowRef.current;
	// 	if (arrow && div && div.classList.contains('block')) {
	// 		div.classList.remove('block');
	// 		div.classList.remove('translate-y-0');
	// 		div.classList.remove('opacity-1');
	// 		div.classList.add('translate-y-4');
	// 		div.classList.add('opacity-0');
	// 		setTimeout(() => {
	// 			div.classList.remove('bottom-full');
	// 			div.classList.add('hidden');
	// 			div.classList.add('mb-2.5');
	// 			div.classList.add('mt-2.5');
	// 			arrow.classList.remove('-bottom-2');
	// 			arrow.classList.remove('border-r');
	// 			arrow.classList.remove('border-b');
	// 			arrow.classList.add('border-l');
	// 			arrow.classList.add('border-t');
	// 		}, 300);
	// 	}
	// }, []);

	const hideDatepicker = $state(() => {
		const div = calendarContainerRef!;
		const arrow = arrowRef!;
		if (arrow && div && div.classList.contains('block')) {
			div.classList.remove('block');
			div.classList.remove('translate-y-0');
			div.classList.remove('opacity-1');
			div.classList.add('translate-y-4');
			div.classList.add('opacity-0');
			setTimeout(() => {
				div.classList.remove('bottom-full');
				div.classList.add('hidden');
				div.classList.add('mb-2.5');
				div.classList.add('mt-2.5');
				arrow.classList.remove('-bottom-2');
				arrow.classList.remove('border-r');
				arrow.classList.remove('border-b');
				arrow.classList.add('border-l');
				arrow.classList.add('border-t');
			}, 300);
		}
	});

	/* Start First */
	// const firstGotoDate = useCallback(
	// 	(date: dayjs.Dayjs) => {
	// 		const newDate = dayjs(formatDate(date));
	// 		const reformatDate = dayjs(formatDate(secondDate));
	// 		if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
	// 			setSecondDate(nextMonth(date));
	// 		}
	// 		setFirstDate(date);
	// 	},
	// 	[secondDate]
	// );

	const firstGotoDate = $state((date: dayjs.Dayjs) => {
		const newDate = dayjs(formatDate(date));
		const reformatDate = dayjs(formatDate(secondDate));
		if (newDate.isSame(reformatDate) || newDate.isAfter(reformatDate)) {
			secondDate = nextMonth(date);
		}
		firstDate = date;
		return secondDate;
	});

	const previousMonthFirst = $state(() => {
		firstDate = previousMonth(firstDate);
		return firstDate;
	});

	// const nextMonthFirst = useCallback(() => {
	// 	firstGotoDate(nextMonth(firstDate));
	// }, [firstDate, firstGotoDate]);

	const nextMonthFirst = $state(() => {
		return firstGotoDate(nextMonth(firstDate));
	});

	// const changeFirstMonth = useCallback(
	// 	(month: number) => {
	// 		firstGotoDate(dayjs(`${firstDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
	// 	},
	// 	[firstDate, firstGotoDate]
	// );

	const changeFirstMonth = $state((month: number) => {
		return firstGotoDate(dayjs(`${firstDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
	});

	// const changeFirstYear = useCallback(
	// 	(year: number) => {
	// 		firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`));
	// 	},
	// 	[firstDate, firstGotoDate]
	// );

	const changeFirstYear = $state((year: number) => {
		return firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`));
	});
	/* End First */

	/* Start Second */
	// const secondGotoDate = useCallback(
	// 	(date: dayjs.Dayjs) => {
	// 		const newDate = dayjs(formatDate(date, displayFormat));
	// 		const reformatDate = dayjs(formatDate(firstDate, displayFormat));
	// 		if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
	// 			setFirstDate(previousMonth(date));
	// 		}
	// 		setSecondDate(date);
	// 	},
	// 	[firstDate, displayFormat]
	// );

	const secondGotoDate = $state((date: dayjs.Dayjs) => {
		const newDate = dayjs(formatDate(date, displayFormat));
		const reformatDate = dayjs(formatDate(firstDate, displayFormat));
		if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
			firstDate = previousMonth(date);
		}
		secondDate = date;
	});

	// const previousMonthSecond = useCallback(() => {
	// 	secondGotoDate(previousMonth(secondDate));
	// }, [secondDate, secondGotoDate]);

	const previousMonthSecond = $state(() => {
		return secondGotoDate(previousMonth(secondDate));
	});

	const nextMonthSecond = $state(() => {
		secondDate = nextMonth(secondDate);
		return secondDate;
	});

	// const changeSecondMonth = useCallback(
	// 	(month: number) => {
	// 		secondGotoDate(dayjs(`${secondDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
	// 	},
	// 	[secondDate, secondGotoDate]
	// );

	const changeSecondMonth = $state((month: number) => {
		return secondGotoDate(dayjs(`${secondDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
	});

	// const changeSecondYear = useCallback(
	// 	(year: number) => {
	// 		secondGotoDate(dayjs(`${year}-${secondDate.month() + 1}-01`));
	// 	},
	// 	[secondDate, secondGotoDate]
	// );

	const changeSecondYear = $state((year: number) => {
		return secondGotoDate(dayjs(`${year}-${secondDate.month() + 1}-01`));
	});
	/* End Second */

	// UseEffects & UseLayoutEffect
	// useEffect(() => {
	// 	const container = containerRef.current;
	// 	const calendarContainer = calendarContainerRef.current;
	// 	const arrow = arrowRef.current;

	// 	if (container && calendarContainer && arrow) {
	// 		const detail = container.getBoundingClientRect();
	// 		const screenCenter = window.innerWidth / 2;
	// 		const containerCenter = (detail.right - detail.x) / 2 + detail.x;

	// 		if (containerCenter > screenCenter) {
	// 			arrow.classList.add('right-0');
	// 			arrow.classList.add('mr-3.5');
	// 			calendarContainer.classList.add('right-0');
	// 		}
	// 	}
	// }, []);

	$effect(() => {
		const container = containerRef;
		const calendarContainer = calendarContainerRef;
		const arrow = arrowRef;

		if (container && calendarContainer && arrow) {
			const detail = container.getBoundingClientRect();
			const screenCenter = window.innerWidth / 2;
			const containerCenter = (detail.right - detail.x) / 2 + detail.x;

			if (containerCenter > screenCenter) {
				arrow.classList.add('right-0');
				arrow.classList.add('mr-3.5');
				calendarContainer.classList.add('right-0');
			}
		}
	});

	// useEffect(() => {
	// 	if (value && value.startDate && value.endDate) {
	// 		const startDate = dayjs(value.startDate);
	// 		const endDate = dayjs(value.endDate);
	// 		const validDate = startDate.isValid() && endDate.isValid();
	// 		const condition = validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate));
	// 		if (condition) {
	// 			setPeriod({
	// 				start: formatDate(startDate),
	// 				end: formatDate(endDate)
	// 			});
	// 			setInputText(
	// 				`${formatDate(startDate, displayFormat)}${
	// 					asSingle ? '' : ` ${separator} ${formatDate(endDate, displayFormat)}`
	// 				}`
	// 			);
	// 		}
	// 	}

	$effect(() => {
		if (value && value.startDate && value.endDate) {
			const startDate = dayjs(value.startDate);
			const endDate = dayjs(value.endDate);
			const validDate = startDate.isValid() && endDate.isValid();
			const condition = validDate && (startDate.isSame(endDate) || startDate.isBefore(endDate));
			if (condition) {
				period = {
					start: formatDate(startDate),
					end: formatDate(endDate)
				};
				inputText = `${formatDate(startDate, displayFormat)}${
					asSingle ? '' : ` ${separator} ${formatDate(endDate, displayFormat)}`
				}`;
			}
		}

		if (value && value.startDate === null && value.endDate === null) {
			period = {
				start: null,
				end: null
			};
			inputText = '';
		}
	});

	// useEffect(() => {
	// 	if (startFrom && dayjs(startFrom).isValid()) {
	// 		const startDate = value?.startDate;
	// 		const endDate = value?.endDate;
	// 		if (startDate && dayjs(startDate).isValid()) {
	// 			setFirstDate(dayjs(startDate));
	// 			if (!asSingle) {
	// 				if (
	// 					endDate &&
	// 					dayjs(endDate).isValid() &&
	// 					dayjs(endDate).startOf('month').isAfter(dayjs(startDate))
	// 				) {
	// 					setSecondDate(dayjs(endDate));
	// 				} else {
	// 					setSecondDate(nextMonth(dayjs(startDate)));
	// 				}
	// 			}
	// 		} else {
	// 			setFirstDate(dayjs(startFrom));
	// 			setSecondDate(nextMonth(dayjs(startFrom)));
	// 		}
	// 	}
	// }, [asSingle, startFrom, value]);

	$effect(() => {
		if (startFrom && dayjs(startFrom).isValid()) {
			const startDate = value?.startDate;
			const endDate = value?.endDate;
			if (startDate && dayjs(startDate).isValid()) {
				firstDate = dayjs(startDate);
				if (!asSingle) {
					if (
						endDate &&
						dayjs(endDate).isValid() &&
						dayjs(endDate).startOf('month').isAfter(dayjs(startDate))
					) {
						secondDate = dayjs(endDate);
					} else {
						secondDate = nextMonth(dayjs(startDate));
					}
				}
			} else {
				firstDate = dayjs(startFrom);
				secondDate = nextMonth(dayjs(startFrom));
			}
		}
	});

	// Variables
	// const safePrimaryColor = useMemo(() => {
	// 	if (COLORS.includes(primaryColor)) {
	// 		return primaryColor as ColorKeys;
	// 	}
	// 	return DEFAULT_COLOR;
	// }, [primaryColor]);

	const safePrimaryColor = $state(() => {
		if (COLORS.includes(primaryColor)) {
			return primaryColor as ColorKeys;
		}
		return DEFAULT_COLOR;
	});

	// const contextValues = $state(() => {
	// 	return {} statisfies
	// });

	// const contextValues = useMemo(() => {
	// 	return {
	// 		asSingle,
	// 		primaryColor: safePrimaryColor,
	// 		configs,
	// 		calendarContainer: calendarContainerRef,
	// 		arrowContainer: arrowRef,
	// 		hideDatepicker,
	// 		period,
	// 		changePeriod: (newPeriod: Period) => setPeriod(newPeriod),
	// 		dayHover,
	// 		changeDayHover: (newDay: string | null) => setDayHover(newDay),
	// 		inputText,
	// 		changeInputText: (newText: string) => setInputText(newText),
	// 		updateFirstDate: (newDate: dayjs.Dayjs) => firstGotoDate(newDate),
	// 		changeDatepickerValue: onChange,
	// 		showFooter,
	// 		placeholder,
	// 		separator,
	// 		i18n,
	// 		value,
	// 		disabled,
	// 		inputClassName,
	// 		containerClassName,
	// 		toggleClassName,
	// 		toggleIcon,
	// 		readOnly,
	// 		displayFormat,
	// 		minDate,
	// 		maxDate,
	// 		dateLooking,
	// 		disabledDates,
	// 		inputId,
	// 		inputName,
	// 		startWeekOn,
	// 		classNames,
	// 		onChange,
	// 		input: inputRef,
	// 		popoverDirection
	// 	};
	// }, [
	// 	asSingle,
	// 	safePrimaryColor,
	// 	configs,
	// 	hideDatepicker,
	// 	period,
	// 	dayHover,
	// 	inputText,
	// 	onChange,
	// 	showFooter,
	// 	placeholder,
	// 	separator,
	// 	i18n,
	// 	value,
	// 	disabled,
	// 	inputClassName,
	// 	containerClassName,
	// 	toggleClassName,
	// 	toggleIcon,
	// 	readOnly,
	// 	displayFormat,
	// 	minDate,
	// 	maxDate,
	// 	dateLooking,
	// 	disabledDates,
	// 	inputId,
	// 	inputName,
	// 	startWeekOn,
	// 	classNames,
	// 	inputRef,
	// 	popoverDirection,
	// 	firstGotoDate
	// ]);

	// const containerClassNameOverload = useMemo(() => {
	// 	const defaultContainerClassName = 'relative w-full text-gray-700';
	// 	return typeof containerClassName === 'function'
	// 		? containerClassName(defaultContainerClassName)
	// 		: typeof containerClassName === 'string' && containerClassName !== ''
	// 			? containerClassName
	// 			: defaultContainerClassName;
	// }, [containerClassName]);

	const containerClassNameOverload = $state(() => {
		const defaultContainerClassName = 'relative w-full text-gray-700';
		return typeof containerClassName === 'function'
			? containerClassName(defaultContainerClassName)
			: typeof containerClassName === 'string' && containerClassName !== ''
				? containerClassName
				: defaultContainerClassName;
	});

	// return (
	// 	<DatepickerContext.Provider value={contextValues}>
	// 		<div className={containerClassNameOverload} ref={containerRef}>
	// 			<Input setContextRef={setInputRef} />

	// 			<div
	// 				className="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden"
	// 				ref={calendarContainerRef}
	// 			>
	// 				<Arrow ref={arrowRef} />

	// 				<div className="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg">
	// 					<div className="flex flex-col lg:flex-row py-2">
	// 						{showShortcuts && <Shortcuts />}

	// 						<div
	// 							className={`flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 ${
	// 								showShortcuts ? 'md:pl-2' : 'md:pl-1'
	// 							} pr-2 lg:pr-1`}
	// 						>
	// 							<Calendar
	// 								date={firstDate}
	// 								onClickPrevious={previousMonthFirst}
	// 								onClickNext={nextMonthFirst}
	// 								changeMonth={changeFirstMonth}
	// 								changeYear={changeFirstYear}
	// 								minDate={minDate}
	// 								maxDate={maxDate}
	// 							/>

	// 							{useRange && (
	// 								<>
	// 									<div className="flex items-center">
	// 										<VerticalDash />
	// 									</div>

	// 									<Calendar
	// 										date={secondDate}
	// 										onClickPrevious={previousMonthSecond}
	// 										onClickNext={nextMonthSecond}
	// 										changeMonth={changeSecondMonth}
	// 										changeYear={changeSecondYear}
	// 										minDate={minDate}
	// 										maxDate={maxDate}
	// 									/>
	// 								</>
	// 							)}
	// 						</div>
	// 					</div>

	// 					{showFooter && <Footer />}
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</DatepickerContext.Provider>
	// );
	// };
</script>

<div class={containerClassNameOverload()}>
	<Input datePicker={stub} />
	<div
		class="transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden"
		bind:this={calendarContainerRef}
	>
		<Arrow ref={arrowRef!} />

		<div
			class="mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg"
		>
			<div class="flex flex-col lg:flex-row py-2">
				{#if showShortcuts}
					<Shortcuts configs={stub.configs} />
				{/if}
			</div>
		</div>
	</div>
</div>

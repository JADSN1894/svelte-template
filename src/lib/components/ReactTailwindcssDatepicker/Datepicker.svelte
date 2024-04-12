<script lang="ts">
	import dayjs from 'dayjs';
	import Calendar from './Calendar/Calendar.svelte';
	import Footer from './Footer.svelte';
	import Input from './Input.svelte';
	import { COLORS, DATE_FORMAT, DEFAULT_COLOR, LANGUAGE } from './constants';
	// import DatepickerContext from './contexts/DatepickerContext';
	import { formatDate, nextMonth, previousMonth } from './helpers';
	// import useOnClickOutside from './hooks';
	import type { Period, DatepickerType, ColorKeys } from './types';

	import Arrow from './utils/Arrow.svelte';
	import VerticalDash from './utils/VerticalDash.svelte';
	import Shortcuts from './Shortcuts/Shortcuts.svelte';

	import { type ReactTailwindcssDatepickerStateProps } from '$root/src/lib/components/ReactTailwindcssDatepicker/ReactTailwindcssDatepickerState.svelte';
	import { setContext } from 'svelte';
	// import { stub } from './contexts/DatepickerContext';

	let {
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

	// Ref
	const containerRef = $state<HTMLDivElement | null>(null);
	let calendarContainerRef = $state<HTMLDivElement | null>(null);
	const arrowRef = $state<HTMLDivElement | null>(null);

	// State

	let firstDate = $state<dayjs.Dayjs>(
		startFrom && dayjs(startFrom).isValid() ? dayjs(startFrom) : dayjs()
	);

	// const [secondDate, setSecondDate] = $state<dayjs.Dayjs>(nextMonth(firstDate));
	let secondDate = $state<dayjs.Dayjs>(nextMonth(firstDate));

	let period = $state<Period>({
		start: null,
		end: null
	});

	let dayHover = $state<string | null>(null);

	let inputText = $state<string>('');

	// const [inputRef, setInputRef] = $state(React.createRef<HTMLInputElement>());
	const inputRef = $state(HTMLInputElement);

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

	const nextMonthFirst = $state(() => {
		return firstGotoDate(nextMonth(firstDate));
	});

	const changeFirstMonth = $state((month: number) => {
		return firstGotoDate(dayjs(`${firstDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
	});

	const changeFirstYear = $state((year: number) => {
		return firstGotoDate(dayjs(`${year}-${firstDate.month() + 1}-01`));
	});
	/* End First */

	const secondGotoDate = $state((date: dayjs.Dayjs) => {
		const newDate = dayjs(formatDate(date, displayFormat));
		const reformatDate = dayjs(formatDate(firstDate, displayFormat));
		if (newDate.isSame(reformatDate) || newDate.isBefore(reformatDate)) {
			firstDate = previousMonth(date);
		}
		secondDate = date;
	});

	const previousMonthSecond = $state(() => {
		return secondGotoDate(previousMonth(secondDate));
	});

	const nextMonthSecond = $state(() => {
		secondDate = nextMonth(secondDate);
		return secondDate;
	});

	const changeSecondMonth = $state((month: number) => {
		return secondGotoDate(dayjs(`${secondDate.year()}-${month < 10 ? '0' : ''}${month}-01`));
	});

	const changeSecondYear = $state((year: number) => {
		return secondGotoDate(dayjs(`${year}-${secondDate.month() + 1}-01`));
	});
	/* End Second */

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

	const safePrimaryColor = $derived.by(() => {
		if (COLORS.includes(primaryColor)) {
			return primaryColor as ColorKeys;
		}
		return DEFAULT_COLOR;
	});

	const containerClassNameOverload = $state(() => {
		const defaultContainerClassName = 'relative w-full text-gray-700';
		return typeof containerClassName === 'function'
			? containerClassName(defaultContainerClassName)
			: typeof containerClassName === 'string' && containerClassName !== ''
				? containerClassName
				: defaultContainerClassName;
	});
</script>

<div class={containerClassNameOverload()}>
	<Input />
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
					<Shortcuts />
				{/if}

				<div
					class={`flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 ${
						showShortcuts ? 'md:pl-2' : 'md:pl-1'
					} pr-2 lg:pr-1`}
				>
					<Calendar
						date={firstDate}
						onClickPrevious={previousMonthFirst}
						onClickNext={nextMonthFirst}
						changeMonth={changeFirstMonth}
						changeYear={changeFirstYear}
						{minDate}
						{maxDate}
					/>

					{#if useRange}
						<div>
							<div class="flex items-center">
								<VerticalDash />
							</div>

							<Calendar
								date={secondDate}
								onClickPrevious={previousMonthSecond}
								onClickNext={nextMonthSecond}
								changeMonth={changeSecondMonth}
								changeYear={changeSecondYear}
								{minDate}
								{maxDate}
							/>
						</div>
					{/if}
				</div>
			</div>
		</div>
		{#if showFooter}
			<Footer />
		{/if}
	</div>
</div>

<script lang="ts">
	import dayjs from 'dayjs';
	import { BORDER_COLOR, DATE_FORMAT, RING_COLOR } from './constants';
	import { dateIsValid, parseFormattedDate } from './helpers';
	import ToggleButton from './ToggleButton.svelte';
	import { TAILWIND_CONFIG } from '$lib/utils/tailwind';
	import { getReactTailwindcssDatepickerState } from './ReactTailwindcssDatepickerState.svelte';

	// type Props = {
	// 	ref: HTMLInputElement
	// };

	const {
		primaryColor,
		period,
		dayHover,
		changeDayHover,
		calendarContainer,
		arrowContainer,
		inputText,
		changeInputText,
		hideDatepicker,
		changeDatepickerValue,
		asSingle,
		placeholder,
		separator,
		disabled,
		inputClassName,
		toggleClassName,
		toggleIcon,
		readOnly,
		displayFormat,
		inputId,
		inputName,
		classNames,
		popoverDirection
	} = getReactTailwindcssDatepickerState();

	let buttonRef = $state<HTMLButtonElement | null>(null);
	let inputRef = $state<HTMLInputElement | null>(null);

	const getClassName = $state(() => {
		if (inputRef && typeof classNames !== 'undefined' && typeof classNames?.input === 'function') {
			return classNames.input(inputRef);
		}

		const border = BORDER_COLOR.focus[primaryColor as keyof typeof BORDER_COLOR.focus];
		const ring =
			RING_COLOR['second-focus'][primaryColor as keyof (typeof RING_COLOR)['second-focus']];

		const defaultInputClassName = `relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed ${border} ${ring}`;

		return typeof inputClassName === 'function'
			? inputClassName(defaultInputClassName)
			: typeof inputClassName === 'string' && inputClassName !== ''
				? inputClassName
				: defaultInputClassName;
	});

	function handleInputChange(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const inputValue = event.currentTarget.value;

		const dates = [];

		if (asSingle) {
			const date = parseFormattedDate(inputValue, displayFormat);
			if (dateIsValid(date.toDate())) {
				dates.push(date.format(DATE_FORMAT));
			}
		} else {
			const parsed = inputValue.split(separator);

			let startDate = null;
			let endDate = null;

			if (parsed.length === 2) {
				startDate = parseFormattedDate(parsed[0], displayFormat);
				endDate = parseFormattedDate(parsed[1], displayFormat);
			} else {
				const middle = Math.floor(inputValue.length / 2);
				startDate = parseFormattedDate(inputValue.slice(0, middle), displayFormat);
				endDate = parseFormattedDate(inputValue.slice(middle), displayFormat);
			}

			if (
				dateIsValid(startDate.toDate()) &&
				dateIsValid(endDate.toDate()) &&
				startDate.isBefore(endDate)
			) {
				dates.push(startDate.format(DATE_FORMAT));
				dates.push(endDate.format(DATE_FORMAT));
			}
		}

		if (dates[0]) {
			changeDatepickerValue(
				{
					startDate: dates[0],
					endDate: dates[1] || dates[0]
				},
				event.target! as HTMLInputElement
			);
			if (dates[1]) changeDayHover(dayjs(dates[1]).add(-1, 'day').format(DATE_FORMAT));
			else changeDayHover(dates[0]);
		}

		changeInputText(event?.currentTarget.value);
	}

	function handleInputKeyDown(
		event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
	) {
		if (event.key === 'Enter') {
			const input = inputRef;
			if (input) {
				input.blur();
			}
			hideDatepicker();
		}
	}

	const getToggleClassName = $state(() => {
		if (
			buttonRef &&
			typeof classNames !== 'undefined' &&
			typeof classNames?.toggleButton === 'function'
		) {
			return classNames.toggleButton(buttonRef);
		}

		const defaultToggleClassName =
			'absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed';

		return typeof toggleClassName === 'function'
			? toggleClassName(defaultToggleClassName)
			: typeof toggleClassName === 'string' && toggleClassName !== ''
				? toggleClassName
				: defaultToggleClassName;
	});

	// $effect(() => {
	//     if (inputRef && e.setContextRef && typeof e.setContextRef === "function") {
	//         e.setContextRef(inputRef);
	//     }
	// });

	$effect(() => {
		const button = buttonRef;

		function focusInput(e: Event) {
			e.stopPropagation();
			const input = inputRef;

			if (input) {
				input.focus();
				if (inputText) {
					changeInputText('');
					if (dayHover) {
						changeDayHover(null);
					}
					if (period.start && period.end) {
						changeDatepickerValue(
							{
								startDate: null,
								endDate: null
							},
							input
						);
					}
				}
			}
		}

		if (button) {
			button.addEventListener('click', focusInput);
		}

		return () => {
			if (button) {
				button.removeEventListener('click', focusInput);
			}
		};
	});

	$effect(() => {
		const div = calendarContainer!;
		const input = inputRef!;
		const arrow = arrowContainer;

		function showCalendarContainer() {
			if (arrow && div && div.classList.contains('hidden')) {
				div.classList.remove('hidden');
				div.classList.add('block');

				// window.innerWidth === 767
				const popoverOnUp = popoverDirection == 'up';
				const popoverOnDown = popoverDirection === 'down';
				if (
					popoverOnUp ||
					(window.innerWidth > 767 &&
						window.screen.height - 100 < div.getBoundingClientRect().bottom &&
						!popoverOnDown)
				) {
					div.classList.add('bottom-full');
					div.classList.add('mb-2.5');
					div.classList.remove('mt-2.5');
					arrow.classList.add('-bottom-2');
					arrow.classList.add('border-r');
					arrow.classList.add('border-b');
					arrow.classList.remove('border-l');
					arrow.classList.remove('border-t');
				}

				setTimeout(() => {
					div.classList.remove('translate-y-4');
					div.classList.remove('opacity-0');
					div.classList.add('translate-y-0');
					div.classList.add('opacity-1');
				}, 1);
			}
		}

		if (div && input) {
			input.addEventListener('focus', showCalendarContainer);
		}

		return () => {
			if (input) {
				input.removeEventListener('focus', showCalendarContainer);
			}
		};
	});
</script>

<div>
	<input
		bind:this={inputRef}
		type="text"
		class={getClassName()}
		{disabled}
		readonly={readOnly}
		placeholder={placeholder
			? placeholder
			: `${displayFormat}${asSingle ? '' : ` ${separator} ${displayFormat}`}`}
		value={inputText}
		id={inputId}
		name={inputName}
		autoComplete="off"
		onChange={handleInputChange}
		onKeyDown={handleInputKeyDown}
	/>

	<button type="button" bind:this={buttonRef} {disabled} class={getToggleClassName()}>
		<ToggleButton isEmpty={inputText == null || !inputText?.length} />
	</button>
</div>

<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useCallback, useContext, useEffect, useRef } from 'react';

	import { BORDER_COLOR, DATE_FORMAT, RING_COLOR } from './constants';
	// import DatepickerContext from './contexts/DatepickerContext';
	import { dateIsValid, parseFormattedDate } from './helpers';

	import ToggleButton from './ToggleButton.svelte';
	import type { DatepickerContext } from './contexts/DatepickerContext';
	import { TAILWIND_CONFIG } from '$lib/utils/tailwind';

	let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[500];

	type Props = {
		// setContextRef?: (ref: React.RefObject<HTMLInputElement>) => void;
		// setContextRef?: (ref: HTMLInputElement) => void;

		datePicker: DatepickerContext;
	};

	let { datePicker }: Props = $props();

	// const Input: React.FC<Props> = (e: Props) => {
	// 	// Context
	// 	const {
	// 		primaryColor,
	// 		period,
	// 		dayHover,
	// 		changeDayHover,
	// 		calendarContainer,
	// 		arrowContainer,
	// 		inputText,
	// 		changeInputText,
	// 		hideDatepicker,
	// 		changeDatepickerValue,
	// 		asSingle,
	// 		placeholder,
	// 		separator,
	// 		disabled,
	// 		inputClassName,
	// 		toggleClassName,
	// 		toggleIcon,
	// 		readOnly,
	// 		displayFormat,
	// 		inputId,
	// 		inputName,
	// 		classNames,
	// 		popoverDirection
	// 	} = useContext(DatepickerContext);

	// 	// UseRefs
	// 	const buttonRef = useRef<HTMLButtonElement>(null);
	// 	const inputRef = useRef<HTMLInputElement>(null);

	// 	// Functions
	// 	const getClassName = useCallback(() => {
	// 		const input = inputRef.current;

	// 		if (input && typeof classNames !== 'undefined' && typeof classNames?.input === 'function') {
	// 			return classNames.input(input);
	// 		}

	// 		const border = BORDER_COLOR.focus[primaryColor as keyof typeof BORDER_COLOR.focus];
	// 		const ring =
	// 			RING_COLOR['second-focus'][primaryColor as keyof (typeof RING_COLOR)['second-focus']];

	// 		const defaultInputClassName = `relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed ${border} ${ring}`;

	// 		return typeof inputClassName === 'function'
	// 			? inputClassName(defaultInputClassName)
	// 			: typeof inputClassName === 'string' && inputClassName !== ''
	// 				? inputClassName
	// 				: defaultInputClassName;
	// 	}, [inputRef, classNames, primaryColor, inputClassName]);

	// 	const handleInputChange = useCallback(
	// 		(e: React.ChangeEvent<HTMLInputElement>) => {
	// 			const inputValue = e.target.value;

	// 			const dates = [];

	// 			if (asSingle) {
	// 				const date = parseFormattedDate(inputValue, displayFormat);
	// 				if (dateIsValid(date.toDate())) {
	// 					dates.push(date.format(DATE_FORMAT));
	// 				}
	// 			} else {
	// 				const parsed = inputValue.split(separator);

	// 				let startDate = null;
	// 				let endDate = null;

	// 				if (parsed.length === 2) {
	// 					startDate = parseFormattedDate(parsed[0], displayFormat);
	// 					endDate = parseFormattedDate(parsed[1], displayFormat);
	// 				} else {
	// 					const middle = Math.floor(inputValue.length / 2);
	// 					startDate = parseFormattedDate(inputValue.slice(0, middle), displayFormat);
	// 					endDate = parseFormattedDate(inputValue.slice(middle), displayFormat);
	// 				}

	// 				if (
	// 					dateIsValid(startDate.toDate()) &&
	// 					dateIsValid(endDate.toDate()) &&
	// 					startDate.isBefore(endDate)
	// 				) {
	// 					dates.push(startDate.format(DATE_FORMAT));
	// 					dates.push(endDate.format(DATE_FORMAT));
	// 				}
	// 			}

	// 			if (dates[0]) {
	// 				changeDatepickerValue(
	// 					{
	// 						startDate: dates[0],
	// 						endDate: dates[1] || dates[0]
	// 					},
	// 					e.target
	// 				);
	// 				if (dates[1]) changeDayHover(dayjs(dates[1]).add(-1, 'day').format(DATE_FORMAT));
	// 				else changeDayHover(dates[0]);
	// 			}

	// 			changeInputText(e.target.value);
	// 		},
	// 		[asSingle, displayFormat, separator, changeDatepickerValue, changeDayHover, changeInputText]
	// 	);

	// 	const handleInputKeyDown = useCallback(
	// 		(e: React.KeyboardEvent<HTMLInputElement>) => {
	// 			if (e.key === 'Enter') {
	// 				const input = inputRef.current;
	// 				if (input) {
	// 					input.blur();
	// 				}
	// 				hideDatepicker();
	// 			}
	// 		},
	// 		[hideDatepicker]
	// 	);

	// 	const renderToggleIcon = useCallback(
	// 		(isEmpty: boolean) => {
	// 			return typeof toggleIcon === 'undefined' ? (
	// 				<ToggleButton isEmpty={isEmpty} />
	// 			) : (
	// 				toggleIcon(isEmpty)
	// 			);
	// 		},
	// 		[toggleIcon]
	// 	);

	// 	const getToggleClassName = useCallback(() => {
	// 		const button = buttonRef.current;

	// 		if (
	// 			button &&
	// 			typeof classNames !== 'undefined' &&
	// 			typeof classNames?.toggleButton === 'function'
	// 		) {
	// 			return classNames.toggleButton(button);
	// 		}

	// 		const defaultToggleClassName =
	// 			'absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed';

	// 		return typeof toggleClassName === 'function'
	// 			? toggleClassName(defaultToggleClassName)
	// 			: typeof toggleClassName === 'string' && toggleClassName !== ''
	// 				? toggleClassName
	// 				: defaultToggleClassName;
	// 	}, [toggleClassName, buttonRef, classNames]);

	// 	// UseEffects && UseLayoutEffect
	// 	useEffect(() => {
	// 		if (inputRef && e.setContextRef && typeof e.setContextRef === 'function') {
	// 			e.setContextRef(inputRef);
	// 		}
	// 	}, [e, inputRef]);

	// 	useEffect(() => {
	// 		const button = buttonRef?.current;

	// 		function focusInput(e: Event) {
	// 			e.stopPropagation();
	// 			const input = inputRef.current;

	// 			if (input) {
	// 				input.focus();
	// 				if (inputText) {
	// 					changeInputText('');
	// 					if (dayHover) {
	// 						changeDayHover(null);
	// 					}
	// 					if (period.start && period.end) {
	// 						changeDatepickerValue(
	// 							{
	// 								startDate: null,
	// 								endDate: null
	// 							},
	// 							input
	// 						);
	// 					}
	// 				}
	// 			}
	// 		}

	// 		if (button) {
	// 			button.addEventListener('click', focusInput);
	// 		}

	// 		return () => {
	// 			if (button) {
	// 				button.removeEventListener('click', focusInput);
	// 			}
	// 		};
	// 	}, [
	// 		changeDatepickerValue,
	// 		changeDayHover,
	// 		changeInputText,
	// 		dayHover,
	// 		inputText,
	// 		period.end,
	// 		period.start,
	// 		inputRef
	// 	]);

	// 	useEffect(() => {
	// 		const div = calendarContainer?.current;
	// 		const input = inputRef.current;
	// 		const arrow = arrowContainer?.current;

	// 		function showCalendarContainer() {
	// 			if (arrow && div && div.classList.contains('hidden')) {
	// 				div.classList.remove('hidden');
	// 				div.classList.add('block');

	// 				// window.innerWidth === 767
	// 				const popoverOnUp = popoverDirection == 'up';
	// 				const popoverOnDown = popoverDirection === 'down';
	// 				if (
	// 					popoverOnUp ||
	// 					(window.innerWidth > 767 &&
	// 						window.screen.height - 100 < div.getBoundingClientRect().bottom &&
	// 						!popoverOnDown)
	// 				) {
	// 					div.classList.add('bottom-full');
	// 					div.classList.add('mb-2.5');
	// 					div.classList.remove('mt-2.5');
	// 					arrow.classList.add('-bottom-2');
	// 					arrow.classList.add('border-r');
	// 					arrow.classList.add('border-b');
	// 					arrow.classList.remove('border-l');
	// 					arrow.classList.remove('border-t');
	// 				}

	// 				setTimeout(() => {
	// 					div.classList.remove('translate-y-4');
	// 					div.classList.remove('opacity-0');
	// 					div.classList.add('translate-y-0');
	// 					div.classList.add('opacity-1');
	// 				}, 1);
	// 			}
	// 		}

	// 		if (div && input) {
	// 			input.addEventListener('focus', showCalendarContainer);
	// 		}

	// 		return () => {
	// 			if (input) {
	// 				input.removeEventListener('focus', showCalendarContainer);
	// 			}
	// 		};
	// 	}, [calendarContainer, arrowContainer, popoverDirection]);

	let buttonRef = $state<HTMLButtonElement | null>(null);
	let inputRef = $state<HTMLInputElement | null>(null);

	$effect(() => {
		const div = datePicker.calendarContainer!;
		const input = inputRef!;
		const arrow = datePicker.arrowContainer;

		function showCalendarContainer() {
			if (arrow && div && div.classList.contains('hidden')) {
				div.classList.remove('hidden');
				div.classList.add('block');

				// window.innerWidth === 767
				const popoverOnUp = datePicker.popoverDirection == 'up';
				const popoverOnDown = datePicker.popoverDirection === 'down';
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

	function handleInputChange(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const inputValue = event.currentTarget.value;

		const dates = [];

		if (datePicker.asSingle) {
			const date = parseFormattedDate(inputValue, datePicker.displayFormat);
			if (dateIsValid(date.toDate())) {
				dates.push(date.format(DATE_FORMAT));
			}
		} else {
			const parsed = inputValue.split(datePicker.separator);

			let startDate = null;
			let endDate = null;

			if (parsed.length === 2) {
				startDate = parseFormattedDate(parsed[0], datePicker.displayFormat);
				endDate = parseFormattedDate(parsed[1], datePicker.displayFormat);
			} else {
				const middle = Math.floor(inputValue.length / 2);
				startDate = parseFormattedDate(inputValue.slice(0, middle), datePicker.displayFormat);
				endDate = parseFormattedDate(inputValue.slice(middle), datePicker.displayFormat);
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
			datePicker.changeDatepickerValue(
				{
					startDate: dates[0],
					endDate: dates[1] || dates[0]
				},
				event.target! as HTMLInputElement
			);
			if (dates[1]) datePicker.changeDayHover(dayjs(dates[1]).add(-1, 'day').format(DATE_FORMAT));
			else datePicker.changeDayHover(dates[0]);
		}

		datePicker.changeInputText(event?.currentTarget.value);
	}

	function handleInputKeyDown(
		event: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
	) {
		if (event.key === 'Enter') {
			const input = inputRef;
			if (input) {
				input.blur();
			}
			datePicker.hideDatepicker();
		}
	}

	const getClassName = $state(() => {
		if (
			inputRef &&
			typeof datePicker.classNames !== 'undefined' &&
			typeof datePicker.classNames?.input === 'function'
		) {
			return datePicker.classNames.input(inputRef);
		}

		const border = BORDER_COLOR.focus[purplePrimaryColor as keyof typeof BORDER_COLOR.focus];
		const ring =
			RING_COLOR['second-focus'][purplePrimaryColor as keyof (typeof RING_COLOR)['second-focus']];

		const defaultInputClassName = `relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed ${border} ${ring}`;

		return typeof datePicker.inputClassName === 'function'
			? datePicker.inputClassName(defaultInputClassName)
			: typeof datePicker.inputClassName === 'string' && datePicker.inputClassName !== ''
				? datePicker.inputClassName
				: defaultInputClassName;
	});

	const getToggleClassName = $state(() => {
		if (
			buttonRef &&
			typeof datePicker.classNames !== 'undefined' &&
			typeof datePicker.classNames?.toggleButton === 'function'
		) {
			return datePicker.classNames.toggleButton(buttonRef);
		}

		const defaultToggleClassName =
			'absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed';

		return typeof datePicker.toggleClassName === 'function'
			? datePicker.toggleClassName(defaultToggleClassName)
			: typeof datePicker.toggleClassName === 'string' && datePicker.toggleClassName !== ''
				? datePicker.toggleClassName
				: defaultToggleClassName;
	});
</script>

<div>
	<input
		bind:this={inputRef}
		type="text"
		class={getClassName()}
		disabled={datePicker.disabled}
		readonly={datePicker.readOnly}
		placeholder={datePicker.placeholder
			? datePicker.placeholder
			: `${datePicker.displayFormat}${datePicker.asSingle ? '' : ` ${datePicker.separator} ${datePicker.displayFormat}`}`}
		value={datePicker.inputText}
		id={datePicker.inputId}
		name={datePicker.inputName}
		autoComplete="off"
		onChange={handleInputChange}
		onKeyDown={handleInputKeyDown}
	/>

	<button
		type="button"
		bind:this={buttonRef}
		disabled={datePicker.disabled}
		class={getToggleClassName()}
	>
		<ToggleButton isEmpty={datePicker.inputText == null || !datePicker.inputText?.length} />
	</button>

	<!-- <input
		ref={inputRef}
		type="text"
		className={getClassName()}
		{disabled}
		{readOnly}
		placeholder={placeholder
			? placeholder
			: `${displayFormat}${asSingle ? '' : ` ${separator} ${displayFormat}`}`}
		value={inputText}
		id={inputId}
		name={inputName}
		autoComplete="off"
		role="presentation"
		onChange={handleInputChange}
		onKeyDown={handleInputKeyDown}
	/> -->

	<!-- <button type="button" ref={buttonRef} {disabled} className={getToggleClassName()}>
		{renderToggleIcon(inputText == null || !inputText?.length)}
	</button> -->
</div>

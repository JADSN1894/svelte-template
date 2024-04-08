<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes, SVGAttributes } from 'svelte/elements';
	import { BUTTON_COLOR } from '../constants';
	import { TAILWIND_CONFIG } from '$root/src/lib/utils/tailwind';

	type Props = {
		children: Snippet;
		roundedFull?: boolean;
		active?: boolean;
		disabled?: boolean;
		padding?: string;
		class?: string;
		style?: string;
	};

	const {
		children,
		style,
		roundedFull = false,
		active = false,
		disabled = false,
		padding = 'py-[0.55rem]',
		class: className,
		...restProps
	}: Props & HTMLButtonAttributes = $props();

	let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[500];

	const darkClass = 'dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10';
	const activeClass = active ? 'font-semibold bg-gray-50 dark:bg-white/5' : '';
	const defaultClass = !roundedFull
		? `w-full tracking-wide ${darkClass} ${activeClass} transition-all duration-300 px-3 ${padding} uppercase hover:bg-gray-100 rounded-md focus:ring-1`
		: `${darkClass} ${activeClass} transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1`;
	const buttonFocusColor =
		BUTTON_COLOR.focus[purplePrimaryColor as keyof typeof BUTTON_COLOR.focus];
	const disabledClass = disabled ? 'line-through' : '';
</script>

<button
	class={`${className + darkClass + activeClass + defaultClass + buttonFocusColor + disabledClass}`}
	{...restProps}
	{disabled}
>
	{@render children()}
</button>

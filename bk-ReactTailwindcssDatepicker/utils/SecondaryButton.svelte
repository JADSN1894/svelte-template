<script lang="ts">
	import { TAILWIND_CONFIG } from '$root/src/lib/utils/tailwind';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { RING_COLOR } from '../constants';
	// import DatepickerContext from '../contexts/DatepickerContext';

	type Props = {
		children: Snippet;
	};

	const { children, class: className, ...restProps }: HTMLButtonAttributes = $props();

	// let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[500];
	//   Contexts
	// const { primaryColor } = useContext(DatepickerContext);

	//   Functions
	// const getClassName: () => string = useCallback(() => {
	// 	const ringColor = RING_COLOR.focus[primaryColor as keyof typeof RING_COLOR.focus];
	// 	return `w-full transition-all duration-300 bg-white dark:text-gray-700 font-medium border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 ${ringColor}`;
	// }, [primaryColor]);
</script>

<button type="button" class={className} {...restProps}>
	{@render children?.()}
</button>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { BG_COLOR, BORDER_COLOR, RING_COLOR } from '../constants';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { TAILWIND_CONFIG } from '$root/src/lib/utils/tailwind';

	type Props = {
		children: Snippet;
	};

	const { children, class: className, ...restProps }: HTMLButtonAttributes = $props();

	let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[500];

	// export const PrimaryButton: React.FC<Button> = ({ children, onClick, disabled = false }) => {
	// Contexts;
	// const { primaryColor } = useContext(DatepickerContext);
	const bgColor = BG_COLOR['500'][purplePrimaryColor as keyof (typeof BG_COLOR)['500']];
	const borderColor = BORDER_COLOR['500'][purplePrimaryColor as keyof (typeof BORDER_COLOR)['500']];
	const bgColorHover = BG_COLOR.hover[purplePrimaryColor as keyof typeof BG_COLOR.hover];
	const ringColor = RING_COLOR.focus[purplePrimaryColor as keyof typeof RING_COLOR.focus];

	// Functions;
	// const getClassName = useCallback(() => {
	// 	return `w-full transition-all duration-300 ${bgColor} ${borderColor} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${bgColorHover} ${ringColor} ${
	// 		disabled ? ' cursor-no-drop' : ''
	// 	}`;
	// }, [bgColor, bgColorHover, borderColor, disabled, ringColor]);
	// };
</script>

<button type="button" class={className} {...restProps}>
	{@render children?.()}
</button>

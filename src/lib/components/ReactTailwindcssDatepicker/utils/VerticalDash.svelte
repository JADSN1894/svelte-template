<script lang="ts">
	import { TAILWIND_CONFIG } from '$root/src/lib/utils/tailwind';
	import { BG_COLOR } from '../constants';

	//  export const VerticalDash = () => {
	//   Contexts
	// const { primaryColor } = useContext(DatepickerContext);

	let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[500];

	const bgColor = BG_COLOR['500'][purplePrimaryColor as keyof (typeof BG_COLOR)['500']];

	// return <div className={`bg-blue-500 h-7 w-1 rounded-full hidden md:block ${bgColor}`} />;
	//  };
</script>

<div class={`bg-blue-500 h-7 w-1 rounded-full hidden md:block ${bgColor}`} />

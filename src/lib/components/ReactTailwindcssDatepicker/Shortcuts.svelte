<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useCallback, useContext, useMemo } from 'react';

	import { DATE_FORMAT, TEXT_COLOR } from './constants';
	import DEFAULT_SHORTCUTS from './constants/shortcuts';
	// import DatepickerContext from './contexts/DatepickerContext';
	import type { Configs, DatepickerType, Period, ShortcutsItem } from './types';
	import type { Snippet } from 'svelte';

	import { TAILWIND_CONFIG } from '$lib/utils/tailwind';
	import type { DatepickerContext } from './contexts/DatepickerContext';
	import ItemTemplate from './Shortcuts/ItemTemplate.svelte';

	// type ItemTemplateProps = {
	// 	children?: Snippet;
	// 	key?: number;
	// 	item?: ShortcutsItem | ShortcutsItem[];
	// };

	type Props = {
		children?: Snippet;
		configs: Configs;
	};

	const { children, configs }: Props = $props();
	let purplePrimaryColor = TAILWIND_CONFIG.theme.colors.purple[600];

	// const Shortcuts: React.FC = () => {
	// 	// Contexts
	// 	const { configs } = useContext(DatepickerContext);

	// 	const callPastFunction = useCallback((data: unknown, numberValue: number) => {
	// 		return typeof data === 'function' ? data(numberValue) : null;
	// 	}, []);

	const callPastFunction = $state((data: unknown, numberValue: number) => {
		return typeof data === 'function' ? data(numberValue) : null;
	});

	// 	const shortcutOptions = useMemo<[string, ShortcutsItem | ShortcutsItem[]][]>(() => {
	// 		if (!configs?.shortcuts) {
	// 			return Object.entries(DEFAULT_SHORTCUTS);
	// 		}

	// 		return Object.entries(configs.shortcuts).flatMap(([key, customConfig]) => {
	// 			if (Object.prototype.hasOwnProperty.call(DEFAULT_SHORTCUTS, key)) {
	// 				return [[key, DEFAULT_SHORTCUTS[key]]];
	// 			}

	// 			const { text, period } = customConfig as {
	// 				text: string;
	// 				period: { start: string; end: string };
	// 			};
	// 			if (!text || !period) {
	// 				return [];
	// 			}

	// 			const start = dayjs(period.start);
	// 			const end = dayjs(period.end);

	// 			if (start.isValid() && end.isValid() && (start.isBefore(end) || start.isSame(end))) {
	// 				return [
	// 					[
	// 						text,
	// 						{
	// 							text,
	// 							period: {
	// 								start: start.format(DATE_FORMAT),
	// 								end: end.format(DATE_FORMAT)
	// 							}
	// 						}
	// 					]
	// 				];
	// 			}

	// 			return [];
	// 		});
	// 	}, [configs]);

	const shortcutOptions = $state(() => {
		if (!configs?.shortcuts) {
			return Object.entries(DEFAULT_SHORTCUTS);
		}

		return Object.entries(configs.shortcuts).flatMap(([key, customConfig]) => {
			if (Object.prototype.hasOwnProperty.call(DEFAULT_SHORTCUTS, key)) {
				return [[key, DEFAULT_SHORTCUTS[key]]];
			}

			const { text, period } = customConfig as {
				text: string;
				period: { start: string; end: string };
			};
			if (!text || !period) {
				return [];
			}

			const start = dayjs(period.start);
			const end = dayjs(period.end);

			if (start.isValid() && end.isValid() && (start.isBefore(end) || start.isSame(end))) {
				return [
					[
						text,
						{
							text,
							period: {
								start: start.format(DATE_FORMAT),
								end: end.format(DATE_FORMAT)
							}
						}
					]
				];
			}

			return [];
		});
	});

	console.log('shortcutOptions');
	console.log(() => {
		shortcutOptions();
	});

	// 	const printItemText = useCallback((item: ShortcutsItem) => {
	// 		return item?.text ?? null;
	// 	}, []);

	const printItemText = $state((item: ShortcutsItem) => {
		return item?.text ?? null;
	});

	// 	return shortcutOptions?.length ? (
	// 		<div className="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1">
	// 			<ul className="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
	// 				{shortcutOptions.map(([key, item], index: number) =>
	// 					Array.isArray(item) ? (
	// 						item.map((item, index) => (
	// 							<ItemTemplate key={index} item={item}>
	// 								<>
	// 									{key === 'past' &&
	// 									configs?.shortcuts &&
	// 									key in configs.shortcuts &&
	// 									item.daysNumber
	// 										? callPastFunction(configs.shortcuts[key as 'past'], item.daysNumber)
	// 										: item.text}
	// 								</>
	// 							</ItemTemplate>
	// 						))
	// 					) : (
	// 						<ItemTemplate key={index} item={item}>
	// 							<>
	// 								{configs?.shortcuts && key in configs.shortcuts
	// 									? typeof configs.shortcuts[key as keyof typeof configs.shortcuts] === 'object'
	// 										? printItemText(item)
	// 										: configs.shortcuts[key as keyof typeof configs.shortcuts]
	// 									: printItemText(item)}
	// 							</>
	// 						</ItemTemplate>
	// 					)
	// 				)}
	// 			</ul>
	// 		</div>
	// 	) : null;
	// };
</script>

{#if shortcutOptions?.length}
	<div
		class="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1"
	>
		<ul class="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
			<!-- {#each Array.from(shortcutOptions) as { shortcutOption }, shortcutOptionIndex}
				{#if Array.isArray(shortcutOption)}
					{#each shortcutOptions as { shortcutOption }, itemTemplateIndex}
						<ItemTemplate key={itemTemplateIndex} item={shortcutOption}>
						
						</ItemTemplate>
					{/each}
				{:else}
					<ItemTemplate key={shortcutOptionIndex} item={shortcutOption}></ItemTemplate>
				{/if}
			{/each} -->
		</ul>
	</div>
{/if}

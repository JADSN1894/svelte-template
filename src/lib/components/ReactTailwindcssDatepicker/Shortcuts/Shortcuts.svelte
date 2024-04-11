<script lang="ts">
	import dayjs from 'dayjs';
	import DEFAULT_SHORTCUTS from '../constants/shortcuts';

	import { getReactTailwindcssDatepickerState } from '../ReactTailwindcssDatepickerState';
	import type { ShortcutsItem } from '../types';
	import { DATE_FORMAT } from '../constants';

	import ItemTemplate from './ItemTemplate.svelte';

	let { configs } = getReactTailwindcssDatepickerState();

	const callPastFunction = $state((data: unknown, numberValue: number) => {
		return typeof data === 'function' ? data(numberValue) : null;
	});

	function shortcuts(): [string, ShortcutsItem | ShortcutsItem[]][] {
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
	}

	const shortcutOptions = $state<[string, ShortcutsItem | ShortcutsItem[]][]>(shortcuts());

	const printItemText = $state((item: ShortcutsItem) => {
		return item?.text ?? null;
	});
</script>

{#if shortcutOptions?.length}
	<div
		class="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1"
	>
		<ul class="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
			{#each shortcutOptions as [key, items], shortcutOptionsIndex}
				{#if Array.isArray(items)}
					{#each items as item}
						<ItemTemplate key={shortcutOptionsIndex} {item}>
							<div>
								{key === "past" &&
							configs?.shortcuts &&
							key in configs.shortcuts &&
							item.daysNumber
								? callPastFunction(
									  configs.shortcuts[key as "past"],
									  item.daysNumber
								  )
								: item.text}
								<div />
							</div>
						</ItemTemplate>
					{/each}
				{:else}
					<ItemTemplate key={shortcutOptionsIndex} item={items}>
						<div>
							{configs?.shortcuts && key in configs.shortcuts
							? typeof configs.shortcuts[
								  key as keyof typeof configs.shortcuts
							  ] === "object"
								? printItemText(items)
								: configs.shortcuts[key as keyof typeof configs.shortcuts]
							: printItemText(items)}
							<div />
						</div>
					</ItemTemplate>
				{/if}
			{/each}
		</ul>
	</div>
{:else}
	<div></div>
{/if}

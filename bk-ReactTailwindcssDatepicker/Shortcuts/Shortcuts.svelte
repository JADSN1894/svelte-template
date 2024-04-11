<script lang="ts">
	import DEFAULT_SHORTCUTS from '../constants/shortcuts';

	let shortcutOptions = $state(DEFAULT_SHORTCUTS);

	// Contexts
	// const { configs } = useContext(DatepickerContext);

	// const callPastFunction = useCallback((data: unknown, numberValue: number) => {
	// 	return typeof data === 'function' ? data(numberValue) : null;
	// }, []);

	// const shortcutOptions = useMemo<[string, ShortcutsItem | ShortcutsItem[]][]>(() => {
	// 	if (!configs?.shortcuts) {
	// 		return Object.entries(DEFAULT_SHORTCUTS);
	// 	}

	// 	return Object.entries(configs.shortcuts).flatMap(([key, customConfig]) => {
	// 		if (Object.prototype.hasOwnProperty.call(DEFAULT_SHORTCUTS, key)) {
	// 			return [[key, DEFAULT_SHORTCUTS[key]]];
	// 		}

	// 		const { text, period } = customConfig as {
	// 			text: string;
	// 			period: { start: string; end: string };
	// 		};
	// 		if (!text || !period) {
	// 			return [];
	// 		}

	// 		const start = dayjs(period.start);
	// 		const end = dayjs(period.end);

	// 		if (start.isValid() && end.isValid() && (start.isBefore(end) || start.isSame(end))) {
	// 			return [
	// 				[
	// 					text,
	// 					{
	// 						text,
	// 						period: {
	// 							start: start.format(DATE_FORMAT),
	// 							end: end.format(DATE_FORMAT)
	// 						}
	// 					}
	// 				]
	// 			];
	// 		}

	// 		return [];
	// 	});
	// }, [configs]);

	// const printItemText = useCallback((item: ShortcutsItem) => {
	// 	return item?.text ?? null;
	// }, []);

	// return shortcutOptions?.length ? (

	// ) : null;
</script>

{#if shortcutOptions?.length}
	<div
		class="md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1"
	>
		<!-- <ul class="w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0">
			{shortcutOptions.map(([key, item], index: number) =>
            Array.isArray(item) ? (
                item.map((item, index) => (
                    <ItemTemplate key={index} item={item}>
                        <>
                            {key === 'past' &&
                            configs?.shortcuts &&
                            key in configs.shortcuts &&
                            item.daysNumber
                                ? callPastFunction(configs.shortcuts[key as 'past'], item.daysNumber)
                                : item.text}
                        </>
                    </ItemTemplate>
                ))
            ) : (
                <ItemTemplate key={index} item={item}>
                    <>
                        {configs?.shortcuts && key in configs.shortcuts
                            ? typeof configs.shortcuts[key as keyof typeof configs.shortcuts] === 'object'
                                ? printItemText(item)
                                : configs.shortcuts[key as keyof typeof configs.shortcuts]
                            : printItemText(item)}
                    </>
                </ItemTemplate>
            )
        )}
		</ul> -->
	</div>
{:else}
	<div></div>
{/if}

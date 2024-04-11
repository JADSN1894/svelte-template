<script lang="ts">
	import dayjs from 'dayjs';
	// import React, { useContext } from 'react';

	import { MONTHS } from '../constants';
	// import DatepickerContext from '../../contexts/DatepickerContext';
	// import { loadLanguageModule } from '../../helpers';
	// import { RoundedButton } from '../utils';

	type Props = {
		currentMonth: number;
		clickMonth: (month: number) => void;
	};

	let { currentMonth, clickMonth }: Props = $props();

	// const Months: React.FC<Props> = ({ currentMonth, clickMonth }) => {
	// 	const { i18n } = useContext(DatepickerContext);
	// 	loadLanguageModule(i18n);
	// 	return (

	// 	);
	// };
</script>

<div class="w-full grid grid-cols-2 gap-2 mt-2">
	<!-- {MONTHS.map((item) => (
        <RoundedButton
            key={item}
            padding="py-3"
            onClick={() => {
                clickMonth(item);
            }}
            active={currentMonth === item}
        >
            <>{dayjs(`2022-${item}-01`).locale(i18n).format('MMM')}</>
        </RoundedButton>
    ))} -->
</div>

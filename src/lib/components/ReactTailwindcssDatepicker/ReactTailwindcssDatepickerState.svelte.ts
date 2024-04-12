import dayjs from "dayjs";
import type { ClassNamesTypeProp, ColorKeys, Configs, DateLookingDatepickerType, DateRangeType, DateType, DateValueType, Period, PopoverDirectionType } from "./types";
import { getContext, setContext, type Snippet } from "svelte";
import { DATE_FORMAT, LANGUAGE, START_WEEK } from "./constants";
import type { SvelteElement } from "svelte/compiler";
import DEFAULT_SHORTCUTS from "./constants/shortcuts";

export interface ReactTailwindcssDatepickerStateProps {
    input?: HTMLInputElement;
    asSingle?: boolean;
    primaryColor: ColorKeys;
    configs?: Configs;
    calendarContainer: HTMLDivElement | null;
    arrowContainer: HTMLDivElement | null;
    period: Period;
    dayHover: string | null;
    inputText: string;
    showFooter?: boolean;
    placeholder?: string | null;
    separator: string;
    i18n: string;
    value: DateValueType;
    disabled?: boolean;
    inputClassName: ((className: string) => string) | string | null;
    containerClassName?: ((className: string) => string) | string | null;
    toggleClassName?: ((className: string) => string) | string | null;
    readOnly?: boolean;
    startWeekOn?: string | null;
    displayFormat: string;
    minDate?: DateType | null;
    maxDate?: DateType | null;
    dateLooking?: "forward" | "backward" | "middle";
    disabledDates?: DateRangeType[] | null;
    inputId?: string;
    inputName?: string;
    classNames?: ClassNamesTypeProp;
    popoverDirection?: PopoverDirectionType;
    useRange?: boolean;
    showShortcuts?: boolean;
    startFrom?: Date | null;
    changeDayHover: (day: string | null) => void;
    changePeriod: (period: Period) => void;
    toggleIcon?: (open: boolean) => Snippet;
    changeInputText: (text: string) => void;
    updateFirstDate: (date: dayjs.Dayjs) => void;
    changeDatepickerValue: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    hideDatepicker: () => void;
    onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
}

class ReactTailwindcssDatepickerState {
    input = $state<HTMLInputElement | undefined>(undefined);
    configs? = $state<Configs>({
        shortcuts: DEFAULT_SHORTCUTS,
        footer: {
            cancel: "",
            apply: "",
        }
    } satisfies Configs);
    primaryColor = $state<ColorKeys>("blue");
    period = $state<Period>({
        start: null,
        end: null
    });
    useRange = $state(true);
    showFooter = $state(false);
    showShortcuts = $state(false);
    asSingle = $state(false);
    placeholder = $state('');
    separator = $state('~');
    i18n = $state('en');
    disabled = $state(false);
    inputClassName = $state<((className: string) => string) | string | null>(null);
    containerClassName = $state<((className: string) => string) | string | null>('');
    toggleClassName = $state<((className: string) => string) | string | null>('');
    displayFormat = $state('YYYY-MM-DD');
    readOnly = $state(false);
    minDate = $state<DateType | null>(dayjs(new Date()).toDate());
    maxDate = $state<DateType | null>(dayjs(new Date()).add(1, 'year').toDate());
    dateLooking = $state<DateLookingDatepickerType>('forward');
    disabledDates = $state<DateRangeType[] | null>([]);
    dayHover = $state<string | null>(null);
    startFrom = $state<Date | null>(dayjs(new Date()).toDate());
    startWeekOn = $state<string | null>('');
    inputId? = $state<string>("");
    inputName? = $state<string>("");
    classNames? = $state<ClassNamesTypeProp>();
    popoverDirection? = $state<PopoverDirectionType>('down');
    calendarContainer = $state<HTMLDivElement | null>(null);
    arrowContainer = $state<HTMLDivElement | null>(null);
    inputText = $state<string>("");

    changeDayHover = (day: string | null): void => { };
    changePeriod = (period: Period): void => { };
    toggleIcon? = (open: boolean): Snippet | null => { return null };
    changeInputText = (text: string): void => { };
    updateFirstDate = (date: dayjs.Dayjs): void => { };
    changeDatepickerValue = (value: DateValueType, e?: HTMLInputElement | null | undefined): void => { };
    hideDatepicker = (): void => { };
    onChange = (value: DateValueType, e?: HTMLInputElement | null | undefined): void => { };
    // newDisabledDates = $state<DateValueType>({
    //     startDate: new Dayjs(new Date()).toDate(),
    //     endDate: new Dayjs(new Date()).add(1, 'year').toDate()
    // });

    constructor(initialValue: ReactTailwindcssDatepickerStateProps) {
        this.input = initialValue.input;
        this.configs = initialValue.configs;
        this.primaryColor = initialValue.primaryColor;
        this.period = initialValue.period;
        this.useRange = initialValue.useRange || false;
        this.showFooter = initialValue.showFooter || false;
        this.showShortcuts = initialValue.showShortcuts || false;
        this.asSingle = initialValue.asSingle || false;
        this.placeholder = initialValue.placeholder || '';
        this.separator = initialValue.separator;
        this.i18n = initialValue.i18n;
        this.disabled = initialValue.disabled || false;;
        this.inputClassName = initialValue.inputClassName;
        this.containerClassName = initialValue.containerClassName || null;
        this.toggleClassName = initialValue.toggleClassName || null;
        this.displayFormat = initialValue.displayFormat;
        this.readOnly = initialValue.readOnly || false;;
        this.minDate = initialValue.minDate || dayjs(new Date()).toDate();
        this.maxDate = initialValue.maxDate || dayjs(new Date()).add(1, 'year').toDate();
        this.dateLooking = initialValue.dateLooking || 'forward';
        this.disabledDates = initialValue.disabledDates || null;
        this.dayHover = initialValue.dayHover;
        this.startFrom = initialValue.startFrom || dayjs(new Date()).toDate();
        this.startWeekOn = initialValue.startWeekOn || null;
        this.inputId = initialValue.inputId;
        this.inputName = initialValue.inputName;
        this.classNames = initialValue.classNames;
        this.popoverDirection = initialValue.popoverDirection;
        this.calendarContainer = initialValue.calendarContainer;
        this.arrowContainer = initialValue.arrowContainer;
        this.inputText = initialValue.inputText;

        this.changeDayHover = initialValue.changeDayHover;
        this.changePeriod = initialValue.changePeriod;
        this.toggleIcon = initialValue.toggleIcon;
        this.changeInputText = initialValue.changeInputText;
        this.updateFirstDate = initialValue.updateFirstDate;
        this.changeDatepickerValue = initialValue.changeDatepickerValue;
        this.hideDatepicker = initialValue.hideDatepicker;
        this.onChange = initialValue.onChange;
    }
}

export function stubReactTailwindcssDatepickerStateProps() {
    return <ReactTailwindcssDatepickerStateProps>{
        input: undefined,
        primaryColor: "blue",
        configs: undefined,

        calendarContainer: null,
        arrowContainer: null,
        period: { start: null, end: null },
        changePeriod: (period: Period) => { },
        hideDatepicker: () => { },
        dayHover: null,
        changeDayHover: (day: string | null) => { },
        inputText: "",
        changeInputText: (text: string) => { },
        updateFirstDate: (date: dayjs.Dayjs) => { },
        changeDatepickerValue: (value: DateValueType, e: HTMLInputElement | null | undefined) => { },
        showFooter: false,
        value: null,
        i18n: LANGUAGE,
        disabled: false,
        inputClassName: "",
        containerClassName: "",
        toggleClassName: "",
        readOnly: false,
        displayFormat: DATE_FORMAT,
        minDate: null,
        maxDate: null,
        dateLooking: "forward",
        disabledDates: null,
        inputId: undefined,
        inputName: "",
        startWeekOn: START_WEEK,
        toggleIcon: undefined,
        classNames: undefined,
        popoverDirection: undefined,
        separator: "~",
    } satisfies ReactTailwindcssDatepickerStateProps
}

export const REACT_TAILWIND_CSS_DATEPICKER_CTX = 'REACT_TAILWIND_CSS_DATEPICKER_CTX'

export function setReactTailwindcssDatepickerState() {
    console.log("setReactTailwindcssDatepickerState");
    // console.log(initialValue);

    const contextState = new ReactTailwindcssDatepickerState(stubReactTailwindcssDatepickerStateProps());
    setContext(REACT_TAILWIND_CSS_DATEPICKER_CTX, contextState)
    return contextState
}

export function getReactTailwindcssDatepickerState() {
    return getContext<ReactTailwindcssDatepickerStateProps>(REACT_TAILWIND_CSS_DATEPICKER_CTX)
}

// export const reactTailwindcssDatepickerStateProps = new ReactTailwindcssDatepickerState(stubReactTailwindcssDatepickerStateProps());



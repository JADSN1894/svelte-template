/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from "dayjs";
// import React, { createContext } from "react";

import { DATE_FORMAT, LANGUAGE, START_WEEK } from "../constants";
import {
    type Configs,
    type Period,
    type DateValueType,
    type DateType,
    type DateRangeType,
    type ClassNamesTypeProp,
    type PopoverDirectionType,
    type ColorKeys,
    type DateLookingDatepickerType
} from "../types";
import { type Snippet } from "svelte";

// interface DatepickerStore {
//     input?: HTMLInputElement;
//     asSingle?: boolean;
//     primaryColor: ColorKeys;
//     configs?: Configs;
//     calendarContainer: HTMLDivElement | null;
//     arrowContainer: HTMLDivElement | null;
//     hideDatepicker: () => void;
//     period: Period;
//     changePeriod: (period: Period) => void;
//     dayHover: string | null;
//     changeDayHover: (day: string | null) => void;
//     inputText: string;
//     changeInputText: (text: string) => void;
//     updateFirstDate: (date: dayjs.Dayjs) => void;
//     changeDatepickerValue: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
//     showFooter?: boolean;
//     placeholder?: string | null;
//     separator: string;
//     i18n: string;
//     value: DateValueType;
//     disabled?: boolean;
//     inputClassName?: ((className: string) => string) | string | null;
//     containerClassName?: ((className: string) => string) | string | null;
//     toggleClassName?: ((className: string) => string) | string | null;
//     // toggleIcon?: (open: boolean) => React.ReactNode;
//     toggleIcon?: (open: boolean) => Snippet;
//     readOnly?: boolean;
//     startWeekOn?: string | null;
//     displayFormat: string;
//     minDate?: DateType | null;
//     maxDate?: DateType | null;
//     dateLooking?: "forward" | "backward" | "middle";
//     disabledDates?: DateRangeType[] | null;
//     inputId?: string;
//     inputName?: string;
//     classNames?: ClassNamesTypeProp;
//     popoverDirection?: PopoverDirectionType;
// }

export interface DatepickerContext {
    input: undefined;
    primaryColor: ColorKeys;
    configs: undefined;
    calendarContainer: null;
    arrowContainer: null;
    period: { start: null, end: null };
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changePeriod: (period: Period) => object;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideDatepicker: () => object;
    dayHover: null;
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDayHover: (day: string | null) => object;
    inputText: string;
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeInputText: (text: string) => object;
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    updateFirstDate: (date: Date) => object;
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDatepickerValue: (value: DateValueType, e: HTMLInputElement | null | undefined) => object;
    showFooter: false;
    value: null;
    i18n: string;
    disabled: false;
    inputClassName: string;
    containerClassName: string;
    toggleClassName: string;
    readOnly: false;
    displayFormat: string;
    minDate: null;
    maxDate: null;
    dateLooking: DateLookingDatepickerType;
    disabledDates: null;
    inputId: undefined;
    inputName: undefined;
    startWeekOn: string;
    toggleIcon: undefined;
    classNames: undefined;
    popoverDirection: undefined;
    separator: "~"
};

// "en"
// "YYYY-MM-DD"

const stub = <DatepickerContext>{

    input: undefined,
    primaryColor: "blue",
    configs: undefined,
    calendarContainer: null,
    arrowContainer: null,
    period: { start: null, end: null },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changePeriod: (period: Period) => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    hideDatepicker: () => { },
    dayHover: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeDayHover: (day: string | null) => { },
    inputText: "",
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    changeInputText: (text: string) => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
    updateFirstDate: (date: Date) => { },
    // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
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
    inputName: undefined,
    startWeekOn: START_WEEK,
    toggleIcon: undefined,
    classNames: undefined,
    popoverDirection: undefined,
    separator: "~"

}

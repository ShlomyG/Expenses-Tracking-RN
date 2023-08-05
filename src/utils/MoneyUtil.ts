import {GeneralStrings} from '../constants/strings';

export const DECIMAL_CHARS_AMOUNT = 2;

export const getDollar = (amount?: number) => `${GeneralStrings.DOLLAR_SIGN}${getAmountFixed(amount)}`;

export const getAmountFixed = (amount?: number) => amount?.toFixed(DECIMAL_CHARS_AMOUNT);

// export const getPercentage = (partial: number, total: number) => `%${Math.round((100 * partial) / total)}`;

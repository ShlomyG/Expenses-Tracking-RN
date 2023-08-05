import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

export const wp = (percentage: string): number => widthPercentageToDP(percentage);
export const hp = (percentage: string): number => heightPercentageToDP(percentage);

export const IS_IOS: boolean = Platform.OS === 'ios';

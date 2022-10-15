import {Dimensions, Platform} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

export const HORIZONTAL_PADDING = 30;

export const LEFT_PADDING = 30;

export const RIGHT_PADDING = 30;

export const BOTTOM_PADDING = 36;

export const WINDOW_WIDTH = Dimensions.get('window').width;

export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const DEFAULT_HIT_SLOP = {top: 10, right: 10, left: 10, bottom: 10};

export const STATUS_BAR_SIZE = Platform.OS === 'ios' ? getStatusBarHeight() : 0;

export const BOTTOM_SPACE_SIZE = Platform.OS === 'ios' ? getBottomSpace() : 0;

export const IS_LARGE_WIDTH_SIZE = WINDOW_WIDTH >= 375;

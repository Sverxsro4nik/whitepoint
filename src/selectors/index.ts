import { RootState } from '../store/store';

export const getCurrentColor = (state: RootState) => state.colorPickerReducer.color;
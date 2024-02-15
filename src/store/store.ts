import { combineReducers, configureStore } from '@reduxjs/toolkit';
import colorPickerReducer from './slices/colorPicker';

const rootReducer = combineReducers({
	colorPickerReducer: colorPickerReducer,
});

export function setupStore(){
	return configureStore({
		reducer: rootReducer
	})
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
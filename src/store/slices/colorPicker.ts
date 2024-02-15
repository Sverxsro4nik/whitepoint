import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialColorType = {
	color: string[];
}

const initialState: InitialColorType = {
	color: ['#f6b73c'],
}

const colorPickerSlice = createSlice({
	name: 'colorPicker',
	initialState,
	reducers: {
		addColor: (state, action: PayloadAction<string>) => {
			state.color.push(action.payload);
		},
		removeColor: (state, action) => {
			state.color = state.color.filter((color) => color !== action.payload);
		},
		updateColor: (state, action) => {
			const updatedIndex = state.color.findIndex((color) => color === action.payload.oldColor);
			state.color[updatedIndex] = action.payload.newColor;
		},
	}
});

export default colorPickerSlice.reducer;
export const {addColor, removeColor, updateColor} = colorPickerSlice.actions;

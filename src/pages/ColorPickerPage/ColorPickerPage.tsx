import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/defaultHooks';
import { getCurrentColor } from '../../selectors';
import { addColor, removeColor, updateColor } from '../../store/slices/colorPicker';
import ColorPicker from '../../features/ColorPicker';
import cls from './ColorPickerPage.module.css';

const ColorPickerPage = () => {
	const [newColor, setNewColor] = useState<string>('');
	const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
	const actualColors = useAppSelector(getCurrentColor);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if(!newColor) {
			setNewColor(actualColors[actualColors.length - 1]);
		}
	}, [actualColors]);
	const addNewColorHandler = (newColor: string) => {
		if(actualColors) {
			dispatch(addColor(newColor));
			setShowColorPicker(false);
		} else {
			dispatch(addColor(newColor));
		}
	}
	const updateColorHandler = useCallback((oldColor: string, newColor: string) => {
		dispatch(updateColor({oldColor, newColor}));
		
	}, [dispatch]);
	const deleteColorHandler = useCallback((color: string) => {
		dispatch(removeColor(color));
	}, [dispatch])
	return (
		<div>
			{!showColorPicker && <label htmlFor='color' onClick={() => setShowColorPicker(true)} className={cls.Button}>Добавить цвет</label>}
			{showColorPicker && <input type="color" value={newColor} onChange={(event) => setNewColor(event.currentTarget.value)} onInput={(event) => addNewColorHandler(event.currentTarget.value)} className={cls.Input} />}
			<div>
				<h3>Пользовательская палитра</h3>
			<div style={{display: 'flex'}}>
				{
					actualColors.length !== 1 && actualColors?.map((color) => 
						<ColorPicker color={color} key={color} updateColorHandler={updateColorHandler} deleteColorHandler={deleteColorHandler} />
					)
				}
			</div>
			</div>
		</div>
	)
}

export default ColorPickerPage;

import React, { memo, FC, useState, useEffect } from 'react';
import cls from './ColorPicker.module.css';

type ColorPickerProps = {
	color: string;
	updateColorHandler: (oldColor: string, newColor: string) => void;
	deleteColorHandler: (color: string) => void
}

const ColorPicker: FC<ColorPickerProps> = memo(({color, updateColorHandler, deleteColorHandler}) => {
	const [newColor, setNewColor] = useState<string>('');
	const [showPicker, setShowPicker] = useState<boolean>(false);
	useEffect(() => {
		if(showPicker) {
			window.addEventListener('click', (event) => {
				setShowPicker(false);
			});
		} else {
			window.removeEventListener('click', () => setShowPicker(false));
		}
		return window.removeEventListener('click', () => setShowPicker);
	}, [showPicker]);
	const openHandler = (event: React.MouseEvent) => {
		event.stopPropagation();
		setShowPicker(true);
	}
	return (
		<>
			<label style={{backgroundColor: color}} className={cls.Picker} onClick={(event) => openHandler(event)} >
			{showPicker && 
				<input type="color" value={color} onChange={(event) => setNewColor(event.currentTarget.value)} id={color} className={cls.Input} onInput={(event) => updateColorHandler(color, event.currentTarget.value)} />}
			{
				!showPicker && <button onClick={() => deleteColorHandler(color)}>Удалить</button>
			}
		</label>
		</>
	)
})

export default ColorPicker
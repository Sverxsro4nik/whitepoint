import React, { useEffect, useState } from 'react';
import cls from './TimerPage.module.css';

const TimerPage = () => {
	const [minutes, setMinutes] = useState<string>('0');
	const [showTimer, setShowTimer] = useState<number>(0);
	const [startCount, setStartCount] = useState<string>('');
	const handleSubmit = () => {
		event?.preventDefault();
		setStartCount('start');
	}
	useEffect(() => {
		if(minutes !== '0' || minutes) {
			setShowTimer((Number(minutes) * 60));
		}
	}, [minutes]);
	useEffect(() => {
		const interval = setInterval(() => {
			if(showTimer === 0 && startCount==='start') {
				setStartCount('finish');
				clearInterval(interval);
			} else {
				setShowTimer(prev => prev - 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [startCount, showTimer])
	return (
		<div className={cls.TimerPage}>
			<h2>Введите количество минут</h2>
			<form onSubmit={handleSubmit} className={cls.TimerForm}>
				<input type="text" id='timer' onChange={(event) => setMinutes(event.currentTarget.value)} value={minutes} disabled={startCount === 'start'} className={cls.Input} />
				</form>
			{
				showTimer !== 0 && startCount === 'start' && <p className={cls.TimerOutput}>{`${
					Math.floor(showTimer / 60) < 10
						? `0${Math.floor(showTimer / 60)}`
						: `${Math.floor(showTimer / 60)}`
				}:${showTimer % 60 < 10 ? `0${showTimer % 60}` : showTimer % 60}`}</p>
			}
			{
				startCount === 'finish' && !showTimer && <p className={cls.TimerOutput}>Готово</p>
			}
		</div>
	)
}

export default TimerPage;
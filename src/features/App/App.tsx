import React,{ FC, Suspense } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '../../routes';
import MainPage from '../../pages/MainPage/MainPage';
import ErrorPage from '../../pages/ErrorPage';
import { ColorPickerPageLazy } from '../../pages/ColorPickerPage';
import { TimerPageLazy } from '../../pages/TimerPage';

const router = createBrowserRouter([
	{path: routes.pages.mainPage(),
		element: (<Suspense fallback={<p>Идет загрузка</p>}>
			<MainPage />
		</Suspense>),
		errorElement: <ErrorPage />,
		children: [
			{
				path: routes.pages.timerPage(),
				element: (<Suspense fallback={<p>Идет загрузка</p>}><TimerPageLazy /></Suspense>)
			},
			{
				path: routes.pages.colorPickerPage(),
				element: (<Suspense fallback={<p>Идет загрузка</p>}><ColorPickerPageLazy /></Suspense>)
			}
		]
	}
])

const App: FC = () => (<RouterProvider router={router} />);
export default App;
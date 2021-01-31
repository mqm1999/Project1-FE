import React from 'react';

import TrangChu from './pages/TrangChu';
import Bus from './pages/Bus';
import Route from './pages/Route';

import Leddiemdung from './pages/Leddiemdung';
import Ledsau from './pages/Ledsau';
import Ledsuon from './pages/Ledsuon';
import Ledtrong from './pages/Ledtrong';
import Ledtruoc from './pages/Ledtruoc';
//import Edit from './pages/Edit';
const routes = [
	{
		path: '/',
		exact: true,
		main: () => <TrangChu />
	}
	,
	{
		path: '/Bus',
		exact: true,
		main: () => <Bus />
	}
	
	//,
	//{
	//	path: '/edit/: id',
	//	exact: true,
	//	main: () => <Edit />
	//}

	,
	{
		path: '/Route',
		exact: true,
		main: () => <Route />
	}
	//---------
	,
	{
		path: '/Leddiemdung',
		exact: true,
		main: () => <Leddiemdung />
	}

	,
	{
		path: '/Ledsau',
		exact: true,
		main: () => <Ledsau />
	}

	,
	{
		path: '/Ledsuon',
		exact: true,
		main: () => <Ledsuon />
	}

	,
	{
		path: '/Ledtrong',
		exact: true,
		main: () => <Ledtrong />
	}

	,
	{
		path: '/Ledtruoc',
		exact: true,
		main: () => <Ledtruoc />
	}
	

];

export default routes;
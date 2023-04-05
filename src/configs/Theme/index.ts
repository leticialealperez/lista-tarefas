import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
	name: 'light',
	bgColor: '#ffff',
	fontsSizes: {
		sm: '14px',
		md: '16px',
		lg: '32px',
	},
	borderRadius: {
		sm: '5px',
		md: '10px',
		lg: '15px',
	},
	colors: {
		primary: '#e16e0e',
		secondary: '#3e5081',
		info: '#4fc3f7',
		success: '#81c784',
		error: '#e57373',
	},
};

const dark: DefaultTheme = {
	name: 'dark',
	bgColor: '#3a3a3a',
	fontsSizes: {
		sm: '14px',
		md: '16px',
		lg: '32px',
	},
	borderRadius: {
		sm: '5px',
		md: '10px',
		lg: '15px',
	},
	colors: {
		primary: '#ab47bc',
		secondary: '#42a5f5',
		info: '#0288d1',
		success: '#388e3c',
		error: '#d32f2f',
		textColor: '#FFFF',
	},
};

export { light, dark };

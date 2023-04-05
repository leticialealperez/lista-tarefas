import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './configs/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './configs/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={light}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

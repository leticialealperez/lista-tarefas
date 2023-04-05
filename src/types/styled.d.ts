// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		name: 'light' | 'dark';

		bgColor: string;

		colors: {
			primary: string;
			secondary: string;
			error: string;
			info: string;
			success: string;
			textColor?: string;
		};

		fontsSizes: {
			lg: string;
			md: string;
			sm: string;
		};

		borderRadius: {
			lg: string;
			md: string;
			sm: string;
		};
	}
}

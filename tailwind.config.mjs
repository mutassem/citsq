/** @type {import('tailwindcss').Config} */
const default_theme = require('tailwindcss/defaultTheme')

export default {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cabin',...default_theme.fontFamily.sans],
				serif: ['Readex Pro',...default_theme.fontFamily.serif],
				arabic: [
				,"ibm-plex-sans-arabic" 
						],
						koufi: [
							,"noto-kufi-arabic"
					],
					rubik: [
						,"rubik"
				],
				changa: [
					,"changa"
				],
				kufam: [
					,"kufam"
				],
	},
		},
	},
	plugins: [],
	
	  
}


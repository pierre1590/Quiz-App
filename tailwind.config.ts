import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#fff',
      'secondary': '#000',
      'gray': '#808080',
      'red': '#ff0000',
      'azure': '#007fff',
      'green': '#00ff00',
      'lightgreen': '#90ee90',
      'blue': '#0000ff',
    },
    extend: {
    //backroundColor with gradient colors from black to azure
      backgroundImage: _theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }),
    },
  },
  plugins: [],
}
export default config

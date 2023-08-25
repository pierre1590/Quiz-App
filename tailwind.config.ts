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
      'lightblue': '#add8e6',
    },
    extend: {
    //backgroundColor with gradient  from secondary to azure
      backgroundImage: _theme => ({
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(at top, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(at right, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(at bottom right, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(at left, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(at top left, var(--tw-gradient-stops))',
      }),
    },
  },
  plugins: [],
}
export default config


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '~/components/**/*.{ts,tsx,vue}',
        '~/layouts/**/*.vue',
        '~/pages/**/*.vue'
    ],
    theme: {
        darkMode:{

        },
        screens: {
            '3xl': "1920px"
        },
        container: {
            padding: '1rem',

        },
        extend: {
            FontFace: {
                
            }
        }
    },
    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "hero-gradient": " linear-gradient(to bottom, #FFFFFF, #FFF9F6)",
                "deep-gradient": " linear-gradient(to bottom right , #090917, #090917, #090917, #FC4F03)",
                "orange-gradient": "linear-gradient(to top right, #FF7F09, #FE3E02)",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
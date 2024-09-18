/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                youtubeBrand: "#FF0000",
                shoppyBrand: "#F96162",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};

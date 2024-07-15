import withMT from "@material-tailwind/html/utils/withMT";
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
});

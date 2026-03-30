# Give & books boxes

## Description
Allows the user to create cards for give-boxes and book boxes. This includes creating the CSS (SCSS) and the HTML structure.

For the htmlmaker part, user must create the JSON collection manually ([online](https://codebeautify.org/excel-to-json)) and place the result (as an array of objects) in the data.json file (src/data)

Please note that the headers in the Excel file you submit must be modified to reflect the correct properties.



## SCSS
Based on [website starter template v3](https://github.com/kevin-powell/website-starter-template-v3) by Kevin Powell and from [Module](https://module-4.beyondcss.dev/lessons/reusability) 4 of Beyond CSS tutorial (charged tutorial) for CSS part


### Configuration for CSS
See `vite.config.js` to set configuration

Vite is set up to be an SPA (Single Page Application).

By default `index.html` is the only file that Vite Build for production.

Place all related files of the project in `scr/` and set `vite.config.js` like this (e.a.):

```
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
    },
  },
})
```

### Postcss config
We choose stage 3 and add features if necessary. See: [postcss-preset-env features](https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md)

## Excel Parser
Not running for the moment. Dataset are made manually online.
### Description
Parse an Excel file and create a JSON file and a formatted Excel file.

Using npm [excel.js](https://www.npmjs.com/package/exceljs#access-worksheets).

### Usage
Place our Excel file in input folder.

Replace parameters (example) with our own in config (no extension file part):

`const inputExcelName = 'example';`

`const outputJsonName = 'example';`

`const outputExcelName = 'example';`

`const outputSheetName = 'Example';`

Run npm datamaker in console

Find output JSON file in "data" folder.

Find output Excel file in "excel" folder.

### Options

If you want to change JSON keys, modify "cleanHeaders" function.

If you want to change headers of the output Excel file, modify "createExcelHeaderNames" function.


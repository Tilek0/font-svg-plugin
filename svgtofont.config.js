const path = require('path');

module.exports = {
    src: path.resolve(__dirname, 'src/assets/icons'), // Путь к папке с SVG-файлами
    dist: path.resolve(__dirname, 'dist/fonts'), // Путь для сохранения шрифтов
    fontName: 'my-icons', // Название шрифта
    css: true, // Генерация CSS-файла
    types: ['woff', 'woff2', 'ttf'], // Форматы шрифтов
    svgicons2svgfont: {
        fontHeight: 1000,
        normalize: true,
    },
};

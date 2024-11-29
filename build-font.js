import svgtofont from 'svgtofont';
import path from 'path';

svgtofont({
    src: path.resolve('src/assets/icons'), // Путь к SVG-иконкам
    dist: path.resolve('dist/fonts'), // Путь для сохранения шрифтов
    fontName: 'my-icons', // Название шрифта
    css: true, // Включить генерацию CSS
}).then(() => {
    console.log('Font build completed!');
}).catch((err) => {
    console.error('Font build failed:', err);
});

// node build-font.js


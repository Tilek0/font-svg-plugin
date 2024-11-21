import webfont from 'webfont';
import fs from 'fs';
import path from 'path';

/**
 * Плагин для генерации шрифта из иконок SVG
 * @param {Object} options - Конфигурация плагина
 * @param {string} options.iconsDir - Путь к иконкам в формате glob
 * @param {string} options.fontName - Имя шрифта
 * @param {Array} options.formats - Форматы шрифтов, которые нужно генерировать
 */
function generateIconFont(options) {
    const { iconsDir, fontName = 'my-font-name', formats = ['woff2', 'woff'], normalize = true } = options;

    // Проверка, что путь к иконкам был передан
    if (!iconsDir) {
        throw new Error('Путь к иконкам (iconsDir) не указан');
    }

    // Считывание файлов SVG из папки
    const svgFiles = fs.readdirSync(iconsDir).filter(file => path.extname(file) === '.svg');

    if (svgFiles.length === 0) {
        throw new Error('В папке с иконками нет файлов .svg');
    }

    // Генерация шрифта
    return webfont({
        files: svgFiles.map(file => path.join(iconsDir, file)),  // Путь к файлам SVG
        fontName: fontName,  // Имя шрифта
        formats: formats,  // Форматы шрифтов
        normalize: normalize,  // Нормализация иконок
    })
        .then((result) => {
            console.log('Font generated successfully:', result);
            // Записываем сгенерированные шрифты в папку dist
            fs.writeFileSync(path.join('dist', `${fontName}.css`), result.toString());
            return result;
        })
        .catch((error) => {
            console.error('Error generating font:', error);
        });
}

export { generateIconFont as default };

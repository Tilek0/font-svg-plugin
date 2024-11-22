import webfont from 'webfont';

// Генерация шрифта из иконок SVG, находящихся внутри плагина.
function generateIconFont() {
    const iconsDir = './icons/**/*.svg';

    const fontName = 'my-custom-font';
    const formats = ['woff2', 'woff'];
    const normalize = true;

    return webfont({
        files: iconsDir,
        fontName,
        formats,
        normalize,
    })
        .then((result) => {
            console.log('Font generated successfully:', result);
        })
        .catch((error) => {
            console.error('Error generating font:', error);
        });
}

generateIconFont();

export { generateIconFont };

export default {
    install(app) {
        console.log('Plugin installed: Icon fonts ready to use!');
    }
};

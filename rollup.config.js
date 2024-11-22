import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'es',
    },
    plugins: [
        commonjs(),
        postcss({
            extract: true,  // Извлекаем CSS в отдельный файл
            minimize: true, // Минимизируем CSS
        }),
        copy({
            targets: [
                { src: 'src/icons/*', dest: 'dist/icons' },  // Копируем иконки
                { src: 'src/styles.css', dest: 'dist' },     // Копируем CSS
            ]
        })
    ],
};

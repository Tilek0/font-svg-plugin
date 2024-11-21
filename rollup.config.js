import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import path from 'path';

export default defineConfig({
    input: 'src/index.js',  // Входной файл
    output: [
        {
            file: 'dist/index.js',  // Выходной файл
            format: 'esm',  // Используем ES Modules
        },
    ],
    plugins: [
        resolve(),  // Для импорта npm-пакетов
        commonjs(), // Для поддержки CommonJS модулей
    ],
});

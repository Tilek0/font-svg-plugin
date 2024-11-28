Holiverse Icon Font Plugin
* holiverse-icon-font-plugin
 - это плагин для генерации и использования иконок в формате шрифтов на основе SVG-файлов. Плагин позволяет легко подключать и использовать сгенерированные шрифты в Vue-проектах.

* Установка
* Установите плагин в ваш проект с помощью yarn или npm:

yarn add holiverse-icon-font-plugin
# или
npm install holiverse-icon-font-plugin
Генерация новых шрифтов
Чтобы создать новые шрифты из SVG-иконок:

* Подготовьте SVG-файлы:

Поместите все SVG-файлы в папку icons/ вашего плагин-проекта. Названия файлов должны быть в формате имя_иконки.svg. Например:

icons/
home.svg
user.svg
settings.svg

* Запустите команду:
svgtofont -s ./src/assets/icons -o ./dist/fonts --fontName my-icons --css
потом node build-font.js
После выполнения команды в папке dist/fonts появятся сгенерированные файлы:

dist/
fonts/
my-icons.css
my-icons.woff
my-icons.woff2
my-icons.ttf

* Добавьте новые SVG-файлы:

Если вам нужно добавить новые иконки, просто положите соответствующие SVG-файлы в папку icons/ и снова выполните команду
svgtofont -s ./src/assets/icons -o ./dist/fonts --fontName my-icons --css
потом node build-font.js

* Использование плагина в проекте
* Подготовьте файлы шрифтов:

Скопируйте файлы из dist/fonts/ вашего плагин-проекта в папку public/fonts/ вашего основного проекта:

public/
fonts/
my-icons.css
my-icons.woff
my-icons.woff2
my-icons.ttf
Подключите плагин:

В main.js подключите плагин и укажите путь к файлу CSS:

import IconFontPlugin from 'holiverse-icon-font-plugin';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(IconFontPlugin, {
fontPath: '/fonts/my-icons.css', // Путь к вашему CSS-файлу
});

app.mount('#app');
Используйте иконки в компонентах:

Теперь вы можете использовать иконки в вашем проекте. Например:

<template>
    <div>
        <i class="my-icons-home" style="font-size: 40px; color: #000;"></i>
        <i class="my-icons-user" style="font-size: 24px; color: #f00;"></i>
    </div>
</template>
Здесь my-icons-home и my-icons-user соответствуют названиям SVG-файлов (home.svg и user.svg).

* Примечания

Форматы шрифтов: Плагин генерирует файлы в форматах woff, woff2, и ttf. CSS-файл автоматически подключает их через @font-face.
Добавление новых иконок: Чтобы добавить новую иконку, просто поместите SVG-файл в папку icons/ и выполните команду
svgtofont -s ./src/assets/icons -o ./dist/fonts --fontName my-icons --css
потом node build-font.js 
для обновления шрифтов.
Кастомизация: Вы можете изменить конфигурацию шрифтов, редактируя файл svgtofont.config.js.
Лицензия
Этот плагин распространяется под лицензией MIT.

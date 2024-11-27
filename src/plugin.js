export default {
    install(app, options = {}) {
        const fontPath = options.fontPath || '/fonts/my-icons.css'; // Путь к CSS-файлу шрифта

        // Динамически добавляем CSS в проект
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = fontPath;
        document.head.appendChild(link);

        // Метод для использования шрифтов в компонентах
        app.config.globalProperties.$getIconClass = (iconName) => `my-icons-${iconName}`;
    },
};

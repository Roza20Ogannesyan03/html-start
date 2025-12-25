/**
 * Конфигурация Typograf Lebedev для проекта
 * Разместить в корне проекта и импортировать в main.js/app.js
 */

const typografConfig = {
  // Включить/выключить правила
  rules: {
    quotes: true, // «ёлочки» и „лапки"
    dashes: true, // — длинные тире
    nbsp: true, // неразрывные пробелы
    ellipsis: true, // многоточие …
    math: true, // × ≠ ≤ ≥
    copyright: true, // © ™ ®
    prepositions: true, // в, на, с и т.д.
  },

  // Селекторы исключений
  exclude: [
    "code",
    "pre",
    "script",
    "style",
    "textarea",
    ".no-typograf",
    ".skip-typograf",
    "[data-no-typograf]",
    "[data-skip-typograf]",
    ".code-block",
    ".editor-content", // ваши кастомные классы
  ],

  // Обработка динамического контента
  watchDOM: true,

  // Область применения (null = весь документ)
  scope: null,

  // Задержка перед обработкой
  delay: 100,

  // Логирование в консоль
  debug: false,

  // Кастомные правила
  customRules: [
    {
      pattern: /(\d+)\s*шт\./gi,
      replacement: "$1 шт.",
      description: 'Сокращение "штук"',
    },
    {
      pattern: /г\.\s*([А-Я][а-я]+)/g,
      replacement: "г. $1",
      description: "Город с названием",
    },
  ],

  // Язык
  language: "ru",
};

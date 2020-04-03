const INFORM = document.createElement('div');
const CONTAINER = document.createElement('div'); // создаем элемент div для обертки содержимого
const TEXTAREA = document.createElement('textarea'); // создаем элемент div для ввода текста
let capsLock = false;
let wrapper;
const SPESIALBUTTONS = [
  'Enter',
  'Tab',
  'CapsLock',
  'Backspace',
  'ShiftLeft',
  'ShiftRight',
  'Space',
];
const KEYS = [
  [
    {
      call: 'Backquote',
      russian: 'ё',
      ruShift: 'Ё',
      english: '`',
      enShift: '~',
      type: 'element',
    },
    {
      call: 'Digit1',
      russian: '1',
      ruShift: '!',
      english: '1',
      enShift: '!',
      type: 'element',
    },
    {
      call: 'Digit2',
      russian: '2',
      ruShift: '"',
      english: '2',
      enShift: '@',
      type: 'element',
    },
    {
      call: 'Digit3',
      russian: '3',
      ruShift: '№',
      english: '3',
      enShift: '#',
      type: 'element',
    },
    {
      call: 'Digit4',
      russian: '4',
      ruShift: ';',
      english: '4',
      enShift: '$',
      type: 'element',
    },
    {
      call: 'Digit5',
      russian: '5',
      ruShift: '%',
      english: '5',
      enShift: '%',
      type: 'element',
    },
    {
      call: 'Digit6',
      russian: '6',
      ruShift: ':',
      english: '6',
      enShift: '^',
      type: 'element',
    },
    {
      call: 'Digit7',
      russian: '7',
      ruShift: '?',
      english: '7',
      enShift: '&',
      type: 'element',
    },
    {
      call: 'Digit8',
      russian: '8',
      ruShift: '*',
      english: '8',
      enShift: '*',
      type: 'element',
    },
    {
      call: 'Digit9',
      russian: '9',
      ruShift: '(',
      english: '9',
      enShift: '(',
      type: 'element',
    },
    {
      call: 'Digit0',
      russian: '0',
      ruShift: ')',
      english: '0',
      enShift: ')',
      type: 'element',
    },
    {
      call: 'Minus',
      russian: '-',
      ruShift: '_',
      english: '-',
      enShift: '_',
      type: 'element',
    },
    {
      call: 'Equal',
      russian: '=',
      ruShift: '+',
      english: '=',
      enShift: '+',
      type: 'element',
    },
    {
      call: 'Backspace',
      russian: 'Backspace',
      english: 'Backspace',
      type: 'special',
    },
  ],

  [
    {
      call: 'Tab',
      russian: 'Tab',
      ruShift: 'Tab',
      english: 'Tab',
      type: 'special',
    },
    {
      call: 'KeyQ',
      russian: 'й',
      ruShift: 'Й',
      english: 'q',
      enShift: 'Q',
      type: 'element',
    },
    {
      call: 'KeyW',
      russian: 'ц',
      ruShift: 'Ц',
      english: 'w',
      enShift: 'W',
      type: 'element',
    },
    {
      call: 'KeyE',
      russian: 'у',
      ruShift: 'У',
      english: 'e',
      enShift: 'E',
      type: 'element',
    },
    {
      call: 'KeyR',
      russian: 'к',
      ruShift: 'К',
      english: 'r',
      enShift: 'R',
      type: 'element',
    },
    {
      call: 'KeyT',
      russian: 'е',
      ruShift: 'Е',
      english: 't',
      enShift: 'T',
      type: 'element',
    },
    {
      call: 'KeyY',
      russian: 'н',
      ruShift: 'Н',
      english: 'y',
      enShift: 'Y',
      type: 'element',
    },
    {
      call: 'KeyU',
      russian: 'г',
      ruShift: 'Г',
      english: 'u',
      enShift: 'U',
      type: 'element',
    },
    {
      call: 'KeyI',
      russian: 'ш',
      ruShift: 'Ш',
      english: 'i',
      enShift: 'I',
      type: 'element',
    },
    {
      call: 'KeyO',
      russian: 'щ',
      ruShift: 'Щ',
      english: 'o',
      enShift: 'O',
      type: 'element',
    },
    {
      call: 'KeyP',
      russian: 'з',
      ruShift: 'З',
      english: 'p',
      enShift: 'P',
      type: 'element',
    },
    {
      call: 'BracketLeft',
      russian: 'х',
      ruShift: 'Х',
      english: '{',
      enShift: '[',
      type: 'element',
    },
    {
      call: 'BracketRight',
      russian: 'ъ',
      ruShift: 'Ъ',
      english: '}',
      enShift: ']',
      type: 'element',
    },
    {
      call: 'Backslash',
      russian: '\\',
      ruShift: '|',
      english: '\\',
      enShift: '/',
      type: 'element',
    },
  ],

  [
    {
      call: 'CapsLock',
      russian: 'CapsLock',
      ruShift: 'CapsLock',
      english: 'CapsLock',
      type: 'special',
    },
    {
      call: 'KeyA',
      russian: 'ф',
      ruShift: 'Ф',
      english: 'a',
      enShift: 'A',
      type: 'element',
    },
    {
      call: 'KeyS',
      russian: 'ы',
      ruShift: 'Ы',
      english: 's',
      enShift: 'S',
      type: 'element',
    },
    {
      call: 'KeyD',
      russian: 'в',
      ruShift: 'В',
      english: 'd',
      enShift: 'D',
      type: 'element',
    },
    {
      call: 'KeyF',
      russian: 'а',
      ruShift: 'А',
      english: 'f',
      enShift: 'F',
      type: 'element',
    },
    {
      call: 'KeyG',
      russian: 'п',
      ruShift: 'П',
      english: 'g',
      enShift: 'G',
      type: 'element',
    },
    {
      call: 'KeyH',
      russian: 'р',
      ruShift: 'Р',
      english: 'h',
      enShift: 'H',
      type: 'element',
    },
    {
      call: 'KeyJ',
      russian: 'о',
      ruShift: 'О',
      english: 'j',
      enShift: 'J',
      type: 'element',
    },
    {
      call: 'KeyK',
      russian: 'л',
      ruShift: 'Л',
      english: 'k',
      enShift: 'K',
      type: 'element',
    },
    {
      call: 'KeyL',
      russian: 'д',
      ruShift: 'Д',
      english: 'l',
      enShift: 'L',
      type: 'element',
    },
    {
      call: 'Semicolon',
      russian: 'ж',
      ruShift: 'Ж',
      english: ';',
      enShift: ':',
      type: 'element',
    },
    {
      call: 'Quote',
      russian: 'э',
      ruShift: 'Э',
      english: "'",
      enShift: "'",
      type: 'element',
    },
    {
      call: 'Enter',
      russian: 'Enter',
      ruShift: 'Enter',
      english: 'Enter',
      type: 'special',
    },
  ],

  [
    {
      call: 'ShiftLeft',
      russian: 'Shift',
      ruShift: 'Shift',
      english: 'Shift',
      type: 'special',
    },
    {
      call: 'KeyZ',
      russian: 'я',
      ruShift: 'Я',
      english: 'z',
      enShift: 'Z',
      type: 'element',
    },
    {
      call: 'KeyX',
      russian: 'ч',
      ruShift: 'Ч',
      english: 'x',
      enShift: 'X',
      type: 'element',
    },
    {
      call: 'KeyC',
      russian: 'с',
      ruShift: 'С',
      english: 'c',
      enShift: 'C',
      type: 'element',
    },
    {
      call: 'KeyV',
      russian: 'м',
      ruShift: 'М',
      english: 'v',
      enShift: 'V',
      type: 'element',
    },
    {
      call: 'KeyB',
      russian: 'и',
      ruShift: 'И',
      english: 'b',
      enShift: 'B',
      type: 'element',
    },
    {
      call: 'KeyN',
      russian: 'т',
      ruShift: 'Т',
      english: 'n',
      enShift: 'N',
      type: 'element',
    },
    {
      call: 'KeyM',
      russian: 'ь',
      ruShift: 'Ь',
      english: 'm',
      enShift: 'M',
      type: 'element',
    },
    {
      call: 'Comma',
      russian: 'б',
      ruShift: 'Б',
      english: ',',
      enShift: '<',
      type: 'element',
    },
    {
      call: 'Period',
      russian: 'ю',
      ruShift: 'Ю',
      english: '.',
      enShift: '>',
      type: 'element',
    },
    {
      call: 'Slash',
      russian: ',',
      ruShift: ',',
      english: '/',
      enShift: '?',
      type: 'element',
    },
    {
      call: 'ShiftRight',
      russian: 'Shift',
      ruShift: 'Shift',
      english: 'Shift',
      enShift: 'Shift',
      type: 'special',
    },
    {
      call: 'ArrowUp',
      russian: '▲',
      ruShift: '▲',
      english: '▲',
      enShift: '▲',
      type: 'element',
    },
  ],

  [
    {
      call: 'ControlLeft',
      russian: 'Ctrl',
      ruShift: 'Ctrl',
      english: 'Ctrl',
      enShift: 'Ctrl',
      type: 'special',
    },
    {
      call: 'MetaLeft',
      russian: 'Win',
      ruShift: 'Win',
      english: 'Win',
      enShift: 'Win',
      type: 'special',
    },
    {
      call: 'AltLeft',
      russian: 'Alt',
      ruShift: 'Alt',
      english: 'Alt',
      enShift: 'Alt',
      type: 'special',
    },
    {
      call: 'Space',
      russian: 'Space',
      ruShift: 'Space',
      english: 'Space',
      type: 'special-space',
    },
    {
      call: 'AltRight',
      russian: 'Alt',
      ruShift: 'Alt',
      english: 'Alt',
      enShift: 'Alt',
      type: 'special',
    },
    {
      call: 'ControlRight',
      russian: 'Ctrl',
      ruShift: 'Ctrl',
      english: 'Ctrl',
      enShift: 'Ctrl',
      type: 'element',
    },
    {
      call: 'ArrowLeft',
      russian: '◄',
      ruShift: '◄',
      english: '◄',
      enShift: '◄',
      type: 'element',
    },
    {
      call: 'ArrowDown',
      russian: '▼',
      ruShift: '▼',
      english: '▼',
      enShift: '▼',
      type: 'element',
    },
    {
      call: 'ArrowRight',
      russian: '►',
      ruShift: '►',
      english: '►',
      enShift: '►',
      type: 'element',
    },
  ],
];

// -----------------------------функция добавления элементов в конец узлов------------
function addElem(child, parent) {
  // добавлем узел в конец списка дочерних элементов указанного родительского узла
  parent.appendChild(child);
}

// ----------------------------------функция создания кнопок----------------------------

function makeElem(call, text, type) {
  const element = document.createElement('element'); // создаем класс "element"
  element.id = call; // присваиваем id кнопкам исходя из его call (event.code)
  element.innerText = text; // присваиваем значение кнопке
  element.className = type; // присваиваем кнопке класс исходя из пришедшего значения объекта
  return element; // возвращаем кнопку
}

// ----------------------------функция создания клавиатуры----------------------------------------
function buildwrapper(lang) {
  wrapper = document.createElement('div'); // создаем элемент div для клавиатуры
  wrapper.className = 'element-wrapper';
  wrapper.id = 'wrapper';
  KEYS.forEach((el) => {
    // проходим по всем элементам KEYS
    const line = document.createElement('div'); // создаем новый элемент ('div') - для линий (в клавиатуре, wrapper)
    line.className = 'line'; // создаем новый класс 'line'- для элемента line

    el.forEach((elem) => {
      const indexespecial = SPESIALBUTTONS.indexOf(elem.call);

      if (indexespecial !== -1) {
        // .indexOf(element.call) для спецкнопок не равен -1
        addElem(makeElem(elem.call, elem.english, elem.type), line); // добавляем спецкнопки
      }

      if (indexespecial === -1 && lang === 'en') {
        addElem(makeElem(elem.call, elem.english, 'element'), line); // добавляем кнопки обычные
      }

      if (indexespecial === -1 && lang === 'enShift') {
        addElem(makeElem(elem.call, elem.enShift, 'element'), line); // добавляем кнопки обычные
      }

      if (indexespecial === -1 && lang === 'ru') {
        addElem(makeElem(elem.call, elem.russian, 'element'), line); // добавляем кнопки обычные
      }

      if (indexespecial === -1 && lang === 'ruShift') {
        addElem(makeElem(elem.call, elem.ruShift, 'element'), line); // добавляем кнопки обычные
      }
    });
    addElem(line, wrapper); // вызываем функцию addElem с параметрами line и keyboard
  });
  return wrapper;
}

// --------------------------выбираем и сохраняем язык -------------------------------------------
let lang;
if (!localStorage) {
  lang = 'en';
} else {
  lang = localStorage.getItem('language');
}
localStorage.setItem('language', lang);

// -------------------------------------меняем язык----------------------------------

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  wrapper = document.getElementById('wrapper');
  if (event.ctrlKey && event.key === 'Alt') {
    wrapper.remove();
    if (lang === 'en') {
      lang = 'ru';
      CONTAINER.appendChild(buildwrapper('ru'));
    } else {
      lang = 'en';
      CONTAINER.appendChild(buildwrapper('en'));
    }
    localStorage.setItem('language', lang);
  }
});

// ----------------------------создаем архитектуру клавиатуры-------------------------------------

document.body.appendChild(CONTAINER); // создаем элемент CONTAINER в body
CONTAINER.appendChild(TEXTAREA); // создаем элемент "textarea" в CONTAINER
TEXTAREA.classList.add('textarea'); // добавляем элементу textarea класс "textarea" для ввода текста
CONTAINER.appendChild(buildwrapper(lang));



// ----------------------------нажатие мышью -----------------------
let text = '';
const div = document.querySelector('div');
div.addEventListener('mousedown', (event) => {
  const button = event.target;

  if (
    (button.className === 'element' || button.id === 'Backslash')
    && button.innerText.length === 1
  ) {
    text += button.innerText;
    document.querySelector('.textarea').innerHTML = text;
  }

  if (button.id === 'Space') {
    text += ' ';
    document.querySelector('.textarea').innerHTML = text;
  }

  if (button.id === 'Backspace') {
    const textreturn = document.querySelector('.textarea').innerHTML;
    text = textreturn
      .split('')
      .slice(0, -1)
      .join('');
    document.querySelector('.textarea').innerHTML = text;
  }

  if (button.id === 'Enter') {
    text += '\n';
    document.querySelector('.textarea').innerHTML = text;
  }

  if (button.id === 'Tab') {
    event.preventDefault();
    text += '   ';
    document.querySelector('.textarea').innerHTML = text;
  }
});



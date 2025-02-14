const numberOfRoses = 20; // Количество роз
const svgPath = 'rose.svg'; // Путь к вашему SVG-файлу
const roseEnd = document.querySelector(".rose-end");
roseEnd.style.display = "none";
redLine = "\u00A0\u00A0\u00A0";
poem = [
    "С прекрасным праздником весны",
    "Мы Вас сердечно поздравляем.",
    "Здоровья, счастья и любви",
    "От всей души мы Вам желаем!",
    "",
    "И солнце пусть Вам ярко светит,",
    "И птички радостно поют,",
    "Пусть в Вашем доме воцарятся",
    "Веселье, мир, тепло, уют.",
    "",
    "Когда вокруг звенит капель",
    "И раздается птичек пение,",
    "Почувствуйте весны приход —",
    "Примите наши поздравления!"
]

for (let i = 0; i < numberOfRoses; i++) {
    setTimeout(() => {
        createRose();
    }, i * 500);
}

function createRose() {
    const rose = document.createElement('img');
    rose.src = svgPath;
    rose.classList.add('rose');
    rose.style.position = "absolute";

    // Устанавливаем случайные координаты и размеры
    const size = Math.random() * 50 + 30; // Случайный размер от 30 до 80px
    const x = Math.random() * (window.innerWidth - size); // Ширина окна
    rose.style.left = `${x}px`;
    rose.style.width = `${size}px`;
    rose.style.height = `${size}px`;

    document.getElementById("background-roses").appendChild(rose);
}

function animateText(text) {
    const textContainer = document.getElementById("poem");
    textContainer.innerHTML = ''; // Очищаем контейнер

    // Разделяем текст на строки
    const lines = text.split('\n');

    // Для каждой строки создаем элементы для букв
    lines.forEach((line, lineIndex) => {
        for (let char of line) {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char; // Заменяем пробел на неразрывный
            span.classList.add('letter');
            textContainer.appendChild(span);
        }
        // Добавляем <br> после каждой строки, кроме последней
        if (lineIndex < lines.length - 1) {
            textContainer.appendChild(document.createElement('br'));
        }
    });

    const letters = document.querySelectorAll('.letter');
    let index = 0;

    function showLetter() {
        if (index < letters.length) {
            letters[index].style.opacity = 1; // Показываем букву
            index++;
            setTimeout(showLetter, 100); // Задержка перед показом следующей буквы
        }
        else {
            showEndRose();
        }
    }

    showLetter(); // Запускаем анимацию
}

function showEndRose() {
    const rose = document.querySelector(".rose-end");
    rose.style.display = "block";
}

function startAnim() {
    let poemText = "";
    for (let i = 0; i < poem.length; i++)
        poemText += poem[i] + "\n";
    animateText(`${poemText}`);
}

document.getElementById("start-button").addEventListener("click", () => {
    const panel = document.getElementById("panel");
    const panelStart = document.getElementById("start");

    panelStart.style.display = "none";
    panel.style.borderRadius = 0;
    panel.style.maxHeight = "80vh";
    panel.style.maxWidth = "57vh";
    panel.style.width = "70vw";
    panel.style.height = "100vw";
    panel.style.backgroundColor = "white";

    setTimeout(startAnim, 1000);
});

/*max-height: 80vh;
max-width: 57vh;
width: 70vw;
height: 100vw;
background-color: white;*/
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#game-section button");
    const resultDiv = document.getElementById("game-result");

    const effects = {
        "трчање": "Трчањето ја зголемува енергијата и го намалува стресот.",
        "јога": "Јогата помага во релаксација и подобрување на концентрацијата.",
        "пешачење": "Пешачењето е одличен начин за размислување и ослободување од напнатост.",
        "танцување": "Танцувањето ја подобрува расположбата и го стимулира позитивното расположение."
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const activity = btn.getAttribute("data-activity");
            resultDiv.textContent = effects[activity] || "";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("entry-form");
    const textArea = document.getElementById("entry-text");
    const entriesList = document.getElementById("entries-list");

    function loadEntries() {
        const entries = JSON.parse(localStorage.getItem("emociiEntries") || "[]");
        entriesList.innerHTML = "";
        if (entries.length === 0) {
            entriesList.innerHTML = "<li>Нема записи.</li>";
        } else {
            entries.forEach((entry, idx) => {
                const li = document.createElement("li");
                li.textContent = `${new Date(entry.date).toLocaleString()}: ${entry.text}`;
                entriesList.appendChild(li);
            });
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = textArea.value.trim();
        if (text.length === 0) {
            alert("Внеси нешто пред да зачуваш.");
            return;
        }
        const entries = JSON.parse(localStorage.getItem("emociiEntries") || "[]");
        entries.unshift({ text, date: new Date().toISOString() });
        localStorage.setItem("emociiEntries", JSON.stringify(entries));
        textArea.value = "";
        loadEntries();
    });

    loadEntries();
});

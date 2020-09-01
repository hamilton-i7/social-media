const UIController = {
    DOMstrings: {
        themes: ["*.dark", "*.light"],
        button: ".js--button",
        buttonIndicator: ".js--buttonIndicator",
        mode: ".js--mode",
        body: ".js--body"
    },
    toggleTheme: function() {
        const body = document.querySelector(UIController.DOMstrings.body);
        let elements;

        if (body.classList.contains("dark")) {
            elements = document.querySelectorAll(UIController.DOMstrings.themes[0]);
        } else if (body.classList.contains("light")) {
            elements = elements = document.querySelectorAll(UIController.DOMstrings.themes[1]);
        }

        elements.forEach(el => {
            el.classList.toggle("dark");
            el.classList.toggle("light");
        });

        UIController.changeMode();
    },
    changeMode: function() {
        const mode = document.querySelector(UIController.DOMstrings.mode);
        const buttonIndicator = document.querySelector(UIController.DOMstrings.buttonIndicator);

        if (mode.innerText.includes("Dark")) {
            mode.innerText = "light mode";
            buttonIndicator.classList.add("slide-right");
            buttonIndicator.classList.remove("slide-left");
        } else if (mode.innerText.includes("Light")) {
            mode.innerText = "dark mode";
            buttonIndicator.classList.add("slide-left");
            buttonIndicator.classList.remove("slide-right");
        }
    }
}

document.querySelector(".js--button").addEventListener("click", UIController.toggleTheme);
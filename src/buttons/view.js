export function buttonView(buttonId, buttonName, iconPath, description, isSearch, showButtonLabels)
    {
        let button = document.createElement("li");

        let buttonLink = document.createElement("a");
        buttonLink.className = "nav-link text-secondary px-2";
        buttonLink.id = buttonId;

        if (isSearch)
        {
            buttonLink.setAttribute("data-bs-toggle", "modal");
            buttonLink.setAttribute("data-bs-target", "#searchModal");
            button.addEventListener("click", () =>
            {
                document.getElementById("SearchBar").focus();
            });
        }

        let buttonIcon = document.createElement("img");
        buttonIcon.className = "bi d-block mx-2 mb-1";
        buttonIcon.id = `${buttonId}-image`;
        buttonIcon.src = iconPath;
        buttonIcon.alt = description;
        buttonIcon.width = "40";
        buttonIcon.height = "40";

        button.appendChild(buttonLink);
        buttonLink.appendChild(buttonIcon);

        if (showButtonLabels)
        {
            let buttonLabel = document.createElement("h6")
            buttonLabel.className = "subtle";
            buttonLabel.innerHTML = buttonName;
            buttonLink.appendChild(buttonLabel);
        }

        return button;
    }
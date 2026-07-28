const loadRecipesButton =
  document.getElementById("loadRecipesButton");

const recipeCards =
  document.getElementById("recipeCards");

const loadingMessage =
  document.getElementById("loadingMessage");

async function loadRecipes() {
  try {
    loadingMessage.classList.remove("hidden");
    recipeCards.innerHTML = "";

    const response = await fetch("/api/recipes");

    if (!response.ok) {
      throw new Error("Unable to retrieve recipe data");
    }

    const result = await response.json();

    result.data.forEach((recipe) => {
      const column = document.createElement("div");

      column.className = "col s12 m6 l4";

      column.innerHTML = `
        <div class="card hoverable recipe-card">

          <div class="card-image">
            <img
              src="${recipe.image}"
              alt="${recipe.name}"
            >

            <span class="card-title recipe-title">
              ${recipe.name}
            </span>
          </div>

          <div class="card-content">

            <p>
              <strong>Category:</strong>
              ${recipe.category}
            </p>

            <p class="time-text">
              <strong>Preparation Time:</strong>
              ${recipe.time}
            </p>

            <p class="description-text">
              ${recipe.description}
            </p>

          </div>

          <div class="card-action">
            <a
              href="#!"
              class="deep-orange-text text-darken-3"
            >
              View Recipe
            </a>
          </div>

        </div>
      `;

      recipeCards.appendChild(column);
    });

    M.toast({
      html: "Recipes loaded successfully",
      classes: "deep-orange darken-3"
    });

  } catch (error) {
    console.error(error);

    recipeCards.innerHTML = `
      <div class="col s12">
        <div
          class="card-panel red lighten-4 red-text text-darken-4"
        >
          Unable to load the recipes.
          Please check that the server is running.
        </div>
      </div>
    `;

  } finally {
    loadingMessage.classList.add("hidden");
  }
}

loadRecipesButton.addEventListener("click", loadRecipes);

document.addEventListener("DOMContentLoaded", loadRecipes);
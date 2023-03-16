import * as icons from '../../images/svg/symbol-defs.svg';
export function createCocktailsMarkupByViewportSize(setSize, { data }) {
  let cocktailsMarkup = '';

  if (data.drinks.length < setSize) {
    data.drinks.map(
      data =>
        (cocktailsMarkup += `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#">
                    <img class="cocktail-picture" src="${data.strDrinkThumb}" alt="${data.strDrink}">
                </a>
                    <p class="cocktail-label">${data.strDrink}</p>
                    <button class="learnMore">Learn more</button>
                    <button class="addTo">Add to
                    <svg class="icon-heart">
                      <use href="${icons}#heart"></use>
                    </svg>
                    </button>
            </div>
        </li>
    `)
    );

    return cocktailsMarkup;
  }

  for (let i = 0; i < setSize; i++) {
    cocktailsMarkup += `
        <li class="cocktail-item">
            <div class="cocktail-card">
                <a class="cocktail-link" href="#">
                    <img class="cocktail-picture" src="${data.drinks[i].strDrinkThumb}" alt="${data.drinks[i].strDrink}">
                </a>
                    <p class="cocktail-label">${data.drinks[i].strDrink}</p>
                    <button class="learnMore" data-id="${data.drinks[i].idDrink}" data-modal-open>Learn more</button>
                    <button class="addTo">Add to
                    <svg class="icon-heart">
                      <use href="${icons}#heart"></use>
                    </svg>
                    </button>
            </div>
        </li>
    `;
  }

  return cocktailsMarkup;
}
{
  /* <button class="learnMore" >Learn more</button>
<button class="addTo">Add to</button> */
}

const searchInput = () => {
  const searchValue = document.getElementById("search-field");
  const searchText = searchValue.value;
  searchValue.value = "";
  //   console.log(searchText);

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealResult(data.meals));
};

const displayMealResult = (meal) => {
  //   console.log(meal);
  const mealItem = document.getElementById("meal-item");
  meal.forEach((meal) => {
    console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="loadMeal(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
                ${meal.strInstructions.slice(0, 250)}
            </p>
        </div>
    </div>
    `;
    mealItem.appendChild(div);
  });
};

const loadMeal = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetail = document.getElementById("meal-detail");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">
          ${meal.strInstructions.slice(0, 1000)}
        </p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go Youtube</a>
      </div>
  `;
  mealDetail.appendChild(div);
};

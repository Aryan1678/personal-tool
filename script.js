const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const products = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

const categoryButtons = document.querySelectorAll(".category-btn");


// SEARCH FUNCTION

function searchProducts() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let found = 0;

    products.forEach(product => {

        const productText =
            product.textContent.toLowerCase();

        if (productText.includes(searchText)) {

            product.style.display = "block";
            found++;

        } else {

            product.style.display = "none";

        }

    });

    noResults.style.display =
        found === 0 ? "block" : "none";
}


searchBtn.addEventListener(
    "click",
    searchProducts
);


searchInput.addEventListener(
    "input",
    searchProducts
);


// CATEGORY FILTER

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const category =
            this.dataset.category;

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        let found = 0;

        products.forEach(product => {

            const productCategory =
                product.dataset.category;

            if (
                category === "all" ||
                productCategory === category
            ) {

                product.style.display = "block";
                found++;

            } else {

                product.style.display = "none";

            }

        });

        noResults.style.display =
            found === 0 ? "block" : "none";

    });

});


// ALL ACTIVE BY DEFAULT

document
    .querySelector('[data-category="all"]')
    .classList.add("active");

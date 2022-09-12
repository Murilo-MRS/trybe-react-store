export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const resposta = await data.json();
  return resposta;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const resposta = await data.json();
  return resposta;
}

export async function getProductById(PRODUCT_ID) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const data = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
  const resposta = await data.json();
  return resposta;
}
// CREDITOS: funcao services da trybe do trybetunes para salvar no localstorage
const localReviews = 'commentsReviews';
if (!JSON.parse(localStorage.getItem(localReviews))) {
  localStorage.setItem(localReviews, JSON.stringify([]));
}

const readReviews = () => JSON.parse(localStorage.getItem(localReviews));

const saveReviews = (reviews) => localStorage
  .setItem(localReviews, JSON.stringify(reviews));

export const getReviews = () => {
  const reviewsSent = readReviews();
  return reviewsSent;
};

// const saveReview = (review) => localStorage.setItem(localReviews, JSON.stringify(review));
export function addReview(review) {
  if (review) {
    const reviewsSent = readReviews();
    return saveReviews([...reviewsSent, review]);
  }
}

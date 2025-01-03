
  const apiKey = "b82fbe2089d54559acbd35ecbd77a698";
  const today = new Date().toISOString().split("T")[0];
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
    
  // const BASE_URL =
  // process.env.NODE_ENV === "production"
  // ? 'www.newsexplorer.chickenkiller.com'
  // : "https://newsapi.org/v2/everything";

  // const BASE_URL = process.env.NODE_ENV === "production"
  //   ? 'www.newsexplorer.chickenkiller.com' :
  //   `https://newsapi.org/v2/everything?q=${keyword}&from=${lastWeek}&to=${today}&pageSize=100&apiKey=${apiKey}`;

// export function fetchNewsArticles(keyword) {
//   return fetch(BASE_URL)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to fetch news articles.");
//       }
//       return response.json();
//     })
//     .then((data) => data.articles)
//     .catch((error) => {
//       console.error("Fetch error:", error);
//       throw new Error("An error occurred while fetching news articles.");
//     });
// }

export function fetchNewsArticles(keyword) {
  return fetch(
    `${BASE_URL}?q=${keyword}&from=${lastWeek}&to=${today}&pageSize=100&apiKey=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch news articles.");
      }
      return response.json();
    })
    .then((data) => data.articles)
    .catch((error) => {
      console.error("Fetch error:", error);
      throw new Error("An error occurred while fetching news articles.");
    });
}
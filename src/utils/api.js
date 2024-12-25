export function getItems() {
    return new Promise((resolve, reject) => {
      resolve([
        {
          id: "65f7368dfb74bd6a92114c85",
          title: "Some news article",
          imageUrl: "https://example.com/article1",
          date: "11-11-2024",
          description: "some description",
          source: "cnn",
        },
        {
          id: "65f7371e7bce9e7d331b11a0",
          title: "another news article",
          imageUrl: "https://example.com/article2",
          date: "11-11-2024",
          description: "some description",
          source: "cnn",
        },
      ]);
    });
  }
  
  export function saveArticle(article) {
    return new Promise((resolve, reject) => {
      resolve({
        id: "65f7371e7bce9e7d331b11a0",
        url: article.url,
        title: article.title,
        imageUrl: article.imageUrl,
        date: article.date,
        description: article.description,
        source: article.source,
      });
    });
  }
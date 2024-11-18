const API_KEY = "Q9z7TNF0alcnzcwhzclUdpFs22yshypGYwuio34MlNTUrYTi"; // Replace with your Currents API key
const BASE_URL = "https://api.currentsapi.services/v1/latest-news";
let currentPage = 1;
let totalPages = 1;

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const countrySelect = document.getElementById("countrySelect");
const categorySelect = document.getElementById("categorySelect");
const newsContainer = document.getElementById("newsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageInfo = document.getElementById("pageInfo");

const fetchNews = async () => {
  const query = searchInput.value.trim();
  const country = countrySelect.value || "us"; // Default to US
  const category = categorySelect.value;

  const url = new URL(BASE_URL);
  url.searchParams.append("apiKey", API_KEY); // API Key
  url.searchParams.append("page", currentPage);
  url.searchParams.append("pageSize", 10);
  if (query) {
    url.searchParams.append("keywords", query); // Query search term
  }
  if (country) {
    url.searchParams.append("country", country); // Country filter
  }
  if (category) {
    url.searchParams.append("category", category); // Category filter
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "ok") {
      renderNews(data.news);
      totalPages = Math.ceil(data.totalResults / 10); // Adjust for pagination
      updatePagination();
    } else {
      newsContainer.innerHTML = `<p>${data.message}</p>`;
    }
  } catch (error) {
    newsContainer.innerHTML = `<p>Error fetching news: ${error.message}</p>`;
  }
};

const renderNews = (articles) => {
  newsContainer.innerHTML = "";
  if (articles.length === 0) {
    newsContainer.innerHTML =
      "<p>No news articles found. Please try different filters.</p>";
    return;
  }

  articles.forEach((article) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";

    const imageUrl =
      article.image || "https://via.placeholder.com/300x180?text=No+Image"; // Default image

    newsItem.innerHTML = `
      <img src="${imageUrl}" alt="News Image">
      <div class="news-item-content">
        <h2>${article.title}</h2>
        <p>${article.description || "No description available."}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      </div>
    `;
    newsContainer.appendChild(newsItem);
  });
};

const updatePagination = () => {
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
};

searchBtn.addEventListener("click", () => {
  currentPage = 1;
  fetchNews();
});

countrySelect.addEventListener("change", () => {
  currentPage = 1;
  fetchNews();
});

categorySelect.addEventListener("change", () => {
  currentPage = 1;
  fetchNews();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchNews();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchNews();
  }
});

// Initial fetch
fetchNews();

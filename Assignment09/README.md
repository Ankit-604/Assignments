# News Website

A responsive news website showcasing top headlines from around the world. Users can search for news, filter by country and category, and navigate through paginated results.

## Features

- **Dynamic News Content:** Fetches real-time news headlines using the [NewsAPI](https://newsapi.org/).
- **Search Functionality:** Allows users to search for specific news topics.
- **Filter Options:** News can be filtered by country and category.
- **Pagination:** Supports seamless navigation between pages.
- **Responsive Design:** Optimized for desktop and mobile devices.

## Live Demo

Check out the live demo [here](https://assignments-k33y.vercel.app/) 🔗

> **Note:** The NewsAPI key is configured to work **only locally**. If you wish to host or deploy this project, you need to replace the existing API key with your own. Register for free at [NewsAPI](https://newsapi.org/) to obtain an API key.

## How to Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Ankit-604/Assignments/tree/main/Assignment09
   cd news-website
   ```

2. **Setup API Key:**

   - Obtain an API key from [NewsAPI](https://newsapi.org/).
   - Open `script.js` and replace the existing API key with your own:

     ```javascript
     const API_KEY = "your-api-key";
     ```

3. **Open in Browser:**

   - Open the `index.html` file in any modern web browser.

4. **View Locally:**

   - The news website will display real-time news articles fetched using the API.

## Technologies Used

- **HTML5** for the structure.
- **CSS3** for styling.
- **JavaScript** for fetching and displaying the news.
- **NewsAPI** for real-time news data.

## Project Screenshots

![Screenshot 1](Sample/sample1.png)
![Screenshot 2](Sample/sample2.png)

## Future Enhancements

- Add user authentication for personalized news preferences.
- Include a dark mode option for better accessibility.
- Extend filter options to include more countries and categories.

## Credits

- Design and Development: **Ankit Kumar Sharma**
- Powered by: [NewsAPI](https://newsapi.org/)

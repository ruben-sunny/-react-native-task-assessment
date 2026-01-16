# React Posts App

A simple React application that fetches posts from an API, displays them as styled cards, and allows users to search posts by title. The search query is saved locally and restored on reload.

---

## Features

* Fetch and display posts
* Search posts by title
* Search on Enter key
* Persist search text using local storage
* Clean card-based UI with hover effects
* Responsive layout

---

## Tech Stack

* React (Hooks)
* CSS (custom styling)
* JavaScript (ES6+)

---

## Project Structure

```
src/
├── components/
│   └── PostCard.jsx
│   └── PostCard.css
├── screens/
│   └── HomeScreen.jsx
├── services/
│   └── api.js
├── utils/
│   └── storage.js
└── App.js
```

---

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run the app

```
npm start
```

The app will be available at:

```
http://localhost:3000
```

---

## Search Behavior

* Type a title in the search bar
* Press Enter to filter posts
* Search text is saved and restored on page reload

---

## Styling

* Page background is set globally in index.css
* Post cards are styled in PostCard.css
* Hover effects improve interactivity

---

## API

Posts are fetched using a service function:

* fetchPosts() – retrieves post data from the API

You can replace the API endpoint in services/api.js if needed.

---

## Future Improvements

* Dark mode
* Debounced search
* Pagination
* Better error handling

---

## License

This project is open source and available under the MIT License.

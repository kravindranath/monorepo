# spa-vite

# Vite + React Project

This is a simple React project using Vite for fast development and optimized builds.

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Start Development Server

```sh
npm run dev
```

_Default port: `5173`_

### 3️⃣ Change Server Port (Optional)

Modify `vite.config.js`:

```js
server: {
  port: 9000;
}
```

Restart server:

```sh
npm run dev
```

_Access at: `http://localhost:9000`_

### 4️⃣ Build for Production

```sh
npm run build
```

### 5️⃣ Preview Production Build

```sh
npm run preview
npm run dev
npm run build
npm run dev:sit
npm run dev:nft
npm run dev:uat
```

## 📂 Project Structure

```
my-app/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── vite.config.js
│── package.json
```

## 📜 License

This project is open-source under the Apache-2.0 License.

# 🛍️ Product Filter & Shopping Cart Application

A React-based product listing application with category filtering, search functionality, and a fully functional shopping cart built using **Redux Toolkit**.

This project was created as part of an assignment to demonstrate:

- State management using React + Redux Toolkit
- Product filtering by category
- Search functionality
- Cart management with quantity updates
- Responsive UI and clean component structure

---

## 🚀 Features

### 🔍 Product List

- Displays all products with their **image, name, category, and price**.
- Dynamic filtering based on:
  - Category (`All`, `Electronics`, `Books`, `Clothing`)
  - Search input

### 🧰 Filters

- Category filter (toggle behavior)
- Search bar for real-time filtering
- Clear button to reset filters

### 🛒 Shopping Cart

- Add items to cart
- Shows **quantity**, **price**, and **total price**
- Increase / decrease item quantity
- Remove items from cart
- Clear entire cart
- Right-side sliding **Cart Drawer** with overlay
- Cart count displayed in Navbar

### 🎛️ State Management

- Cart state handled using **Redux Toolkit**
- Product state handled using **React useState**
- Selectors for:
  - Total cart quantity
  - Total cart price
  - Check if item is already in cart

---

## 🛠️ Tech Stack

- **React**
- **Redux Toolkit**
- **React Redux**
- **Tailwind CSS**
- **Vite**
- **React Icons**

---

## 📦 Installation & Setup

### 1. Clone the repository

     git clone https://github.com/BijetaSah/learnline-edustation-assignment.git

### 2. Install dependencies

    npm install

### 3. Start the development server

    npm run dev

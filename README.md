# 🍬 Sweet Shop Testing Project

## Project Overview

This project is focused on testing the functionality of the **Sweet Shop** website using **Cypress**. Below is the detailed documentation and known issues encountered during testing.

---

## 🪄 How to Use This Repository

## ✨ Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (comes with Node.js)

## ✨ Steps

1. Clone the repository: https://github.com/viktorijabrun/Sweetshop_test.git
2. Install dependencies: `npm install`
3. Run cypress: `npm run cypress-ui`

---

## 📢 Known Issues

### Sweets Page:

- Wham Bars product image is not visible.

### About Page:

- The page is unavailable when accessed from the Basket page.

### Login Page:

- Social media icons are not linked to any functionality.
- Users can login with random credentials without registration.

### Basket Page:

- Standard shipping returns incorrect price or `NaN`.
- After clicking **"Continue to Checkout"**, the page resets without navigating.
- The promo code does not provide any feedback message.

# 🍬 Sweet Shop Testing Project

## Project Overview

This project is focused on testing the functionality of the **Sweet Shop** website using **Cypress**. Below is the detailed documentation of instructions how to use repository, known issues encountered during testing and test cases.

---

## 🪄 How to Use This Repository

## ✨ Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (comes with Node.js)

## ✨ Steps

1. Clone the repository: https://github.com/viktorijabrun/Sweetshop_test.git
2. Install dependencies: `npm install`
3. Open cypress: `npm run cypress-ui` or run cypress in terminal: `cypress-cli`

---

## 📢 Known Issues

### Sweets Page:

- Wham Bars product image is not visible.

### About Page:

- The page is unavailable when accessed from the Basket page.

### Login Page:

- Social media icons are not linked to any functionality.
- Users can login with random credentials without registration.

### Your page

- Welcome message always brings same email 'test@user.com', doesn't match with email address that you entered in login page.

### Basket Page:

- Standard shipping returns incorrect price or `NaN`.
- After clicking **"Continue to Checkout"**, the page resets without navigating.
- The promo code does not provide any feedback message.

# 📄Test cases

## Test Case 1: Home Page

### 1.1 Verify that page content is visible:

- **1.1.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **1.1.2** Check the page has title "Welcome to the sweet shop!"
- **1.1.3** Check if navigation bar with "Sweet shop", "Sweets", "About", "Login", "Basket" is visible
- **1.1.4** Check the advertisement image is visible
- **1.1.5** Check if products are visible
- **1.1.6** Check the page has the footer "Sweet Shop Project 2018"

## Test Case 2: Sweets Page

### 2.1 Verify that page content is visible:

- **2.1.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **2.1.2** Click on "Sweets" button on navigation bar
- **2.1.3** Verify user is navigated to "Sweets" page successfully
- **2.1.4** Check the page has title "Browse sweets"
- **2.1.5** Check if all products list is visible
- **2.1.6** Verify that first product detail is visible: image, title, description, price
- **2.1.7** Verify that first product "Add to Basket" button is visible

## Test Case 3: About Page

### 3.1 Verify that page content is visible:

- **3.1.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **3.1.2** Click on "About" button on navigation bar
- **3.1.4** Check the page has title 'Sweet Shop Project'
- **3.1.5** Check the page has description
- **3.1.6** Check the page has footer "Sweet Shop Project 2018"

## Test Case 4: Login Page

### 4.1 Verify that page content is visible:

- **4.1.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **4.1.2** Click on "Login" button on navigation bar
- **4.1.3** Check page has 'Login' title, description
- **4.1.4** Check the page has 'Email address' and 'Password' text boxes
- **4.1.5** Check if the "Login" button is visible
- **4.1.6** Check if social media quick login images are visible
- **4.1.7** Check if footer "Sweet Shop Project 2018" is visible

### 4.2 Successful Login Scenario:

- **4.2.1** Enter correct email address and password
- **4.2.2** Click 'Login' button
- **4.2.3** Verify that "Your Account" is visible

### 4.3 Unsuccessful Login Scenario:

- **4.3.1** Leave empty email address and password inputs and click 'Login' button
- **4.3.2** Verify that error message appears next to email address input
- **4.3.3** Verify error message appears next to password input

## Test Case 5: Your Account Page

### 5.1 Verify that page content is visible:

- **5.1.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **5.1.2** Click on "Login" button on navigation bar
- **5.1.3** Enter correct email address and password
- **5.1.4** Click 'Login' button
- **5.1.5** Verify that "Your Account" is visible
- **5.1.6** Verify that "Previous Orders" is visible
- **5.1.7** Verify that previous orders table is visible
- **5.1.8** Verify that title "Item Order Breakdown" is visible
- **5.1.9** Verify that chart is visible
- **5.1.10** Verify that "Your Basket" is visible
- **5.1.11** Verify that number with item count is visible
- **5.1.12** Check if footer "Sweet Shop Project 2018" is visible

### 5.2 Added Item Displayed at 'Your Basket':

- **5.2.1** Navigate to Sweets page
- **5.2.2** Choose first product and add to basket
- **5.2.3** Verify that the item is added to the cart and the cart icon is updated
- **5.2.4** Click on "Login" button on navigation bar
- **5.2.5** Login to your account
- **5.2.6** Verify that the item is in the basket

## Test Case 6: Basket Page

### 6.1 Correct Item Count:

- **6.1.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **6.1.2** Choose first two products and click "Add to basket"
- **6.1.3** Verify that the item is added to the cart and the cart icon is updated
- **6.1.4** Click on "Basket" button on navigation bar
- **6.1.5** Verify that Basket page is displayed
- **6.1.6** Verify that product count matches 2

### 6.2 Total Price is Correct:

- **6.2.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **6.2.2** Choose first two products and click "Add to basket"
- **6.2.3** Verify that the item is added to the cart and the cart icon is updated
- **6.2.4** Click on "Basket" button on navigation bar
- **6.2.5** Verify that Basket page is displayed
- **6.2.6** Verify that total price is correct

### 6.3 Should Retain Items Added to the Basket While Navigating the Page:

- **6.3.1** Add item to basket
- **6.3.2** Navigate through pages
- **6.3.3** Check if basket count matches expected

### 6.4 Should Add the Selected Item to the Basket with the Correct Name:

- **6.4.1** Navigate to Sweets page
- **6.4.2** Choose first product and add to basket
- **6.4.3** Verify that the item is added to the cart and the cart icon is updated
- **6.4.4** Click on "Basket" button on navigation bar
- **6.4.5** Verify that the item is in the basket

### 6.5 Successful Product Delete from Basket:

- **6.5.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **6.5.2** Choose first product and click "Add to basket"
- **6.5.3** Click on "Basket" button on navigation bar
- **6.5.4** Verify that Basket page is displayed
- **6.5.5** Click on "Delete item"
- **6.5.6** Verify that product is removed from the cart

### 6.6 Successfully Remove All Products:

- **6.6.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **6.6.2** Add two first products to basket by clicking "Add to basket"
- **6.6.3** Click on "Basket" button on navigation bar
- **6.6.4** Verify that Basket page is displayed
- **6.6.5** Click on "Empty Basket"
- **6.6.6** Verify that products are removed from the cart

### 6.7 Successful Payment Scenario:

- **6.7.1** Navigate to [https://sweetshop.netlify.app/](https://sweetshop.netlify.app/)
- **6.7.2** Choose first product and click "Add to basket"
- **6.7.3** Click on "Basket" button on navigation bar
- **6.7.4** Verify that Basket page is displayed
- **6.7.5** Enter address details: "First Name", "Last Name", "Email", "Address", "Address 2", "Country", "City", "Zip"
- **6.7.6** Enter payment details: "Name on card", "Credit card number", "Expiration", "CCV"
- **6.7.7** Click on "Continue to checkout" button

### 6.8 Unsuccessful Payment Scenario:

- **6.8.1** Add one product to basket and navigate to basket
- **6.8.2** Leave all inputs empty and click "Continue to checkout"
- **6.8.3** Verify that messages indicating invalid feedback are visible next to the required inputs

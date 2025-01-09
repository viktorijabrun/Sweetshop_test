# Sweet Shop Testing Project

## Project Overview

This project is focused on testing the functionality of the **Sweet Shop** website using **Cypress**. Below is the detailed documentation and known issues encountered during testing.

---

## Tools & Technologies

- **Cypress**: For automated end-to-end testing.
- **HTML/CSS/JavaScript**: Frontend technologies for the Sweet Shop website.

---

## How to Use This Repository

1. Clone the repository.
2. Set up Cypress by following the [official documentation](https://docs.cypress.io/).
3. Run the test cases using `npx cypress open` or `npx cypress run`.
4. Verify test results and address any issues identified in the "Known Issues" section.

---

## Known Issues

### Sweets Page:

- Wham Bars product image is not visible.

### About Page:

- The page is unavailable when accessed from the Basket page.

### Login Page:

- Social media icons are not linked to any functionality.
- Users can log in with random credentials without registration.

### Basket Page:

- Standard shipping returns incorrect price or `NaN`.
- After clicking **"Continue to Checkout"**, the page resets without navigating.
- The promo code does not provide any feedback message.

---

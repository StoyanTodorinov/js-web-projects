# Armory

*This is a simple catalog for everything related to guns, knives, military, survival, camping etc.*

**Front-end:**
React.js, html, css and google fonts.

**Back-end:**
Node.js(Express.js) and MongoDB(Mongoose).

**How to make it run:**
Navigate to the project location, go to api folder, then open a terminal and write down `npm install`.
Once you have all the dependencies start the program by typing `npm start`.
Repeat the same process in the armory folder, a window in your browser should open on port 3000.
In case that does not happen open manually the following address http://localhost:3000/
*(Make sure you have started MongoDB)*

**Functionality:**
 - Non-authenticated users can only browse the home/register/login views and the products visible on the home page
   (without seeing the comments).
 - Authenticated users can see all the application provides (additional navigation, products, categories and comments).
   Authenticated users can also create products, post comments(edit and remove them), update profile and add products to favorites.
 - Admin user can delete or edit any commentary as well as create new categories and edit existing products.

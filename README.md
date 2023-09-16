# MRD Academy

Get all the up to date professional courses from one place

## Features

1. You can select and add courses to your cart
2. You can see the total price of the courses you have selected. It will be updated when you add courses from your cart.
3. You can see the remaining credits and available credits. When you exceed the available credits, you will not be able to add more courses to your cart and an alert will be shown.

## How states are managed in this project

I have used two states in this project.

```javascript
const [allCourses, setAllCourses] = useState([]);
const [selectedCourses, setSelectedCourses] = useState([]);
```

1. `allCourses`: This state is used to store all the courses that are fetched from the API.

2. `selectedCourses`: This state is used to store the courses that are selected by the user.

Besides these two states, I have used a variable called `totalCredits` to store the total credits of the user and a variable called `remainingCredits` to store the available credits of the user.

I also use `totalCost` variable to store the total cost of the courses that are selected by the user and `handleAddToCart` function to handle adding courses to the cart.

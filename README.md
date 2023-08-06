# Expenses-Tracking
Expenses Tracking React Native

Technology
----------
- React-Native
- Typescript
- Redux-Toolkit

Screens
--------
- Login Screen: The opening screen of the application, when the page goes up in the background, the user pool is get from the storage for the use of the application,
On the name field page, the button is disabled when the field is empty.

- Home Screen: On the home screen you see the list of expenses in the information and it exists, if there is no indication to the user that the list is empty because there is no information or because of a filter, if a filter is made the button to clear the filter appears at the top of the list,
At the top of the page is the total amount of expenses.
If the user enters the application a second time, the list of his expenses will be saved and displayed.

- Expense Modal: The component of the model is generic and presents three modes of
create, edit (clicking on one of the items in the list) and filter.

- Profile: There is a logout button on the profile page, I didn't have time to limit the number of items.

- Bonus:
  
React Navigation: I used the library to manage the transition between pages and to add the tabs on the main page

Tests: I didn't have time to take care of the tests


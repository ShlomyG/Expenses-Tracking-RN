# Expenses-Tracking
Expenses Tracking React Native

Technology
----------
- React-Native
- Typescript
- Redux-Toolkit

Screens
--------
Login Screen:

- The opening screen of the application
- The "username" field button is disabled if the field is empty.
- on backgroung the app get users pool data from storage for login check if the user exist.

Home Screen:

- The home screen shows a list of expenses and related information.
- If the list is empty, there is an indication for the user if this is filter or expenses list is empty.
- When a filter is applied, a "Clear Filter" button appears at the top of the list.
- The total amount of expenses is displayed at the top of the page.
- The user's expense list is saved and displayed on subsequent visits.

Expense Modal:

- The modal component has three modes: Create, Edit (when clicking on an item), and Filter.
- in add and edit mode, the button is disabled when user not fill all the fields

Profile:

- The profile page includes a logout button.
- The number of items is not limited at this time.

Bonus Features:

React Navigation:
Utilized the React Navigation library to manage page transitions and implement tabs on the main page.

Tests:
Test implementation is pending due to time constraints.



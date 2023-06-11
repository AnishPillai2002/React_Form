# React Form Project

This is a React project that demonstrates a simple form submission and display of submitted details using the FormComponent and DetailsComponent.

## Components

### FormComponent

The `FormComponent` is a React component that renders a form with input fields for collecting user's name, address, and email. It uses the `useState` hook for managing form state and input handling. Form validation is implemented to ensure all fields are filled before submission. On successful submission, the form data is passed to the parent component using the `onSubmit` prop.

### DetailsComponent

The `DetailsComponent` is a React component that displays the submitted details in a visually appealing format. It receives the name, address, and email as props and renders them in a styled card-like layout. It also includes a "Go Back to Form" button that allows the user to navigate back to the `FormComponent`.

## Concepts Used

- React Components: The project utilizes the concept of modular components for better code organization and reusability.

- State Management: The `useState` hook is used to manage and update the form state, ensuring real-time synchronization between form inputs and component state.

- Form Handling: Form input fields are controlled components, binding their values to state and updating state on input changes.

- Form Validation: The code implements simple form validation to check for empty fields before submission, providing error messages using toast messages from the `react-hot-toast` library.

- Conditional Rendering: The project employs conditional rendering to display different components based on the current state. It shows the `FormComponent` initially and switches to the `DetailsComponent` after form submission.

- React Router: The `BrowserRouter` from the `react-router-dom` library is used for client-side routing. It enables navigation between the `FormComponent` and `DetailsComponent` by defining different routes for each component.

Feel free to explore the project and its components to understand the implementation of these concepts in action.

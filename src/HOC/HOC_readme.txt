🧠 Today: Hooks vs HOCs

Modern React (with hooks) often replaces HOCs.

// Instead of HOC
const withUser = (Component) => (props) => {
  const user = useUser();
  return <Component {...props} user={user} />;
};

// Use hook directly
const MyComponent = () => {
  const user = useUser();
  return <div>Hello, {user.name}</div>;
};


✅ Hooks are now the preferred pattern, but HOCs still make sense in:

Large codebases that already use them

When wrapping class components

Libraries like Redux or React Router that still support HOCs

🧾 Summary
Feature	Explanation
What	Function that wraps a component and adds logic
Why	Reuse logic, avoid duplication, separate concerns
When to use	For shared behavior across components
Modern alternative	React Hooks (preferred in function components)
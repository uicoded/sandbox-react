Good
```js
function Form() {
  const [firstName, setFirstName] = useState('Bob');
  const [lastName, setLastName] = useState('Dylan');
  // ✅ Good: calculated during rendering
  const fullName = firstName + ' ' + lastName;
  // ...
}
```

Bad:
```js
function Form() {
  const [firstName, setFirstName] = useState('Bob');
  const [lastName, setLastName] = useState('Dylan');

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);
  // ...
}
```

Summary: 
When something can be calculated from the existing props or state, don’t put it in state.
Instead, calculate it during rendering.

Source:
https://react.dev/learn/you-might-not-need-an-effect#updating-state-based-on-props-or-state


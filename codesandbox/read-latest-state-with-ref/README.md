# Read the latest state 

source: https://react.dev/learn/referencing-values-with-refs#read-the-latest-state

State works like a [snapshot](https://react.dev/learn/state-as-a-snapshot),
so you can’t read the latest state from an asynchronous operation like a timeout.
However, you can keep the latest input text in a ref. 
A ref is mutable, so you can read the current property at any time. 
Since the current text is also used for rendering, in this example
you will need both a state variable (for rendering), and a ref 
(to read it in the timeout). You will need to update the current ref value manually.

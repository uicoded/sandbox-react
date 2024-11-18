## Codesandbox

### Background

If you noticed, having each example to have own `package.json` is very expensive
Each example is over 250MB.

### Goals

1. Having your code in GitHub and ability to run aside from Codesandbox

### Options

1. You can create a github repository from each example on codesanbox this however
starts new repo project (Sandbox vs Devbox) which will be limited on free account.

2. You can create single repository `react-ts` for example and use branches to load 
examples. This is cool but not obvious when running locally. For example comparing files 
from different branches. This however solves the size issue.

3. 👉 (selected) Load the example into the shell. Something I think EpicReact does from one side 
or other. You can do it manually. This will enable to have single repository with 
files as examples and cut down on size.

4. Just depend on CodeSandbox.

Disadvantages: You want to have own files. Own examples. Own IDE and Own AI assistant.

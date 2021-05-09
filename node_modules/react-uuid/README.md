# React Uuid

A UUID (Universal Unique Identifier) is a 128-bit number used to uniquely identify some object or entity on the Internet. Depending on the specific mechanisms used, a UUID is either guaranteed to be different or is, at least, extremely likely to be different from any other UUID generated until 3400 A.D. 
In its authoritative textual representation, the 16 octets of a UUID are represented as 32 hexadecimal (base-16) digits, displayed in 5 groups separated by hyphens, in the form 8-4-4-4-12 for a total of 36 characters (32 alphanumeric characters and 4 hyphens).

React's power lies in its robust reconciliation process. When we use JSX to create or update components, React creates its own virtual DOM. It compares this virtual DOM to the actual DOM in the browser, calculating the least number of changes necessary to update the actual DOM to match the virtual DOM. 
Sometimes we use multiple instances of the same component in the same spot. Such as the multiple instances of a 'TodoItem' component inside a 'TodoList' component. When this occurs, unique keys are very important, because they allow React to differentiate between these similar components, and hone in on any that may need to be updated individually, instead of re-rendering them all.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

A React (or any Javascript framework) project that requires components to be marked with a uuid, to enable the framework to mutate the correct component. 

### Installing

From the command line (in the root of your project), simply type:

```
npm i react-uuid
```

And then can be used inside the project like:

```
import React from 'react'
import uuid from 'react-uuid'

const array = ['one', 'two', 'three']

export const LineItem = item => <li key={uuid()}>{item}</li>

export const List = () => array.map(item => <LineItem item={item} />)
```

In the above example, the output would be 3 ```LineItem``` components being rendered, with each ```LineItem``` supplied a universal unique identifier, which when required, will allow React to identify which ```LineItem``` component should be mutated.

## Built With

- [Javacript](javascript) - JavaScript (JS) is a lightweight interpreted or just-in-time compiled programming language with first-class functions.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/RickBr0wn/e9cc0f06cbd452186bcf245c072e4137) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **Rick Brown** - _Initial work_ - [RickBr0wn](https://gist.github.com/RickBr0wn)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# OTP Input JS

This project is a simple library for creating OTP (One Time Password) input fields in a web page. It is written in TypeScript and JavaScript, and can be used in any project that supports these languages.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. If you don't have them, you can download and install from [here](https://nodejs.org/en/download/).

### Installing

Clone the repository to your local machine:

```bash
npm install otp-input-js
```

## Usage

To use this library in your project, you need to import it and then initialize it with an HTML element and an options object.

Here is a basic example:

```javascript
import otpInputJS from 'otp-input-js'

const el = document.getElementById('test')
new otpInputJS(el, {
  inputsCount: 4,
  onChange: (value) => {
    console.log(value)
  },
})
```

In the options object, `inputsCount` is the number of OTP input fields you want to create, and `onChange` is a callback function that will be called whenever the value of the OTP fields changes.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
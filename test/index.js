import otpInputJS from '../src/main'

const el = document.getElementById('test')
new otpInputJS(el, {
  onChange: (value) => {
    console.log(value)
  },
})

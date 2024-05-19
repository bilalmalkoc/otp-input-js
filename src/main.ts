interface OTPInputJSOptions {
  inputsCount: number
  onChange?: (value: number) => void
}

class otpInputJS {
  inputsCount: number
  inputs: HTMLInputElement[]
  onChange?: (value: number) => void

  /**
   * otpInput - Create OTP input fields
   *
   * @param {HTMLElement} element - The HTML element to attach the OTP inputs to.
   * @param {OTPInputJSOptions} options - The options for the OTP input fields.
   */
  constructor(element: HTMLElement, options: OTPInputJSOptions) {
    if (!element) {
      throw new Error(
        'Invalid arguments: element and inputsCount are required.'
      )
    }

    const defaultOptions: OTPInputJSOptions = {
      inputsCount: 4,
      onChange: undefined,
    }

    const { inputsCount, onChange } = { ...defaultOptions, ...options }

    this.inputsCount = inputsCount
    this.onChange = onChange

    element.innerHTML = ''

    const container = document.createElement('div')

    this.inputs = []

    for (let i = 0; i < inputsCount; i++) {
      const input = document.createElement('input')
      input.type = 'number'
      this.inputs.push(input)

      input.addEventListener('input', (e: Event) => {
        const target = e.target as HTMLInputElement

        if (target.value.length === 1 && i < inputsCount - 1) {
          ;(container.children[i + 1] as HTMLElement).focus()
        }

        if (onChange && typeof onChange === 'function') {
          const otpValue = this.getValue()
          onChange(otpValue)
        }
      })

      input.addEventListener('keydown', (e: KeyboardEvent) => {
        const target = e.target as HTMLInputElement

        if (e.key === 'Backspace' && i > 0) {
          target.value = ''
          setTimeout(() => {
            ;(container.children[i - 1] as HTMLInputElement).focus()
          })

          if (onChange && typeof onChange === 'function') {
            const otpValue = this.getValue()
            onChange(otpValue)
          }
        }
      })

      container.appendChild(input)
    }

    element.appendChild(container)
  }

  getValue() {
    const count = this.inputs.map((input) => input.value).join('')
    return Number(count)
  }
}

export default otpInputJS

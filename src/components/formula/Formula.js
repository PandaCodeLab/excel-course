import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }

  toHTML() { // html
    return `      
      <div class="info">fx</div>
      <input class="input" contenteditable spellcheck="false" type="text" />
    `
  }

  onInput(e) {
    console.log(this.$root);
    console.log('Formula: onInput ', e.target.value)
  }
}

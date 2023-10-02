 function calculateTriangleArea() {
    // triangle base value
    const basefield = document.getElementById('triangle-base')
    const baseValueText = basefield.value
    const base = parseFloat(baseValueText)

    // get triangle height value

    const heightfield = document.getElementById('triangle-height')
    const heightValueText = heightfield.value
    const height = parseFloat(heightValueText)

    const area = 0.5 * base * height

    // show triangle area
    const areaSpan = document.getElementById('triangle-area')
    areaSpan.innerText = area
    basefield.value = ''
    heightfield.value = ''
 }
// rect
 function calculateRectangleArea() {
    const widthFild = document.getElementById('reactangle-width')
    const widthFildtxtValue = widthFild.value
    const reactangleHeight = parseFloat(widthFildtxtValue)

    // reactangla length fild

    const lengthFild = document.getElementById('reactangle-legth')
    const lengthFildValueText = lengthFild.value
    const reactanglaLength = parseFloat(lengthFildValueText)

    const reactangla = reactangleHeight * reactanglaLength

    const recangleSpan = document.getElementById('rectangle-area')
    recangleSpan.innerText = reactangla

    widthFild.value = ''
    lengthFild.value = ''
 }

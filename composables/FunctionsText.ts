export function breakText(text:string, textLength:number) {
    if (text.length > textLength) {
        return text.substring(0, textLength) + '...';
    } else {
        return text
    }
}

export function getFontSize(text: string|any, fontSize:number, textLength:number) {
    console.log(text, textLength);
    
    if (text.length > textLength) {
        return fontSize - (0.0211 * (text.length*fontSize))
    } else {
        return fontSize
    }
}

export function onlyNumbers(text) {
    if (typeof text === 'string') {
        /* return text.replace(/(\d+)(((.|,)\d+)+)?/g, ''); */
    } else {
        return text;
    }
}
export function formatNumber(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}
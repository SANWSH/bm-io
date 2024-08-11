export function copyContentToBuffer(event) {
  event.clipboardData.setData('text/plain', event.target.textContent);
}
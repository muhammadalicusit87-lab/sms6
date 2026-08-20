export const printDocument = (title = 'Horizon Academy document') => {
  const previous = document.title
  document.title = title
  window.print()
  window.setTimeout(() => { document.title = previous }, 500)
}
export const copyText = async (text: string) => {
  if (!navigator && !document) return
  const { clipboard } = navigator
  if (clipboard) {
    clipboard.writeText(text).catch((error) => {
      console.error(error)
    })
  }
  document.execCommand('copy', true, text)
}

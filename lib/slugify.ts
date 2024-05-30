const slugify = (input: string, prefix = '') => {
  if (prefix !== '') {
    return (
      prefix +
      '/' +
      input
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')
        .replace(/[åÅäÄ]/g, 'a')
        .replace(/[öÖ]/g, 'o')
        .slice(0, 200)
    )
  }
  return input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')
    .replace(/[åÅäÄ]/g, 'a')
    .replace(/[öÖ]/g, 'o')
    .slice(0, 200)
}
export default slugify

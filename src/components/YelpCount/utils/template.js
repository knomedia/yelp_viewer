
function template(count, template) {
  const NEEDLE = '%%count%%';
  template = template || ('' + NEEDLE)
  count = count || 0
  let output = template.replace(NEEDLE, count)
  return output
}

module.exports = template

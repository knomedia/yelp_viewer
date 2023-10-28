function ratings(strNum) {
  let num = parseFloat(strNum, 10);
  let full = Math.floor(num)
  let partial = !!(num - full)
  return [full, partial]
}
module.exports = ratings

import fpReduce from 'lodash/fp/reduce'

const reduce = fpReduce.convert({ cap: false })

const unflatten = (delimiter) => reduce((res = {}, value, key) => {
  const firstDelim = key.indexOf(delimiter)
  if (firstDelim > 0) {
    const parentKey = key.substring(0, firstDelim)
    const childKey = key.substr(firstDelim + 1)
    return {
      ...res,
      [parentKey]: unflatten(delimiter)(res[parentKey])({ [childKey]: value })
    }
  }
  return {
    ...res,
    [key]: value
  }
})

export default unflatten

export const formatPrice = (number) => {
  //number is the lowest unit of the currency (=cent)
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100)
}

export const getUniqueValues = (products, prop) => {
  let data = []
  if (prop === "color") {
    data = products.map((p) => {
      return p.colors
    })
    data = data.flat()
  } else {
    data = products.map((p) => {
      return p[prop]
    })
  }
  data = data.sort((a, b) => a.localeCompare(b))
  // Set is not an array!! {set}!
  return ["all", ...new Set(data)]
}

export const capitalize_js = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

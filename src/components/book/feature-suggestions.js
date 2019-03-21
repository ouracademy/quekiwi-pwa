const rules = {
  time: { unique: true },
  color: { unique: true },
  any: { unique: false },
}

const allSuggestions = [
  { id: 1, name: "Usado", type: "time" },
  { id: 2, name: "Nuevo", type: "time" },
  { id: 3, name: "Hoja blanca", type: "color" },
  { id: 4, name: "Hoja bulqui", type: "color" },
  { id: 5, name: "Tapa dura", type: "any" },
]

export const suggestionsBasedCurrentFeatures = features => {
  return features.reduce((prev, feature) => {
    if (rules[feature.type]["unique"]) {
      return prev.filter(sug => sug.type !== feature.type)
    }
    return prev
  }, allSuggestions)
}

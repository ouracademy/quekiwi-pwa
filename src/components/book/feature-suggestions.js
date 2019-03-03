const rules = {
  time: { unique: true },
  color: { unique: true },
  any: { unique: false },
}
const allSuggestions = [
  { name: "Usado", type: "time" },
  { name: "Nuevo", type: "time" },
  { name: "Hoja blanca", type: "color" },
  { name: "Hoja bulqui", type: "color" },
  { name: "Tapa dura", type: "any" },
]

export const suggestionsBasedCurrentFeatures = features => {
  return features.reduce((prev, feature) => {
    if (rules[feature.type]["unique"]) {
      return prev.filter(sug => sug.type != feature.type)
    }
    return prev
  }, allSuggestions)
}

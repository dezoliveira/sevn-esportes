export const colors = (i, key) => {
  let dictionary = [
    {away: "#FF0000", home: "#0038FF"},
    {away: "#FF9900", home: "#72CB00"},
    {away: "#00C797", home: "#0088D4"},
    {away: "#AD00FF", home: "#FF00D64D"}
  ]

  return dictionary[i][key]

}
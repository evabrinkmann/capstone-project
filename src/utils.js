export function saveProfilesToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}
export function loadProfilesFromLocal(name) {
  const jsonString = localStorage.getItem(name)
  const data = JSON.parse(jsonString)
  return data
}

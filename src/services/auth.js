export const TOKEN_KEY = '@todolist-Token'
export const USER = '@todolist-User'
export const ID = '@todolist-Id'
export const isAuthenticated = () => (
  localStorage.getItem(TOKEN_KEY) !== null &&
    localStorage.getItem(USER) !== null &&
    localStorage.getItem(ID) !== null
)
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const getUser = () => localStorage.getItem(USER)
export const getId = () => localStorage.getItem(ID)
export const login = (token, user, id) => {
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(USER, user)
  localStorage.setItem(ID, id)
}
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER)
  localStorage.removeItem(ID)
}

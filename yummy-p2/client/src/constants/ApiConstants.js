const API_HOSTNAME = '//localhost:3008'

export const SIGNUP_URL = `${API_HOSTNAME}/user/signup`
export const LOGIN_URL = `${API_HOSTNAME}/user/login`
export const USERS_URL = `${API_HOSTNAME}/users`
export const USER_BY_ID_URL = `${API_HOSTNAME}/user/:id`
export const FOLLOW_URL = `${API_HOSTNAME}/user/follow`
export const UNFOLLOW_URL = `${API_HOSTNAME}/user/unfollow`

export const posterUrl = poster => poster && `${API_HOSTNAME}/uploads/posters/${poster}`
export const DISHES_URL = `${API_HOSTNAME}/dishes`
export const COMMENTS_URL = `${API_HOSTNAME}/comments`
export const NEW_COMMENT_URL = `${API_HOSTNAME}/comment`

export const avatarUrl = avatar => avatar
  ? `${API_HOSTNAME}/uploads/avatars/${avatar}`
  : `${API_HOSTNAME}/uploads/avatars/default-avatar.png`

export const UPDATE_AVATAR_URL = `${API_HOSTNAME}/avatar`

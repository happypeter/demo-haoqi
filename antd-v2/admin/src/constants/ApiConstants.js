const API_HOSTNAME = '//localhost:3008'

export const posterUrl = poster => poster && `${API_HOSTNAME}/uploads/posters/${poster}`
export const DISHES_URL = `${API_HOSTNAME}/dishes`
export const DELETE_DISH_URL = `${API_HOSTNAME}/dish/:id`
export const NEW_DISH_URL = `${API_HOSTNAME}/dish`

export const uploadAction = {
  action: `${API_HOSTNAME}/dish/poster`,
  name: 'poster'
}

export const uploadProps = (handleSuccess) => ({
  listType: 'picture',
  onSuccess: handleSuccess
})

import { createSelector } from 'reselect'
import { getDishesById } from './dishSelectors'
export const getAddedIds = state => state.cart.addedIds

export const getIsCartEmpty = createSelector(
  getAddedIds,
  addedIds => addedIds.length === 0
)

export const getCartCount = createSelector(
  getAddedIds,
  addedIds => addedIds.length
)

export const getQuantityById = state => state.cart.quantityById

export const getCartDishes = createSelector(
  getAddedIds,
  getDishesById,
  getQuantityById,
  (addedIds, dishes, quantityById) => addedIds.map(id => {
    return {
      ...dishes[id],
      quantity: quantityById[id]
    }
  })
)

export const getTotal = createSelector(
  getAddedIds,
  getDishesById,
  getQuantityById,
  (addedIds, dishes, quantityById) => addedIds.reduce(
    (total, id) => total + dishes[id].price * quantityById[id]
    , 0
  ).toFixed(2)
)

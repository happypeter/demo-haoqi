import { createSelector } from 'reselect'

export const getDishes = state => state.dish.all

export const getDishesById = createSelector(
  getDishes,
  dishes => dishes.reduce((obj, dish) => {
    obj[dish._id] = dish
    return obj
  }, {})
)

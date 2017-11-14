const progressBars = (state, action) => {
  switch (action.type) {
    case 'ADD_PROGRESS_BAR':
      console.log('ADD_PROGRESS_BAR', state, action)
      return [...state, action.progressBar]
    case 'SET_PROGRESS_PERCENT':
      return state.map(t => {
        if (t.uid === action.file.uid) {
          return { ...t, percent: action.percent}
        }
        return t
      })
    case 'SET_PROGRESS_STATUS':
      return state.map(t => {
          if (t.uid === action.file.uid) {
            const status =  action.status
            return { ...t, status }
          }
          return t
        })
    default:
      return state
  }
}

export default progressBars

import progressBars from './progressBars'

const initState = {
  allFiles: [],
  currentDir: '',
  progressBars: []
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOAD_ALL_FILES':
      return {
        ...state,
        allFiles: action.allFiles
      }
    case 'SET_CURRENT_DIR':
      return {
        ...state,
        currentDir: action.dir
      }
    case 'ADD_FILE':
      return {
        ...state,
        allFiles: [...state.allFiles, action.newFile]
      }
    case 'REMOVE_FILE':
      return {
        ...state,
        allFiles: state.allFiles.filter(
          t => t.Key !== action.key
        )
      }
    case 'CREATE_DIR':
      return {
        ...state,
        allFiles: [
          ...state.allFiles,
          { Key: action.dir }
        ]
      }
    default:
      return {
        ...state,
        progressBars: progressBars(state.progressBars, action)
      }
  }
}
export const getAllFiles = state => state.allFiles

export const getOnlyFiles = state => {
  return state.allFiles.filter(
    t => t.Key.split('/')[1]
  )
}

export const getDirNames = state => {
  const dirNames = getAllFiles(state).reduce((arr, t) => {
    const dirName = t.Key.split('/')[0]
    if (arr.indexOf(dirName) === -1) { arr.push(dirName)}
    return arr
  }, [])
  return dirNames
}

export const getCurrentDir = state => state.currentDir

export const getCurrentDirFiles = state => {
  return getOnlyFiles(state).filter(
    t => {
      return t.Key.split('/')[0] === getCurrentDir(state)
    }
  )
}
export const getProgressBars = state => {
  return state.progressBars.filter(
    t => t.currentDir === state.currentDir
  )
}

export default rootReducer

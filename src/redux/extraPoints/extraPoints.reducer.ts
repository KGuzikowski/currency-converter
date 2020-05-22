import { acceptExtraPointsType, extraPointsStateType, extraPointsActionType } from './extraPoints.types'

export const INITIAL_STATE: extraPointsStateType = {
    accepted: false
}

const extraPointsReducer = (state = INITIAL_STATE, action: acceptExtraPointsType): extraPointsStateType => {
    switch (action.type) {
        case extraPointsActionType.ACCEPT_EXTRA_POINTS:
            return {
                accepted: true
            }
        default: return state
    }
}

export default extraPointsReducer
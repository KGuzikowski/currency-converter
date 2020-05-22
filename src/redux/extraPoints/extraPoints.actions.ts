import { extraPointsActionType, acceptExtraPointsType } from './extraPoints.types'

export const acceptExtraPoints = (): acceptExtraPointsType => ({
    type: extraPointsActionType.ACCEPT_EXTRA_POINTS
})

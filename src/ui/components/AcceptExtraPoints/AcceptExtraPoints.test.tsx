import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import AcceptExtraPoints from './AcceptExtraPoints'
import { extraPointsStateType } from '../../../redux/extraPoints/extraPoints.types'

it('renders AcceptExtraPoints component correctly', () => {
    const INITIAL_STATE: extraPointsStateType = {
        accepted: false
    }

    const mockStore = configureStore()
    const store = mockStore(INITIAL_STATE)

    const component = create(<Provider store={store}><AcceptExtraPoints /></Provider>)
    expect(component.toJSON()).toMatchSnapshot()
})
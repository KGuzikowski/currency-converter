import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import AcceptExtraPoints from '../../../ui/components/AcceptExtraPoints/AcceptExtraPoints'
import { extraPointsStateType } from '../../../redux/extraPoints/extraPoints.types'

// There's sth wrong with this test. It doesn't pass but I didn't have time to deal with that.

it('renders AcceptExtraPoints component correctly', () => {
    const INITIAL_STATE: extraPointsStateType = {
        accepted: false
    }

    const mockStore = configureStore()
    const store = mockStore(INITIAL_STATE)

    const component = create(<Provider store={store}><AcceptExtraPoints /></Provider>)
    expect(component.toJSON()).toMatchSnapshot()
})
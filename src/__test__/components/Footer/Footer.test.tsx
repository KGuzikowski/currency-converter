import React from 'react'
import { create } from 'react-test-renderer'
import Footer from '../../../ui/components/Footer/Footer'

it('renders Footer component correctly', () => {
    const component = create(<Footer />)
    expect(component.toJSON()).toMatchSnapshot()
})
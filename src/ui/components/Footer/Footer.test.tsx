import React from 'react'
import { create } from 'react-test-renderer'
import Footer from './Footer'

it('renders Footer component correctly', () => {
    const component = create(<Footer />)
    expect(component.toJSON()).toMatchSnapshot()
})
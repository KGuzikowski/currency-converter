import React from 'react'
import { create } from 'react-test-renderer'
import About from '../../../ui/components/About/About'

it('renders About component correctly', () => {
    const about = create(<About />)
    expect(about.toJSON()).toMatchSnapshot()
})
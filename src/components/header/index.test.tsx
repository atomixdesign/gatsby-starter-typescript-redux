import React from 'react'
import { mount, render } from 'enzyme'
import Header from './index'

it('renders the header', () => {
  const wrapper = render(<Header siteTitle="Welcome to Gatsby" />)

  expect(wrapper).toMatchSnapshot()
})

it('renders the header with title', () => {
  const wrapper = mount(<Header siteTitle="Welcome to Gatsby" />)

  expect(wrapper.find('h1').text()).toBe('Welcome to Gatsby')
})

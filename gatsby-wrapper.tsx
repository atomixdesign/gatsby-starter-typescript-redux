import React from 'react'
import store from './src/store'
import { Provider } from 'react-redux'
import { WrapRootElementBrowserArgs, WrapRootElementNodeArgs } from 'gatsby'

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs | WrapRootElementNodeArgs): JSX.Element => {
  return (
    <Provider store={store}>
      {element}
    </Provider>
  )
}

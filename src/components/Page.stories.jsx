import React from 'react'
import store from '../lib/store'
import { rest } from 'msw'
import { MockedState } from './TaskList.stories'
import { Provider } from 'react-redux'
import { within, userEvent } from '@storybook/testing-library'

import { Page } from './Page'

export default {
  title: 'Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}

const Template = () => <Page />

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

export const Default = Template.bind({})
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1',
        (req, res, ctx) => {
          return res(ctx.json(MockedState.tasks))
        }
      ),
    ],
  },
}
export const Error = Template.bind({})
Error.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos?userId=1',
        (req, res, ctx) => {
          return res(ctx.status(403))
        }
      ),
    ],
  },
}

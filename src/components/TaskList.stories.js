import React from 'react'
import TaskList from './TaskList'
import * as TaskStories from './Task.stories'

export default {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
}

const Template = (args) => <TaskList {...args} />

export const Default = Template.bind({})
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Tasks 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Tasks 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Tasks 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Tasks 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Tasks 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Tasks 6' },
  ],
}

export const WithPinnedTasks = Template.bind({})
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Tasks 6 (pinned)', state: 'TASK_PINNED' },
  ],
}

export const Loading = Template.bind({})
Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind({})
Empty.args = {
  ...Loading.args,
  loading: false,
}

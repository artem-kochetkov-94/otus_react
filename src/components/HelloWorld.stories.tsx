import React from 'react'
import { HelloWorld } from './HelloWorld'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'HelloWorld',
  component: HelloWorld,
  decorators: [withKnobs],
}

export const HelloWorldStory: React.FC<{}> = () => {
  const username = text('User name', 'Artem')

  return <HelloWorld username={username} />
}

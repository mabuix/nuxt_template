import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  number,
  select,
  radios,
} from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'

storiesOf('Molecules', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)

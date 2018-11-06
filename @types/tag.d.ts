import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtTagProps extends AtComponent{
  size?: string

  type?: string

  name?: string

  active?: boolean

  disabled?: boolean

  className?: string | Array<string>

  customStyle?: object | string

  onClick?: (event: BaseEventFunction) => void
}

declare const AtTag: ComponentClass<AtTagProps>

export default AtTag
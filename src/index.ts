import _style from './styles/index.module.scss'
import helloTemplate from './template/helloTemplate'

export interface HelloWorldExports {
  helloWorld: () => string
  helloElement: string
  _style: Record<string, string>
}

const helloWorld = (): string => 'hello world!'

const helloElement: string = helloTemplate({
  message: 'hello world!',
  _style,
})

export default {
  helloWorld,
  helloElement,
  _style,
} satisfies HelloWorldExports

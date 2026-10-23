import _style from './styles/index.module.scss'
import helloTemplate from './template/helloTemplate'

const helloWorld = () => 'hello world!'
const helloElement = helloTemplate({
  message: 'hello world!',
  _style,
})

export default {
  helloWorld,
  helloElement,
  _style,
}

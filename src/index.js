import helloTemplate from './template/helloTemplate';
import _style from './styles/index.css';

const helloWorld = () => 'hello world!';
const helloElement = helloTemplate({
  message: 'hello world!',
  _style
});

export default {
  helloWorld,
  helloElement,
  _style
};

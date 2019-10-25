import helloTemplate from './helloTemplate';

const helloWorld = () => 'hello world!';
const helloElement = helloTemplate({
  message: 'hello world!'
});

export default {
  helloWorld,
  helloElement
};

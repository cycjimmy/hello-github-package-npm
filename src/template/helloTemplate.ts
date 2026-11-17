export interface HelloTemplateOptions {
  message: string
  _style: Record<string, string>
}

function helloTemplate({ message, _style }: HelloTemplateOptions): string {
  return `
<div class="${_style.helloWrapper}">
  <p class="${_style.hello}">${message}</p>
</div>
`
}

export default helloTemplate

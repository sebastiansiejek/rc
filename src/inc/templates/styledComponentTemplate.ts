interface IStyledComponentTemplate {
  name: string
}

const styledComponentTemplate = ({ name }: IStyledComponentTemplate) => {
  const componentName = `${name}Styled`

  return `import styled from 'styled-components'

const ${componentName} = styled.div\`\`

export default ${componentName}
`
}

export default styledComponentTemplate

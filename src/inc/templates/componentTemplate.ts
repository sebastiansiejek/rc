interface IComponentTemplate {
  name: string
}

const componentTemplate = ({
  name,
}: IComponentTemplate) => `const ${name} = () => {
  return <>${name}</>
}

export default ${name}
`

export default componentTemplate

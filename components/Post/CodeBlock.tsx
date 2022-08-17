import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

type Props = {}

const CodeBlock = (props: Props) => {
  const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`.trim()

  return (
    <div>
      <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={`codeblock ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <span className="codeline-number">{i + 1}</span>
                {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
              </div>
            ))}
          </div>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlock
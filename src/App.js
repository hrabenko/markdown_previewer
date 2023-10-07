import React from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Hello!

## It's Markdown Previewer.

### Let's see what we can do here.

Here's some code:

\`\`\`
function sum(number1, number2) {
  return number1 + number2;
}
\`\`\`

You can  make text **bold**, _italic_, **_both!_**,  ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org).

And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

And some other things.

`
    };
  };

  handleChange (e) {
    this.setState({
      markdown: e.target.value,
    });
  };

  render () {
    return (
        <div
            className="row p-3"
            style={{backgroundColor: "#dbe9ee", width: "100%"}}>
          <div className="col-md-6">
            <h1>Markdown</h1>
            <textarea
                id="editor"
                className="form-control"
                rows="15"
                onChange={this.handleChange.bind(this)}
                value={this.state.markdown}/>
          </div>
          <div className="col-md-6">
            <h1>Previewer</h1>
            <div
                id="preview"
                className="p-3 card bg-light mb-3"
                style={{minHeight: "374px"}}
                dangerouslySetInnerHTML={{__html: marked.parse(this.state.markdown)}}></div>
          </div>
        </div>
    )
  }
}

export default App;

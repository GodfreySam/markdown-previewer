import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from "marked";
import './App.css';

const initialState = `
    
  This is a Paragraph
  **React Markdown in Bolded text**

  > Block Quotes!

  # heading
  ## heading

  - list item  1
  - list item  2
  - list item  3

  [Vsit freecodecamp](https://freecodecamp.com)

  Div element \`<div></div>\`

  >This is a Block of code:
  
  Code block 
  \`\`\`
  // Simple addition function
  function addition(a, b) {
    return a + b;
  }
  addition(2, 3);
  // it should return 5
  \`\`\`

  ![Coding](https://images.app.goo.gl/qUK2ULKbqEi4AhqNA)
    `;

class App extends React.Component {
  state =  {
    text: initialState
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h2 className="text-center m-4">Convert your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h6>Enter your Mardown here:</h6>
            <textarea
              id="editor"
              className="form-control p-"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-6">
            <h6 className="text-center">See the result:</h6>
            <div
              id="preview"
              className="preview rounded"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

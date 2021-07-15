import React from 'react';
export default class NizForm extends React.Component {
    render() {
        const { textprop } = this.props;
        const dsomeStyle = {
            color: 'blue',
            height: '550px',
            backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dfa4d049739163.5608664fb87a4.png)',
          };
        return (
            <div style={dsomeStyle}>
                <h1>Hello World</h1>

                <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>

                <p>This is a paragraph for {this.props.textprop}</p>
                <p>Another paragraph for {textprop}</p>
                <form action="/process" method="post">
                    <div class="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="username" class="form-control" />
                    </div>
                    <input type="submit" name="Submit" />

                </form>
            </div>
        );
    }
}
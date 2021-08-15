import React from 'react';


class MyNewComponent extends React.Component {
    render() {
        return (
            <fieldset>
                <h1>
                    {this.props.header}
                </h1>
                {this.props.children}
            </fieldset>
        );
    }
}

export default MyNewComponent;

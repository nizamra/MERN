import React from 'react';
    
    
class MyNewComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
        );
    }
}
    
export default MyNewComponent;

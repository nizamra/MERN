import React from 'react';
export default class MoshMosh extends React.Component {
    state = {
        count:0,
        iamgest: "https://picsum.photos/200",
      };

      writeZero(){
          return this.state.count === 0 ? "Zero" : this.state.count;
      }
    render() {
        
        return (
            <fieldset>
                <img src={this.state.iamgest} alt="noth" />
                <p>Count: <span> {this.writeZero()}</span></p>
            </fieldset>
        );
    }
}
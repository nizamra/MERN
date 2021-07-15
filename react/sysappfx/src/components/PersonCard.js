import React from 'react';
class PersonCard extends React.Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <>
                <h1>{firstName}</h1>
                <p>{lastName}</p>
                <p>{age}</p>
                <p>{hairColor}</p>
            </>
        );
    }
}
export default PersonCard;
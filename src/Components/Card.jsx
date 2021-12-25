import React from 'react';

class Card extends React.Component {
    render(props) {
        return (
            <div>
                <img src={props.name} alt={props.name}/>
            </div>
               
        )
    }
}
export default Card;
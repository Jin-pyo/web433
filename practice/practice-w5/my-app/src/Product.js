import React from 'react';

class Product extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <p>{this.props.id}</p>
            </div>
        )
    }
}

export default Product;
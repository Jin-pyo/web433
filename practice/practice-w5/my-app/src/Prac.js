import React from 'react';

class Pract extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={msg:props.message};

        this.change=this.change.bind(this);
    }

    change(){
        this.setState(()=>{
            return {msg:"clicked"}
        })
    }

    render(){
        return(
            <div>
                <button onCick={this.change}>{this.state.msg}</button>
            </div>
        )
    }
}

export default Pract;
import React from 'react'

class ClickCheck extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={msg:props.message};

        this.change=this.change.bind(this);
    }

    change(){
        this.setState(()=>{
            return{msg:"clicked"}
        })
    }

    render(){
        return(
            <div>
                <h1>Click Change</h1>
                

                <button onClick={this.change}>{this.state.msg}</button>
                
            </div>
        )
    }
}


export default ClickCheck;
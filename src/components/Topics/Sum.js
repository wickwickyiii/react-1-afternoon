import React, {Component} from 'react'

class Sum extends Component {
    constructor () {
        super ();
            this.state = {
                number1: 0,
                number2: 0,
                sum: null
    };
}

onChangeOne = e => {
    this.setState({number1: parseInt(e.target.value, 10) });
}

onChangeTwo = e => {
    this.setState({number2: parseInt(e.target.value, 10) });
}

    
onClick = (num1, num2) => {
    this.setState({sum: num1 + num2});
}



    render (){
        console.log(this.state)
        return (
            <div className="puzzleBox sumPB">

                <h4> Sum </h4>

                <input className="inputLine" onChange={(e)=> this.onChangeOne(e)}></input>
                <input className="inputLine" onChange={(e)=> this.onChangeTwo(e)}></input>

                <button className="confirmationButton" onClick={()=> this.onClick(this.state.number1, this.state.number2)}> Add </button>
                
                <span className="resultsBox"> Sum: {this.state.sum} </span>

          </div>         
        )
    }
}

export default Sum;
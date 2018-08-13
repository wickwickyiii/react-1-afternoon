import React, {Component} from 'react';


class EvenAndOdd extends Component {
constructor () {
    super ()
    this.state = {
        evenArray: [],
        oddArray: [],
        userInput: ""
    }
}

handleChange = e => {
    this.setState({userInput: e.target.value});
}

handleClick = () => {
    let newArr = this.state.userInput.split(',')
    let newEvenArray = []
    let newOddArray = []

    for (var i=0; i<newArr.length; i++){
        if (newArr[i] % 2 === 0){
            newEvenArray.push( parseInt(newArr[i], 10) )
        } else if (newArr % 2 !== 0){
            newOddArray.push( parseInt(newArr[i], 10))
        }
    }

    this.setState({evenArray: newEvenArray})
    this.setState({oddArray: newOddArray})
}


    render (){
        console.log(this.state)
        return (
            <div className="puzzleBox evenAndOddPB">

                <h4> Evens And Odds </h4>

                <input className="inputLine" onChange={(e) => this.handleChange(e)}/>

                <button className="confirmationButton" onClick={() => this.handleClick()}> Split </button>


                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>

            </div>
        );
    }
}

export default EvenAndOdd;
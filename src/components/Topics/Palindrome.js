import React, {Component} from 'react';

class Palindrome extends Component {
    constructor () {
        super ();
            this.state = {
                userInput: "",
                palindrome: "",
    };
}

onInput (e) {
    this.setState({userInput: e.target.value});
}
    
onPush (userInput){
    let word = userInput;
    let sameword = userInput;

    sameword = sameword.split('');
    sameword = sameword.reverse();
    sameword = sameword.join('');

    if (word === sameword){
        this.setState({palindrome: "true"});
    } else {
        this.setState({palindrome: "false"});
    }
}
// CAN'T GET FUNCTION TO RENDER "TRUE" OR "FALSE"



    render (){
        console.log(this.state)
        return (
            <div className="puzzleBox filterStringPB">

                <h4> Palindrome </h4>

                <input className="inputLine" onChange={(e)=> this.onInput(e)}></input>

                <button className="confirmationButton" onClick={()=> this.onPush(this.state.userInput)}> Check </button>

                <span className="resultsBox"> Palindrome: {JSON.stringify(this.state.palindrome, null, 10)} </span>

          </div>         
        );
    }
}

export default Palindrome;
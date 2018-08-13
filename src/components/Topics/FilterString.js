import React, {Component} from 'react';

class FilterString extends Component {
    constructor (){
        super ()
            this.state = {
                unfilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
                userInput: "",
                filteredArray: [],
            }

    }

    onInput (event) {
        this.setState({userInput: event })
    }

    onPush (userInput) {
        let names = []
        let uArray = this.state.unfilteredArray

        for (var i=0; i<uArray.length; i++) {
            if (uArray[i].includes(userInput)) {
            names.push(uArray[i])
            }
        }
        console.log(names)
        this.setState({filteredArray: names})
    }




    render (){
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.unfilteredArray, null, 10)} </span>
                <input className="inputLine" onChange={(event) => this.onInput(event.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.onPush(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)} </span>



            </div>
            
        );

}
}

export default FilterString;
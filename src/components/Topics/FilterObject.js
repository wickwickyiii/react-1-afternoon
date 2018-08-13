import React, {Component} from 'react';


class FilterObject extends Component {
constructor () {
    super ();
        this.state = {
            employees: [
                {name: 'Jimmy Joe', title: 'Hack0r', age: 12,},
                {name: 'Jeremy Schrader', age: 24, hairColor: 'brown'},
                {name: 'Carly Armstrong', title: 'CEO',}],
              userInput: '',
              filteredEmployees: []
        }
}

onChange (e) {
    this.setState({userInput: e.target.value})
}

onClick (userInput) {
    let employees = this.state.employees;
    let filtered = [];

    // this.state.employees.map(() => {
    //     if (employees[this.state.userInput].hasOwnProperty(prop)){
    //         filtered.push(employees[this.state.userInput])
    //     }
    // })

    for (var i=0; i < employees.length; i++){
        if (employees[i].hasOwnProperty(userInput)){
            filtered.push(employees[i]);
        }
    }

    this.setState({filteredEmployees: filtered})
}


    render (){
        return (
            <div className="puzzleBox filterObjectPB">

                <h4> Filter Object </h4>

                <span className="puzzleText"> Oringial: {JSON.stringify(this.state.employees, null, 10) } </span>

                <input className="inputLine" onChange={ (e) => this.onChange(e) }></input>

                <button className="confirmationButton" onClick={ () => this.onClick(this.state.userInput) }> Filter </button>

                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)} </span>

            </div>

        );
    };
}

export default FilterObject;
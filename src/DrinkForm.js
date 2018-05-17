import React from 'react';
import './DrinkForm.css';


function clearFields() {
    let name = document.getElementById("drinkFormName");
    let price = document.getElementById("drinkFormPrice");
    let calories = document.getElementById("drinkFormCalories");

    name.value = '';
    price.value = '';
    calories.value = '';
}

export class DrinkForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { rows: [], newDrink: {} }

        let drink1 = {
            drinkName: "Lemonade",
            drinkPrice: 3.45,
            drinkCalories: 100
        };

        let drink2 = {
            drinkName: "Pink Lemonade",
            drinkPrice: 3.90,
            drinkCalories: 120
        };

        let drink3 = {
            drinkName: "Iced Tea",
            drinkPrice: 4.00,
            drinkCalories: 150
        };

        this.state.rows.push(drink1);
        this.state.rows.push(drink2);
        this.state.rows.push(drink3);
        this.state.newDrink = {
            drinkName: "",
            drinkPrice: "",
            drinkCalories: ""
        };


        this.addDrink = this.addDrink.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
    }

    addDrink() {
        let emptyDrink = {
            drinkName: "",
            drinkPrice: "",
            drinkCalories: ""
        };

        let newDrink = this.state.newDrink;
        this.state.rows.push(newDrink);
        let newState = this.state.rows;
        this.setState({ rows: newState, newDrink: emptyDrink });

        { clearFields() };
        
    }

    handleNameChange(event) {
        this.state.newDrink.drinkName = event.target.value;
    }

    handlePriceChange(event) {
        this.state.newDrink.drinkPrice = event.target.value;
    }

    handleCaloriesChange(event) {
        this.state.newDrink.drinkCalories = event.target.value;
    }


    render() {
        return (
            <div>
                <div>
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rows.map((row) => (
                                <tr key={row.drinkName}>
                                    <td>{row.drinkName}</td>
                                    <td>{parseFloat(row.drinkPrice).toFixed(2)}</td>
                                    <td>{row.drinkCalories}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table >
                </div>
                <div className="DrinkForm">
                    <div>
                        <label htmlFor="Drink">Drink Name </label>
                        <input type="text" name="Drink" id="drinkFormName"  onChange={this.handleNameChange} />
                    </div>
                    <div>
                        <label htmlFor="Price">Drink Price </label>
                        <input type="text" name="Price" id="drinkFormPrice"  onChange={this.handlePriceChange} />
                    </div>
                    <div>
                        <label htmlFor="Calories">Drink Calories </label>
                        <input type="text" name="Calories" id="drinkFormCalories" onChange={this.handleCaloriesChange} />
                    </div>
                    <div>
                        <input onClick={this.addDrink} type="button" value="Add Drink" />
                    </div>
                </div>
            </div> 
        );
    }
}
import React from 'react';
import './DrinkForm.css';
import { DrinkInformation } from  './DrinkInformation.js'


function clearFields() {
    let name = document.getElementById("drinkFormName");
    let price = document.getElementById("drinkFormPrice");
    let calories = document.getElementById("drinkFormCalories");

    name.value = '';
    price.value = '';
    calories.value = '';
}

export class DrinkForm extends React.Component {

    /* Constructor is called when a DrinkForm element is called, set the state here */
    constructor(props) {
        super(props);

        this.state = {
           rows: [], newDrink: {}
        }

        let drink1 = {
            drinkName: "Lemonade",
            drinkPrice: 3.45,
            drinkCalories: 100,
            id: 0,
        };

        let drink2 = {
            drinkName: "Pink Lemonade",
            drinkPrice: 3.90,
            drinkCalories: 120,
            id: 1,
        };

        let drink3 = {
            drinkName: "Iced Tea",
            drinkPrice: 4.00,
            drinkCalories: 150,
            id: 2,
        };

        this.state.rows.push(drink1);
        this.state.rows.push(drink2);
        this.state.rows.push(drink3);

        this.state.newDrink = {
            drinkName: "",
            drinkPrice: "",
            drinkCalories: "",
            id: 3,
        };

        /* Function binds */ 
        this.addDrink = this.addDrink.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    /* Adds a drink from the form into the lists */
    addDrink() {

        let drinkName = document.getElementById("drinkFormName");
        let drinkPrice = document.getElementById("drinkFormPrice");
        let drinkCalories = document.getElementById("drinkFormCalories");

        var drink = {
            drinkName: drinkName.value,
            drinkPrice: drinkPrice.value,
            drinkCalories: drinkCalories.value,
            id: this.state.newDrink.id
        }

        var rows = this.state.rows;
        rows.push(drink);


        let newMaxID = this.state.newDrink.id + 1;

        var emptyDrink = {
            drinkName: '',
            drinkPrice: '',
            drinkCalories: '',
            id: newMaxID
        }
      
        this.setState({ rows: rows, newDrink: emptyDrink });

        clearFields();   
    }

    removeItem(event) {
        var rows = this.state.rows;
        let rowToDelete = event.target.id;
        console.log(rowToDelete);
        rows.splice(rowToDelete, 1);

        this.setState({ rows: rows });
    }

    render() {
        return (
            <div>
                <DrinkInformation rows={this.state.rows} removeItem={this.removeItem} />
                <div className="DrinkForm">
                    <div>
                        <label htmlFor="Drink">Drink Name </label>
                        <input type="text" name="Drink" id="drinkFormName" onChange={this.handleNameChange} />
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
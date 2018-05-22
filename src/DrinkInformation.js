import React from 'react';




export class DrinkInformation extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        if (this.props.rows.length > 0) {
            return (
                <div>
                    <table >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Calories</th>
                                <th>ID</th>
                            </tr>
                        </thead>

                        <tbody>

                            {this.props.rows.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{row.drinkName}</td>
                                    <td>{parseFloat(row.drinkPrice).toFixed(2)}</td>
                                    <td>{row.drinkCalories}</td>
                                    <td>{row.id}</td>
                                    <td><div onClick={this.props.removeItem} key={row.id} className="removeIcon"><i id={index} className="fa fa-times fa-lg"></i></div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table >
                </div>
            )  
        }
        else {
            return <h1>No Items in this list</h1>
        }
         
    }
}
import React, { Component } from 'react'
import ProductList from './ProductList';
import {data} from './Data';


export default class ChangeGlass extends Component {

state= {
    glasses:data,
    product: [],
    btns:["GUCCI G8850U", "GUCCI G8759H", "DIOR D6700HQ", "DIOR D6005U","PRADA P8750","PRADA P9700", "FENDI F8750","FENDI F8500","FENDI F4300"]
    // btns:[data.name]
}

handleBtns=(e) => {
    console.log(e.target.value);
    let product; 
    product= this.state.glasses.filter(item => item.name === e.target.value)
    
    this.setState({
    product: product
    })
}


  render() {
    return (
      <div>
        <h1> Change Glasses App </h1>
        <ProductList glasses={this.state.product} handleBtns={this.handleBtns} btns={this.state.btns}/>
      </div>
    )
  }
}

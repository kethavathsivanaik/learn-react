import React from "react";
import { ProductCatalog } from "./ProductCatalog";
import {LoginPage} from "./LoginPage";
class ProductCatalogClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn: false

        }
        // this.toggleLoginButton=this.toggleLoginButton.bind(this) Bbind in constructor
        // In events
        // As a Arrow functions 
    }

    toggleLoginButton=()=>{
        this.setState({isLoggedIn:!this.state.isLoggedIn})
    }
    render(){
        return (
            <div>
                <button onClick={this.toggleLoginButton}>SignIn</button>
                <button onClick={this.toggleLoginButton}>SignOut</button>
                {this.state.isLoggedIn?
                <ProductCatalog ></ProductCatalog>:
                <LoginPage></LoginPage>}
            </div>

        )
    }
}

export default ProductCatalogClass;
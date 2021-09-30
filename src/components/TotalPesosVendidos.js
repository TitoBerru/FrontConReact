import React, {Component} from 'react';

class TotalPesosVendidos extends Component {


    constructor(props){
        super(props);
        this.state = {
        total: 0  
        }
    }

    apiCall(){
        let url = 'http://localhost:3001/ventas'
        fetch(url)
            .then(response=> response.json())
            .then(datos=>{
              
                this.setState({ventaEnPesosTotal : datos.ventaEnPesosTotal})
            })
            .catch(error=>console.log("Error de Total Pesos Vendidos " + error))
    }

    componentDidMount(){
        this.apiCall()

    }

    render(){
        return (
            <div>
            
                <h1>{this.state.ventaEnPesosTotal}</h1>
            
                
            </div>
        )
    }
}
    
export default TotalPesosVendidos;
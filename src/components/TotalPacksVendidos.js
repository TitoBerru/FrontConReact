import React, {Component} from 'react';

class TotalPacksVendidos extends Component {


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
              
                this.setState({datos: datos.total})
            })
            .catch(error=>console.log("Error de Total PAcks Vendidos" + error))
    }

    componentDidMount(){
        this.apiCall()
        // console.log(this.totalVentasEnPesos);
    }

    render(){
        return (
            <div>
            
                <h1>{this.state.datos}</h1>
            
                
            </div>
        )
    }
}
    
export default TotalPacksVendidos;
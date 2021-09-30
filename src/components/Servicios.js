import React, {Component} from 'react';

class Servicios extends Component {
   
    constructor(props){
        super(props);
        this.state = {
        total: 0
        }
    }
     

    apiCall(){
        let url = 'http://localhost:3001/servicio'
        fetch(url)
            .then(response=> response.json())
            .then(datos=>{
                // console.log(datos)
                this.setState({pepito: datos.total})
            })
            .catch(error=>console.log("Error de Servicios" + error))
    }

    componentDidMount(){
        this.apiCall()
        // console.log('Me monté!!')
    }
    render(){
        return (
            <div>
                <h2>{this.state.pepito}</h2>
            
                
            </div>
        )
    }
}
    
export default Servicios;
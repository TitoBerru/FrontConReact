import React, {Component} from 'react';

class UltimoPackVendido extends Component {


    constructor(props){
        super(props);
        this.state = {
        total: 0  
        }
    }

    apiCall(){
        let url = 'http://localhost:3001/ventas/1'
        fetch(url)
            .then(response=> response.json())
            .then(datos=>{
                this.setState({data : datos.numeroPack})
                // console.log(datos)
            })
            .catch(error=>console.log("Error de UltimoPackVendido" + error))
    }

    componentDidMount(){
        this.apiCall()
        // console.log(this.datos);
    }

    render(){
        return (
            <div>
            
                <h1>{this.state.data}</h1>
            
                
            </div>
        )
    }
}
    
export default UltimoPackVendido;
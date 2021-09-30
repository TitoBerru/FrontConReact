import React, {Component} from 'react';

class UnPack extends Component {
   
    

    constructor(props){
        super(props);
        this.state = {
        total: 0,
        indice: 0
        }
    }
    

    apiCall(){
        let url = 'http://localhost:3001/busquedaProducto/'
        fetch(url)
            .then(response=> response.json())
            .then(datos=>{
              
                this.setState({
                    
                    numeroPack: datos.data[this.state.indice].numeroPack,
                    radio : datos.data[this.state.indice].radio,
                    superficie: datos.data[this.state.indice].superficie,
                    precio: datos.data[this.state.indice].precio
                
                
                })
                // console.log(this.state.datos)
            })
            .catch(error=>console.log("Error de Total PAcks Vendidos" + error))
    }
    // cambiarPack (){
    //           this.indice = this.state.indice + 1
    // }

    componentDidMount(){
        this.apiCall()
        // console.log(this.totalVentasEnPesos);
    }

    render(){
        return (
            <div>
            
                <h5>Pack nro: {this.state.numeroPack}</h5>
                <h6>Radio: {this.state.radio} Kms</h6>
                <h6>Metros: {this.state.superficie} mts2.</h6>
                <h6>Precio Actual: ${this.state.precio}.</h6>
            
                
            </div>
        )
    }
}
    
export default UnPack;
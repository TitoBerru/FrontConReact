import React, {Component} from 'react';
class Packs extends Component {
    constructor(props){
        super(props);
        this.state = {
        total: 0,
        datos: ""  
        }
    }
    apiCall(){
        let url = 'http://localhost:3001/busquedaProducto'
        fetch(url)
            .then(response=> response.json())
            .then(datos=>{
                this.setState({
                    arreglo: datos.data
                    })
                console.log(datos.data[0].imagen) // -> Funciona perfecto, me trae la imagen x consola
                console.log("EStos datos llegan por datos" + JSON.stringify(datos.data)) // -> Funciona perfecto, me llega la info que necesito recorrer....
            })
            .catch(error=>console.log("Error de PACKs" + error))
    }
    componentDidMount(){
        this.apiCall()
    }
    render(){
        return (
            
            <div>
            "hola"
            {/* {this.state.datos.map(e => (e.datos.numerosPack))} */}
                {/* { this.state.datos.map(e => {e.datos.data.numeroPack}) } */}
                {/* {this.state.datos.data[0].imagen} */}
                {/* {this.state.datos.imagen}                */}
                {console.log("Este dato llega x console log de this.state en el RETURN: " + this.state.arreglo)}
                {/* {this.state.arreglo.map(e()=> e)} */}
                {/* {this.state.arreglo.map(e => (e.arreglo.imagen))} */}               
            </div>
        )
    }
}
    
export default Packs;
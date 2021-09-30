import React, {Component} from 'react';

class Usuarios extends Component {

    constructor(props){
        super(props);
        this.state = {
        total: 0
        }
    }

    apiCall(){
        let url = 'http://localhost:3001/busquedaUsuario'
        fetch(url)
            .then(response=> response.json())
            .then(datos=>{
                // console.log(datos.total)
                this.setState({pepito: datos.total})
            })
            .catch(error=>console.log("Error de Usuarios! " + error))
    }

    componentDidMount(){
        this.apiCall()
        // console.log('Me monté!!')
    }

    render(){
        return (
            <div>
                <h1>{this.state.pepito}</h1>
            
                
            </div>
        )
    }
}



    

    // fetchApi = async()=>{
    //     let url = 'http://localhost:3008/busquedaUsuario'
    //     await fetch(url)
    //         .then(res=>res.json())
    //         .then(datos=>{datos.data})
    
    //     // console.log()
    // }

    // componentDidUpdate(){
    //     console.log('Me Actualicé!!')
    // }
    
    
export default Usuarios;
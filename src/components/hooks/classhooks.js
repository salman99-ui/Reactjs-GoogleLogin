import React, { Component } from 'react'

export class classhooks extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : 'Salman'
        }

        this.update = this.update.bind(this)
    }

    update(){
        setTimeout(() => {
            this.setState({
                username : 'yosi'
            })
        })
    }

    componentDidMount(){
        console.log("Component Did mount")

        setTimeout(() => {
            this.update()
        } , 3000)
    }

    componentDidUpdate(){
        console.log("componen update")
    }

    
    render() {
        return (
            <div>
                <h3>Hello {this.state.username}</h3>
            </div>
        )
    }
}

export default classhooks

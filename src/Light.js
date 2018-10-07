import React, { Component } from "react"

class Light extends Component {
    render() {
        const light = this.props.on ? "ONnnnnnnnn" : "OFF"
        return(
            <div className={light}>
                <button className={light}></button>
                <figure className={light}></figure>
            </div>
        )
    }
}

export default Light
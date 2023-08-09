import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>welcome to home component !!</h2>
            </div>
        );
    }

    
}

class Artist extends React.Component {
    render() {
        return (
            <>    <h4> Non atis la : {this.props.name} </h4>
                <p> Byografi : {this.props.bio} </p>
                <div> Total fanatik: 0 </div>
                <hr />
            </>

        );

    }

}

export default(Home,Artist);
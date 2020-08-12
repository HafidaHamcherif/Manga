import React from 'react';


class Manga extends React.Component{
    componentDidMount(){
        const url = `http://localhost:3000/api/${this.props.match.params.id}`;
        console.log('url',url)
        fetch(url)
           .then(res => res.json())
           .then(json => {

           })     
    }

    render(){
        return(
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}
export default Manga;
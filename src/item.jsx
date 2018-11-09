import React,{Component} from 'react'

export default class Item extends Component{

    handleClick = () => {
        this.props.handleDelete(this.props.idx)
    }

    render(){
        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }
}
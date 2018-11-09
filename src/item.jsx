import React,{Component} from 'react'


export default class Item extends Component{

    handleClick = () => {
        this.props.handleDelete(this.props.idx)
    }

    shouldComponentUpdate(nextProps,nextState){
        //参数的意义：组件要被更新的时候 接下来props会变成什么样和 接下来state会变化成什么样
        if(nextProps.content !== this.props.content){
            return true;
        }else {

            return false;
        }
    }



    render(){

        return (
            <div onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }
}
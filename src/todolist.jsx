import React,{Fragment} from 'react'
import Item from './item'

export default class TodoList extends React.Component{
    state = {
        inputValue:'',
        list:['vue','react']
    }

    handleInputChange = (e) => {
      this.setState({
          inputValue: e.target.value
      })
    }

    handleClick = () => {
        // const {inputValue} = this.state
        // const list = this.state.list.push(inputValue)
        // debugger
        
        // this.state.inputValue = ''
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
        
    }

    handleDelete = (idx) => {
        console.log(this)
        console.log(idx)
        const list = [...this.state.list]
        list.splice(idx,1)
        this.setState({list})
    }

    render(){
        const { inputValue,list } = this.state
        return(
            <Fragment>
                <input type="text" value={inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.handleClick}>添加</button>
                <ul>
                   {
                       list.map((item,idx) =>
                           <div key={idx}>
                               <Item
                                   content={item}
                                    idx={idx}
                                   handleDelete={this.handleDelete}
                               />
                           </div>
                           /*<li key={idx} onClick={this.handleDelete.bind(this,idx)}>{item}</li>*/
                       )
                   }
                </ul>
            </Fragment>
        )
    }
}
import React, {Component} from 'react'
import {Fragment} from 'react'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currValue: '',
            inputValue: '123',
            list: ['基础按摩', '精油推背']
        }
    }

    inputChange(e) {
        // console.log(e.target.value);
        // this.state.inputValue=e.target.value;
        this.setState({
            inputValue: e.target.value
        })
    }

    addlist() {
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }

    deleteItem(ind, target) {
        /*
        let list = this.state.list
        list.splice(ind,1)
        this.setState({
            list:list
        })
         */
        let list = this.state.list
        let v = list[ind]
        this.setState({currValue: v})
    }

    render() {
        return (
            // eslint-disable-next-line react/jsx-no-undef
            <Fragment>
                <div>
                    <input value={this.state.currValue}/>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addlist.bind(this)}> {true ? '增加服务' : 'zengjiafuwu'} </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,ind)=>{
                            return <li key={ind+item} onClick={this.deleteItem.bind(this,ind)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Xiaojiejie

import React,{Component} from 'react'
import "../assets/css/header.css"

class Header extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    searchIsShow(){
        console.log(this,"11111111")
        
    }
    isCancel=()=>{
        this.setState({

        })
    }
    render(){
        return(
            <div>
                <div className="header">
                    <div className="logo"></div>
                    <div className="search">
                        <input onFocus={this.searchIsShow.bind(this)}/>
                    </div>
                    <div className='pc'>
                        <span></span>
                    </div>
                    <p className="cancel" onClick={this.isCancel}>取消</p>
                </div>
                <div className="top">
                    <div className="douLogo"></div>
                    <div className="top_info">
                        <h2>豆瓣app</h2>
                        <p>记录你的书影音生活</p>
                    </div>
                    <div className="appBtn">打开App</div>
                </div>

            </div>
        )
    }
}
export default Header
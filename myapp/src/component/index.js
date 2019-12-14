import React, { Component } from 'react'
import Header from './header'
import '../assets/css/index.css'
class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className='appCon clearfix'>
                    <ul>
                        <li>
                            <h2>找电影</h2>
                            <p>影院热映</p>
                        </li>
                        <li>
                            <h2>找电影</h2>
                            <p>影院热映</p>
                        </li>
                        <li>
                            <h2>找电影</h2>
                            <p>影院热映</p>
                        </li>
                        <li>
                            <h2>找电影</h2>
                            <p>影院热映</p>
                        </li>
                        <li>
                            <h2>找电影</h2>
                            <p>影院热映</p>
                        </li>
                        <li>
                            <h2>找电影</h2>
                            <p>影院热映</p>
                        </li>
                    </ul>
                </div>
                {/* 榜单 */}
                <div className="movieList">
                    <h2>豆瓣榜单<span>用app看跟多 ></span></h2>
                    <ul>
                        <li>
                            <div className="list_left">
                                <span>豆瓣周榜</span>
                                <p>华语口碑剧集</p>
                            </div>
                            <div className="list_right">
                                <div className="bg">
                                    <p className="first">
                                        <span>1 . </span>
                                        <span>伍六七之最强发型师</span>
                                        <span className="grade">8.8</span>
                                    </p>
                                    <p>
                                        <span>1 . </span>
                                        <span>恋恋江湖</span>
                                        <span className="grade">7.1</span>
                                    </p>
                                    <p>
                                        <span>1 . </span>
                                        <span>早餐中国 第二季</span>
                                        <span className="grade">8.8</span>
                                    </p>

                                    <div className="openApp">用app打开</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list_left">
                                <span>豆瓣周榜</span>
                                <p>华语口碑剧集</p>
                            </div>
                            <div className="list_right">
                                <div className="bg">
                                    <p className="first">
                                        <span>1 . </span>
                                        <span>伍六七之最强发型师</span>
                                        <span className="grade">8.8</span>
                                    </p>
                                    <p>
                                        <span>1 . </span>
                                        <span>恋恋江湖</span>
                                        <span className="grade">7.1</span>
                                    </p>
                                    <p>
                                        <span>1 . </span>
                                        <span>早餐中国 第二季</span>
                                        <span className="grade">8.8</span>
                                    </p>

                                    <div className="openApp">用app打开</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="list_left">
                                <span>豆瓣周榜</span>
                                <p>华语口碑剧集</p>
                            </div>
                            <div className="list_right">
                                <div className="bg">
                                    <p className="first">
                                        <span>1 . </span>
                                        <span>伍六七之最强发型师</span>
                                        <span className="grade">8.8</span>
                                    </p>
                                    <p>
                                        <span>1 . </span>
                                        <span>恋恋江湖</span>
                                        <span className="grade">7.1</span>
                                    </p>
                                    <p>
                                        <span>1 . </span>
                                        <span>早餐中国 第二季</span>
                                        <span className="grade">8.8</span>
                                    </p>

                                    <div className="openApp">用app打开</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='foot'>
                    <p>
                        打开App，查看更多热门讨论
                    </p>
                
                </div>
            </div>
        )
    }
}
export default Index
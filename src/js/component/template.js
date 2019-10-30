import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-header">
                    <div className="main-header-container">
                        <div className="title ">
                            <span className="myday">我的一天</span>
                            <i className="iconfont icon-shenglvehao"></i>
                        </div>
                        <div className="actions">
                            <button className="today"><i className="iconfont icon-dengpao"></i>今天</button>
                            <button className="sort"><i className="iconfont icon-paixu"></i>排序</button>
                        </div>
                    </div>
                    <div className="date">十月27日星期日</div>
                </div>
                <div className="tasks">
                    <i className=" iconfont icon-circle"></i>
                    任务一
                </div>
                <div className="input-group d-flex align-items-center" id="addTask">
                    <div className="input-group-prepend">
                        <i className=" iconfont icon-add"></i>
                    </div>
                    <input type="text" placeholder="添加任务" id="input-addTask" className="form-control border-0 " aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="background"></div>
            </div>
        )
    }
}
import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <div className="row header">
                <span className="header-title col-md-auto">To Do</span>
                <div className="input-group input-group-sm search col rounded">
                    <div className="input-group-prepend">
                        <i className=" iconfont icon-search"></i>
                    </div>
                    <input type="text" placeholder="搜索" id="input-search" className="form-control border-0 " aria-label="Username" aria-describedby="basic-addon1" />
                </div>

            </div>

        )
    }
}
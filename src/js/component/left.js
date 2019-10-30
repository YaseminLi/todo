import React from 'react'
import Template from './template'
export default class Header extends React.Component {
    render() {
        return (
            <div className="row content" id="content">
                <div class=" nav-left" id="slide">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <div className="menu"><i className=" iconfont icon-zhankai"></i></div>
                        <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <i className="iconfont icon-day nav-icon"></i><span className="nav-title">我的一天</span><span className="count">1</span></a>
                        <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                            <i className="iconfont icon-important nav-icon"></i><span className="nav-title">重要</span><span className="count">1</span></a>
                        <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                            <i className="iconfont icon-plan nav-icon"></i><span className="nav-title">已计划日程</span><span className="count">1</span></a>
                        <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <i className="iconfont icon-todo nav-icon"></i><span className="nav-title">任务</span><span className="count">1</span></a>
                    </div>
                </div>
                <div class="col nav-content">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Template /></div>
                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">哥哥哥哥</div>
                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">滚滚滚</div>
                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">哥哥哥哥给</div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { PropTypes, Component } from 'react';
import {
  Panel,
  Breadcrumb,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import authorityIntercept from '../../utils/authorityIntercept';

import MainLayout from '../../components/MainLayout';
import Sidebar from '../../components/Sidebar';

class Notification extends Component {

  static contextTypes = {
    logon: PropTypes.bool,
    user: PropTypes.object,
  };

  isLogon = () => {
    const { logon } = this.context;
    return logon;
  }

  renderNotification = () => {
    if (!this.isLogon()) {
      return null;
    }
    return (
      <Panel
        header={
          <Breadcrumb>
            <LinkContainer
              onlyActiveOnIndex
              to="/"
            >
              <Breadcrumb.Item>
                <span>主页</span>
              </Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active>
              新消息
          </Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        N/A
    </Panel>
    );
  }

  renderSidebar = () => {
    if (!this.isLogon()) {
      return null;
    }
    const { logon, user } = this.context;
    return (
      <Sidebar
        userThumbnailTitle="个人信息"
        user={user}
        topicReleasable={logon}
        barcodeVisible
      />
    );
  }

  render = () => {
    return (
      <div id="Notification">
        <MainLayout
          sidebar={this.renderSidebar()}
        >
          {this.renderNotification()}
        </MainLayout>
      </div>
    );
  }

}

export default authorityIntercept(Notification);


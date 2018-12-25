import React from 'react';
import { Breadcrumb, Icon } from '@/components';
import { Link } from 'react-router-dom';
export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link
              to="/"
              replace
            >
              <Icon type="home" />
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="user" />
            <Link to="/signin/213213">Application List</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

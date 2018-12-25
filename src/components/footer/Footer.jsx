import React from 'react';
import { Layout } from '@/components';
const { Footer:AntFooter } = Layout;

export class Footer extends React.Component {
  render() {
    return (
      <AntFooter>
        <div className="container footer-wrap">
          Ant Design ©2018 Created by Ant UED
        </div>
      </AntFooter>
    );
  }
}

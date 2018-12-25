import React from 'react';
import {  } from '@/components';
import {parse} from 'query-string';

export default class extends React.Component {
  render() {
    const {match,location }=this.props;
    const params=parse(location.search);
    console.log(this.props,params);
    return (
      <div className="container">
        login:{match.params.id}
        params:{params.name}
      </div>
    );
  }
}

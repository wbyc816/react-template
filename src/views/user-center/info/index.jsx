import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Info extends Component{
  render(){
    return <div>
      <FormattedMessage id="user.content.text" />
    </div>;
  }
}
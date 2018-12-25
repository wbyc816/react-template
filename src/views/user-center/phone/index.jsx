import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Calendar  } from '@/components';

export default class Phone extends Component {
  render() {
    return (
      <div>
        <Calendar
          fullscreen={false}
          style={{width:'400px'}}
        />
        <FormattedMessage id="user.title" />
      </div>
    );
  }
}

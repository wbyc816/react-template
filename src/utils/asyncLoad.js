import React from 'react';
import Loadable from 'react-loadable';
import { Spin} from '@/components';

export default function AsyncLoad(component) {
  return Loadable({
    loader: component,
    loading: props => {
      if (props.pastDelay) {
        return (
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate3D(-50%,-50%,0)'}}>
            <Spin size="large" />
          </div>
        );
      } else {
        return null;
      }
    },
  });
}

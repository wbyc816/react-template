import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { LocaleProvider } from '@/components';
import { connect } from "react-redux";
import zh_CN from './zh-CN';
import en_US from './en-US';

export const locales = {
  'zh-CN': zh_CN,
  'en-US': en_US,
};

class Intl extends React.Component {
  render() {
    const {lang}=this.props;
    const locale = locales[lang];
    addLocaleData(locale.data);
    return (
      <LocaleProvider
        locale={locale.messages}
        key={locale.locale}
      >
        <IntlProvider
          locale={locale.locale}
          messages={locale.messages}
        >
          {this.props.children}
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

const mapStateToProps = state => {
  const {app} =state;
  return {lang:app.lang};
};

export default connect(mapStateToProps)(Intl);
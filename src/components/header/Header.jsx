import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from '@/components';
import { FormattedMessage } from 'react-intl';
import Logo from '@/assets/images/logo.png';
import { locales } from '@/locale';
import { setLang } from '@/store/actions';

const { Header: AntHeader } = Layout;
const menu = (setLang) => {

  const handleMenuClick = ({ key }) => {
    setLang(key);
  };

  return (
    <Menu onClick={handleMenuClick}>
      {Object.keys(locales).map(lang => (
        <Menu.Item key={lang}>
          <FormattedMessage id={`langs.${lang}`} />
        </Menu.Item>
      ))}
    </Menu>
  );
};


class HeaderClass extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  goSignin() {
    this.props.history.replace({ pathname: '/usercenter' });
  }
  render() {
    const { lang, setLang } = this.props;
    return (
      <AntHeader>
        <div className="container header-wrap">
          <div className="header-left">
            <img
              src={Logo}
              className="header-logo"
              alt="logo"
              onClick={() => this.goSignin()}
            />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '80px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </div>
          <div className="header-right">
            <Dropdown
              overlay={menu(setLang)}
              placement="bottomCenter"
            >
              <a
                className="ant-dropdown-link"
                href="#"
              >
                <FormattedMessage id={`langs.${lang}`} />
                <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
      </AntHeader>
    );
  }
}

const mapStateToProps = state => {
  const { app } = state;
  return { lang: app.lang };
};

export const Header = connect(
  mapStateToProps,
  { setLang }
)(withRouter(HeaderClass));

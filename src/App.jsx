import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Header, Footer, RouterView } from '@/components';
import { Provider } from 'react-redux';
import store from '@/store';
import Intl from '@/locale';
import './App.less';
import routes from '@/routes';
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Intl>
          <Router>
            <Layout className="app-layout">
              <Header />
              <Content className="app-content">
                <RouterView routes={routes} />
              </Content>
              <Footer />
            </Layout>
          </Router>
        </Intl>
      </Provider>
    );
  }
}

export default App;

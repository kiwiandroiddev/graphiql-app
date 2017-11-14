import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
// import Radium from 'radium';

export default class OauthCredentialsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.credentials || {};
  }

  sendCredentialsUpdate() {
    console.log('latest credentials:')
    console.log(this.state)

    if (this.props.onUpdateCredentials) {
      this.props.onUpdateCredentials(this.state);
    }
  }

  credentialChanged(field) {
    return (event) => {
      console.log(`${field} changed, value = ${event.target.value}`)

      this.setState({
        [`${field}`]: event.target.value
      }, () => {
        this.sendCredentialsUpdate()
      })
    }
  }

  // TODO extract sub-component
  render() {
    return (
      <div className="headerEditor">
        <table className="pure-table pure-table-horizontal" style={styles.table}>
          <tbody>
            <tr>
              <td>Token Host</td>
              <td>
                <form className="pure-form" style={{margin: '0px'}}>
                  <input
                    type="text"
                    placeholder="https://api.oauth.com"
                    defaultValue={this.state.tokenHost}
                    style={{ width: '100%' }}
                    onChange={this.credentialChanged('tokenHost')}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td>Token Path</td>
              <td>
                <form className="pure-form" style={{margin: '0px'}}>
                  <input
                    type="text"
                    placeholder="oauth2/token"
                    defaultValue={this.state.tokenPath}
                    style={{ width: '100%' }}
                    onChange={this.credentialChanged('tokenPath')}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td>Client ID</td>
              <td>
                <form className="pure-form" style={{margin: '0px'}}>
                  <input
                    type="text"
                    defaultValue={this.state.clientId}
                    style={{ width: '100%' }}
                    onChange={this.credentialChanged('clientId')}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td>Client Secret</td>
              <td>
                <form className="pure-form" style={{margin: '0px'}}>
                  <input
                    type="text"
                    defaultValue={this.state.clientSecret}
                    style={{ width: '100%' }}
                    onChange={this.credentialChanged('clientSecret')}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td>Username</td>
              <td>
                <form className="pure-form" style={{margin: '0px'}}>
                  <input
                    type="text"
                    defaultValue={this.state.username}
                    style={{ width: '100%' }}
                    onChange={this.credentialChanged('username')}
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td>Password</td>
              <td>
                <form className="pure-form" style={{margin: '0px'}}>
                  <input
                    type="text"
                    defaultValue={this.state.password}
                    style={{ width: '100%' }}
                    onChange={this.credentialChanged('password')}
                  />
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const styles = {
  table: {
    marginTop: 10,
    width: '100%'
  }
}

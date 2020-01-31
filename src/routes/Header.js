import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Menu,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';


class Header extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            90 Day Dash
                  </Menu.Item>
                        <Menu.Item><Link to="/">Home</Link></Menu.Item>
                        {
                            this.props.user === null ? (
                                <Menu.Item><Link to="/login">Login</Link></Menu.Item>
                            ) : (
                                <Menu.Item position='right' as='a'>Logout</Menu.Item>
                            )
                        }
                    </Container>
                </Menu>
            </div>

        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUser, logout })(Header);
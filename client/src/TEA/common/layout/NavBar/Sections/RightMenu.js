/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Badge } from 'antd';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';

function RightMenu(props) {
    const user = useSelector((state) => state.user);

    const logoutHandler = () => {
        axios.get('/api/users/logout').then((response) => {
            if (response.status === 200) {
                props.history.push('/login');
            } else {
                alert('Log Out Failed');
            }
        });
    };

    if (user.userData && !user.userData.isAuth) {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="login">
                    <a href="/login">Signin</a>
                </Menu.Item>
                <Menu.Item key="register">
                    <a href="/register">Signup</a>
                </Menu.Item>
                <Menu.Item key="cart">
                    <a href="#" className="head-example" style={{ color: '#667777' }}>
                        <ShoppingCartOutlined style={{ fontSize: '25px' }} />
                    </a>
                </Menu.Item>
            </Menu>
        );
    } else {
        return (
            <Menu mode={props.mode}>
                <Menu.Item key="logout">
                    <a onClick={logoutHandler}>Logout</a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(RightMenu);

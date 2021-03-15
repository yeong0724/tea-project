import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>
            <SubMenu title={<span>Tea Shop</span>}>
                <MenuItemGroup title="관아수제차">
                    <Menu.Item key="setting:1">
                        <a href="/product/add">상품등록</a>
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                        <a href="/product/list">상품목록</a>
                    </Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu
                title={
                    <span>
                        <a href="/review/postlistpage"> 상품후기</a>
                    </span>
                }
            ></SubMenu>
            <SubMenu title={<span>Tea story</span>}>
                <MenuItemGroup title="차 이야기">
                    <Menu.Item key="setting:1">
                        <a href="#">Since 1990…</a>
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                        <a href="#">지리산 차밭 이야기</a>
                    </Menu.Item>
                    <Menu.Item key="setting:2">
                        <a href="#">명인의손길</a>
                    </Menu.Item>
                </MenuItemGroup>
            </SubMenu>
        </Menu>
    );
}

export default LeftMenu;

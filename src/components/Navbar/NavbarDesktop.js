import _ from 'lodash'
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'


const NavbarDesktop = ({ leftItems, rightItems }) => {
  return (
    <div>
      <div style={styles.sidebar}>
        <Menu as={Menu} 
          visible={true} vertical
        >
          <Menu.Item name='home' onClick={() => { }}>
            <span>Home</span>
          </Menu.Item>
          <Menu.Item name='goals' onClick={() => { }}>
            <span>Goals</span>
          </Menu.Item>
          <Menu.Item name='affirmations' onClick={() => { }}>
            <span>Affirmations</span>
          </Menu.Item>
          <Menu.Item name='changes' onClick={() => { }}>
            <span>Transformational Changes</span>
          </Menu.Item>
          <Menu.Item name='log' onClick={() => { }}>
            <span>Daily Log</span>
          </Menu.Item>
          <Menu.Item name='log' onClick={() => { }}>
            <span>Self Talk</span>
          </Menu.Item>
        </Menu>
      </div>
      <Menu fixed='top'>

        <Menu.Item>
          <Icon name='sidebar' />
        </Menu.Item>
        {_.map(leftItems, item => <Menu.Item {...item} />)}
        <Menu.Menu position='right'>
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

const styles = {
  sidebar: {
    margin: 0,
    padding: 0,
    width: '200px',
    backgroundColor: '#f1f1f1',
    position: 'fixed',
    height: '100%',
    overflow: 'auto',
    borderStyle: 'solid',
    borderColor: '#f1f1f1',
    borderWidth: '0px .5px 0px 0px'
  },
  sidebarItem: {
    fontSize: '24px',
  },
  menuStyle: {
    display: 'flex',
    flexDirection: 'row'
  }
}
export default NavbarDesktop
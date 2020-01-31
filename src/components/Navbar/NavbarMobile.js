import React from 'react'
import { Icon, Image, Menu, Sidebar } from 'semantic-ui-react'


const NavbarMobile = ({ children, leftItems, onPusherClick, onToggle, rightItems, visible }) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='push'
        icon='overlay'
        items={[...leftItems, ...rightItems]}
        vertical
        visible={visible}>
        <Menu.Item as='a' active>
          Home
        </Menu.Item>
        <Menu.Item as='a'>Goals</Menu.Item>
        <Menu.Item as='a'>Affirmations</Menu.Item>
        <Menu.Item as='a'>Careers</Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={styles.pusher}>
        <Menu fixed='top' >
          <Menu.Item>
          <Icon name='crosshairs' /> 
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item onClick={onToggle}>
              <Icon name='sidebar' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

const styles = {
  pusher: {
    minHeight: '100vh',
    marginTop: '2.85714286em',
  },
  sidebarStyle: {
    marginTop: '2.85714286em',
  },
}

export default NavbarMobile
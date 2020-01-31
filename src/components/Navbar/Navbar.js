
import React, { Component } from 'react'
import { Responsive } from 'semantic-ui-react'

import NavbarChildren from './NavbarChildren'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

class NavBar extends Component {


  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state

    if (visible) this.setState({ visible: false })
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props
    const { visible } = this.state

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavbarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavbarChildren>{children}</NavbarChildren>
          </NavbarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <NavbarDesktop leftItems={leftItems} rightItems={rightItems} />
          <div style={styles.segmentStyle}>
          <NavbarChildren>{children}</NavbarChildren>
          </div>
        </Responsive>
      </div>
    )
  }
}

const styles = {
  segmentStyle: {
      marginTop: '2.85714286em',
      marginLeft: '200px',
    }
}

export default NavBar;
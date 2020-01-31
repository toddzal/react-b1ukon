
import React from 'react'
import { Container } from 'semantic-ui-react'

const NavbarChildren = ({ children }) =>
   { 
        return(<Container style={styles.container}>{children}</Container>)

    }

const styles = {
    container: {
        //paddingTop: '64px'
    }
}

export default NavbarChildren
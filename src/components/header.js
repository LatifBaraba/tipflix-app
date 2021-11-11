import { Dropdown, Navbar, Nav } from 'rsuite'

const Header = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>tipflix</h1>
                <Navbar>
                    <Nav>
                        <Dropdown title="Tv Series">
                            <Dropdown.Item>Company</Dropdown.Item>
                            <Dropdown.Item>Team</Dropdown.Item>
                        </Dropdown>
                        <Dropdown title="Movies">
                            <Dropdown.Item>Company</Dropdown.Item>
                            <Dropdown.Item>Team</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Navbar>
            </div>
        </div>
    )
}

export default Header

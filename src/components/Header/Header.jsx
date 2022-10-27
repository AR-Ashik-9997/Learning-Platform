import React, { useContext } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Header = () => {
  const { user, Logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDarkMode, setDarkMode] = React.useState(true);
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  if (isDarkMode === true) {
    document.body.style.backgroundImage =
      "linear-gradient(to right, #231f72, #1e5395)";      
  } else {
    document.body.style.backgroundImage =
      "linear-gradient(to right, #080D27, #1B2841)";
  }
  const handleSignOut = () => {
    Logout().then(() => {});
    navigate("/").catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fs-1 text-white">
            <img
              alt=""
              src="https://destm.com/assets/destm-logo-social.png"
              width="70"
              height="70"
              className="d-inline-block align-center "
            />
            Skill Platform
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="fs-5 text-white" as={Link} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link
                className="fs-5 text-white"
                as={Link}
                to="/following-question-answer"
              >
                FAQ
              </Nav.Link>
              <Nav.Link className="fs-5 text-white" as={Link} to="/blog">
                Blog
              </Nav.Link>
              {user && user?.photoURL ? (
                <Dropdown>
                  <Nav.Link
                    as={Link}
                    data-toggle="tooltip"
                    data-placement="top"
                    title={user?.displayName}
                    className="nav-link"
                  >
                    <img
                      src={user?.photoURL}
                      variant="top"
                      className="user-profile "
                      alt="Avatar"
                    />
                  </Nav.Link>
                </Dropdown>
              ) : (
                <></>
              )}
              {user?.uid ? (
                <div className="d-flex align-items-center">
                  <Button
                    onClick={handleSignOut}
                    variant="outline-primary btn-md text-white"
                  >
                    Sign-Out
                  </Button>
                </div>
              ) : (
                <div className="d-flex align-items-center d-grid gap-3 d-block">
                  <Link to="/sign-in">
                    <Button variant="outline-primary btn-md text-white">
                      Sign-In
                    </Button>
                  </Link>
                  <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={30}
                  />
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

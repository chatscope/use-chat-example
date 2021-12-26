import {Col, Nav, NavItem, NavLink, Row} from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="pt-4">
            <hr />
            <Row>
                <Col>
                    <Nav>
                        <NavItem>
                            <NavLink as="span">This demo is Powered by <a href="https://chatscope.io">chatscope</a>:</NavLink>
                            <Nav as="ul" className="d-flex flex-column">
                                <NavItem as="li" className="pl-0">
                                    <NavLink as="span">UI components: <a href="https://github.com/chatscope/chat-ui-kit-react">@chatscope/chat-ui-kit-react</a></NavLink>
                                </NavItem>
                                <NavItem as="li" className="pl-0">
                                    <NavLink as="span">Headless chat: <a href="https://github.com/chatscope/use-chat">@chatscope/use-chat</a></NavLink>
                                </NavItem>
                            </Nav>
                        </NavItem>
                    </Nav>
                </Col>
                <Col>
                    <Nav>
                        <NavItem>
                            <NavLink as="span">Other demos</NavLink>
                            <Nav as="ul" className="d-flex flex-column">
                                <NavItem as="li" className="pl-0">
                                    <NavLink href="https://demo.chatscope.io">Full featured demo app</NavLink>
                                </NavItem>
                                <NavItem as="li" className="pl-0">
                                    <NavLink href="https://chatscope.io/demo/chat-friends/">Chat friends</NavLink>
                                </NavItem>
                                <NavItem as="li" className="pl-0">
                                    <NavLink href="https://mars.chatscope.io/">Mars chat</NavLink>
                                </NavItem>
                            </Nav>
                        </NavItem>
                    </Nav>
                </Col>

                <Col>
                    <Nav>
                        <NavItem>
                            <NavLink as="span">Source code</NavLink>
                            <Nav as="ul" className="d-flex flex-column">
                                <NavItem as="li" className="pl-0">
                                    <NavLink href="https://github.com/chatscope/use-chat-example">@chatscope/use-chat-example</NavLink>
                                </NavItem>
                                <NavItem as="li" className="text-right mt-4">
                                    <strong>Happy coding!</strong>
                                </NavItem>
                            </Nav>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        </footer>
    );
};
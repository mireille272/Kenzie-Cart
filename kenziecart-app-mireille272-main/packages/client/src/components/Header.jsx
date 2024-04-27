import React from "react"
import { Link} from "react-router-dom"
import { Navbar, Nav, Badge, Container, Form} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag"
import { useUI, useProvideCart } from "../hooks"
import CartSidebar from "./CartSidebar/index"
import { useCurrency } from "../hooks/UseCurrency"
export default function Header() {
  const { openSidebar } = useUI()
  const { state } = useProvideCart()
  const {  currencySymbol, currentCurrency} = useCurrency()

  const handleCurrencyToggle = () => {
    if (currencySymbol === "$") {
      currentCurrency()
    } else {
      currentCurrency("$", 1)
    }
  }

  return (
    <>
      <CartSidebar />
      <Navbar expand="lg" style={{ backgroundColor: "#1D3868" }}>
        {/* <Container> */}
        <Navbar.Brand>
          {/* <Link to={"/"}> */}
            <Nav.Link style={{padding:"20px"}}>
              <img src="/logo.png" alt="logo" width="142px" />
            </Nav.Link>
          {/* </Link> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ms-auto" style={{ justifyContent: "center", alignItems: "center"}}>
            <Form.Check.Label
              htmlFor="currency-switch"
              style={{ color: "white" }}
            >
              {currencySymbol} &nbsp;
            </Form.Check.Label>
            <Form.Check
              type="switch"
              id="currency-switch"
              // onChange={handleCurrencyToggle}
              onClick={currentCurrency}
              // checked= {currencySymbol === "$"}
            />
    
            <Link
              className="d-flex align-items-center"
              to={`/`}
              style={{ color: "white", marginRight: "20px" }}
            >
            </Link>
            <Nav.Link style={{color: "white", textDecoration:"none"}} >Shop</Nav.Link>

            <div
              className="d-flex align-items-center ml-1"
              onClick={openSidebar}
              style={{ color: "white", cursor: "pointer", marginRight: "20px", paddingRight: "50px"}}
              
            >
              Cart
              <FontAwesomeIcon
                className="ml-2 mb-1"
                icon={faShoppingBag}
                style={{ color: "white", padding:"20px"}}
              />
              {state.itemCount > 0 && (
                <Badge pill variant="primary" className="mb-4 mr-2">
                  <p className="mb-0">{state.itemCount}</p>
                </Badge>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}


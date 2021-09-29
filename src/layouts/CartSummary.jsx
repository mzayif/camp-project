import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
             <Dropdown item text='Language'>
                <Dropdown.Menu>
                    <Dropdown.Item>Lenova Laptop</Dropdown.Item>
                    <Dropdown.Item>Asus Laptop</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart" >Sepetiniz</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

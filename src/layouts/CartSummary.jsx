import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dropdown, Label } from 'semantic-ui-react'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map(c => (
                            <Dropdown.Item key={c.product.id}>
                                {c.product.productName}
                                <Label>
                                    {c.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepetiniz</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

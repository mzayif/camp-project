import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(result => setProducts(result.data.data));
    },[])



    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategory</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        products.map(p => (
                            <Table.Row key={p.id}>
                                <Table.Cell><Link to={`/products/${p.productName}`}>{p.productName}</Link></Table.Cell>
                                <Table.Cell>{p.unitePrice}</Table.Cell>
                                <Table.Cell>{p.unitesInStock}</Table.Cell>
                                <Table.Cell>{p.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{p.category.categoryName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

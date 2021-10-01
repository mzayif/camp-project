import React from 'react'
import ProductList from '../pages/ProductList'
import Category from './Category'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Category />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/product/add" component={ProductAdd} />
                        <Route path="/products/:productName" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

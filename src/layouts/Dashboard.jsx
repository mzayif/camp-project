import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Category from './Category'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Category />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:productName" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

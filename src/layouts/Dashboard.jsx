import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Category from './Category'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Category />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <ProductList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

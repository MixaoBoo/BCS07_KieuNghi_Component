import React, { Component } from 'react'
import Item from './Item'

export default class ListItem extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <Item />
                        </div>
                        <div className='col-3'>
                            <Item />
                        </div>
                        <div className='col-3'>
                            <Item />
                        </div>
                        <div className='col-3'>
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

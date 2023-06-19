import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className='bg-light'>
                <div className='container '>
                    <div className='mb-5 p-5 '>
                        <h1 className='fs-1 fw-medium mb-4'> A Warm Welcome!</h1>
                        <p className='fw-lighter mb-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <button className='btn btn-primary'> Call to action!</button>
                    </div>
                </div>
            </div>

        )
    }
}

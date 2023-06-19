import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className='w-100 bg-dark text-white mb-5'>
                <div className='container'>
                    <div className='d-flex justify-content-between align-items-center p-2 '>
                        <h3>Start Bootstrap</h3>
                        <ul className='d-inline-flex list-unstyled mt-3'>
                            <li><a className='text-decoration-none mx-2 nav-link' href="https://startbootstrap.com/previews/heroic-features" >Home</a></li>
                            <li><a className='text-decoration-none mx-2 nav-link' href="https://startbootstrap.com/previews/heroic-features">About</a></li>
                            <li><a className='text-decoration-none mx-2 nav-link' href="https://startbootstrap.com/previews/heroic-features">Services</a></li>
                            <li><a className='text-decoration-none mx-2 nav-link' href="https://startbootstrap.com/previews/heroic-features">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

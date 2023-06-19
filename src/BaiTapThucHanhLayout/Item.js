import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="card text-center mb-5 mx-2">
                <img className="card-img-top" src="https://i.pravatar.cc/300" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title"> Card Title</h4>
                    <p className="card-text fw-lighter">With Bootstrap 5, we've created a fresh new layout for this template!As always, Start Bootstrap has a powerful collectin of free templates. </p>
                </div>
                <div className="card-footer bg-light py-3">
                    <button className='btn btn-primary'>Find Out More</button>
                </div>
            </div>
        )
    }
}

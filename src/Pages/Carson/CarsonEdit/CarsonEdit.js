import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'


class CarsonEdit extends Component {
    state = {
        invalidForm: true,
        formData: this.props.location.state ? this.props.location.state.carsonLine : null
    }

    formRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleUpdateCarsonLine(this.state.formData)
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    renderEditForm() {
        return (
            <div className="add-dana-page">
                <div className='add-dana-form'>
                    <form 
                        ref={this.formRef} 
                        autoComplete="off" 
                        onSubmit={this.handleSubmit}
                    >
                        <div className='form-item'>
                            <input
                                name="text"
                                value={this.state.formData.text}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    
                        <div className='add-links'>
                            <Link className='cancel-button' to='/carsonpage'>Cancel</Link>
                            <button
                                className="btn"
                                type="submit"
                                disabled={this.state.invalidForm}>
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formData ? this.renderEditForm() : <Redirect to='/' />;
    }
}

export default CarsonEdit;
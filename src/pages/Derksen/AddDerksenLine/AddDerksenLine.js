import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './AddDerksenLine.css'

class AddDerksenLine extends Component {
  state = {
    invalidForm: true,
    formData: {
      text: ''
    }
  }

  formRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddDerksenLine(this.state.formData, this.props.history)
  }
  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }

  render() {
    return (
      <div className="add-dana-page">
        <div className='add-dana-form'>
          <form
            ref={this.formRef}
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <p className="add-a-line">Add a Line</p>
            <div className='form-item'>
              <input
                className="dana-line-text"
                name="text"
                value={this.state.formData.text}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="buttons">
              <button
                className="btn"
                type="submit"
                disabled={this.state.invalidForm}
              >
                Add
              </button>
              <Link className='cancel-button' to='/derksen3'>Cancel</Link>
            </div>
          </form>
        </div>
        <Link to="/derksenpage" className="skip">skip</Link>
      </div>
    )
  }
}

export default AddDerksenLine

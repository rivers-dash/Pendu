import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './addExpression.css'


const required = value => value ? undefined : 'Required'

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength45 = maxLength(45)
const maxLength12 = maxLength(12)

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength8 = minLength(8)
const minLength3 = minLength(3)

const renderInput= ({ input, icon, label, type, value, meta: { touched, error, warning } }) => (
	<div className="input-group mb-2">
		<div className="input-group-prepend">
			<div className="input-group-text">
				{icon}
			</div>
		</div>

    <input {...input} placeholder={label} type={type}
			className={`form-control input ${value ? '' : "is-invalid"}`}
		/>

		<div className="invalid-feedback">
			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
)

const renderTextarea= ({ input, icon, label, type, value, meta: { touched, error, warning } }) => (
	<div className="input-group mb-2">
		<div className="input-group-prepend">
			<div className="input-group-text">
				{icon}
			</div>
		</div>

    <textarea {...input} placeholder={label} type={type}
			className={`form-control input ${value ? '' : "is-invalid"}`}
		/>

		<div className="invalid-feedback">
			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
)

let AddExpressionForm = props => {
  const { handleSubmit } = props
  return (
    <form id="form" className="form" onSubmit={handleSubmit}>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Expression</label>
					<Field
						name="expression" type="text" label="Expression"
						icon={<span role="img" aria-label="red box A">🅰️</span>}
		        component={renderTextarea}
		        validate={[ required, maxLength45, minLength8 ]}
		      />
			</div>


			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Clue</label>
				<Field
					name="clue" type="text" label="Clue"
					icon={<span role="img" aria-label="question mark">❓</span>}
					component={renderInput}
					validate={[ required, maxLength12, minLength3 ]}
				/>
			</div>

			<div className="d-flex justify-content-center mt-4">
				<button type="submit" className="btn btn-outline-danger" onClick={this.formSubmit}>Submit</button>
			</div>

    </form>
  )
}

AddExpressionForm = reduxForm({
  // a unique name for the form
  form: 'addExpression'
})(AddExpressionForm)

export default AddExpressionForm

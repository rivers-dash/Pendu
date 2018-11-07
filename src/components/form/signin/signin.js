import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './signin.css'


const required = value => value ? undefined : 'Required'

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength24 = maxLength(24)
const maxLength12 = maxLength(12)

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength8 = minLength(8)
const minLength3 = minLength(3)

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords don\'t match' : undefined;

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

let SigninForm = props => {
  const { handleSubmit, error } = props
  return (
    <form id="form" className="form" onSubmit={handleSubmit}>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
					<Field
						name="username" type="text" label="Username" serverError={error}
						icon={<span role="img" aria-label="credit card">💳</span>}
		        component={renderInput}
		        validate={[ required, maxLength24, minLength8 ]}
		      />
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">First name</label>
					<Field
						name="firstName" type="text" label="First name" serverError={error}
						icon={<span role="img" aria-label="pen">🖋</span>}
						component={renderInput}
						validate={[ required, maxLength12, minLength3 ]}
					/>
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Last name</label>
					<Field
						name="lastName" type="text" label="Last name" serverError={error}
						icon={<span role="img" aria-label="pen">🖋</span>}
						component={renderInput}
						validate={[ required, maxLength12, minLength3 ]}
					/>
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Password</label>
					<Field
						name="password" type="password" label="Password"
						icon={<span role="img" aria-label="lock">🔒</span>}
		        component={renderInput}
		        validate={[ required, maxLength24, minLength8 ]}
		      />
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Password check</label>
					<Field
						name="passwordCheck" type="password" label="Password check"
						icon={<span role="img" aria-label="lock">🔒</span>}
		        component={renderInput}
		        validate={[ required, maxLength24, minLength8, passwordsMatch ]}
		      />
			</div>

			<div className="d-flex justify-content-center mt-4">
				<button type="submit" className="btn btn-outline-danger" onClick={this.formSubmit}>Sign In</button>
			</div>

    </form>
  )
}

SigninForm = reduxForm({
  form: 'signin'
})(SigninForm)

export default SigninForm

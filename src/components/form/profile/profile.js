import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './profile.css'


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
  value !== allValues.newPassword ? 'Passwords don\'t match' : undefined;

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

let ProfileForm = props => {
  const { handleSubmit, error, user } = props
  return (
    <form id="form" className="form" onSubmit={handleSubmit}>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
					<Field
						name="username" type="text" label={user.username} serverError={error}
						icon={<span role="img" aria-label="credit card">💳</span>}
		        component={renderInput}
		        validate={[ maxLength24, minLength8 ]}
		      />
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">First name</label>
					<Field
						name="firstName" type="text" label={user.firstName} serverError={error}
						icon={<span role="img" aria-label="pen">🖋</span>}
						component={renderInput}
						validate={[ maxLength12, minLength3 ]}
					/>
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Last name</label>
					<Field
						name="lastName" type="text" label={user.lastName} serverError={error}
						icon={<span role="img" aria-label="pen">🖋</span>}
						component={renderInput}
						validate={[ maxLength12, minLength3 ]}
					/>
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">New Password</label>
					<Field
						name="newPassword" type="password" label="New Password"
						icon={<span role="img" aria-label="lock">🔒</span>}
		        component={renderInput}
		        validate={[ maxLength24, minLength8 ]}
		      />
			</div>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">New Password Check</label>
					<Field
						name="newPasswordCheck" type="password" label="New password check"
						icon={<span role="img" aria-label="lock">🔒</span>}
		        component={renderInput}
		        validate={[ maxLength24, minLength8, passwordsMatch ]}
		      />
			</div>

			<div className="col-auto mt-5">
				<label className="sr-only" htmlFor="inlineFormInputGroup">Password</label>
					<Field
						name="currentPassword" type="password" label="Current Password"
						icon={<span role="img" aria-label="lock">🔒</span>}
		        component={renderInput}
		        validate={[ required, maxLength24, minLength8 ]}
		      />
			</div>

			<div className="d-flex justify-content-center py-4">
				<button type="submit" className="btn btn-outline-danger" onClick={this.formSubmit}>Save</button>
			</div>

    </form>
  )
}

ProfileForm = reduxForm({
  form: 'profile'
})(ProfileForm)

export default ProfileForm

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { InputStyled, DivStyled } from './InputStyled'
import Wrapper from '../Wrapper/Wrapper'

// * Define proptypes object
const InputProptypes = {
	type: PropTypes.oneOf(['text', 'email']).isRequired,
	color: PropTypes.string,
	styler: PropTypes.func,
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	required: PropTypes.bool,
	capitalize: PropTypes.bool,
	validator: PropTypes.instanceOf(RegExp),
	wrapper: PropTypes.shape({
		handleClick: PropTypes.func.isRequired,
		icon: PropTypes.shape({
			disabled: PropTypes.string.isRequired,
			enabled: PropTypes.string.isRequired,
		}).isRequired,
		alt: PropTypes.string.isRequired,
	}),
}

// * Define the type to infer props
type InputProps = PropTypes.InferProps<typeof InputProptypes>

/**
 * ! Define the input component
 * * whitehatdevv - 2022/01/26
 * @param props {props}
 */
const Input: React.FC<InputProps> = (props: any) => {
	// * Properties
	const [value, setValue] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)
	// * Lifecycle
	useEffect(() => {
		props.handleChange(value)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value])

	// * Methods
	const ValidateValue = () => setIsValid(props.validator.test(value))

	// * View Builder
	return (
		<DivStyled>
			<InputStyled
				color={props.color}
				type={props.type}
				required={props.required || false}
				value={value}
				onChange={function (ev) {
					setValue(ev.target.value)
				}}
				onKeyUp={function () {
					if (props.validator) {
						ValidateValue()
					}
				}}
				placeholder={props.placeholder}
				autoCapitalize={props.capitalize || 'false'}></InputStyled>

			{props.wrapper ? (
				<Wrapper
					disabled={props.validator ? isValid : true}
					handleClick={props.wrapper.handleClick}
					icon={props.wrapper.icon}
					alt={props.wrapper.alt}
				/>
			) : null}
		</DivStyled>
	)
}

// * Proptypes
Input.propTypes = InputProptypes

// * Export component
export default Input

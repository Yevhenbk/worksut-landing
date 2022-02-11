import React from "react";
import PropTypes from 'prop-types'
import {LabelStyled} from './LabelStyled'

// * Define proptypes object
const LabelProptypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	fontWeight: PropTypes.string,
	fontSize: PropTypes.string,
	styler: PropTypes.func,
	fontFamily: PropTypes.string
}

// * Define the type to infer props
type LabelPropsTyped = PropTypes.InferProps<typeof LabelProptypes>


/**
 * ! Define the landing title component
 * * MGTablante y CarolTraba - 2022/02/08
 * @param props {props}
 */

 const Label: React.FC<LabelPropsTyped> = (props: any) => {
	return (
		<>
			<LabelStyled
				color={props.color}
				fontWeight={props.fontWeight}
				fontSize={props.fontSize}
				fontFamily={props.fontFamily}
				backGround = {props.backGround}>
				{props.styler ? props.styler(props.text) : props.text}

			</LabelStyled>
		</>
	)
}

// * Proptypes
Label.propTypes = LabelProptypes

// * Export component
export default Label


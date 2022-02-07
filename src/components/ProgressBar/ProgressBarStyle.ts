import styled from 'styled-components'
import { Tokens } from '../../static/Colors'

// * Create styled div
export const ProgressBarContainer = styled.div`
	width: 100%;
	height: 4pt;
`

// * Interface definition for props configuration
interface ProgressStatusProps {
	progress: number
}

// * Created sub progress div
export const ProgressStatus = styled.div<ProgressStatusProps>`
	background-color: ${Tokens.Colors.DarkMode.General.Primary};
	height: 4pt;
	width: ${(props) => props.progress}%;
`

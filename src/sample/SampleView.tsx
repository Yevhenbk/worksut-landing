import { Next, Back } from '../functions/functions.slider'
import { Styler } from '../services/Settings/Settings.Styler'
import { Tokens } from '../static/Colors'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../core/core.app.hooks'
import './SampleView.scss'
import Input from '../components/Input/Input'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import Scrollable from '../components/Scrollable/Scrollable'
import SocialSection from '../components/SocialSection/SocialSection'
import Text from '../components/Text/Text'
import Slide2 from '../views/app/Slide-2/Slide-2'

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 */

const SampleView = () => {
	const position = useAppSelector((state) => state.slider.position)
	const dispatch = useAppDispatch()
	const [email, setEmail] = useState<string>()
	useEffect(() => {
		console.log(email)
	}, [email])

	return (
		<>
			<div>
				<div>
					<h1 className='positionTitle'>Position {position}</h1>
					<button
						className='positionButton'
						onClick={() => dispatch(Back())}>
						Back
					</button>
					<button
						className='positionButton'
						onClick={() => dispatch(Next())}>
						Next
					</button>
				</div>
				<Input
					color={Tokens.Colors.DarkMode.Text.Primary}
					type='email'
					placeholder='Enter your email'
					handleChange={setEmail}
					validator={new RegExp('^[a-z]{2,}$')}
					wrapper={{
						icon: {
							enabled: 'wrapper_input_enabled.png',
							disabled: 'wrapper_input_disabled.png',
						},
						alt: 'Icon setted to sent email',
						handleClick: () => {
							console.log('Click')
						},
					}}
				/>
			</div>
			<div>
				<Input
					color={Tokens.Colors.DarkMode.General.Primary}
					type='email'
					placeholder='Introduce tu correo electronico'
					handleChange={setEmail}
					validator={new RegExp('^[a-z]{2,}$')}
					wrapper={{
						icon: {
							enabled: 'wrapper_input_enabled.png',
							disabled: 'wrapper_input_disabled.png',
						},
						alt: 'Icon setted to sent email',
						handleClick: () => {
							console.log('Click')
						},
					}}
				/>
			</div>
			<div className='titleSections'>
				<h1>Social Section</h1>
				<br />
				<SocialSection
					networks={[
						{
							icon: Tokens.Icons.Social.Instagram,
							url: Tokens.URL.Social.Instagram,
						},
						{
							icon: Tokens.Icons.Social.Twitter,
							url: Tokens.URL.Social.Twitter,
						},
						{
							icon: Tokens.Icons.Social.Linkedin,
							url: Tokens.URL.Social.Linkedin,
						},
					]}
				/>
			</div>
			<div className='mt-3'>
				<Text
					color={Tokens.Colors.DarkMode.General.Primary}
					fontWeight={Tokens.Typography.Weights.Bolder}
					fontSize={Tokens.Typography.Sizes.Website.xxxxLarge}
					text='bienvenido a la nueva forma de encontrar trabajo y contratar personas.'
					width={20}
				/>
			</div>
			<div className='mt-3'>
				<Text
					color={Tokens.Colors.DarkMode.Text.Tertiary}
					fontWeight={Tokens.Typography.Weights.Regular}
					fontSize={Tokens.Typography.Sizes.Website.xLarge}
					text='bienvenido al cambio.'
					styler={(text) => Styler.UpperCasing(text)}
				/>
			</div>
			<div className='mt-3'>
				<Text
					color={Tokens.Colors.DarkMode.Text.Primary}
					fontWeight={Tokens.Typography.Weights.Black}
					fontSize={Tokens.Typography.Sizes.Website.xxxxLarge}
					text='text component'
					styler={(text) => Styler.UpperCasing(text)}
				/>
			</div>
			<div className='mt-3'>
				<ProgressBar progress={100}></ProgressBar>
			</div>
			<div className='mt-3'>
				<Scrollable />
			</div>
			<div className='mt-3'>
				<Slide2
					bgColor={Tokens.Colors.DarkMode.Backgrounds.Secondary}
					width={100}
					height={100}
				/>
			</div>
		</>
	)
}

// * Export the application
export default SampleView

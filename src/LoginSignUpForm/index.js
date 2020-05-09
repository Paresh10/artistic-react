import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Header, Image, Message } from 'semantic-ui-react'
import '../index.css'

export default function LoginSignForm({login, signup}) {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
		name: ''
	})

	const [action, setAction] = useState('Login')

	const switchForm = () => {
		if (action === 'Login') {
			setAction('Join Now')
		}
		else {
			setAction('Login')
		}
	}

	const handleChange = (event) => {
		setUserInfo({
			//Spread operator
			...userInfo,
			[event.target.name]: event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (action === 'Signup') {
			signup(userInfo)
		}
		else {
			login(userInfo)
		}
	}

	return(
		<Segment placeholder>
			<Header as='h1' style={{color: '#8A2BE2', fontSize:'3em', marginRight: '10px', marginTop: '100px', marginBottom: '-100px'}} textAlign='center'>
				 Artistic 
			</Header>
			<Grid columns={2} relaxed='very' stackable inverted textAlign='center' style={{ height: '100vh', marginTop: '0px' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450}}>

				    <Header as='h2' style={{ color: '#8A2BE2', marginLeft: '15px'}} textAlign='left'>
              			<Image src="" />
              			 {action}!
           			</Header>

					<Form onSubmit={handleSubmit}>
					{
						action === 'Join Now'
						&&
					
						<Form.Input
						name='name'
						type='name'
						placeholder='type your name here'
						value={userInfo.name}
						onChange={handleChange}
						/>
					}					
						<Form.Input
						icon='user'
						iconPosition='left'
						name='email'
						type='email'
						placeholder='type your email here'
						value={userInfo.email}
						onChange={handleChange}
						/>
						<Form.Input
						icon='lock'
						iconPosition='left'
						name='password'
						type='password'
						placeholder='choose password'
						value={userInfo.password}
						onChange={handleChange}
						/>

						<Button fluid size='large' content={action}  style={{ backgroundColor: '#8A2BE2', color: 'white' }} /> 
					</Form>
				</Grid.Column>

				<Grid.Column>
				{
					action === 'Login'
					?
					<h5>

						New to Artistic?
						<span className="link" onClick={switchForm}>
							<Button style={{backgroundColor: '#8A2BE2', color: 'white'}} content='Signup' icon='signup' size='big'></Button>
						</span>

					</h5>
					:
					<h5>
               			Already on Artistic? <span className="link" onClick={switchForm}> Log in</span>
               		</h5>
				}
				</Grid.Column>
			</Grid>

			<Divider vertical>Or </Divider>

		</Segment>
	)

}// main func
import React, { useState } from 'react'
import { Button, Divider, Form, Grid, Segment, Header, Image } from 'semantic-ui-react'
import '../index.css'

import { Message } from 'semantic-ui-react'

export default function LoginSignForm({login, signup, message}) {
	const [userInfo, setUserInfo] = useState({
		email: '',
		password: '',
		name: ''
	})

	const [action, setAction] = useState('Login')

	const switchForm = () => {
		if (action === 'Login') {
			setAction('Signup')
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

			<Header as='h1' style={{color: '#816687', fontSize:'3em', marginRight: '10px', marginTop: '100px', marginBottom: '-100px', textAlign:'center'}}>
				 Artistic 
			</Header>
			{
				action === 'Login'
				?
			<h2 style={{ textAlign: 'center', paddingLeft: '15px', marginTop: '100px', marginBottom: '-100px', fontFamily: 'Monteserrat', fontWeight: '300'}}> 
			Welcome back to the Artistic world! </h2>
			:
			<h2 style={{ textAlign: 'center', paddingLeft: '15px', marginTop: '100px', marginBottom: '-100px', fontFamily: 'Monteserrat', fontWeight: '300'}}> 
			Hey! Let's get you connected with the artistic world! </h2>	
			}
			

			<Grid columns={2} relaxed='very' stackable inverted textAlign='center' style={{ height: '100vh', marginTop: '0px' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450}}>

					<h5 style={{ color: 'red' }}> {message} </h5>

				    <Header as='h2' style={{ color: '#816687', marginLeft: '15px'}} textAlign='left'>
              			<Image src="" />

              			 {action}!
           			</Header>

					<Form onSubmit={handleSubmit}>
					{
						action === 'Signup'
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

						<Button fluid size='large' content={action}  style={{ backgroundColor: '#816687', color: 'white' }} /> 
					</Form>
				</Grid.Column>

				<Grid.Column>
				{
					action === 'Login'
					?
					<h4>

						New to Artistic?
						<span className="link" onClick={switchForm}>
							<Button style={{backgroundColor: '#816687', color: 'white'}} content='Signup' icon='signup' size='big'></Button>
						</span>

					</h4>
					:
					<h4>
               			Already on Artistic? <span className="link" onClick={switchForm}> Log in</span>
               		</h4>
				}
				</Grid.Column>
			</Grid>

			<Divider vertical>Or </Divider>

		</Segment>
	)

}// main func
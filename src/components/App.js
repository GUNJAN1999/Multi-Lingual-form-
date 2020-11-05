import React from 'react';
import ReactDOM from 'react-dom';
import UserCreate from './UserCreate';

class App extends React.Component
{
	state={language:'english'};
	onLanguageChange=(language)=>{
		this.setState({language});
	}
	
	render()
	{
		console.log(this.state.language);
		return(
			<div className="ui container">
				<div>
					Select a language 
					
					<i 
					className="flag us"
					onClick={()=>this.onLanguageChange('english')}/>
					<i 
					className="flag fr"
					onClick={()=>this.onLanguageChange('french')}/>
				</div>
				<hr/>
				<UserCreate/>
			</div>
		);
	}
}

export default App;
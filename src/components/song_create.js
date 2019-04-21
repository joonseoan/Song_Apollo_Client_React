import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import query from '../queries/fetchSongs';
import AddSong from '../mutations/AddSong';

class SongCreate extends Component {

	constructor(props) {
		super(props);
		this.state = { title: ''}
	}

	onSubmit (e) {
		e.preventDefault();

			this.props.mutate({
			variables : {
				// it goes to '$title' down below
				title: this.state.title 
			},
			// refetching by importing the query
			refetchQueries: [{query}]

		// redirect to root directory
		}).then(() => {
			this.props.history.push('/');
		});
		
	}
	
	render() {
		// form to create Song title and lyric
		return <div className="container">

			<Link to="/">Back</Link>
			<h3>Create a New Song</h3>
			<form onSubmit={ this.onSubmit.bind(this) }>
				<label>Song Title</label>
				<input 
					type='text' 
					onChange = { e => {this.setState({title: e.target.value})}}
					value = {this.state.title}
				/>				
			</form>
		</div>;
	}
}

// export default SongCreate;
export default graphql(AddSong)(SongCreate);
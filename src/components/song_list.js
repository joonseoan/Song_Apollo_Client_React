import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import DeleteSong from '../mutations/DeleteSong';
import query from '../queries/fetchSongs';

class SongList extends Component {

	onSongDelete(id) {

		this.props.mutate({ 
			variables: { id }	
		})
		// fetching with data property of query
		.then(() => this.props.data.refetch());
	}

	// delete event with song list
	renderSongs() {
		const { songs } = this.props.data;
		return songs.map(song => {
			const { id, title } = song;
			return <li 
				className = "collection-item"
				key = { id }>
					<Link to={`/songs/${id}`}>
						{ title }
					</Link>
					<i className="material-icons" onClick={ () => this.onSongDelete(id) }>
						delete
					</i>
			</li>;
		});
	}

	render() {
		if(this.props.data.loading) return<div>Loading...</div>
		return(<div>
			<ul className="collection">
				{ this.renderSongs() }
			</ul>
			{/* add button with Link */}
			<Link
				to="/songs/new"
				className="btn-floating btn-large red right"
			>
				<i className="material-icons">add</i>
			</Link>
		</div>);	
			
	}
}

export default graphql(DeleteSong)(
	graphql(query)(SongList)
);
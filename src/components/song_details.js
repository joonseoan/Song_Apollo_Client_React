import React,  { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSongDetails from '../queries/fetchSongDetails';
import { Link } from 'react-router-dom';

import LyricCreate from './lyric_create';
import LyricList from './lyric_list';

// parent component for LyciCreate and LyricList
class SongDetails extends Component {
    
    render() {
        if(this.props.data.loading) return <div />;
        const { title, lyrics } = this.props.data.song;

        // rendering LyricList and LyricCreate at a same page
        return(
            <div className="container" >
                <Link to="/">Back</Link>
                <h3>{ title }</h3>
                <LyricList lyrics = { lyrics } />
                <LyricCreate songId = { this.props.match.params.id }/>
            </div>
        );
    }
}

// To fetch data for a specific song
export default graphql(fetchSongDetails, {
    options: (props) => { 
        return { variables: { id: props.match.params.id }}}
})(SongDetails);
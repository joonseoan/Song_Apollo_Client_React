import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import AddLyricToSong from '../mutations/AddLyricToSong';

class LyricCreate extends Component {

    constructor(props) {
        super(props);
        this.state = { content: ''};
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            } 
        }).then(() => { this.setState({content: ''}); })
    }

    render() {

        // form to add Lyric to a specific song
        return(
            <div>
                <form onSubmit={ this.onSubmit.bind(this) }>
                    <label>Add a Lyric</label>
                    <input 
                        value = { this.state.content }
                        onChange = { (e) => { this.setState( {content: e.target.value});} }
                    />
                </form>
            </div>
        );
    }
}

export default graphql(AddLyricToSong)(LyricCreate);
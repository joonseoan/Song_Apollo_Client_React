import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
// import SongList from './components/song_list';
import SongCreate from './components/song_create';
import SongDetails from './components/song_details';

// connects to the server-side graphql, express-graphql with uri address
const client = new ApolloClient({
	uri: 'https://song_server.joonan.net/graphql'
});

const Root = () => {
  return (
  	<ApolloProvider client={ client }>
  		{/* defining routes: App is a most parent components */}
		<BrowserRouter> 
			<div>
				<Switch>
					<Route path='/' exact component={ App } />
					<Route path='/songs/new' exact component={ SongCreate } />
					<Route path='/songs/:id' component={ SongDetails } />
				</Switch>
			</div>
  		</BrowserRouter>	
  	</ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
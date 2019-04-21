import gql from 'graphql-tag';

// Since defining an object id in index.js
/* 
    const client = new ApolloClient({
	dataIdFromObject: o => o.id
});
*/
// the "id" of contents returns. 'likes' requires the id to immediatly updated,
 export default gql`
    mutation AddLyricToSong ($content: String!, $songId: ID!){
        
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

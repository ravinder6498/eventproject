import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Button, Text } from 'galio-framework';
import { Header, ListItem } from 'react-native-elements';

const Loading = props => (
  <View>
    <Text>Loading...</Text>
  </View>
);

export default function ArtistListScreen(props) {
  const [ artists, setArtists ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const query = gql`
  query {
    artistMany {
      _id
      name
      image
    }
  }
`
  const { error } = useQuery(query, {
    onCompleted: ({ artistMany }) => {
      setArtists(artistMany);
      setLoading(false);
    },
  });

  const defaultAvatarUrl = 'http://dummyimage.com/800x600.png/dddddd/000000';
  
  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView>
      {
        error ? <Text>{ error.message }</Text> :
        artists.map((artist, index) => {
          return (
            <ListItem
              key={ index }
              leftAvatar={{ source: { uri: artist.image ? artist.image : defaultAvatarUrl }}}
              title={ artist.name }
              onPress={ () => {
                props.navigation.navigate('ArtistDetails', { artistId: artist._id })
              } }
              bottomDivider
            />
          )
        })
      }
    </ScrollView>
  );
}

ArtistListScreen.navigationOptions = {
  title: "Artists",
};

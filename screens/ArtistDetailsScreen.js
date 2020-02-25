import React from 'react';
import { Text, StyleSheet, View, ScrollView, Linking } from 'react-native';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Card, SocialIcon, Image } from 'react-native-elements';


export default function ArtistDetailsScreen(props) {
  const artistId = props.navigation.getParam('artistId');
  
  const query = gql`
    query($artistId: MongoID!) {
      artistById(_id: $artistId) {
        name
        bio
        image
        facebook
        twitter
        instagram
        website
      }
    }
  `;

  const { data } = useQuery(query, {
    variables: {
      artistId,
    }
  });

  

  if (!data) {
    return null;
  }

  const artist = data.artistById;

  const socialAccounts = [ 'facebook', 'instagram','twitter'];

  return (
    <ScrollView>
      <Card title={ artist.name }>
        {
          artist.image &&
          <Image
            source={{ uri: artist.image }}
            style={{ width: 350, height: 150 }}
          />
        }
        <Text>
          { artist.bio ? artist.bio : 'No bio available' }
        </Text>
        <View style={ styles.socialContainer }>
          {
            socialAccounts.map((platform, index) => {
              if (artist[platform]) {
                let platformUrl = artist[platform];
                if (!artist[platform].includes('http')) {
                  platformUrl = `https://${ platform }.com/${ artist[platform] }`;
                }

                return (
                  <View key={ index }>
                    <SocialIcon
                      style={ styles.socialIcon }
                      type={ platform }
                      //style={{ flex: 1 }}
                      onPress={ () => {
                        Linking.openURL(platformUrl);
                      }}
                    />
                  </View>
                )
              }

              return null;
            })
          }

        </View>
        
      </Card>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  socialContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  socialIcon: {
  },
})

import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import StarRating from 'react-native-star-rating';

import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import * as firebase from 'firebase';

import avatar from '../../assets/images/avatar.png';

export default class CommentList extends Component {
	render () {
		const {comment} = this.props;
    var user = firebase.auth().currentUser;
    var photoUrl;

  if (user != null) {
  photoUrl = user.photoURL;
  }
		return (

			<ListItem avatar style={{marginBottom: 15, marginLeft: 0}}>
              <Left>
                <Thumbnail source={photoUrl ? {uri: photoUrl} : avatar} />
              </Left>
              <Body>
      <StarRating
          disabled={true}
          maxStars={5}
          emptyStar={require('../../assets/images/empty-star.png')}
          fullStar={require('../../assets/images/star.png')}
          halfStar={require('../../assets/images/half-star.png')}
          iconSet={'Ionicons'}
          rating={comment.rating}
          containerStyle={{width: 80}}
          starSize={15}
            emptyStarColor={'#f1c40f'}
            fullStarColor={'#f1c40f'}
          />

                <Text note numberOfLines={2}>{comment.comment}</Text>
              </Body>
              <Right>
                <Text note>{comment.user}</Text>
              </Right>
            </ListItem>

		)
	}
}
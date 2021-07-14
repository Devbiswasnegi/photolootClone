import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import {vh, vw} from '../dimensions/Dim';
const TnC = props => {
  return (
    <SafeAreaView style={styles.safe}>
      <ProfileHeader
        onpress={() => props.navigation.navigate('TabBar')}
        imageDir={require('../../assets/arrowWhite.png')}
        textTitle="Terms & Conditions"
      />
      <ScrollView contentContainerStyle={styles.safeView}>
        <Text style={styles.text}>
          <Text style={styles.textBold}>
            Who can participate in a challenge?
          </Text>
          {'\n'}
          {'\n'}
          To participate in a challenge you need to be at least 13 years old or
          older.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>
            How do I participate in a challenge?
          </Text>
          {'\n'}
          {'\n'}
          You can participate in a challenge by uploading a photo and/or by
          voting for other users’ pictures.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>How do I upload a photo?</Text>
          {'\n'}
          {'\n'}
          To upload a photo, from the Home screen select Current Challenges,
          then select the challenge you want to join. Then on the challenge
          detail screen select the “+” button and either upload from your
          gallery or take a picture right away.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>How many photos can I upload?</Text>
          {'\n'}
          {'\n'}
          You can participate in all current challenges, but you can only upload
          one photo per challenge.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>How do I vote?</Text>
          {'\n'}
          {'\n'}
          In the challenge Gallery, select the photo you want to vote for and
          press the vote button (Clapping Hands) once. If you change your mind,
          you can un-vote by pressing the same button again.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>
            Do I maintain ownership of my photos?
          </Text>
          {'\n'}
          {'\n'}
          You maintain the ownership of the photos you submit. You must own all
          submitted pictures.{'\n'}
          {'\n'}
          If you submit pictures that are not your own, they will be removed
          from your account.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>How do I win a challenge?</Text>
          {'\n'}
          {'\n'}
          Winners are determined by a total number of votes given by other
          users. When a challenge ends, the three most voted photos will be
          declared winners and will receive prizes.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>How do I receive my prize?</Text>
          {'\n'}
          {'\n'}
          If you are one of the winners, we will contact you via e-mail that you
          have provided when making your account.{'\n'}
          {'\n'}
          In order to receive your prize you must have a legitimate Pay-Pal
          account. We will ask for your Pay-Pal details so we can transfer you
          your prize money. We will only transfer the prize money via Pay-Pal.
          We do so in order to protect your privacy.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>
            How do I change my submitted picture?
          </Text>
          {'\n'}
          {'\n'}
          Since you can only upload one photo per challenge, you must first
          delete your submitted photo, then upload a new one.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>
            What happens when I deactivate my account?
          </Text>
          {'\n'}
          {'\n'}
          You may deactivate your account at any time. In this case all of your
          content will not be publicly visible anymore until you reactive your
          account by logging in.{'\n'}
          {'\n'}
          <Text style={styles.textBold}>
            How do I delete my account?{'\n'}
            {'\n'}
          </Text>
          You may delete your PhotoLoot account at any time. Contact PhotoLoot's
          Help and Support at support@ensionix.com or Help and Support section
          in the application to delete your Photoloot account. In this case all
          of your content will be automatically and irrevocably deleted from our
          platform and no longer publicly visible.{'\n'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 15,
    textAlign: 'justify',
  },
  textBold: {
    fontWeight: 'bold',
  },
  safeView: {
    width: vw(320),
    alignSelf: 'center',
  },
});

export default TnC;

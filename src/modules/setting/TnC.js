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
        onpress={() => props.navigation.goBack()}
        imageDir={require('../../assets/arrowWhite.png')}
        textTitle="Terms & Conditions"
      />
      <ScrollView contentContainerStyle={styles.safeview}>
        <Text style={styles.textStart}>
          <Text style={styles.next}>Terms and Conditions</Text>
          {'\n'}The following Terms and Conditions (or “Terms of Use”) set forth
          the conditions under which users have access to the AGORA app, and its
          services (“the Service”). without prior approval by the Author. 4.2.
          Grants a permission to use the name, the profile picture, the User and
          published information about the User, including those videos published
          by the User to explain its history and the content. This is granted
          for use in digital media, audiovisual or print media, worldwide,
          without receiving compensation of any kind. This will have a duration
          of FORTY YEARS (40). AGORA is expressly authorized to assign the
          corresponding contract and rights arising therefrom to any third party
          without prior approval by the Author. {'\n'}4.3. By participating in
          the competition and accepting the conditions of use, the finalists of
          the contest (either TOP50, TOP75 or the number of finalists specified
          in the specific conditions of each competition), AUTOMATICALLY and
          EXPRESSLY TRANSFERS the rights of exploitation, which include the
          rights of reproduction, distribution, public communication and
          transformation of the work based on the provisions of Article 18 and
          following of the Spanish Intellectual Property Law. The TRANSFER is
          carried out for the entire territory of THE WORLD, that is, its scope
          is full in the continents of AMERICA, EUROPE, AFRICA, ASIA OCEANIA.
          The TRANSFER has a duration of FORTY YEARS (40) from the publication
          of the content in the referred contest. The TRANSFER will have a
          NON-EXCLUSIVE character. AGORA is expressly authorised to assign the
          corresponding contract and rights arising from it to any third party.
          The TRANSFER is carried out for any type of modality or support, that
          is, digital, audiovisual, printed, etc. In consideration of the
          TRANSFER, the Author will be paid the equivalent of TWENTY PERCENT
          (20%) of the remuneration of the direct benefits generated by the
          photograph/content for AGORA, which will be determined on an annual
          basis, within the first three months of each year, the payment being
          due within the period of three months from the determination of the
          economic amounts accrued, as well as those prizes stipulated either in
          cash or otherwise, for the finalists. The payment of the Author’s
          economic rights must be made according to the bank details provided by
          the Author. This contract does not imply ANY WAIVER OF COPYRIGHT and
          EXPLOITATION RIGHTS. Therefore, the Author may exercise the rights of
          REPRODUCTION, DISTRIBUTION, PUBLIC COMMUNICATION AND TRANSFORMATION in
          parallel with AGORA. Likewise, the Author SHALL HAVE THE RIGHT TO
          PRESERVE THE UNPUBLISHED WORK OR TO DISCLOSE IT, TO VINDICATE THE
          PATERNITY OF THE WORK AT ANY TIME, TO OPPOSE TO ITS DEFORMATION,
          MUTILATION OR MODIFICATION AGAINST ITS MERIT OR THE REPUTATION OF THE
          AUTHOR among other inalienable rights. The Author exonerates AGORA, as
          guarantor of the authorship of the content, from any responsibility
          towards third parties, assuming all claims, including compensation for
          damages that could be exercised against AGORA by third parties by
          infringement of its intellectual property rights on the content.{' '}
          {'\n'}4.4. By participating in the contest and accepting the terms of
          use, the winner of the contest (HERO), AUTOMATICALLY and EXPRESSLY
          TRANSFERS the rights of exploitation, which include the rights of
          reproduction, distribution, public communication and transformation of
          the work based on the provisions of Article 18 and following of the
          Spanish Intellectual Property Law. The TRANSFER is carried out for the
          entire territory of THE WORLD, that is, its scope is full in the
          continents of AMERICA, EUROPE, AFRICA, ASIA OCEANIA. The TRANSFER has
          a duration of FORTY YEARS (40) from the publication of the content in
          the referred contest. The TRANSFER will be EXCLUSIVE for the entity
          AGORA APP S.L. and will be governed by the provisions of Article 48 of
          the L.P.I. AGORA is expressly authorised to assign the corresponding
          contract and rights arising from it to any third party. {'\n'}In
          consideration for the TRANSFER the User will be paid the prize or
          prizes established for the winner (HERO) of the competition. Besides,
          they will be paid the equivalent of TWENTY PERCENT (20%) of the
          remuneration of the direct benefits generated by the
          photograph/content for AGORA, which will be determined on an annual
          basis, within the first three months of the year in which it is due,
          with payment being due within the period of three months from the
          determination of the economic amounts accrued The Author (HERO) must
          provide the documentation required by AGORA in order to formalize this
          assignment of rights and the bank details necessary for the MANAGEMENT
          of the prizes of the Competition, as well as the settlement of the
          economic rights. This contract does not imply ANY WAIVER OF COPYRIGHT
          as the author rights of the work are inalienable and cannot be waived.
          In this sense, the author will have the right to preserve the original
          work or to disclose it, to claim the ownership of the work at any
          time, to oppose its deformation, mutilation or modification against
          its merit or the author’s reputation, among other inalienable rights.
          The Author exoly with the other requirements set out in these general
          conditions. Likewise, those considered to be minors in their country
          must provide parental or legal guardian authorisation, where
          applicable. This authorization must be provided to the email address:
          hello@agoraimages.com upon acceptance of these conditions of use. To
          participate in this competition, AGORA users must comply with the
          following conditions: {'\n'}1. They must upload one or more photos to
          the AGORA competition. {'\n'}2. The author/participant must be the
          author of the photograph, image or video and must hold all exclusive
          rights to the published content. The author/participant who uploads an
          image, picture or video of which he is not the author or does not have
          the exclusive rights to such image, picture or video would be
          committing a crime. 3. The image, photograph or video submitted must
          be in JPG/JPEG format with a minimum resolution of 1,000 pixels. 4.
          The submitted image, photograph or video must not have been used in a
          commercial manner before. {'\n'}5. The submitted image, photograph or
          video must not bear any watermark. {'\n'}6. The submitted image,
          photograph or video must comply with all provisions of this contract.
          Arrying out activities of unfair trade and unlawful advertising. – The
          possible loss of the User’s data due to causes not attributable to the
          Service. – Access to the content included in the Service by underage
          persons. – The unavailability, errors, access failures and
          discontinuity of the Service. – Any errors or issues that may occur in
          communication, deletion or incomplete transfers. – Any operational
          failures or problems in the e-mail address provided by the User. AGORA
          will, under no circumstances, be responsible for the expenses of the
          mobile phone or ISP provider under the concept of data transfer. The
          User shall check the corresponding fee plan with the mobile phone or
          ISP provider before using the Service. Any claim or dispute that may
          occur among the Service Users shall be resolved between the latter,
          leaving AGORA obligatorily harmless, notwithstanding that AGORA will
          do its best to enable Users with quick and satisfactory solutions
          through its User Service by e-mail. 8. Content and Other Linked
          Services through the Service The Service may include linked technical
          appliances, directories and even search tools that allow Users to
          access different web pages and portals (hereinafter, ‘Linked Sites’).
          The User acknowledges and accepts that access to Linked Sites will be
          done under their exclusive risk and responsibility and exonerates
          AGORA from any responsibility for potential right infringements of
          intellectual or industrial property of the Linked Sites’ owners.
          Additionally, the User exonerates AGORA from any responsibility for
          the technical availability, quality, reliability, accuracy and/or
          veracity of the linked web pages services, information, elements
          and/or content that the User may access. In such cases, AGORA may only
          be held responsible for the content and services provided in the
          Linked Sites to the extent that they had first-hand knowledge of any
          unlawfulness and did not disable the link with due diligence. Should
          the User consider there to be a Linked Site with unlawful or
          inappropriate content, he/she may communicate it to AGORA; not making
          such communication, in any case, lead to the obligatory removal of
          said link. Under no circumstances shall the existence of Linked Sites
          mean the formalization of any agreements with the operators or owners
          of the latter, nor its recommendation, promotion or identification of
          AGORA with its manifestations, content or provided services. AGORA is
          unaware of content and services of Linked Sites and, therefore, is not
          responsible, directly or indirectly, for any damages caused by the
          unlawfulness, quality, outdated information, and content and/or
          service error and uselessness of the Linked Sites or any other type of
          damage that is not directly attributable to AGORA. 9. Online Credits
          AGORA includes objects, Online Credits, which can be purchased and
          used within the App. Once purchased, the user declares that he knows
          and agrees that they have no monetary value and it will not be
          possible to exchange them for real money. The Online Credits will not
          be refunded once the purchase is complete, i.e. when the AGORA servers
          validate the purchase and the applicable Online Credits are
          successfully credited to the account. Any risk of loss of the Online
          Credits you purchase is transferred to the User upon successful
          completion of the purchase. AGORA reserves the right to give and
          transfer Online Credits to Users without limitation. By way of
          example, AGORA will give away and transfer Online Credits when
          advertising videos are viewed, or when invitations to the App are made
          by Users to their contacts. The price of the Online Credits will be
          the one stipulated in the App, including the corresponding VAT.
          Depending on the bank used by the User, there may be an additional
          charge, as AGORA does not have any control over this aspect and is
          exempt from any liability. If you are not sure whether your bank will
          charge you or you should not consult your bank before making a
          purchase. AGORA reserves the right to control, regulate, modify or
          eliminate the Online Credits without incurring any responsibility to
          the User at any time. AGORA reserves the right to modify the prices of
          the Online Credits at any time. AGORA may limit the total amount of
          Online Credits that can be purchased at one time, and limit the total
          amount of Online Credits that a User can have in their account. The
          purchase will only be effective if it is made through the payment
          platforms established by AGORA. AGORA uses the payment platform of
          Apple and Android for the purchase of Online Credits, so it will be
          subject to their respective terms of service and the User must ensure
          to check whether you agree with the terms of service of the payment
          platform showing their agreement with these terms of service by
          executing the purchase. For any incident in the service of the payment
          platform, contact Apple or Android, for any incident during the
          purchase of Online Credits also contact AGORA at hello@agoraimages.com
          If the account is cancelled or suspended for improper use stipulated
          in these Terms and Conditions, you will lose all your Online Credits
          without any right to compensation or indemnification. If you
          voluntarily unsubscribe from the App, you will lose all your Online
          articipant. AGORA is not
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
  textStart: {
    fontSize: 10,
    textAlign: 'justify',
  },
  next: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  safeview: {
    width: vw(320),
    alignSelf: 'center',
  },
});
export default TnC;

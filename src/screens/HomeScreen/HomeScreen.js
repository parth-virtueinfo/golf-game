import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, string } from '../../common';
import AppHeader from '../../components/AppHeader';
import PrimaryButton from '../../components/PrimaryButton';
import ChangePasswordDialog from '../../components/ChangePasswordDialog';
import ChangeEmailDialog from '../../components/ChangeEmailDialog';
import ChangeAddressDialog from '../../components/ChangeAddressDialog';
import DeleteAccountDialog from '../../components/DeleteAccountDialog';
import IdentityVerificationDialog from '../../components/IdentityVerificationDialog';
import EnterSSNDigitDialog from '../../components/EnterSSNDigitDialog';
import VerificationCompleteDialog from '../../components/VerificationCompleteDialog';
import LeaveRoundDialog from '../../components/LeaveRoundDialog';
import JoinNewRoundDialog from '../../components/JoinNewRoundDialog';
import ConfirmTeeTimeDialog from '../../components/ConfirmTeeTimeDialog';
import SubmitHoleReliefDialog from '../../components/SubmitHoleReliefDialog';
import OutOfBoundDialog from '../../components/OutOfBoundDialog';
import VerifyHoleScoresDialog from '../../components/VerifyHoleScoresDialog';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [showChangePasswordDialog, setShowChangePasswordDialog] = useState(false);
  const [oldPasswordHideShow, setOldPasswordHideShow] = useState(true);
  const [newPasswordHideShow, setNewPasswordHideShow] = useState(true);
  const [showChangeEmailDialog, setShowChangeEmailDialog] = useState(false);
  const [showChangeAddressDialog, setShowChangeAddressDialog] = useState(false);
  const [showDeleteAccountDialog, setShowDeleteAccountDialog] = useState(false);
  const [showIdentityVerificationDialog, setShowIdentityVerificationDialog] = useState(false);
  const [showEnterSSNDigitDialog, setShowEnterSSNDigitDialog] = useState(false);
  const [showVerificationCompleteDialog, setShowVerificationCompleteDialog] = useState(false);
  const [showLeaveRoundDialog, setShowLeaveRoundDialog] = useState(false);
  const [showJoinNewRoundDialog, setShowJoinNewRoundDialog] = useState(false);
  const [showConfirmTeeTimeDialog, setShowConfirmTeeTimeDialog] = useState(false);
  const [showSubmitHoleReliefDialog, setShowSubmitHoleReliefDialog] = useState(false);
  const [showOutOfBoundDialog, setShowOutOfBoundDialog] = useState(false);
  const [showVerifyHoleScoresDialog, setShowVerifyHoleScoresDialog] = useState(false);
  const [checked, setChecked] = useState(false);


  return (
    <View style={styles.mainContainer}>
      <AppHeader
        showBalance={true}
        showBell={true}
      ></AppHeader>
      <ChangePasswordDialog
        showChangePasswordDialog={showChangePasswordDialog}
        setShowChangePasswordDialog={setShowChangePasswordDialog}
        oldPasswordHideShow={oldPasswordHideShow}
        setOldPasswordHideShow={setOldPasswordHideShow}
        newPasswordHideShow={newPasswordHideShow}
        setNewPasswordHideShow={setNewPasswordHideShow}
        onModelClose={() => {
          setShowChangePasswordDialog(false);
        }}
        onPressConfirm={() => {
          setShowChangePasswordDialog(false);
        }}
        onPressClose={() => {
          setShowChangePasswordDialog(false);
        }}
      ></ChangePasswordDialog>
      <ChangeEmailDialog
        showChangeEmailDialog={showChangeEmailDialog}
        setShowChangeEmailDialog={setShowChangeEmailDialog}
        onPressClose={() => {
          setShowChangeEmailDialog(false);
        }}
      ></ChangeEmailDialog>
      <ChangeAddressDialog
        showChangeAddressDialog={showChangeAddressDialog}
        setShowChangeAddressDialog={setShowChangeAddressDialog}
        onPressClose={() => {
          setShowChangeAddressDialog(false);
        }}
      ></ChangeAddressDialog>
      <DeleteAccountDialog
        showDeleteAccountDialog={showDeleteAccountDialog}
        setShowDeleteAccountDialog={setShowDeleteAccountDialog}
        checked={checked}
        setChecked={setChecked}
        onPressClose={() => {
          setShowDeleteAccountDialog(false);
        }}
      ></DeleteAccountDialog>
      <IdentityVerificationDialog
        showIdentityVerificationDialog={showIdentityVerificationDialog}
        setShowIdentityVerificationDialog={setShowIdentityVerificationDialog}
        onPressClose={() => {
          setShowIdentityVerificationDialog(false);
        }}
      ></IdentityVerificationDialog>
      <EnterSSNDigitDialog
        showEnterSSNDigitDialog={showEnterSSNDigitDialog}
        setShowEnterSSNDigitDialog={setShowEnterSSNDigitDialog}
        onPressClose={() => {
          setShowEnterSSNDigitDialog(false);
        }}
      ></EnterSSNDigitDialog>
      <VerificationCompleteDialog
        isRetry={false}
        title={string.successful}
        description={string.thank_you_for_your_patience}
        showVerificationCompleteDialog={showVerificationCompleteDialog}
        setShowVerificationCompleteDialog={setShowVerificationCompleteDialog}
        onPressClose={() => {
          setShowVerificationCompleteDialog(false);
        }}
      ></VerificationCompleteDialog>
      <LeaveRoundDialog
        showLeaveRoundDialog={showLeaveRoundDialog}
        setShowLeaveRoundDialog={setShowLeaveRoundDialog}
        onPressClose={() => {
          setShowLeaveRoundDialog(false);
        }}
      ></LeaveRoundDialog>
      <JoinNewRoundDialog
        showJoinNewRoundDialog={showJoinNewRoundDialog}
        setShowJoinNewRoundDialog={setShowJoinNewRoundDialog}
        onPressClose={() => {
          setShowJoinNewRoundDialog(false);
        }}
        checked={checked}
        onPressChecked={() => setChecked(!checked)}
      ></JoinNewRoundDialog>
      <ConfirmTeeTimeDialog
        showConfirmTeeTimeDialog={showConfirmTeeTimeDialog}
        onModelClose={() => {
          setShowConfirmTeeTimeDialog(false);
        }}
        onPressConfirmTime={() => setShowConfirmTeeTimeDialog(false)}
        onPressGoBack={() => setShowConfirmTeeTimeDialog(false)}
        onPressClose={() => setShowConfirmTeeTimeDialog(false)}
        onPreessCancelEvent={() => setShowConfirmTeeTimeDialog(false)}
      ></ConfirmTeeTimeDialog>
      <SubmitHoleReliefDialog
        showSubmitHoleReliefDialog={showSubmitHoleReliefDialog}
        setShowSubmitHoleReliefDialog={setShowSubmitHoleReliefDialog}
        onModelClose={() => {
          setShowSubmitHoleReliefDialog(false);
        }}
        onPressCancel={() => {
          setShowSubmitHoleReliefDialog(false);
        }}
      ></SubmitHoleReliefDialog>
      <OutOfBoundDialog
        showOutOfBoundDialog={showOutOfBoundDialog}
        onModelClose={() => {
          setShowOutOfBoundDialog(false);
        }}
        onPressCancel={() => {
          setShowOutOfBoundDialog(false);
        }}
      ></OutOfBoundDialog>
      <VerifyHoleScoresDialog
        showVerifyHoleScoresDialog={showVerifyHoleScoresDialog}
        onModelClose={() => {
          setShowVerifyHoleScoresDialog(false);
        }}
        onPressCancel={() => {
          setShowVerifyHoleScoresDialog(false);
        }}
        onPressConfirmScores={() => setShowVerifyHoleScoresDialog(false)}
      ></VerifyHoleScoresDialog>
      <View style={{ flex: 1 }}>
        <PrimaryButton
          onPress={() => setShowVerifyHoleScoresDialog(true)}
        ></PrimaryButton>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});
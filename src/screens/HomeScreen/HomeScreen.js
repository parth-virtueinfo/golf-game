import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../common';
import AppHeader from '../../components/AppHeader';
import PrimaryButton from '../../components/PrimaryButton';
import ChangePasswordDialog from '../../components/ChangePasswordDialog';
import ChangeEmailDialog from '../../components/ChangeEmailDialog';
import ChangeAddressDialog from '../../components/ChangeAddressDialog';
import DeleteAccountDialog from '../../components/DeleteAccountDialog';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [showChangePasswordDialog, setShowChangePasswordDialog] = useState(false);
  const [oldPasswordHideShow, setOldPasswordHideShow] = useState(true);
  const [newPasswordHideShow, setNewPasswordHideShow] = useState(true);
  const [showChangeEmailDialog, setShowChangeEmailDialog] = useState(false);
  const [showChangeAddressDialog, setShowChangeAddressDialog] = useState(false);
  const [showDeleteAccountDialog, setShowDeleteAccountDialog] = useState(false);
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
      <View style={{ flex:1 }}>
        <PrimaryButton
          onPress={() => setShowDeleteAccountDialog(true)}
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
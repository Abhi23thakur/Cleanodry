import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { COLORS, LOGIN, FONTS } from '../constants/theme';

const LoginScreen = ({ onContinue = () => {}, onOpenTerms = () => {}, onOpenPrivacy = () => {} }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="bg" x1="0%" y1="0%" x2="12%" y2="100%">
            <Stop offset="0%" stopColor={COLORS.loginGradientTop} />
            <Stop offset="55%" stopColor={COLORS.loginGradientBottom} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
      </Svg>

      <View style={styles.header}>
        <Image
          source={require('../assets/images/login_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.heading}>Enter your phone number</Text>
        <Text style={styles.subtitle}>
          We’ll send a verification code (OTP){'\n'}to continue
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.phoneInputGroup}>
          <View style={styles.countryCode}>
            <Text style={styles.countryCodeText}>+91</Text>
          </View>
          <View style={styles.divider} />
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
            placeholderTextColor={COLORS.loginPlaceholder}
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => onContinue(phoneNumber)}
        >
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By continuing, you agree to our{' '}
          <Text style={styles.footerLink} onPress={onOpenTerms}>
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text style={styles.footerLink} onPress={onOpenPrivacy}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.textPrimary,
  },
  header: {
    alignItems: 'center',
    paddingTop: LOGIN.headerTop,
    paddingHorizontal: LOGIN.contentPaddingHorizontal,
  },
  logo: {
    width: LOGIN.logoWidth,
    height: LOGIN.logoHeight,
    marginBottom: 24,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: LOGIN.headingFontSize,
    lineHeight: LOGIN.headingLineHeight,
    letterSpacing: LOGIN.headingLetterSpacing,
    color: COLORS.loginHeading,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: LOGIN.subtitleFontSize,
    lineHeight: LOGIN.subtitleLineHeight,
    color: COLORS.loginSubtitle,
    textAlign: 'center',
  },
  form: {
    paddingHorizontal: LOGIN.contentPaddingHorizontal,
    marginTop: 32,
    gap: LOGIN.formGap,
  },
  phoneInputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    height: LOGIN.inputHeight,
    backgroundColor: COLORS.loginInputBg,
    borderWidth: 1,
    borderColor: COLORS.loginInputBorder,
    borderRadius: LOGIN.inputBorderRadius,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
  },
  countryCodeText: {
    fontFamily: FONTS.semiBold,
    fontSize: LOGIN.countryCodeFontSize,
    lineHeight: LOGIN.countryCodeLineHeight,
    color: COLORS.loginHeading,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: COLORS.loginInputDivider,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    fontFamily: FONTS.medium,
    fontSize: LOGIN.placeholderFontSize,
    color: COLORS.loginHeading,
  },
  primaryButton: {
    height: LOGIN.buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    borderRadius: LOGIN.buttonBorderRadius,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  primaryButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: LOGIN.buttonFontSize,
    lineHeight: LOGIN.buttonLineHeight,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  footer: {
    marginTop: 32,
    paddingHorizontal: LOGIN.contentPaddingHorizontal,
  },
  footerText: {
    fontFamily: FONTS.regular,
    fontSize: LOGIN.footerFontSize,
    lineHeight: LOGIN.footerLineHeight,
    color: COLORS.loginFooterText,
    textAlign: 'center',
  },
  footerLink: {
    fontFamily: FONTS.medium,
    fontSize: LOGIN.footerFontSize,
    lineHeight: LOGIN.footerLineHeight,
    color: COLORS.loginFooterLink,
  },
});

export default LoginScreen;

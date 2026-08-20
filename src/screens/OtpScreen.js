import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { COLORS, OTP, FONTS } from '../constants/theme';

const OTP_LENGTH = 6;
const RESEND_SECONDS = 119;

const formatTime = seconds => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const OtpScreen = ({
  phoneNumber = '+91 98765 43210',
  onVerify = () => {},
  onResend = () => {},
  onChangePhoneNumber = () => {},
}) => {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const timer = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const handleChangeDigit = (text, index) => {
    const value = text.replace(/[^0-9]/g, '').slice(-1);
    const next = [...digits];
    next[index] = value;
    setDigits(next);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (secondsLeft > 0) return;
    setSecondsLeft(RESEND_SECONDS);
    onResend();
  };

  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <LinearGradient id="bg" x1="0%" y1="0%" x2="12%" y2="100%">
            <Stop offset="0%" stopColor={COLORS.loginGradientTop} />
            <Stop offset="55%" stopColor={COLORS.loginGradientBottom} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
      </Svg>

      <View style={styles.content}>
        <Image
          source={require('../assets/images/otp_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.heading}>Verify your phone number</Text>

        <Text style={styles.subtitle}>
          We’ve sent a 6-digit verification code to{'\n'}
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </Text>

        <View style={styles.otpRow}>
          {digits.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={[
                styles.otpInput,
                focusedIndex === index && styles.otpInputActive,
              ]}
              value={digit}
              onChangeText={text => handleChangeDigit(text, index)}
              onKeyPress={event => handleKeyPress(event, index)}
              onFocus={() => setFocusedIndex(index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <View style={styles.timerResend}>
          <View style={styles.timerRow}>
            <Svg width={11.67} height={11.67} viewBox="0 0 12 12">
              <Path
                d="M7.97994 8.81994L8.81994 7.97994L6.59995 5.75996V2.99998H5.39996V6.23996L7.97994 8.81994ZM5.99996 11.9999C5.16996 11.9999 4.38997 11.8424 3.65997 11.5274C2.92998 11.2124 2.29498 10.7849 1.75499 10.2449C1.21499 9.70493 0.787495 9.06994 0.472497 8.33994C0.157499 7.60995 0 6.82995 0 5.99996C0 5.16996 0.157499 4.38997 0.472497 3.65997C0.787495 2.92998 1.21499 2.29498 1.75499 1.75499C2.29498 1.21499 2.92998 0.787495 3.65997 0.472497C4.38997 0.157499 5.16996 0 5.99996 0C6.82995 0 7.60995 0.157499 8.33994 0.472497C9.06994 0.787495 9.70493 1.21499 10.2449 1.75499C10.7849 2.29498 11.2124 2.92998 11.5274 3.65997C11.8424 4.38997 11.9999 5.16996 11.9999 5.99996C11.9999 6.82995 11.8424 7.60995 11.5274 8.33994C11.2124 9.06994 10.7849 9.70493 10.2449 10.2449C9.70493 10.7849 9.06994 11.2124 8.33994 11.5274C7.60995 11.8424 6.82995 11.9999 5.99996 11.9999ZM5.99996 10.7999C7.32995 10.7999 8.46244 10.3324 9.39743 9.39743C10.3324 8.46244 10.7999 7.32995 10.7999 5.99996C10.7999 4.66997 10.3324 3.53748 9.39743 2.60248C8.46244 1.66749 7.32995 1.19999 5.99996 1.19999C4.66997 1.19999 3.53748 1.66749 2.60248 2.60248C1.66749 3.53748 1.19999 4.66997 1.19999 5.99996C1.19999 7.32995 1.66749 8.46244 2.60248 9.39743C3.53748 10.3324 4.66997 10.7999 5.99996 10.7999Z"
                fill={COLORS.otpAccentText}
              />
            </Svg>
            <Text style={styles.timerText}>{formatTime(secondsLeft)}</Text>
          </View>

          <TouchableOpacity
            style={styles.resendButton}
            onPress={handleResend}
            disabled={secondsLeft > 0}
          >
            <Text
              style={[
                styles.resendText,
                secondsLeft > 0 && styles.resendTextDisabled,
              ]}
            >
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.verifyButton}
          onPress={() => onVerify(digits.join(''))}
        >
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.changePhoneNumberButton} onPress={onChangePhoneNumber}>
          <Text style={styles.changePhoneNumberText}>Change phone number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.textPrimary,
  },
  content: {
    alignItems: 'center',
    paddingTop: OTP.headerTop,
    paddingHorizontal: OTP.contentPaddingHorizontal,
  },
  logo: {
    width: OTP.logoWidth,
    height: OTP.logoHeight,
  },
  heading: {
    fontFamily: FONTS.semiBold,
    fontSize: OTP.headingFontSize,
    lineHeight: OTP.headingLineHeight,
    color: COLORS.otpHeading,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: OTP.subtitleFontSize,
    lineHeight: OTP.subtitleLineHeight,
    color: COLORS.otpSubtitle,
    textAlign: 'center',
  },
  phoneNumber: {
    fontFamily: FONTS.bold,
    color: COLORS.otpEmail,
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 32,
    marginBottom: 24,
  },
  otpInput: {
    width: OTP.inputSize,
    height: OTP.inputHeight,
    borderRadius: OTP.inputBorderRadius,
    borderWidth: 1,
    borderColor: COLORS.otpInputBorder,
    backgroundColor: COLORS.otpInputBg,
    fontFamily: FONTS.semiBold,
    fontSize: OTP.inputFontSize,
    color: COLORS.otpHeading,
  },
  otpInputActive: {
    borderColor: COLORS.otpInputActiveBorder,
    backgroundColor: COLORS.textPrimary,
    borderWidth: 1.5,
  },
  timerResend: {
    alignItems: 'center',
    gap: 8,
    marginBottom: 32,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timerText: {
    fontFamily: FONTS.bold,
    fontSize: OTP.timerFontSize,
    lineHeight: OTP.timerLineHeight,
    color: COLORS.otpAccentText,
  },
  resendButton: {
    padding: 8,
  },
  resendText: {
    fontFamily: FONTS.medium,
    fontSize: OTP.resendFontSize,
    lineHeight: OTP.resendLineHeight,
    color: COLORS.otpAccentText,
  },
  resendTextDisabled: {
    opacity: 0.8,
  },
  verifyButton: {
    alignSelf: 'stretch',
    height: OTP.verifyButtonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    borderRadius: 200,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  verifyButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: OTP.verifyButtonFontSize,
    lineHeight: OTP.verifyButtonLineHeight,
    color: COLORS.textPrimary,
  },
  changePhoneNumberButton: {
    alignSelf: 'stretch',
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  changePhoneNumberText: {
    fontFamily: FONTS.medium,
    fontSize: OTP.changeEmailFontSize,
    lineHeight: OTP.changeEmailLineHeight,
    color: COLORS.otpAccentText,
  },
});

export default OtpScreen;

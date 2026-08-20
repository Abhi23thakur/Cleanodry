import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, ONBOARDING3, ONBOARDING_SHARED, FONTS } from '../constants/theme';

const OnboardingScreen3 = ({ onSkip = () => {}, onGetStarted = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.illustrationWrapper}>
          <View style={styles.decorativeCircle} />
          <Image
            source={require('../assets/images/onboarding3_illustration.png')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.typography}>
          <Text style={styles.heading}>
            Track Every Step of Your{'\n'}Order
          </Text>
          <Text style={styles.subtitle}>
            Stay updated from pickup to delivery with{'\n'}real-time tracking
            and instant notifications.
          </Text>
        </View>
      </View>

      <View style={styles.bottomArea}>
        <View style={styles.progressDots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onGetStarted}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
          <Svg width={12} height={12} viewBox="0 0 12 12">
            <Path d={ONBOARDING_SHARED.arrowIconPath} fill={COLORS.textPrimary} />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.onboarding3Background,
  },
  header: {
    height: ONBOARDING_SHARED.headerHeight,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: ONBOARDING_SHARED.contentPaddingHorizontal,
  },
  skipButton: {
    paddingVertical: ONBOARDING_SHARED.skipButtonPaddingVertical,
    paddingHorizontal: ONBOARDING_SHARED.skipButtonPaddingHorizontal,
    borderRadius: 9999,
  },
  skipText: {
    fontFamily: FONTS.semiBold,
    fontSize: ONBOARDING_SHARED.skipFontSize,
    lineHeight: ONBOARDING_SHARED.skipLineHeight,
    letterSpacing: ONBOARDING_SHARED.skipLetterSpacing,
    color: COLORS.bodyText,
    textAlign: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ONBOARDING_SHARED.contentPaddingHorizontal,
  },
  illustrationWrapper: {
    width: ONBOARDING3.illustrationWrapperWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  decorativeCircle: {
    position: 'absolute',
    width: ONBOARDING3.illustrationSize,
    height: ONBOARDING3.illustrationSize,
    borderRadius: 9999,
    backgroundColor: COLORS.accent,
    opacity: 0.1,
  },
  illustrationImage: {
    width: ONBOARDING3.illustrationSize,
    height: ONBOARDING3.illustrationSize,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  typography: {
    width: ONBOARDING3.typographyWidth,
    alignItems: 'center',
    gap: ONBOARDING3.typographyGap,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: ONBOARDING3.headingFontSize,
    lineHeight: ONBOARDING3.headingLineHeight,
    color: COLORS.headingText,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: ONBOARDING3.bodyFontSize,
    lineHeight: ONBOARDING3.bodyLineHeight,
    color: COLORS.bodyText,
    textAlign: 'center',
  },
  bottomArea: {
    paddingHorizontal: ONBOARDING_SHARED.contentPaddingHorizontal,
    paddingBottom: ONBOARDING_SHARED.bottomAreaPaddingBottom,
    alignItems: 'center',
  },
  progressDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: ONBOARDING_SHARED.dotsMarginBottom,
  },
  dot: {
    width: ONBOARDING3.dotSize,
    height: ONBOARDING3.dotSize,
    borderRadius: 9999,
    backgroundColor: COLORS.onboarding3DotInactive,
    opacity: 0.5,
  },
  dotActive: {
    width: ONBOARDING3.dotActiveWidth,
    backgroundColor: COLORS.accent,
    opacity: 1,
  },
  primaryButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: ONBOARDING_SHARED.buttonPaddingVertical,
    backgroundColor: COLORS.accent,
    borderRadius: ONBOARDING_SHARED.buttonBorderRadius,
  },
  primaryButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: ONBOARDING_SHARED.buttonFontSize,
    lineHeight: ONBOARDING_SHARED.buttonLineHeight,
    letterSpacing: ONBOARDING_SHARED.buttonLetterSpacing,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

export default OnboardingScreen3;

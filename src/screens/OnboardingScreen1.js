import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect, Ellipse, Path } from 'react-native-svg';
import { COLORS, ONBOARDING, ONBOARDING_SHARED, FONTS } from '../constants/theme';

const OnboardingScreen1 = ({ onSkip = () => {}, onContinue = () => {} }) => {
  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="glowTop" cx="50%" cy="0%" r="50%">
            <Stop offset="0%" stopColor={COLORS.accent} stopOpacity={0.1} />
            <Stop offset="100%" stopColor={COLORS.accent} stopOpacity={0} />
          </RadialGradient>
          <RadialGradient id="glowBottom" cx="100%" cy="100%" r="50%">
            <Stop offset="0%" stopColor="#B4F263" stopOpacity={0.05} />
            <Stop offset="100%" stopColor="#B4F263" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#glowTop)" />
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#glowBottom)" />
      </Svg>

      <View style={styles.header}>
        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.illustrationWrapper}>
          <Svg
            style={styles.blob}
            width={ONBOARDING.blobWidth}
            height={ONBOARDING.blobHeight}
          >
            <Defs>
              <RadialGradient id="blob" cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor={COLORS.accent} stopOpacity={0.12} />
                <Stop offset="100%" stopColor={COLORS.accent} stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="url(#blob)" />
          </Svg>
          <Image
            source={require('../assets/images/onboarding1_illustration.png')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.heading}>Schedule Pickup{'\n'}in Seconds</Text>
          <Text style={styles.subtitle}>
            Book a laundry pickup anytime from{'\n'}your home or office and
            let{'\n'}Cleanodry take care of the rest.
          </Text>
        </View>
      </View>

      <View style={styles.bottomArea}>
        <View style={styles.progressDots}>
          <View style={[styles.dot, styles.dotActive]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={onContinue}>
          <Text style={styles.primaryButtonText}>Continue</Text>
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
    backgroundColor: COLORS.background,
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
    width: ONBOARDING.illustrationSize,
    height: ONBOARDING.illustrationSize,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  blob: {
    position: 'absolute',
    alignSelf: 'center',
  },
  illustrationImage: {
    width: ONBOARDING.illustrationSize,
    height: ONBOARDING.illustrationSize,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
  },
  textContent: {
    alignItems: 'center',
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: ONBOARDING.headingFontSize,
    lineHeight: ONBOARDING.headingLineHeight,
    color: COLORS.headingText,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: ONBOARDING.bodyFontSize,
    lineHeight: ONBOARDING.bodyLineHeight,
    color: COLORS.bodyText,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  bottomArea: {
    paddingHorizontal: ONBOARDING_SHARED.contentPaddingHorizontal,
    paddingBottom: ONBOARDING_SHARED.bottomAreaPaddingBottom,
    alignItems: 'center',
  },
  progressDots: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: ONBOARDING_SHARED.dotsMarginBottom,
  },
  dot: {
    width: ONBOARDING.dotSize,
    height: ONBOARDING.dotSize,
    borderRadius: 9999,
    backgroundColor: COLORS.dotInactive,
  },
  dotActive: {
    width: ONBOARDING.dotActiveWidth,
    backgroundColor: COLORS.accent,
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

export default OnboardingScreen1;

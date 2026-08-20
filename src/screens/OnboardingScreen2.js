import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Ellipse, Path } from 'react-native-svg';
import { COLORS, ONBOARDING2, ONBOARDING_SHARED, FONTS } from '../constants/theme';

const OnboardingScreen2 = ({ onSkip = () => {}, onContinue = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.illustrationWrapper}>
          <Svg
            style={styles.circle}
            width={ONBOARDING2.circleSize}
            height={ONBOARDING2.circleSize}
          >
            <Defs>
              <RadialGradient id="circleGlow" cx="50%" cy="50%" r="50%">
                <Stop offset="0%" stopColor="#BDE9FF" stopOpacity={0.5} />
                <Stop offset="100%" stopColor="#BDE9FF" stopOpacity={0} />
              </RadialGradient>
            </Defs>
            <Ellipse cx="50%" cy="50%" rx="50%" ry="50%" fill="url(#circleGlow)" />
          </Svg>

          <Image
            source={require('../assets/images/onboarding2_illustration.png')}
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.heading}>Expert Care for Every{'\n'}Fabric</Text>
          <Text style={styles.subtitle}>
            From everyday wear to delicate{'\n'}garments, our professionals
            clean{'\n'}every item with premium care and{'\n'}attention.
          </Text>
        </View>
      </View>

      <View style={styles.bottomArea}>
        <View style={styles.progressDots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
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
    backgroundColor: COLORS.onboarding2Background,
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
    width: ONBOARDING2.imageSize,
    height: ONBOARDING2.imageSize,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  circle: {
    position: 'absolute',
    alignSelf: 'center',
  },
  illustrationImage: {
    width: ONBOARDING2.imageSize,
    height: ONBOARDING2.imageSize,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 40,
  },
  textContent: {
    alignItems: 'center',
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: ONBOARDING2.headingFontSize,
    lineHeight: ONBOARDING2.headingLineHeight,
    letterSpacing: ONBOARDING2.headingLetterSpacing,
    color: COLORS.headingText,
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: ONBOARDING2.bodyFontSize,
    lineHeight: ONBOARDING2.bodyLineHeight,
    color: COLORS.bodyText,
    textAlign: 'center',
    width: ONBOARDING2.bodyWidth,
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
    width: ONBOARDING2.dotSize,
    height: ONBOARDING2.dotSize,
    borderRadius: 9999,
    backgroundColor: COLORS.dotInactive,
  },
  dotActive: {
    width: ONBOARDING2.dotActiveWidth,
    backgroundColor: COLORS.accent,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
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

export default OnboardingScreen2;

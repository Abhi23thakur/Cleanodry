import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, NOT_FOUND } from '../constants/theme';

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.notFoundBackIcon}
    />
  </Svg>
);

const HeaderProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.notFoundHeaderProfileIcon}
    />
  </Svg>
);

const HomeIcon = () => (
  <Svg width={16} height={18} viewBox="0 0 24 24">
    <Path
      d="M12 2.1 1 11h3v10h6v-6h4v6h6V11h3Z"
      fill={COLORS.notFoundPrimaryText}
    />
  </Svg>
);

const HeadsetIcon = () => (
  <Svg width={20} height={18} viewBox="0 0 24 24">
    <Path
      d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H6.1A6 6 0 0 1 18 10v2h-1.9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1H17a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z"
      fill={COLORS.notFoundSecondaryText}
    />
  </Svg>
);

const NotFoundScreen = ({
  onBack = () => {},
  onOpenProfile = () => {},
  onGoHome = () => {},
  onContactSupport = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>404</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <HeaderProfileIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../assets/images/notfound_illustration.png')}
          style={styles.illustration}
          resizeMode="contain"
        />

        <Text style={styles.heading}>Oops! Something{'\n'}Went Missing</Text>

        <Text style={styles.subtitle}>
          Just like that one sock in the wash, the{'\n'}
          page you're looking for seems to have{'\n'}
          vanished. Let's get you back to a fresh{'\n'}
          start.
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={onGoHome}
          >
            <HomeIcon />
            <Text style={styles.primaryButtonText}>Go Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={onContactSupport}
          >
            <HeadsetIcon />
            <Text style={styles.secondaryButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
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
    height: NOT_FOUND.headerHeight,
    backgroundColor: COLORS.notFoundHeaderBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  backButton: {
    width: 32,
  },
  profileButton: {
    width: 32,
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: NOT_FOUND.headerTitleFontSize,
    lineHeight: NOT_FOUND.headerTitleLineHeight,
    color: COLORS.notFoundHeaderTitle,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: NOT_FOUND.contentPaddingHorizontal,
  },
  illustration: {
    width: NOT_FOUND.illustrationWidth,
    height: NOT_FOUND.illustrationHeight,
    marginBottom: NOT_FOUND.illustrationMarginBottom,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: NOT_FOUND.headingFontSize,
    lineHeight: NOT_FOUND.headingLineHeight,
    color: COLORS.notFoundHeading,
    textAlign: 'center',
    marginBottom: NOT_FOUND.headingMarginBottom,
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: NOT_FOUND.subtitleFontSize,
    lineHeight: NOT_FOUND.subtitleLineHeight,
    color: COLORS.notFoundSubtitle,
    textAlign: 'center',
    maxWidth: NOT_FOUND.subtitleMaxWidth,
  },
  buttons: {
    alignSelf: 'stretch',
    gap: NOT_FOUND.buttonsGap,
    marginTop: NOT_FOUND.buttonsMarginTop,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: NOT_FOUND.buttonGap,
    paddingVertical: NOT_FOUND.buttonPaddingVertical,
    borderRadius: NOT_FOUND.buttonBorderRadius,
    backgroundColor: COLORS.notFoundPrimaryBg,
  },
  primaryButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: NOT_FOUND.buttonFontSize,
    lineHeight: NOT_FOUND.buttonLineHeight,
    color: COLORS.notFoundPrimaryText,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: NOT_FOUND.buttonGap,
    paddingVertical: NOT_FOUND.buttonPaddingVertical,
    borderRadius: NOT_FOUND.buttonBorderRadius,
    backgroundColor: COLORS.notFoundSecondaryBg,
    borderWidth: 2,
    borderColor: COLORS.notFoundSecondaryBorder,
  },
  secondaryButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: NOT_FOUND.buttonFontSize,
    lineHeight: NOT_FOUND.buttonLineHeight,
    color: COLORS.notFoundSecondaryText,
  },
});

export default NotFoundScreen;

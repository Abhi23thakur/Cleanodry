import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { COLORS, FONTS, SETTINGS } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.settingsBackIcon}
    />
  </Svg>
);

const HeaderProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.settingsHeaderProfileIcon}
    />
  </Svg>
);

const MoonIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" fill={COLORS.settingsIconColor} />
  </Svg>
);

const BellIcon = () => (
  <Svg width={16} height={20} viewBox="0 0 24 24">
    <Path
      d="M12 2a1 1 0 0 0-1 1v1.06A7 7 0 0 0 5 11v4l-1.29 1.29A1 1 0 0 0 4.41 18H19.6a1 1 0 0 0 .7-1.71L19 15v-4a7 7 0 0 0-6-6.94V3a1 1 0 0 0-1-1Zm0 20a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Z"
      fill={COLORS.settingsIconColor}
    />
  </Svg>
);

const GlobeIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
    <Circle cx={12} cy={12} r={9} stroke={COLORS.settingsIconColor} strokeWidth={1.8} />
    <Path
      d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z"
      stroke={COLORS.settingsIconColor}
      strokeWidth={1.6}
    />
  </Svg>
);

const CardIcon = () => (
  <Svg width={20} height={16} viewBox="0 0 24 20">
    <Path
      d="M20 4H4a2 2 0 0 0-2 2v1h20V6a2 2 0 0 0-2-2ZM2 10v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8Zm4 6H4v-2h2Z"
      fill={COLORS.settingsIconColor}
    />
  </Svg>
);

const ShieldIcon = () => (
  <Svg width={16} height={20} viewBox="0 0 24 24">
    <Path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5Z" fill={COLORS.settingsIconColor} />
  </Svg>
);

const ChevronIcon = () => (
  <Svg width={7.4} height={12} viewBox="0 0 8 12">
    <Path
      d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z"
      fill={COLORS.settingsChevron}
    />
  </Svg>
);

const LogoutIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path
      d="M15 3a2 2 0 0 1 2 2v3h-2V5H6v14h9v-3h2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9Z"
      fill={COLORS.settingsLogoutIcon}
    />
    <Path
      d="M17.59 8.59 16.17 10l1.42 1.41H10v2h7.59L16.17 15l1.42 1.41L22 12l-4.41-3.41Z"
      fill={COLORS.settingsLogoutIcon}
    />
  </Svg>
);

const ToggleSwitch = ({ value, onToggle }) => (
  <TouchableOpacity
    style={[styles.switchTrack, value && styles.switchTrackActive]}
    activeOpacity={0.85}
    onPress={onToggle}
  >
    <View style={[styles.switchThumb, value && styles.switchThumbActive]} />
  </TouchableOpacity>
);

const SettingsRow = ({ icon, title, subtitle, isLast, right }) => (
  <View style={[styles.row, !isLast && styles.rowDivider]}>
    <View style={styles.rowLeft}>
      <View style={styles.iconBox}>{icon}</View>
      <View>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>
    </View>
    {right}
  </View>
);

const NavRow = ({ icon, title, isLast, onPress }) => (
  <TouchableOpacity
    style={[styles.row, !isLast && styles.rowDivider]}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <View style={styles.rowLeft}>
      <View style={styles.iconBox}>{icon}</View>
      <Text style={styles.rowTitle}>{title}</Text>
    </View>
    <ChevronIcon />
  </TouchableOpacity>
);

const SettingsScreen = ({
  language = 'English (US)',
  appVersion = 'Cleanodry App Version 2.4.1',
  onBack = () => {},
  onOpenProfile = () => {},
  onToggleDarkMode = () => {},
  onToggleNotifications = () => {},
  onSelectLanguage = () => {},
  onNavigatePaymentMethods = () => {},
  onNavigatePrivacyPolicy = () => {},
  onLogout = () => {},
  onNavigateHome = () => {},
  onNavigateOrders = () => {},
  onNavigateServices = () => {},
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
    onToggleDarkMode(!darkMode);
  };

  const handleToggleNotifications = () => {
    setNotifications(prev => !prev);
    onToggleNotifications(!notifications);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <HeaderProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headingSection}>
          <Text style={styles.heading}>Settings</Text>
          <Text style={styles.subheading}>Manage your preferences and account.</Text>
        </View>

        <View style={styles.sectionGroup}>
          <Text style={styles.sectionHeading}>Preferences</Text>
          <View style={styles.card}>
            <SettingsRow
              icon={<MoonIcon />}
              title="Dark Mode"
              subtitle="Adjust app appearance"
              right={<ToggleSwitch value={darkMode} onToggle={handleToggleDarkMode} />}
            />
            <SettingsRow
              icon={<BellIcon />}
              title="Notifications"
              subtitle="Order updates & offers"
              right={
                <ToggleSwitch value={notifications} onToggle={handleToggleNotifications} />
              }
            />
            <NavRow
              icon={<GlobeIcon />}
              title="Language"
              isLast
              onPress={onSelectLanguage}
            />
          </View>
        </View>

        <View style={styles.sectionGroup}>
          <Text style={styles.sectionHeading}>Account</Text>
          <View style={styles.card}>
            <NavRow
              icon={<CardIcon />}
              title="Payment Methods"
              onPress={onNavigatePaymentMethods}
            />
            <NavRow
              icon={<ShieldIcon />}
              title="Privacy Policy"
              isLast
              onPress={onNavigatePrivacyPolicy}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.85}
          onPress={onLogout}
        >
          <LogoutIcon />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>{appVersion}</Text>
      </ScrollView>

      <BottomNavBar
        activeTab="Profile"
        onNavigateHome={onNavigateHome}
        onNavigateOrders={onNavigateOrders}
        onNavigateServices={onNavigateServices}
        onNavigateProfile={onBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: SETTINGS.headerHeight,
    backgroundColor: COLORS.settingsHeaderBg,
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
    fontSize: SETTINGS.headerTitleFontSize,
    lineHeight: SETTINGS.headerTitleLineHeight,
    color: COLORS.settingsHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: SETTINGS.contentPaddingHorizontal,
    paddingTop: SETTINGS.contentPaddingTop,
    paddingBottom: SETTINGS.contentPaddingBottom,
    gap: SETTINGS.sectionGap,
  },
  headingSection: {
    gap: SETTINGS.headingGap,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: SETTINGS.headingFontSize,
    lineHeight: SETTINGS.headingLineHeight,
    color: COLORS.settingsHeading,
  },
  subheading: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SETTINGS.subheadingFontSize,
    lineHeight: SETTINGS.subheadingLineHeight,
    color: COLORS.settingsSubheading,
  },
  sectionGroup: {
    gap: SETTINGS.sectionGroupGap,
  },
  sectionHeading: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SETTINGS.sectionHeadingFontSize,
    lineHeight: SETTINGS.sectionHeadingLineHeight,
    color: COLORS.settingsSectionHeading,
  },
  card: {
    backgroundColor: COLORS.settingsCardBg,
    borderWidth: 1,
    borderColor: COLORS.settingsCardBorder,
    borderRadius: SETTINGS.cardBorderRadius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 20,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SETTINGS.rowPadding,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.settingsRowDivider,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
    marginRight: 12,
  },
  iconBox: {
    width: SETTINGS.rowIconSize,
    height: SETTINGS.rowIconSize,
    borderRadius: SETTINGS.rowIconSize / 2,
    backgroundColor: COLORS.settingsIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SETTINGS.rowTitleFontSize,
    lineHeight: SETTINGS.rowTitleLineHeight,
    color: COLORS.settingsRowTitle,
  },
  rowSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SETTINGS.rowSubtitleFontSize,
    lineHeight: SETTINGS.rowSubtitleLineHeight,
    color: COLORS.settingsRowSubtitle,
    marginTop: 1,
  },
  switchTrack: {
    width: SETTINGS.switchWidth,
    height: SETTINGS.switchHeight,
    borderRadius: SETTINGS.switchHeight / 2,
    backgroundColor: COLORS.settingsSwitchOffBg,
    justifyContent: 'center',
    padding: 2,
  },
  switchTrackActive: {
    backgroundColor: COLORS.settingsSwitchOnBg,
  },
  switchThumb: {
    width: SETTINGS.switchThumbSize,
    height: SETTINGS.switchThumbSize,
    borderRadius: SETTINGS.switchThumbSize / 2,
    backgroundColor: COLORS.settingsSwitchThumb,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: SETTINGS.logoutPaddingVertical,
    borderRadius: SETTINGS.logoutBorderRadius,
    backgroundColor: COLORS.settingsLogoutBg,
    borderWidth: 1,
    borderColor: COLORS.settingsLogoutBorder,
  },
  logoutText: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: SETTINGS.logoutFontSize,
    lineHeight: SETTINGS.logoutLineHeight,
    color: COLORS.settingsLogoutText,
  },
  footerText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SETTINGS.footerFontSize,
    lineHeight: SETTINGS.footerLineHeight,
    color: COLORS.settingsFooterText,
    textAlign: 'center',
  },
});

export default SettingsScreen;

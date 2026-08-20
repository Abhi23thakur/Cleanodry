import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { COLORS, FONTS, PROFILE } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

const NAV_ITEMS = [
  { id: 'addresses', icon: 'pin', label: 'Saved Addresses' },
  { id: 'payment', icon: 'card', label: 'Payment Methods' },
  { id: 'notifications', icon: 'bell', label: 'Notifications' },
  { id: 'help', icon: 'help', label: 'Help & Support' },
  { id: 'privacy', icon: 'shield', label: 'Privacy Policy' },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.profileBackIcon}
    />
  </Svg>
);

const HeaderProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.profileHeaderProfileIcon}
    />
  </Svg>
);

const EditIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
      fill={COLORS.profileEditIcon}
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 16 16">
    <Path
      d="M6 11.5 2.5 8l1.4-1.4L6 8.7l6.1-6.1L13.5 4z"
      fill={COLORS.profileVerifiedIcon}
    />
  </Svg>
);

const StarIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 24 24">
    <Path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={COLORS.profileBadgeText}
    />
  </Svg>
);

const TagIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path
      d="M12.41 2H4a2 2 0 0 0-2 2v8.41a2 2 0 0 0 .59 1.42l9.58 9.58a2 2 0 0 0 2.83 0l7.99-8a2 2 0 0 0 0-2.83l-9.58-9.58A2 2 0 0 0 12.41 2ZM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      fill={COLORS.profileStatIconLoyalty}
    />
  </Svg>
);

const TrendIcon = () => (
  <Svg width={13} height={8} viewBox="0 0 16 11">
    <Path
      d="M1 9 6 4l3 3 5-5M11 1h3v3"
      stroke={COLORS.profileTrendText}
      strokeWidth={1.6}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const WalletIcon = () => (
  <Svg width={19} height={18} viewBox="0 0 24 24">
    <Path
      d="M20 7H4a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a1 1 0 0 0-1-1ZM3 5a1 1 0 0 1 1-1h12v2H4a1 1 0 0 1-1-1Z"
      fill={COLORS.profileStatIconWallet}
    />
    <Circle cx={16.5} cy={13} r={1.3} fill={COLORS.profileStatIconWallet} />
  </Svg>
);

const GiftIcon = () => (
  <Svg width={27} height={25} viewBox="0 0 24 24">
    <Path
      d="M20 8h-2.17a3 3 0 0 0-4.83-3.24L12 5.76l-1-1A3 3 0 0 0 6.17 8H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1ZM11 20H7v-7h4v7Zm0-9H5v-1h6v1Zm0-4.76a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 6.24ZM13 20v-7h4v7Zm6-9h-6v-1h6v1Zm-3.5-4.76a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z"
      fill={COLORS.profileBannerIcon}
    />
  </Svg>
);

const ChevronIcon = () => (
  <Svg width={7.4} height={12} viewBox="0 0 8 12">
    <Path
      d="M4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6L4.6 6Z"
      fill={COLORS.profileNavChevron}
    />
  </Svg>
);

const PinIcon = ({ color }) => (
  <Svg width={16} height={20} viewBox="0 0 24 24">
    <Path
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"
      fill={color}
    />
  </Svg>
);

const CardIcon = ({ color }) => (
  <Svg width={20} height={16} viewBox="0 0 24 24">
    <Path
      d="M20 4H4a2 2 0 0 0-2 2v1h20V6a2 2 0 0 0-2-2ZM2 10v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8Zm4 6H4v-2h2Z"
      fill={color}
    />
  </Svg>
);

const BellIcon = ({ color }) => (
  <Svg width={16} height={20} viewBox="0 0 24 24">
    <Path
      d="M12 2a1 1 0 0 0-1 1v1.06A7 7 0 0 0 5 11v4l-1.29 1.29A1 1 0 0 0 4.41 18H19.6a1 1 0 0 0 .7-1.71L19 15v-4a7 7 0 0 0-6-6.94V3a1 1 0 0 0-1-1Zm0 20a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Z"
      fill={color}
    />
  </Svg>
);

const HelpIcon = ({ color }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.75 15.5h-1.5v-1.5h1.5Zm1.32-6.13c-.72.72-1.07 1.13-1.07 2.13h-1.5v-.25c0-1 .4-1.63 1.13-2.36.5-.5.87-.87.87-1.5a1.5 1.5 0 1 0-3 0h-1.5a3 3 0 1 1 5.07 2.13Z"
      fill={color}
    />
  </Svg>
);

const ShieldIcon = ({ color }) => (
  <Svg width={16} height={20} viewBox="0 0 24 24">
    <Path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5Z" fill={color} />
  </Svg>
);

const LogoutIcon = ({ color }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path
      d="M15 3a2 2 0 0 1 2 2v3h-2V5H6v14h9v-3h2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9Z"
      fill={color}
    />
    <Path
      d="M17.59 8.59 16.17 10l1.42 1.41H10v2h7.59L16.17 15l1.42 1.41L22 12l-4.41-3.41Z"
      fill={color}
    />
  </Svg>
);

const NAV_ICONS = {
  pin: PinIcon,
  card: CardIcon,
  bell: BellIcon,
  help: HelpIcon,
  shield: ShieldIcon,
};

const NavRow = ({ icon, label, onPress, isLast }) => {
  const Icon = NAV_ICONS[icon];
  return (
    <TouchableOpacity
      style={[styles.navRow, !isLast && styles.navRowDivider]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View style={styles.navRowLeft}>
        <View style={styles.navIconBox}>
          <Icon color={COLORS.profileNavIcon} />
        </View>
        <Text style={styles.navLabel}>{label}</Text>
      </View>
      <ChevronIcon />
    </TouchableOpacity>
  );
};

const ProfileScreen = ({
  name = 'Abhishek Anand',
  phone = '+1 (555) 123-4567',
  cleanPoints = '2,450',
  cleanPointsDelta = '+120',
  walletBalance = '₹45.00',
  appVersion = 'Cleanodry App v2.1.4',
  onBack = () => {},
  onOpenProfile = () => {},
  onEditProfile = () => {},
  onInvite = () => {},
  onNavigateAddresses = () => {},
  onNavigatePaymentMethods = () => {},
  onNavigateNotifications = () => {},
  onNavigateHelp = () => {},
  onNavigatePrivacy = () => {},
  onLogout = () => {},
  onNavigateHome = () => {},
  onNavigateOrders = () => {},
  onNavigateServices = () => {},
}) => {
  const navActions = {
    addresses: onNavigateAddresses,
    payment: onNavigatePaymentMethods,
    notifications: onNavigateNotifications,
    help: onNavigateHelp,
    privacy: onNavigatePrivacy,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <HeaderProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.bentoSection}>
          <View style={styles.userCard}>
            <TouchableOpacity
              style={styles.editButton}
              activeOpacity={0.85}
              onPress={onEditProfile}
            >
              <EditIcon />
            </TouchableOpacity>

            <View style={styles.avatarWrapper}>
              <Image
                source={require('../assets/images/profile_avatar.png')}
                style={styles.avatarImage}
              />
              <View style={styles.verifiedBadge}>
                <CheckIcon />
              </View>
            </View>

            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>{phone}</Text>

            <View style={styles.memberBadge}>
              <StarIcon />
              <Text style={styles.memberBadgeText}>Premium Member</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <View style={styles.statCardTop}>
                <View style={[styles.statIcon, { backgroundColor: COLORS.profileStatIconLoyaltyBg }]}>
                  <TagIcon />
                </View>
                <View style={styles.trendRow}>
                  <Text style={styles.trendText}>{cleanPointsDelta}</Text>
                  <TrendIcon />
                </View>
              </View>
              <Text style={styles.statLabel}>Clean Points</Text>
              <Text style={styles.statValue}>{cleanPoints}</Text>
            </View>

            <View style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: COLORS.profileStatIconWalletBg }]}>
                <WalletIcon />
              </View>
              <Text style={styles.statLabel}>Wallet Balance</Text>
              <Text style={styles.statValue}>{walletBalance}</Text>
            </View>
          </View>

          <View style={styles.banner}>
            <View style={styles.bannerLeft}>
              <GiftIcon />
              <View style={styles.bannerTextWrapper}>
                <Text style={styles.bannerTitle}>Refer & Earn</Text>
                <Text style={styles.bannerSubtitle}>Get ₹100 for every friend.</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.inviteButton}
              activeOpacity={0.85}
              onPress={onInvite}
            >
              <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.settingsCard}>
          <View style={styles.settingsHeadingWrapper}>
            <Text style={styles.settingsHeading}>Account Settings</Text>
          </View>

          {NAV_ITEMS.map(item => (
            <NavRow
              key={item.id}
              icon={item.icon}
              label={item.label}
              onPress={navActions[item.id]}
            />
          ))}

          <TouchableOpacity
            style={styles.logoutRow}
            activeOpacity={0.7}
            onPress={onLogout}
          >
            <View style={[styles.navIconBox, { backgroundColor: COLORS.profileLogoutIconBg }]}>
              <LogoutIcon color={COLORS.profileLogoutIcon} />
            </View>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>{appVersion}</Text>
      </ScrollView>

      <BottomNavBar
        activeTab="Profile"
        onNavigateHome={onNavigateHome}
        onNavigateOrders={onNavigateOrders}
        onNavigateServices={onNavigateServices}
        onNavigateProfile={() => {}}
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
    height: PROFILE.headerHeight,
    backgroundColor: COLORS.profileHeaderBg,
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
    fontSize: PROFILE.headerTitleFontSize,
    lineHeight: PROFILE.headerTitleLineHeight,
    color: COLORS.profileHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: PROFILE.contentPaddingHorizontal,
    paddingTop: PROFILE.contentPaddingTop,
    paddingBottom: PROFILE.contentPaddingBottom,
    gap: PROFILE.sectionGap,
  },
  bentoSection: {
    gap: PROFILE.bentoGap,
  },
  userCard: {
    backgroundColor: COLORS.profileCardBg,
    borderWidth: 1,
    borderColor: COLORS.profileCardBorder,
    borderRadius: PROFILE.userCardBorderRadius,
    padding: PROFILE.userCardPadding,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  editButton: {
    position: 'absolute',
    top: 17,
    right: 17,
    width: PROFILE.editButtonSize,
    height: PROFILE.editButtonSize,
    borderRadius: PROFILE.editButtonSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: PROFILE.avatarSize,
    height: PROFILE.avatarSize,
    marginBottom: 16,
  },
  avatarImage: {
    width: PROFILE.avatarSize,
    height: PROFILE.avatarSize,
    borderRadius: PROFILE.avatarSize / 2,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: PROFILE.verifiedBadgeSize,
    height: PROFILE.verifiedBadgeSize,
    borderRadius: PROFILE.verifiedBadgeSize / 2,
    backgroundColor: COLORS.profileVerifiedBg,
    borderWidth: 2,
    borderColor: COLORS.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PROFILE.nameFontSize,
    lineHeight: PROFILE.nameLineHeight,
    color: COLORS.profileName,
  },
  phone: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: PROFILE.phoneFontSize,
    lineHeight: PROFILE.phoneLineHeight,
    color: COLORS.profilePhone,
    marginTop: 3,
  },
  memberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.profileBadgeBg,
    paddingVertical: PROFILE.memberBadgePaddingVertical,
    paddingHorizontal: PROFILE.memberBadgePaddingHorizontal,
    borderRadius: 9999,
    marginTop: 12,
  },
  memberBadgeText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PROFILE.memberBadgeFontSize,
    lineHeight: PROFILE.memberBadgeLineHeight,
    color: COLORS.profileBadgeText,
  },
  statsRow: {
    flexDirection: 'row',
    gap: PROFILE.bentoGap,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.profileCardBg,
    borderWidth: 1,
    borderColor: COLORS.profileCardBorder,
    borderRadius: PROFILE.statCardBorderRadius,
    padding: PROFILE.statCardPadding,
    gap: 4,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  statCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statIcon: {
    width: PROFILE.statIconSize,
    height: PROFILE.statIconSize,
    borderRadius: PROFILE.statIconSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trendText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PROFILE.trendFontSize,
    lineHeight: PROFILE.trendLineHeight,
    color: COLORS.profileTrendText,
  },
  statLabel: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: PROFILE.statLabelFontSize,
    lineHeight: PROFILE.statLabelLineHeight,
    color: COLORS.profileStatLabel,
  },
  statValue: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: PROFILE.statValueFontSize,
    lineHeight: PROFILE.statValueLineHeight,
    color: COLORS.profileStatValue,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.profileCardBg,
    borderWidth: 1,
    borderColor: COLORS.profileCardBorder,
    borderRadius: PROFILE.bannerBorderRadius,
    padding: PROFILE.bannerPadding,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  bannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  bannerTextWrapper: {
    flex: 1,
  },
  bannerTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PROFILE.bannerTitleFontSize,
    lineHeight: PROFILE.bannerTitleLineHeight,
    color: COLORS.profileBannerTitle,
  },
  bannerSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: PROFILE.bannerSubtitleFontSize,
    lineHeight: PROFILE.bannerSubtitleLineHeight,
    color: COLORS.profileBannerSubtitle,
  },
  inviteButton: {
    backgroundColor: COLORS.profileInviteBg,
    paddingVertical: PROFILE.inviteButtonPaddingVertical,
    paddingHorizontal: PROFILE.inviteButtonPaddingHorizontal,
    borderRadius: PROFILE.inviteButtonBorderRadius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  inviteButtonText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: PROFILE.inviteButtonFontSize,
    lineHeight: PROFILE.inviteButtonLineHeight,
    color: COLORS.profileInviteText,
  },
  settingsCard: {
    backgroundColor: COLORS.profileSettingsCardBg,
    borderRadius: PROFILE.settingsCardBorderRadius,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  settingsHeadingWrapper: {
    paddingTop: PROFILE.settingsHeadingPaddingTop,
    paddingHorizontal: 24,
    paddingBottom: PROFILE.settingsHeadingPaddingBottom,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.profileSettingsDivider,
  },
  settingsHeading: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PROFILE.settingsHeadingFontSize,
    lineHeight: PROFILE.settingsHeadingLineHeight,
    color: COLORS.profileSettingsHeading,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: PROFILE.navRowPadding,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
  navRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.profileNavDivider,
  },
  navRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: PROFILE.navGap,
  },
  navIconBox: {
    width: PROFILE.navIconBoxSize,
    height: PROFILE.navIconBoxSize,
    borderRadius: PROFILE.navIconBoxSize / 2,
    backgroundColor: COLORS.profileNavIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: PROFILE.navLabelFontSize,
    lineHeight: PROFILE.navLabelLineHeight,
    color: COLORS.profileNavLabel,
  },
  logoutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: PROFILE.navGap,
    padding: PROFILE.navRowPadding,
  },
  logoutText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PROFILE.navLabelFontSize,
    lineHeight: PROFILE.navLabelLineHeight,
    color: COLORS.profileLogoutText,
  },
  footerText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: PROFILE.footerFontSize,
    lineHeight: PROFILE.footerLineHeight,
    color: COLORS.profileFooterText,
    textAlign: 'center',
  },
});

export default ProfileScreen;

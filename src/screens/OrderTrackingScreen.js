import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, TRACK_ORDER } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

const STEPS = [
  {
    id: 'picked-up',
    title: 'Picked Up',
    subtitle: 'Today, 09:15 AM',
    status: 'completed',
  },
  {
    id: 'washing-folding',
    title: 'Washing & Folding',
    subtitle: 'Today, 10:30 AM',
    status: 'completed',
  },
  {
    id: 'out-for-delivery',
    title: 'Out for Delivery',
    subtitle: 'Arriving around 1:45 PM',
    status: 'active',
  },
  {
    id: 'delivered',
    title: 'Delivered',
    subtitle: 'Pending',
    status: 'pending',
  },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.trackOrderBackIcon}
    />
  </Svg>
);

const ProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.trackOrderProfileIcon}
    />
  </Svg>
);

const TruckIcon = () => (
  <Svg width={18} height={14} viewBox="0 0 24 24">
    <Path
      d="M2 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2h2.4a1 1 0 0 1 .8.4l2.1 2.8a1 1 0 0 1 .2.6V15a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3a1 1 0 0 1-1-1V6Z"
      fill={COLORS.trackOrderBadgeText}
    />
    <Path
      d="M7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={COLORS.trackOrderBadgeText}
    />
  </Svg>
);

const StarIcon = () => (
  <Svg width={13} height={13} viewBox="0 0 24 24">
    <Path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={COLORS.trackOrderDriverRatingStar}
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2Z"
      fill={COLORS.trackOrderCallIcon}
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={12} height={10} viewBox="0 0 16 14">
    <Path
      d="M5.5 11 1 6.5l1.4-1.4L5.5 8.2 13.1 0.6 14.5 2z"
      fill={COLORS.trackOrderStepCheckIcon}
    />
  </Svg>
);

const HeadsetIcon = () => (
  <Svg width={18} height={16} viewBox="0 0 24 24">
    <Path
      d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H6.1A6 6 0 0 1 18 10v2h-1.9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1H17a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z"
      fill={COLORS.trackOrderSupportButtonIcon}
    />
  </Svg>
);

const StepIcon = ({ status }) => {
  const bg =
    status === 'completed'
      ? COLORS.trackOrderStepCompletedBg
      : status === 'active'
      ? COLORS.trackOrderStepActiveBg
      : COLORS.trackOrderStepPendingBg;

  return (
    <View style={styles.stepIconRing}>
      <View style={[styles.stepIconCircle, { backgroundColor: bg }]}>
        {status === 'completed' ? <CheckIcon /> : null}
        {status === 'active' ? <View style={styles.stepActiveDot} /> : null}
      </View>
    </View>
  );
};

const TimelineStep = ({ step, isLast }) => (
  <View style={[styles.stepRow, !isLast && styles.stepRowGap]}>
    <StepIcon status={step.status} />
    <View style={[styles.stepText, step.status === 'pending' && styles.stepTextPending]}>
      <Text style={styles.stepTitle}>{step.title}</Text>
      <Text
        style={[
          styles.stepSubtitle,
          step.status === 'active' && styles.stepSubtitleActive,
        ]}
      >
        {step.subtitle}
      </Text>
    </View>
  </View>
);

const OrderTrackingScreen = ({
  orderId = 'CD-8924',
  driverName = 'Michael T.',
  driverRating = '4.9 (124 trips)',
  etaMinutes = 12,
  onBack = () => {},
  onOpenProfile = () => {},
  onCallDriver = () => {},
  onContactSupport = () => {},
  onNavigateHome = () => {},
  onNavigateServices = () => {},
  onNavigateProfile = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Track your order</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mapSection}>
          <View style={styles.mapSectionHeader}>
            <View>
              <Text style={styles.sectionHeading}>Track your order</Text>
              <Text style={styles.orderId}>Order #{orderId}</Text>
            </View>
            <View style={styles.badge}>
              <TruckIcon />
              <Text style={styles.badgeText}>Out for delivery</Text>
            </View>
          </View>

          <View style={styles.mapCard}>
            <Image
              source={require('../assets/images/track_order_map_bg.png')}
              style={styles.mapImage}
              resizeMode="cover"
            />

            <View style={styles.etaCard}>
              <Text style={styles.etaLabel}>Arrival in</Text>
              <View style={styles.etaValueRow}>
                <Text style={styles.etaValue}>{etaMinutes}</Text>
                <Text style={styles.etaUnit}>m</Text>
              </View>
            </View>

            <View style={styles.driverCard}>
              <View style={styles.driverInfo}>
                <Image
                  source={require('../assets/images/track_order_driver_avatar.png')}
                  style={styles.driverAvatar}
                />
                <View>
                  <Text style={styles.driverName}>{driverName}</Text>
                  <View style={styles.driverRatingRow}>
                    <StarIcon />
                    <Text style={styles.driverRatingText}>{driverRating}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.callButton}
                activeOpacity={0.85}
                onPress={onCallDriver}
              >
                <PhoneIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.timelineCard}>
          <Text style={styles.cardHeading}>Order Progress</Text>
          <View style={styles.stepsContainer}>
            <View style={styles.divider} />
            {STEPS.map((step, index) => (
              <TimelineStep
                key={step.id}
                step={step}
                isLast={index === STEPS.length - 1}
              />
            ))}
          </View>
        </View>

        <View style={styles.supportCard}>
          <View>
            <Text style={styles.supportTitle}>Need help?</Text>
            <Text style={styles.supportSubtitle}>
              Contact our support{'\n'}team.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.supportButton}
            activeOpacity={0.85}
            onPress={onContactSupport}
          >
            <HeadsetIcon />
            <Text style={styles.supportButtonText}>Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNavBar
        activeTab="Orders"
        onNavigateHome={onNavigateHome}
        onNavigateOrders={() => {}}
        onNavigateServices={onNavigateServices}
        onNavigateProfile={onNavigateProfile}
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
    height: TRACK_ORDER.headerHeight,
    backgroundColor: COLORS.trackOrderHeaderBg,
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
    fontSize: TRACK_ORDER.headerTitleFontSize,
    lineHeight: TRACK_ORDER.headerTitleLineHeight,
    color: COLORS.trackOrderHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: TRACK_ORDER.contentPaddingHorizontal,
    paddingTop: TRACK_ORDER.contentPaddingTop,
    paddingBottom: TRACK_ORDER.contentPaddingBottom,
    gap: TRACK_ORDER.sectionGap,
  },
  mapSection: {
    gap: TRACK_ORDER.mapSectionGap,
  },
  mapSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  sectionHeading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: TRACK_ORDER.sectionHeadingFontSize,
    lineHeight: TRACK_ORDER.sectionHeadingLineHeight,
    color: COLORS.trackOrderSectionHeading,
  },
  orderId: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: TRACK_ORDER.orderIdFontSize,
    lineHeight: TRACK_ORDER.orderIdLineHeight,
    color: COLORS.trackOrderOrderId,
    marginTop: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.trackOrderBadgeBg,
    paddingVertical: TRACK_ORDER.badgePaddingVertical,
    paddingHorizontal: TRACK_ORDER.badgePaddingHorizontal,
    borderRadius: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  badgeText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: TRACK_ORDER.badgeFontSize,
    lineHeight: TRACK_ORDER.badgeLineHeight,
    color: COLORS.trackOrderBadgeText,
  },
  mapCard: {
    height: TRACK_ORDER.mapHeight,
    borderRadius: TRACK_ORDER.mapBorderRadius,
    borderWidth: 1,
    borderColor: COLORS.trackOrderMapBorder,
    backgroundColor: COLORS.trackOrderMapBg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 4,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  etaCard: {
    position: 'absolute',
    top: TRACK_ORDER.etaCardTop,
    left: TRACK_ORDER.etaCardLeft,
    alignItems: 'center',
    paddingVertical: TRACK_ORDER.etaCardPaddingVertical,
    paddingHorizontal: TRACK_ORDER.etaCardPaddingHorizontal,
    borderRadius: TRACK_ORDER.etaCardBorderRadius,
    backgroundColor: COLORS.textPrimary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  etaLabel: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: TRACK_ORDER.etaLabelFontSize,
    lineHeight: TRACK_ORDER.etaLabelLineHeight,
    color: COLORS.trackOrderEtaLabel,
  },
  etaValueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  etaValue: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: TRACK_ORDER.etaValueFontSize,
    color: COLORS.trackOrderEtaValue,
  },
  etaUnit: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: TRACK_ORDER.etaUnitFontSize,
    color: COLORS.trackOrderEtaValue,
    marginBottom: 2,
  },
  driverCard: {
    position: 'absolute',
    left: TRACK_ORDER.driverCardLeft,
    right: TRACK_ORDER.driverCardRight,
    bottom: TRACK_ORDER.driverCardBottom,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: TRACK_ORDER.driverCardPadding,
    borderRadius: TRACK_ORDER.driverCardBorderRadius,
    backgroundColor: COLORS.trackOrderDriverCardBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  driverAvatar: {
    width: TRACK_ORDER.driverAvatarSize,
    height: TRACK_ORDER.driverAvatarSize,
    borderRadius: TRACK_ORDER.driverAvatarSize / 2,
  },
  driverName: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: TRACK_ORDER.driverNameFontSize,
    lineHeight: TRACK_ORDER.driverNameLineHeight,
    color: COLORS.trackOrderDriverName,
  },
  driverRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  driverRatingText: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: TRACK_ORDER.driverRatingFontSize,
    lineHeight: TRACK_ORDER.driverRatingLineHeight,
    color: COLORS.trackOrderDriverRatingText,
  },
  callButton: {
    width: TRACK_ORDER.callButtonSize,
    height: TRACK_ORDER.callButtonSize,
    borderRadius: TRACK_ORDER.callButtonSize / 2,
    backgroundColor: COLORS.trackOrderCallButtonBg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  timelineCard: {
    backgroundColor: COLORS.trackOrderCardBg,
    borderWidth: 1,
    borderColor: COLORS.trackOrderCardBorder,
    borderRadius: TRACK_ORDER.cardBorderRadius,
    padding: TRACK_ORDER.cardPadding,
    gap: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  cardHeading: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: TRACK_ORDER.cardHeadingFontSize,
    lineHeight: TRACK_ORDER.cardHeadingLineHeight,
    color: COLORS.trackOrderCardHeading,
  },
  stepsContainer: {
    paddingLeft: TRACK_ORDER.stepsPaddingLeft,
    position: 'relative',
  },
  divider: {
    position: 'absolute',
    left: TRACK_ORDER.stepsPaddingLeft + TRACK_ORDER.stepIconRingSize / 2 - 1,
    top: TRACK_ORDER.stepIconRingSize / 2,
    bottom: TRACK_ORDER.stepIconRingSize / 2,
    width: 2,
    backgroundColor: COLORS.trackOrderDivider,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  stepRowGap: {
    marginBottom: TRACK_ORDER.stepsGap,
  },
  stepIconRing: {
    width: TRACK_ORDER.stepIconRingSize,
    height: TRACK_ORDER.stepIconRingSize,
    borderRadius: TRACK_ORDER.stepIconRingSize / 2,
    backgroundColor: COLORS.trackOrderCardBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepIconCircle: {
    width: TRACK_ORDER.stepIconSize,
    height: TRACK_ORDER.stepIconSize,
    borderRadius: TRACK_ORDER.stepIconSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepActiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.trackOrderStepActiveDot,
  },
  stepText: {
    flex: 1,
    marginTop: 4,
  },
  stepTextPending: {
    opacity: 0.5,
  },
  stepTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: TRACK_ORDER.stepTitleFontSize,
    lineHeight: TRACK_ORDER.stepTitleLineHeight,
    color: COLORS.trackOrderStepTitle,
  },
  stepSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: TRACK_ORDER.stepSubtitleFontSize,
    lineHeight: TRACK_ORDER.stepSubtitleLineHeight,
    color: COLORS.trackOrderStepSubtitle,
    marginTop: 2,
  },
  stepSubtitleActive: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    color: COLORS.trackOrderStepActiveSubtitle,
  },
  supportCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.trackOrderSupportCardBg,
    borderWidth: 1,
    borderColor: COLORS.trackOrderSupportCardBorder,
    borderRadius: TRACK_ORDER.supportCardBorderRadius,
    padding: TRACK_ORDER.supportCardPadding,
  },
  supportTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: TRACK_ORDER.supportTitleFontSize,
    lineHeight: TRACK_ORDER.supportTitleLineHeight,
    color: COLORS.trackOrderSupportTitle,
  },
  supportSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: TRACK_ORDER.supportSubtitleFontSize,
    lineHeight: TRACK_ORDER.supportSubtitleLineHeight,
    color: COLORS.trackOrderSupportSubtitle,
    marginTop: 4,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.trackOrderSupportButtonBg,
    borderWidth: 1,
    borderColor: COLORS.trackOrderSupportButtonBorder,
    borderRadius: TRACK_ORDER.supportButtonBorderRadius,
    paddingVertical: TRACK_ORDER.supportButtonPaddingVertical,
    paddingHorizontal: TRACK_ORDER.supportButtonPaddingHorizontal,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  supportButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: TRACK_ORDER.supportButtonFontSize,
    lineHeight: TRACK_ORDER.supportButtonLineHeight,
    color: COLORS.trackOrderSupportButtonText,
  },
});

export default OrderTrackingScreen;

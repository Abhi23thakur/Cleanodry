import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';
import { COLORS, FONTS, ORDER_CONFIRMED } from '../constants/theme';

const DEFAULT_ORDER = {
  orderNumber: '#CD-84920',
  pickup: {
    time: 'Today, 2:00 PM',
    detail: '451 Wallaby Way, Sydney',
  },
  delivery: {
    time: 'Tomorrow, 4:00 PM',
    detail: 'Standard Wash & Fold',
  },
  total: 45.0,
};

const formatAmount = value => `₹${value.toFixed(2)}`;

const CloseIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14">
    <Path
      d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
      fill={COLORS.orderConfirmedCloseIcon}
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={33.33} height={33.33} viewBox="0 0 34 34">
    <Path
      d="M14.6199 24.8199L26.6049 12.8349L24.2249 10.4549L14.6199 20.0599L9.77495 15.2149L7.39496 17.5949L14.6199 24.8199ZM16.9999 33.9998C14.6483 33.9998 12.4383 33.5536 10.3699 32.6611C8.30163 31.7686 6.50247 30.5574 4.97248 29.0274C3.44248 27.4974 2.23124 25.6982 1.33874 23.6299C0.446248 21.5616 0 19.3516 0 16.9999C0 14.6483 0.446248 12.4383 1.33874 10.3699C2.23124 8.30163 3.44248 6.50247 4.97248 4.97248C6.50247 3.44248 8.30163 2.23124 10.3699 1.33874C12.4383 0.446248 14.6483 0 16.9999 0C19.3516 0 21.5616 0.446248 23.6299 1.33874C25.6982 2.23124 27.4974 3.44248 29.0274 4.97248C30.5574 6.50247 31.7686 8.30163 32.6611 10.3699C33.5536 12.4383 33.9998 14.6483 33.9998 16.9999C33.9998 19.3516 33.5536 21.5616 32.6611 23.6299C31.7686 25.6982 30.5574 27.4974 29.0274 29.0274C27.4974 30.5574 25.6982 31.7686 23.6299 32.6611C21.5616 33.5536 19.3516 33.9998 16.9999 33.9998Z"
      fill={COLORS.textPrimary}
    />
  </Svg>
);

const TrackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
      fill={COLORS.orderConfirmedPrimaryText}
    />
  </Svg>
);

const PickupIcon = () => (
  <Svg width={16.5} height={12} viewBox="0 0 17 12">
    <Path
      d="M3.75 12C3.125 12 2.59375 11.7812 2.15625 11.3438C1.71875 10.9062 1.5 10.375 1.5 9.75H0V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H12V3H14.25L16.5 6V9.75H15C15 10.375 14.7812 10.9062 14.3438 11.3438C13.9062 11.7812 13.375 12 12.75 12C12.125 12 11.5938 11.7812 11.1562 11.3438C10.7188 10.9062 10.5 10.375 10.5 9.75H6C6 10.375 5.78125 10.9062 5.34375 11.3438C4.90625 11.7812 4.375 12 3.75 12ZM3.75 10.5C3.9625 10.5 4.14062 10.4281 4.28438 10.2844C4.42813 10.1406 4.5 9.9625 4.5 9.75C4.5 9.5375 4.42813 9.35938 4.28438 9.21562C4.14062 9.07187 3.9625 9 3.75 9C3.5375 9 3.35938 9.07187 3.21563 9.21562C3.07188 9.35938 3 9.5375 3 9.75C3 9.9625 3.07188 10.1406 3.21563 10.2844C3.35938 10.4281 3.5375 10.5 3.75 10.5ZM1.5 8.25H2.1C2.3125 8.025 2.55625 7.84375 2.83125 7.70625C3.10625 7.56875 3.4125 7.5 3.75 7.5C4.0875 7.5 4.39375 7.56875 4.66875 7.70625C4.94375 7.84375 5.1875 8.025 5.4 8.25H10.5V1.5H1.5V8.25ZM12.75 10.5C12.9625 10.5 13.1406 10.4281 13.2844 10.2844C13.4281 10.1406 13.5 9.9625 13.5 9.75C13.5 9.5375 13.4281 9.35938 13.2844 9.21562C13.1406 9.07187 12.9625 9 12.75 9C12.5375 9 12.3594 9.07187 12.2156 9.21562C12.0719 9.35938 12 9.5375 12 9.75C12 9.9625 12.0719 10.1406 12.2156 10.2844C12.3594 10.4281 12.5375 10.5 12.75 10.5ZM12 6.75H15.1875L13.5 4.5H12V6.75Z"
      fill={COLORS.orderConfirmedInfoLabel}
    />
  </Svg>
);

const DeliveryIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 15 15">
    <Path
      d="M2.25 15C1.8375 15 1.48438 14.8531 1.19062 14.5594C0.896875 14.2656 0.75 13.9125 0.75 13.5V5.04375C0.525 4.90625 0.34375 4.72813 0.20625 4.50938C0.06875 4.29063 0 4.0375 0 3.75V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V3.75C15 4.0375 14.9312 4.29063 14.7937 4.50938C14.6562 4.72813 14.475 4.90625 14.25 5.04375V13.5C14.25 13.9125 14.1031 14.2656 13.8094 14.5594C13.5156 14.8531 13.1625 15 12.75 15H2.25ZM2.25 5.25V13.5H12.75V5.25H2.25ZM1.5 3.75H13.5V1.5H1.5V3.75ZM5.25 9H9.75V7.5H5.25V9Z"
      fill={COLORS.orderConfirmedInfoLabel}
    />
  </Svg>
);

const SuccessBadge = () => (
  <View style={styles.badgeWrapper}>
    <Svg
      width={ORDER_CONFIRMED.badgeOuterSize}
      height={ORDER_CONFIRMED.badgeOuterSize}
      viewBox="0 0 160 160"
      style={styles.badgeOuterSvg}
    >
      <Defs>
        <LinearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor={COLORS.orderConfirmedBadgeOuterFrom} />
          <Stop offset="100%" stopColor={COLORS.orderConfirmedBadgeOuterTo} />
        </LinearGradient>
      </Defs>
      <Circle cx={80} cy={80} r={80} fill="url(#outerGrad)" opacity={0.2} />
    </Svg>

    <View style={styles.badgeMidCircle}>
      <Svg
        width={ORDER_CONFIRMED.badgeInnerSize}
        height={ORDER_CONFIRMED.badgeInnerSize}
        viewBox="0 0 64 64"
      >
        <Defs>
          <LinearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor={COLORS.orderConfirmedBadgeInnerFrom} />
            <Stop offset="100%" stopColor={COLORS.orderConfirmedBadgeInnerTo} />
          </LinearGradient>
        </Defs>
        <Circle cx={32} cy={32} r={32} fill="url(#innerGrad)" />
      </Svg>
      <View style={styles.badgeIconOverlay}>
        <CheckIcon />
      </View>
    </View>
  </View>
);

const InfoBox = ({ icon, label, title, subtitle }) => (
  <View style={styles.infoBox}>
    <View style={styles.infoLabelRow}>
      {icon}
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
    <Text style={styles.infoTitle}>{title}</Text>
    <Text style={styles.infoSubtitle}>{subtitle}</Text>
  </View>
);

const OrderConfirmedScreen = ({
  order = DEFAULT_ORDER,
  onClose = () => {},
  onTrackOrder = () => {},
  onBackToHome = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} hitSlop={12}>
          <CloseIcon />
        </TouchableOpacity>
        <Image
          source={require('../assets/images/otp_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.successSection}>
          <SuccessBadge />
          <Text style={styles.heading}>Order Confirmed!</Text>
          <Text style={styles.subtitle}>
            Your laundry is in good hands. We'll pick it up soon.
          </Text>
        </View>

        <View style={styles.orderCard}>
          <View style={styles.orderNumberRow}>
            <Text style={styles.orderLabel}>Order Number</Text>
            <Text style={styles.orderValue}>{order.orderNumber}</Text>
          </View>

          <InfoBox
            icon={<PickupIcon />}
            label="ESTIMATED PICKUP"
            title={order.pickup.time}
            subtitle={order.pickup.detail}
          />

          <InfoBox
            icon={<DeliveryIcon />}
            label="EXPECTED DELIVERY"
            title={order.delivery.time}
            subtitle={order.delivery.detail}
          />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>
              {formatAmount(order.total)}
            </Text>
          </View>
        </View>

        <View style={styles.buttonsSection}>
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={onTrackOrder}
          >
            <Text style={styles.primaryButtonText}>Track Order</Text>
            <TrackIcon />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={onBackToHome}
          >
            <Text style={styles.secondaryButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: ORDER_CONFIRMED.headerHeight,
    backgroundColor: COLORS.orderConfirmedHeaderBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: ORDER_CONFIRMED.logoWidth,
    height: ORDER_CONFIRMED.logoHeight,
  },
  headerSpacer: {
    width: 14,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: ORDER_CONFIRMED.contentPaddingHorizontal,
    paddingTop: ORDER_CONFIRMED.contentPaddingTop,
    paddingBottom: 32,
  },
  successSection: {
    alignItems: 'center',
    marginBottom: ORDER_CONFIRMED.sectionGap,
  },
  badgeWrapper: {
    width: ORDER_CONFIRMED.badgeOuterSize,
    height: ORDER_CONFIRMED.badgeOuterSize,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ORDER_CONFIRMED.badgeMarginBottom,
  },
  badgeOuterSvg: {
    position: 'absolute',
  },
  badgeMidCircle: {
    width: ORDER_CONFIRMED.badgeMidSize,
    height: ORDER_CONFIRMED.badgeMidSize,
    borderRadius: ORDER_CONFIRMED.badgeMidSize / 2,
    backgroundColor: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.orderConfirmedBadgeRing,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 6,
  },
  badgeIconOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: ORDER_CONFIRMED.headingFontSize,
    lineHeight: ORDER_CONFIRMED.headingLineHeight,
    color: COLORS.orderConfirmedHeading,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ORDER_CONFIRMED.subtitleFontSize,
    lineHeight: ORDER_CONFIRMED.subtitleLineHeight,
    color: COLORS.orderConfirmedSubtitle,
    textAlign: 'center',
    width: ORDER_CONFIRMED.subtitleWidth,
  },
  orderCard: {
    backgroundColor: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.orderConfirmedCardBorder,
    borderRadius: ORDER_CONFIRMED.cardBorderRadius,
    padding: ORDER_CONFIRMED.cardPadding,
    gap: ORDER_CONFIRMED.cardGap,
    marginBottom: ORDER_CONFIRMED.sectionGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  orderNumberRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.orderConfirmedDivider,
    paddingBottom: 16,
  },
  orderLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_CONFIRMED.orderLabelFontSize,
    lineHeight: ORDER_CONFIRMED.orderLabelLineHeight,
    color: COLORS.orderConfirmedOrderLabel,
  },
  orderValue: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ORDER_CONFIRMED.orderValueFontSize,
    lineHeight: ORDER_CONFIRMED.orderValueLineHeight,
    color: COLORS.orderConfirmedOrderValue,
  },
  infoBox: {
    backgroundColor: COLORS.orderConfirmedInfoBoxBg,
    borderRadius: ORDER_CONFIRMED.infoBoxBorderRadius,
    padding: ORDER_CONFIRMED.infoBoxPadding,
    gap: ORDER_CONFIRMED.infoBoxGap,
  },
  infoLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  infoLabel: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ORDER_CONFIRMED.infoLabelFontSize,
    lineHeight: ORDER_CONFIRMED.infoLabelLineHeight,
    letterSpacing: ORDER_CONFIRMED.infoLabelLetterSpacing,
    textTransform: 'uppercase',
    color: COLORS.orderConfirmedInfoLabel,
  },
  infoTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ORDER_CONFIRMED.infoTitleFontSize,
    lineHeight: ORDER_CONFIRMED.infoTitleLineHeight,
    color: COLORS.orderConfirmedInfoTitle,
  },
  infoSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ORDER_CONFIRMED.infoSubtitleFontSize,
    lineHeight: ORDER_CONFIRMED.infoSubtitleLineHeight,
    color: COLORS.orderConfirmedInfoSubtitle,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.orderConfirmedDivider,
    paddingTop: 16,
  },
  totalLabel: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ORDER_CONFIRMED.totalLabelFontSize,
    lineHeight: ORDER_CONFIRMED.totalLabelLineHeight,
    color: COLORS.orderConfirmedTotalLabel,
  },
  totalValue: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: ORDER_CONFIRMED.totalValueFontSize,
    lineHeight: ORDER_CONFIRMED.totalValueLineHeight,
    color: COLORS.orderConfirmedTotalValue,
  },
  buttonsSection: {
    gap: ORDER_CONFIRMED.buttonGap,
  },
  primaryButton: {
    height: ORDER_CONFIRMED.primaryButtonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.orderConfirmedPrimaryBg,
    borderRadius: ORDER_CONFIRMED.primaryButtonBorderRadius,
  },
  primaryButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ORDER_CONFIRMED.primaryButtonFontSize,
    lineHeight: ORDER_CONFIRMED.primaryButtonLineHeight,
    color: COLORS.orderConfirmedPrimaryText,
  },
  secondaryButton: {
    paddingVertical: ORDER_CONFIRMED.secondaryButtonPaddingVertical,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_CONFIRMED.secondaryButtonFontSize,
    lineHeight: ORDER_CONFIRMED.secondaryButtonLineHeight,
    color: COLORS.orderConfirmedSecondaryText,
  },
});

export default OrderConfirmedScreen;

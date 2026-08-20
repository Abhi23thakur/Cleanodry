import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, ORDER_HISTORY } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

const FILTERS = [
  { id: 'all', label: 'All Orders' },
  { id: 'ongoing', label: 'Ongoing' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
];

const ORDERS = [
  {
    id: 'cd-8924',
    status: 'ongoing',
    badgeLabel: 'In Progress',
    orderNumber: 'CD-8924',
    date: 'Oct 24, 2023',
    items: 2,
    price: 45.0,
    serviceIcon: 'hanger',
    serviceLabel: 'Premium Wash & Fold',
    actions: ['view', 'track'],
  },
  {
    id: 'cd-7102',
    status: 'completed',
    badgeLabel: 'Completed',
    orderNumber: 'CD-7102',
    date: 'Oct 15, 2023',
    items: 5,
    price: 120.0,
    serviceIcon: 'hanger',
    serviceLabel: 'Dry Cleaning - Suits',
    actions: ['view', 'reorder'],
  },
  {
    id: 'cd-6550',
    status: 'completed',
    badgeLabel: 'Completed',
    orderNumber: 'CD-6550',
    date: 'Sep 28, 2023',
    items: 1,
    price: 35.0,
    serviceIcon: 'bed',
    serviceLabel: 'Bedding & Linens',
    actions: ['view', 'reorder'],
  },
  {
    id: 'cd-6499',
    status: 'cancelled',
    badgeLabel: 'Cancelled',
    orderNumber: 'CD-6499',
    date: 'Sep 20, 2023',
    items: 3,
    price: 55.0,
    serviceIcon: 'iron',
    serviceLabel: 'Ironing Service',
    actions: ['view'],
  },
];

const formatPrice = value => `₹${value.toFixed(2)}`;

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.orderHistoryBackIcon}
    />
  </Svg>
);

const ProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.orderHistoryProfileIcon}
    />
  </Svg>
);

const HangerIcon = ({ color }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3.5a1.5 1.5 0 1 0-1.45 1.5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path d="M12 5v2.2L3 13.5v2h18v-2l-9-6.3V5Z" fill={color} />
    <Path d="M4 18h16" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const IronIcon = ({ color }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 8.5c0-1.7 1.6-2.9 3.2-2.4"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      d="M3.5 16c0-2.1 1.15-4 3-5l9-4.6c2-1 4.5.4 4.5 2.6v5c0 3.3-2.7 6-6 6H6.5c-1.7 0-3-1.3-3-3Z"
      fill={color}
    />
    <Path d="M6.5 19v1.5" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const BedIcon = ({ color }) => (
  <Svg width={18} height={18} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 18v-9.5A1.5 1.5 0 0 1 4.5 7H10a1.5 1.5 0 0 1 1.5 1.5V11"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
    />
    <Path
      d="M12.5 11v-2A1.5 1.5 0 0 1 14 7.5h5.5A1.5 1.5 0 0 1 21 9v9"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
    />
    <Path
      d="M2 20.5v-6a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 1.5 1.5v6"
      stroke={color}
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M2 18h20" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
  </Svg>
);

const RefreshIcon = () => (
  <Svg width={14} height={16} viewBox="0 0 24 24">
    <Path
      d="M12 4V1L7.5 5.5L12 10V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-8Z"
      fill={COLORS.orderHistoryReorderButtonText}
    />
  </Svg>
);

const SERVICE_ICONS = {
  hanger: HangerIcon,
  iron: IronIcon,
  bed: BedIcon,
};

const StatusBadge = ({ status, label }) => {
  const bg =
    status === 'ongoing'
      ? COLORS.orderHistoryBadgeInProgressBg
      : status === 'completed'
      ? COLORS.orderHistoryBadgeCompletedBg
      : COLORS.orderHistoryBadgeCancelledBg;
  const text =
    status === 'ongoing'
      ? COLORS.orderHistoryBadgeInProgressText
      : status === 'completed'
      ? COLORS.orderHistoryBadgeCompletedText
      : COLORS.orderHistoryBadgeCancelledText;

  return (
    <View style={[styles.badge, { backgroundColor: bg }]}>
      <Text style={[styles.badgeText, { color: text }]}>{label}</Text>
    </View>
  );
};

const OrderCard = ({ order, onViewDetails, onTrackOrder, onReorder }) => {
  const ServiceIcon = SERVICE_ICONS[order.serviceIcon];
  const isCancelled = order.status === 'cancelled';

  return (
    <View style={[styles.card, isCancelled && styles.cardCancelled]}>
      <View style={styles.cardTopRow}>
        <View style={styles.cardTopLeft}>
          <StatusBadge status={order.status} label={order.badgeLabel} />
          <Text style={styles.orderNumber}>Order #{order.orderNumber}</Text>
          <Text style={styles.orderMeta}>
            {order.date} • {order.items} {order.items === 1 ? 'Item' : 'Items'}
          </Text>
        </View>
        <Text
          style={[
            styles.price,
            isCancelled && styles.priceCancelled,
          ]}
        >
          {formatPrice(order.price)}
        </Text>
      </View>

      <View style={styles.serviceRow}>
        <ServiceIcon color={COLORS.orderHistoryServiceIcon} />
        <Text style={styles.serviceLabel}>{order.serviceLabel}</Text>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.viewDetailsButton}
          activeOpacity={0.85}
          onPress={() => onViewDetails(order)}
        >
          <Text style={styles.viewDetailsText}>View Details</Text>
        </TouchableOpacity>

        {order.actions.includes('track') ? (
          <TouchableOpacity
            style={styles.trackButton}
            activeOpacity={0.85}
            onPress={() => onTrackOrder(order)}
          >
            <Text style={styles.trackButtonText}>Track Order</Text>
          </TouchableOpacity>
        ) : null}

        {order.actions.includes('reorder') ? (
          <TouchableOpacity
            style={styles.reorderButton}
            activeOpacity={0.85}
            onPress={() => onReorder(order)}
          >
            <RefreshIcon />
            <Text style={styles.reorderButtonText}>Reorder</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const OrderHistoryScreen = ({
  onBack = () => {},
  onOpenProfile = () => {},
  onViewOrderDetails = () => {},
  onTrackOrder = () => {},
  onReorder = () => {},
  onNavigateHome = () => {},
  onNavigateServices = () => {},
  onNavigateProfile = () => {},
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredOrders =
    activeFilter === 'all'
      ? ORDERS
      : ORDERS.filter(order => order.status === activeFilter);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order History</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsBarContent}
        >
          {FILTERS.map(filter => {
            const isActive = filter.id === activeFilter;
            return (
              <TouchableOpacity
                key={filter.id}
                style={[styles.chip, isActive && styles.chipActive]}
                activeOpacity={0.85}
                onPress={() => setActiveFilter(filter.id)}
              >
                <Text style={[styles.chipText, isActive && styles.chipTextActive]}>
                  {filter.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.orderList}>
          {filteredOrders.map(order => (
            <OrderCard
              key={order.id}
              order={order}
              onViewDetails={onViewOrderDetails}
              onTrackOrder={onTrackOrder}
              onReorder={onReorder}
            />
          ))}
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
    height: ORDER_HISTORY.headerHeight,
    backgroundColor: COLORS.orderHistoryHeaderBg,
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
    fontSize: ORDER_HISTORY.headerTitleFontSize,
    lineHeight: ORDER_HISTORY.headerTitleLineHeight,
    color: COLORS.orderHistoryHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: ORDER_HISTORY.contentPaddingTop,
    paddingBottom: ORDER_HISTORY.contentPaddingBottom,
    gap: ORDER_HISTORY.sectionGap,
  },
  chipsBarContent: {
    paddingHorizontal: ORDER_HISTORY.contentPaddingHorizontal,
    gap: ORDER_HISTORY.chipGap,
  },
  chip: {
    paddingVertical: ORDER_HISTORY.chipPaddingVertical,
    paddingHorizontal: ORDER_HISTORY.chipPaddingHorizontal,
    borderRadius: 9999,
    backgroundColor: COLORS.orderHistoryChipInactiveBg,
  },
  chipActive: {
    backgroundColor: COLORS.orderHistoryChipActiveBg,
  },
  chipText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_HISTORY.chipFontSize,
    lineHeight: ORDER_HISTORY.chipLineHeight,
    color: COLORS.orderHistoryChipInactiveText,
  },
  chipTextActive: {
    color: COLORS.orderHistoryChipActiveText,
  },
  orderList: {
    paddingHorizontal: ORDER_HISTORY.contentPaddingHorizontal,
    gap: ORDER_HISTORY.sectionGap,
  },
  card: {
    backgroundColor: COLORS.orderHistoryCardBg,
    borderRadius: ORDER_HISTORY.cardBorderRadius,
    padding: ORDER_HISTORY.cardPadding,
    gap: ORDER_HISTORY.cardGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  cardCancelled: {
    opacity: 0.75,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  cardTopLeft: {
    flex: 1,
    gap: 6,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: ORDER_HISTORY.badgePaddingVertical,
    paddingHorizontal: ORDER_HISTORY.badgePaddingHorizontal,
    borderRadius: 9999,
  },
  badgeText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ORDER_HISTORY.badgeFontSize,
    lineHeight: ORDER_HISTORY.badgeLineHeight,
  },
  orderNumber: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ORDER_HISTORY.orderNumberFontSize,
    lineHeight: ORDER_HISTORY.orderNumberLineHeight,
    color: COLORS.orderHistoryOrderNumber,
  },
  orderMeta: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ORDER_HISTORY.orderMetaFontSize,
    lineHeight: ORDER_HISTORY.orderMetaLineHeight,
    color: COLORS.orderHistoryOrderMeta,
  },
  price: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ORDER_HISTORY.priceFontSize,
    lineHeight: ORDER_HISTORY.priceLineHeight,
    color: COLORS.orderHistoryPrice,
  },
  priceCancelled: {
    color: COLORS.orderHistoryPriceCancelled,
    textDecorationLine: 'line-through',
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ORDER_HISTORY.serviceRowGap,
  },
  serviceLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_HISTORY.serviceLabelFontSize,
    lineHeight: ORDER_HISTORY.serviceLabelLineHeight,
    color: COLORS.orderHistoryServiceLabel,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: ORDER_HISTORY.actionsGap,
  },
  viewDetailsButton: {
    flex: 1,
    paddingVertical: ORDER_HISTORY.actionButtonPaddingVertical,
    borderRadius: ORDER_HISTORY.actionButtonBorderRadius,
    borderWidth: 1,
    borderColor: COLORS.orderHistoryViewDetailsBorder,
    backgroundColor: COLORS.orderHistoryViewDetailsBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewDetailsText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_HISTORY.actionButtonFontSize,
    lineHeight: ORDER_HISTORY.actionButtonLineHeight,
    color: COLORS.orderHistoryViewDetailsText,
  },
  trackButton: {
    flex: 1,
    paddingVertical: ORDER_HISTORY.actionButtonPaddingVertical,
    borderRadius: ORDER_HISTORY.actionButtonBorderRadius,
    backgroundColor: COLORS.orderHistoryTrackButtonBg,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  trackButtonText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_HISTORY.actionButtonFontSize,
    lineHeight: ORDER_HISTORY.actionButtonLineHeight,
    color: COLORS.orderHistoryTrackButtonText,
  },
  reorderButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: ORDER_HISTORY.actionButtonIconGap,
    paddingVertical: ORDER_HISTORY.actionButtonPaddingVertical,
    borderRadius: ORDER_HISTORY.actionButtonBorderRadius,
    backgroundColor: COLORS.orderHistoryReorderButtonBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  reorderButtonText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ORDER_HISTORY.actionButtonFontSize,
    lineHeight: ORDER_HISTORY.actionButtonLineHeight,
    color: COLORS.orderHistoryReorderButtonText,
  },
});

export default OrderHistoryScreen;

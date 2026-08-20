import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, NOTIFICATIONS } from '../constants/theme';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'orders', label: 'Orders' },
  { id: 'offers', label: 'Offers' },
  { id: 'system', label: 'System' },
];

const INITIAL_NOTIFICATIONS = [
  {
    id: 'delivery-1',
    category: 'orders',
    icon: 'truck',
    title: 'Out for delivery',
    time: '2m ago',
    body: 'Your order #88492 of 5 items is\non its way. Track your driver in\nreal-time.',
    read: false,
    action: { label: 'Track Order', type: 'track' },
  },
  {
    id: 'offer-1',
    category: 'offers',
    icon: 'tag',
    title: '30% Off Eco-\nClean',
    time: '2h ago',
    body: 'Valid until Friday. Apply code\nECO30 at checkout for premium\ngarment care.',
    read: true,
    action: null,
  },
  {
    id: 'system-1',
    category: 'system',
    icon: 'info',
    title: 'App Update\nRequired',
    time: 'Yesterday',
    body: "We've added new smart\nscheduling features. Please\nupdate to continue.",
    read: false,
    action: { label: 'Update Now', type: 'update' },
  },
  {
    id: 'order-2',
    category: 'orders',
    icon: 'check',
    title: 'Order Delivered',
    time: 'Oct 12',
    body: 'Your garments have been\ndelivered and placed safely at\nyour door.',
    read: true,
    action: null,
  },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.notificationsBackIcon}
    />
  </Svg>
);

const HeaderProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.notificationsHeaderProfileIcon}
    />
  </Svg>
);

const TruckIcon = () => (
  <Svg width={22} height={16} viewBox="0 0 24 18">
    <Path
      d="M1 3h12a1 1 0 0 1 1 1v2h3.5a1 1 0 0 1 .8.4l2.5 3.3a1 1 0 0 1 .2.6V14a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H8a2 2 0 1 1-4 0H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      fill={COLORS.notificationsIconColor}
    />
    <Path
      d="M6 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={COLORS.notificationsIconColor}
    />
  </Svg>
);

const TagIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path
      d="M12.41 2H4a2 2 0 0 0-2 2v8.41a2 2 0 0 0 .59 1.42l9.58 9.58a2 2 0 0 0 2.83 0l7.99-8a2 2 0 0 0 0-2.83l-9.58-9.58A2 2 0 0 0 12.41 2ZM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      fill={COLORS.notificationsIconColor}
    />
  </Svg>
);

const InfoIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15h-2v-6h2Zm0-8h-2V7h2Z"
      fill={COLORS.notificationsIconColor}
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path
      d="M9 16.2 4.8 12l-1.4 1.4L9 19 20.6 7.4 19.2 6z"
      fill={COLORS.notificationsIconColor}
    />
  </Svg>
);

const NOTIFICATION_ICONS = {
  truck: TruckIcon,
  tag: TagIcon,
  info: InfoIcon,
  check: CheckIcon,
};

const NotificationCard = ({ notification, onPress, onAction }) => {
  const Icon = NOTIFICATION_ICONS[notification.icon];
  return (
    <TouchableOpacity
      style={[styles.card, notification.read && styles.cardRead]}
      activeOpacity={0.85}
      onPress={() => onPress(notification)}
    >
      <View style={styles.iconBox}>
        <Icon />
      </View>
      <View style={styles.textContent}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{notification.title}</Text>
          <Text style={styles.time}>{notification.time}</Text>
        </View>
        <Text style={styles.body}>{notification.body}</Text>
        {notification.action ? (
          <TouchableOpacity
            style={styles.actionButton}
            activeOpacity={0.7}
            onPress={() => onAction(notification)}
          >
            <Text style={styles.actionText}>{notification.action.label}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = ({
  onBack = () => {},
  onOpenProfile = () => {},
  onTrackOrder = () => {},
  onUpdateApp = () => {},
  onSelectNotification = () => {},
}) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const filtered =
    activeFilter === 'all'
      ? notifications
      : notifications.filter(item => item.category === activeFilter);

  const markAllRead = () => {
    setNotifications(prev => prev.map(item => ({ ...item, read: true })));
  };

  const handlePress = notification => {
    setNotifications(prev =>
      prev.map(item =>
        item.id === notification.id ? { ...item, read: true } : item,
      ),
    );
    onSelectNotification(notification);
  };

  const handleAction = notification => {
    if (notification.action?.type === 'track') {
      onTrackOrder(notification);
    } else if (notification.action?.type === 'update') {
      onUpdateApp(notification);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <HeaderProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headingRow}>
          <Text style={styles.heading}>Activity</Text>
          <TouchableOpacity onPress={markAllRead} hitSlop={8}>
            <Text style={styles.markAllReadText}>Mark all read</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsContent}
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

        <View style={styles.list}>
          {filtered.map(notification => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onPress={handlePress}
              onAction={handleAction}
            />
          ))}
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
    height: NOTIFICATIONS.headerHeight,
    backgroundColor: COLORS.notificationsHeaderBg,
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
    fontSize: NOTIFICATIONS.headerTitleFontSize,
    lineHeight: NOTIFICATIONS.headerTitleLineHeight,
    color: COLORS.notificationsHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: NOTIFICATIONS.contentPaddingTop,
    paddingBottom: NOTIFICATIONS.contentPaddingBottom,
    gap: NOTIFICATIONS.sectionGap,
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: NOTIFICATIONS.contentPaddingHorizontal,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: NOTIFICATIONS.headingFontSize,
    lineHeight: NOTIFICATIONS.headingLineHeight,
    color: COLORS.notificationsHeading,
  },
  markAllReadText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: NOTIFICATIONS.markAllReadFontSize,
    lineHeight: NOTIFICATIONS.markAllReadLineHeight,
    color: COLORS.notificationsMarkAllText,
  },
  chipsContent: {
    paddingHorizontal: NOTIFICATIONS.contentPaddingHorizontal,
    gap: NOTIFICATIONS.chipGap,
  },
  chip: {
    paddingVertical: NOTIFICATIONS.chipPaddingVertical,
    paddingHorizontal: NOTIFICATIONS.chipPaddingHorizontal,
    borderRadius: 9999,
    backgroundColor: COLORS.notificationsChipInactiveBg,
  },
  chipActive: {
    backgroundColor: COLORS.notificationsChipActiveBg,
  },
  chipText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: NOTIFICATIONS.chipFontSize,
    lineHeight: NOTIFICATIONS.chipLineHeight,
    color: COLORS.notificationsChipInactiveText,
  },
  chipTextActive: {
    color: COLORS.notificationsChipActiveText,
  },
  list: {
    paddingHorizontal: NOTIFICATIONS.contentPaddingHorizontal,
    gap: NOTIFICATIONS.listGap,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.notificationsCardBg,
    borderWidth: 1,
    borderColor: COLORS.notificationsCardBorder,
    borderRadius: NOTIFICATIONS.cardBorderRadius,
    padding: NOTIFICATIONS.cardPadding,
    gap: NOTIFICATIONS.cardGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  cardRead: {
    opacity: 0.7,
    shadowOpacity: 0.03,
  },
  iconBox: {
    width: NOTIFICATIONS.iconSize,
    height: NOTIFICATIONS.iconSize,
    borderRadius: NOTIFICATIONS.iconSize / 2,
    backgroundColor: COLORS.notificationsIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flex: 1,
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    flex: 1,
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: NOTIFICATIONS.titleFontSize,
    lineHeight: NOTIFICATIONS.titleLineHeight,
    color: COLORS.notificationsTitle,
  },
  time: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: NOTIFICATIONS.timeFontSize,
    lineHeight: NOTIFICATIONS.timeLineHeight,
    color: COLORS.notificationsTime,
    marginTop: 4,
  },
  body: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: NOTIFICATIONS.bodyFontSize,
    lineHeight: NOTIFICATIONS.bodyLineHeight,
    color: COLORS.notificationsBody,
  },
  actionButton: {
    marginTop: 4,
  },
  actionText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: NOTIFICATIONS.actionFontSize,
    lineHeight: NOTIFICATIONS.actionLineHeight,
    color: COLORS.notificationsActionText,
  },
});

export default NotificationsScreen;

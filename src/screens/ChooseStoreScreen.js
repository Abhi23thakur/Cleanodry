import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { COLORS, CHOOSE_STORE, FONTS } from '../constants/theme';

const STORES = [
  {
    id: 'south',
    name: 'Cleanodry South Hub',
    address: 'Saket, South Delhi',
    distance: '2.1 km',
    pickup: 'Pickup in 30 mins',
  },
  {
    id: 'west',
    name: 'Cleanodry West Hub',
    address: 'Rajouri Garden, West Delhi',
    distance: '3.8 km',
    pickup: 'Pickup in 45 mins',
  },
  {
    id: 'north',
    name: 'Cleanodry North Hub',
    address: 'Model Town, North Delhi',
    distance: '5.2 km',
    pickup: 'Pickup in 1 hr',
  },
  {
    id: 'east',
    name: 'Cleanodry East Hub',
    address: 'Laxmi Nagar, East Delhi',
    distance: '4.4 km',
    pickup: 'Pickup in 40 mins',
  },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.storeBackIcon}
    />
  </Svg>
);

const ProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill="#000000"
    />
  </Svg>
);

const PinIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 12 12">
    <Path
      d="M6.6 12L4.7 7.3L0 5.4V4.46667L12 0L7.53333 12H6.6ZM7.03333 9.53333L9.73333 2.26667L2.46667 4.96667L5.73333 6.26667L7.03333 9.53333Z"
      fill={COLORS.storeBadgeText}
    />
  </Svg>
);

const ClockIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 15 15">
    <Path
      d="M9.975 11.025L11.025 9.975L8.25 7.2V3.75H6.75V7.8L9.975 11.025ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.1625 13.5 10.5781 12.9156 11.7469 11.7469C12.9156 10.5781 13.5 9.1625 13.5 7.5C13.5 5.8375 12.9156 4.42188 11.7469 3.25312C10.5781 2.08437 9.1625 1.5 7.5 1.5C5.8375 1.5 4.42188 2.08437 3.25312 3.25312C2.08437 4.42188 1.5 5.8375 1.5 7.5C1.5 9.1625 2.08437 10.5781 3.25312 11.7469C4.42188 12.9156 5.8375 13.5 7.5 13.5Z"
      fill={COLORS.storePickupText}
    />
  </Svg>
);

const StoreCard = ({ store, onSelect }) => (
  <View style={styles.card}>
    <View style={styles.cardTopRow}>
      <View>
        <Text style={styles.storeName}>{store.name}</Text>
        <Text style={styles.storeAddress}>{store.address}</Text>
      </View>
      <View style={styles.distanceBadge}>
        <PinIcon />
        <Text style={styles.distanceText}>{store.distance}</Text>
      </View>
    </View>

    <View style={styles.pickupRow}>
      <ClockIcon />
      <Text style={styles.pickupText}>{store.pickup}</Text>
    </View>

    <TouchableOpacity style={styles.selectButton} onPress={() => onSelect(store)}>
      <Text style={styles.selectButtonText}>Select Store</Text>
    </TouchableOpacity>
  </View>
);

const ChooseStoreScreen = ({ onBack = () => {}, onSelectStore = () => {}, onOpenProfile = () => {} }) => {
  return (
    <View style={styles.container}>
      <Svg style={styles.backgroundGradient} height={400}>
        <Defs>
          <LinearGradient id="bg" x1="0%" y1="0%" x2="12%" y2="100%">
            <Stop offset="0%" stopColor={COLORS.loginGradientTop} />
            <Stop offset="70%" stopColor={COLORS.loginGradientBottom} />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
      </Svg>

      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={onBack}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Your Store</Text>
        <TouchableOpacity style={styles.headerButton} onPress={onOpenProfile}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {STORES.map(store => (
          <StoreCard key={store.id} store={store} onSelect={onSelectStore} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.textPrimary,
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: CHOOSE_STORE.headerHeight,
    paddingHorizontal: 16,
    backgroundColor: COLORS.areaHeaderBg,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: CHOOSE_STORE.headingFontSize,
    lineHeight: CHOOSE_STORE.headingLineHeight,
    letterSpacing: CHOOSE_STORE.headingLetterSpacing,
    color: COLORS.storeHeaderTitle,
  },
  content: {
    paddingHorizontal: CHOOSE_STORE.contentPaddingHorizontal,
    paddingTop: CHOOSE_STORE.contentPaddingTop,
    paddingBottom: 32,
    gap: CHOOSE_STORE.cardGap,
  },
  card: {
    backgroundColor: COLORS.textPrimary,
    borderRadius: CHOOSE_STORE.cardRadius,
    padding: CHOOSE_STORE.cardPadding,
    gap: CHOOSE_STORE.cardGap2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  storeName: {
    fontFamily: FONTS.semiBold,
    fontSize: CHOOSE_STORE.nameFontSize,
    lineHeight: CHOOSE_STORE.nameLineHeight,
    color: COLORS.storeName,
    marginBottom: 3,
  },
  storeAddress: {
    fontFamily: FONTS.regular,
    fontSize: CHOOSE_STORE.addressFontSize,
    lineHeight: CHOOSE_STORE.addressLineHeight,
    color: COLORS.storeAddress,
  },
  distanceBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 9999,
    backgroundColor: COLORS.storeBadgeBg,
  },
  distanceText: {
    fontFamily: FONTS.regular,
    fontSize: CHOOSE_STORE.badgeFontSize,
    lineHeight: CHOOSE_STORE.badgeLineHeight,
    color: COLORS.storeBadgeText,
  },
  pickupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pickupText: {
    fontFamily: FONTS.regular,
    fontSize: CHOOSE_STORE.pickupFontSize,
    lineHeight: CHOOSE_STORE.pickupLineHeight,
    color: COLORS.storePickupText,
  },
  selectButton: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    borderRadius: CHOOSE_STORE.buttonBorderRadius,
  },
  selectButtonText: {
    fontFamily: FONTS.medium,
    fontSize: CHOOSE_STORE.buttonFontSize,
    lineHeight: CHOOSE_STORE.buttonLineHeight,
    color: COLORS.textPrimary,
  },
});

export default ChooseStoreScreen;

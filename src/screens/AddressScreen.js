import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, ADDRESS } from '../constants/theme';
import AddressMapView from '../components/AddressMapView';

const DEFAULT_LATITUDE = 28.6139;
const DEFAULT_LONGITUDE = 77.209;

const requestLocationPermission = async () => {
  if (Platform.OS !== 'android') return true;
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Permission',
      message: 'Cleanodry needs your location to show it on the map.',
      buttonPositive: 'Allow',
      buttonNegative: 'Deny',
    },
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const DEFAULT_ADDRESSES = [
  {
    id: 'home',
    label: 'Home',
    isDefault: true,
    lines: '123 Park Avenue, Apt 4B\nNew York, NY 10016',
    icon: 'home',
  },
  {
    id: 'office',
    label: 'Office',
    isDefault: false,
    lines: '456 Tech Boulevard, Suite 900',
    icon: 'office',
  },
  {
    id: 'moms-house',
    label: "Mom's House",
    isDefault: false,
    lines: '789 Maple Street, House 2\nBrooklyn, NY 11201',
    icon: 'heart',
  },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.addressHeaderTitle}
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

const MapPinIcon = () => (
  <Svg width={16} height={20} viewBox="0 0 16 20">
    <Path
      d="M8 10C8.55 10 9.02083 9.80417 9.4125 9.4125C9.80417 9.02083 10 8.55 10 8C10 7.45 9.80417 6.97917 9.4125 6.5875C9.02083 6.19583 8.55 6 8 6C7.45 6 6.97917 6.19583 6.5875 6.5875C6.19583 6.97917 6 7.45 6 8C6 8.55 6.19583 9.02083 6.5875 9.4125C6.97917 9.80417 7.45 10 8 10ZM8 20C5.31667 17.7167 3.3125 15.5958 1.9875 13.6375C0.6625 11.6792 0 9.86667 0 8.2C0 5.7 0.804167 3.70833 2.4125 2.225C4.02083 0.741667 5.88333 0 8 0C10.1167 0 11.9792 0.741667 13.5875 2.225C15.1958 3.70833 16 5.7 16 8.2C16 9.86667 15.3375 11.6792 14.0125 13.6375C12.6875 15.5958 10.6833 17.7167 8 20Z"
      fill={COLORS.textPrimary}
    />
  </Svg>
);

const CurrentLocationIcon = () => (
  <Svg width={22} height={22} viewBox="0 0 22 22">
    <Path
      d="M9.99542 22V19.9908C7.90258 19.7564 6.10692 18.89 4.60844 17.3915C3.10997 15.8931 2.24353 14.0974 2.00913 12.0046H0V9.99542H2.00913C2.24353 7.90258 3.10997 6.10692 4.60844 4.60844C6.10692 3.10997 7.90258 2.24353 9.99542 2.00913V0H12.0046V2.00913C14.0974 2.24353 15.8931 3.10997 17.3915 4.60844C18.89 6.10692 19.7564 7.90258 19.9908 9.99542H22V12.0046H19.9908C19.7564 14.0974 18.89 15.8931 17.3915 17.3915C15.8931 18.89 14.0974 19.7564 12.0046 19.9908V22H9.99542ZM11 18.0319C12.9421 18.0319 14.5997 17.3455 15.9726 15.9726C17.3455 14.5997 18.0319 12.9421 18.0319 11C18.0319 9.05783 17.3455 7.4003 15.9726 6.02739C14.5997 4.65448 12.9421 3.96803 11 3.96803C9.05783 3.96803 7.4003 4.65448 6.02739 6.02739C4.65448 7.4003 3.96803 9.05783 3.96803 11C3.96803 12.9421 4.65448 14.5997 6.02739 15.9726C7.4003 17.3455 9.05783 18.0319 11 18.0319ZM11 15.0182C9.89497 15.0182 8.949 14.6248 8.16209 13.8379C7.37518 13.051 6.98173 12.105 6.98173 11C6.98173 9.89497 7.37518 8.949 8.16209 8.16209C8.949 7.37518 9.89497 6.98173 11 6.98173C12.105 6.98173 13.051 7.37518 13.8379 8.16209C14.6248 8.949 15.0182 9.89497 15.0182 11C15.0182 12.105 14.6248 13.051 13.8379 13.8379C13.051 14.6248 12.105 15.0182 11 15.0182ZM11 13.0091C11.5525 13.0091 12.0255 12.8124 12.4189 12.4189C12.8124 12.0255 13.0091 11.5525 13.0091 11C13.0091 10.4475 12.8124 9.97449 12.4189 9.58104C12.0255 9.18759 11.5525 8.99086 11 8.99086C10.4475 8.99086 9.97449 9.18759 9.58104 9.58104C9.18759 9.97449 8.99086 10.4475 8.99086 11C8.99086 11.5525 9.18759 12.0255 9.58104 12.4189C9.97449 12.8124 10.4475 13.0091 11 13.0091Z"
      fill={COLORS.addressCurrentLocationText}
    />
  </Svg>
);

const HomePinIcon = () => (
  <Svg width={16} height={18} viewBox="0 0 16 18">
    <Path
      d="M0 18V6L8 0L16 6V18H10V11H6V18H0Z"
      fill={COLORS.addressHeaderTitle}
    />
  </Svg>
);

const OfficePinIcon = () => (
  <Svg width={20} height={19} viewBox="0 0 20 19">
    <Path
      d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM2 17H18V6H2V17ZM8 4H12V2H8V4ZM2 17V6V17Z"
      fill={COLORS.addressCardInactiveIcon}
    />
  </Svg>
);

const HeartPinIcon = () => (
  <Svg width={20} height={19} viewBox="0 0 20 19">
    <Path
      d="M10 18.35L8.55 17.05C6.86667 15.5333 5.475 14.225 4.375 13.125C3.275 12.025 2.4 11.0375 1.75 10.1625C1.1 9.2875 0.645833 8.48333 0.3875 7.75C0.129167 7.01667 0 6.26667 0 5.5C0 3.93333 0.525 2.625 1.575 1.575C2.625 0.525 3.93333 0 5.5 0C6.36667 0 7.19167 0.183333 7.975 0.55C8.75833 0.916667 9.43333 1.43333 10 2.1C10.5667 1.43333 11.2417 0.916667 12.025 0.55C12.8083 0.183333 13.6333 0 14.5 0C16.0667 0 17.375 0.525 18.425 1.575C19.475 2.625 20 3.93333 20 5.5C20 6.26667 19.8708 7.01667 19.6125 7.75C19.3542 8.48333 18.9 9.2875 18.25 10.1625C17.6 11.0375 16.725 12.025 15.625 13.125C14.525 14.225 13.1333 15.5333 11.45 17.05L10 18.35ZM10 15.65C11.6 14.2167 12.9167 12.9875 13.95 11.9625C14.9833 10.9375 15.8 10.0458 16.4 9.2875C17 8.52917 17.4167 7.85417 17.65 7.2625C17.8833 6.67083 18 6.08333 18 5.5C18 4.5 17.6667 3.66667 17 3C16.3333 2.33333 15.5 2 14.5 2C13.7167 2 12.9917 2.22083 12.325 2.6625C11.6583 3.10417 11.2 3.66667 10.95 4.35H9.05C8.8 3.66667 8.34167 3.10417 7.675 2.6625C7.00833 2.22083 6.28333 2 5.5 2C4.5 2 3.66667 2.33333 3 3C2.33333 3.66667 2 4.5 2 5.5C2 6.08333 2.11667 6.67083 2.35 7.2625C2.58333 7.85417 3 8.52917 3.6 9.2875C4.2 10.0458 5.01667 10.9375 6.05 11.9625C7.08333 12.9875 8.4 14.2167 10 15.65Z"
      fill={COLORS.addressCardInactiveIcon}
    />
  </Svg>
);

const EditIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18">
    <Path
      d="M2 16H3.425L13.2 6.225L11.775 4.8L2 14.575V16ZM0 18V13.75L13.2 0.575C13.4 0.391667 13.6208 0.25 13.8625 0.15C14.1042 0.05 14.3583 0 14.625 0C14.8917 0 15.15 0.05 15.4 0.15C15.65 0.25 15.8667 0.4 16.05 0.6L17.425 2C17.625 2.18333 17.7708 2.4 17.8625 2.65C17.9542 2.9 18 3.15 18 3.4C18 3.66667 17.9542 3.92083 17.8625 4.1625C17.7708 4.40417 17.625 4.625 17.425 4.825L4.25 18H0Z"
      fill={COLORS.addressEditIcon}
    />
  </Svg>
);

const CheckIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14">
    <Path
      d="M6.01993 10.2199L10.9549 5.28494L9.97488 4.30495L6.01993 8.2599L4.02495 6.26492L3.04496 7.24491L6.01993 10.2199ZM6.99991 13.9998C6.03159 13.9998 5.1216 13.8161 4.26995 13.4486C3.41829 13.0811 2.67747 12.5823 2.04748 11.9524C1.41748 11.3224 0.918739 10.5815 0.551243 9.72988C0.183748 8.87822 0 7.96824 0 6.99991C0 6.03159 0.183748 5.1216 0.551243 4.26995C0.918739 3.41829 1.41748 2.67747 2.04748 2.04748C2.67747 1.41748 3.41829 0.918739 4.26995 0.551243C5.1216 0.183748 6.03159 0 6.99991 0C7.96824 0 8.87822 0.183748 9.72988 0.551243C10.5815 0.918739 11.3224 1.41748 11.9524 2.04748C12.5823 2.67747 13.0811 3.41829 13.4486 4.26995C13.8161 5.1216 13.9998 6.03159 13.9998 6.99991C13.9998 7.96824 13.8161 8.87822 13.4486 9.72988C13.0811 10.5815 12.5823 11.3224 11.9524 11.9524C11.3224 12.5823 10.5815 13.0811 9.72988 13.4486C8.87822 13.8161 7.96824 13.9998 6.99991 13.9998ZM6.99991 12.5998C8.56323 12.5998 9.88738 12.0574 10.9724 10.9724C12.0574 9.88738 12.5998 8.56323 12.5998 6.99991C12.5998 5.4366 12.0574 4.11245 10.9724 3.02746C9.88738 1.94248 8.56323 1.39998 6.99991 1.39998C5.4366 1.39998 4.11245 1.94248 3.02746 3.02746C1.94248 4.11245 1.39998 5.4366 1.39998 6.99991C1.39998 8.56323 1.94248 9.88738 3.02746 10.9724C4.11245 12.0574 5.4366 12.5998 6.99991 12.5998Z"
      fill={COLORS.addressSelectedBadgeText}
    />
  </Svg>
);

const AddIcon = () => (
  <Svg width={26} height={30} viewBox="0 0 26 30">
    <Path
      d="M10.9091 30C7.24999 26.8863 4.51704 23.9943 2.71022 21.3238C0.903408 18.6534 0 16.1818 0 13.9091C0 10.5 1.09659 7.78408 3.28977 5.76136C5.48295 3.73863 8.02272 2.72727 10.9091 2.72727C11.1363 2.72727 11.3636 2.72727 11.5909 2.72727C11.8182 2.72727 12.0454 2.75 12.2727 2.79545V5.55681C12.0454 5.51136 11.8238 5.48295 11.6079 5.47158C11.392 5.46022 11.1591 5.45454 10.9091 5.45454C8.61362 5.45454 6.67613 6.24431 5.09658 7.82385C3.51704 9.4034 2.72727 11.4318 2.72727 13.9091C2.72727 15.5227 3.39772 17.3693 4.73863 19.4488C6.07954 21.5284 8.13635 23.8409 10.9091 26.3863C13.6818 23.8409 15.7386 21.5284 17.0795 19.4488C18.4204 17.3693 19.0909 15.5227 19.0909 13.9091C19.0909 13.8636 19.0909 13.8182 19.0909 13.7727C19.0909 13.7273 19.0909 13.6818 19.0909 13.6363H21.8182C21.8182 13.6818 21.8182 13.7273 21.8182 13.7727C21.8182 13.8182 21.8182 13.8636 21.8182 13.9091C21.8182 16.1818 20.9147 18.6534 19.1079 21.3238C17.3011 23.9943 14.5682 26.8863 10.9091 30ZM10.9091 16.3636C11.6591 16.3636 12.3011 16.0966 12.8352 15.5625C13.3693 15.0284 13.6363 14.3863 13.6363 13.6363C13.6363 12.8863 13.3693 12.2443 12.8352 11.7102C12.3011 11.1761 11.6591 10.9091 10.9091 10.9091C10.1591 10.9091 9.51703 11.1761 8.98294 11.7102C8.44885 12.2443 8.18181 12.8863 8.18181 13.6363C8.18181 14.3863 8.44885 15.0284 8.98294 15.5625C9.51703 16.0966 10.1591 16.3636 10.9091 16.3636ZM19.0909 10.9091H21.8182V6.81817H25.9091V4.0909H21.8182V0H19.0909V4.0909H15V6.81817H19.0909V10.9091Z"
      fill={COLORS.addressAddText}
    />
  </Svg>
);

const ADDRESS_ICONS = {
  home: HomePinIcon,
  office: OfficePinIcon,
  heart: HeartPinIcon,
};

const AddressCard = ({ address, isSelected, onSelect, onEdit }) => {
  const IconComponent = ADDRESS_ICONS[address.icon] || HomePinIcon;

  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      activeOpacity={0.85}
      onPress={() => onSelect(address.id)}
    >
      <View style={styles.cardRow}>
        <View
          style={[
            styles.cardIconWrapper,
            {
              backgroundColor: isSelected
                ? COLORS.addressCardActiveIconBg
                : COLORS.addressCardInactiveIconBg,
            },
          ]}
        >
          <IconComponent />
        </View>

        <View style={styles.cardInfo}>
          <View style={styles.cardNameRow}>
            <Text style={styles.cardName}>{address.label}</Text>
            {address.isDefault ? (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultBadgeText}>Default</Text>
              </View>
            ) : null}
          </View>
          <Text style={styles.cardAddressText}>{address.lines}</Text>
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(address.id)}
        >
          <EditIcon />
        </TouchableOpacity>
      </View>

      {isSelected ? (
        <View style={styles.selectedBadge}>
          <CheckIcon />
          <Text style={styles.selectedBadgeText}>Selected</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const AddressScreen = ({
  addresses = DEFAULT_ADDRESSES,
  initialSelectedId = 'home',
  onBack = () => {},
  onOpenProfile = () => {},
  onUseCurrentLocation = () => {},
  onAddNewAddress = () => {},
  onEditAddress = () => {},
  onConfirm = () => {},
}) => {
  const [selectedId, setSelectedId] = useState(initialSelectedId);
  const [locating, setLocating] = useState(false);
  const mapRef = useRef(null);

  const handleConfirm = () => {
    const selected = addresses.find(item => item.id === selectedId);
    onConfirm(selected);
  };

  const handleUseCurrentLocation = async () => {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) return;

    setLocating(true);
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        mapRef.current?.panTo(latitude, longitude, 17);
        setLocating(false);
        onUseCurrentLocation({ latitude, longitude });
      },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Address</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mapContainer}>
          <AddressMapView
            ref={mapRef}
            initialLatitude={DEFAULT_LATITUDE}
            initialLongitude={DEFAULT_LONGITUDE}
          />
          <View style={styles.mapPin}>
            <MapPinIcon />
          </View>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.currentLocationButton}
            activeOpacity={0.85}
            onPress={handleUseCurrentLocation}
            disabled={locating}
          >
            <CurrentLocationIcon />
            <Text style={styles.currentLocationText}>
              {locating ? 'Locating…' : 'Use Current Location'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Saved Addresses</Text>

          {addresses.map(address => (
            <AddressCard
              key={address.id}
              address={address}
              isSelected={address.id === selectedId}
              onSelect={setSelectedId}
              onEdit={onEditAddress}
            />
          ))}

          <TouchableOpacity
            style={styles.addButton}
            activeOpacity={0.85}
            onPress={onAddNewAddress}
          >
            <AddIcon />
            <Text style={styles.addButtonText}>Add New Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.confirmBar}>
        <TouchableOpacity
          style={styles.confirmButton}
          activeOpacity={0.85}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmButtonText}>Confirm Address</Text>
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
    height: ADDRESS.headerHeight,
    backgroundColor: COLORS.addressHeaderBg,
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
  headerTitle: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: ADDRESS.headerTitleFontSize,
    lineHeight: ADDRESS.headerTitleLineHeight,
    color: COLORS.addressHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  mapContainer: {
    height: ADDRESS.mapHeight,
    backgroundColor: COLORS.addressMapBg,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mapPin: {
    position: 'absolute',
    top: ADDRESS.mapHeight / 2 - ADDRESS.pinSize / 2,
    left: '50%',
    marginLeft: -ADDRESS.pinSize / 2,
    width: ADDRESS.pinSize,
    height: ADDRESS.pinSize,
    borderRadius: ADDRESS.pinSize / 2,
    backgroundColor: COLORS.addressPinBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: ADDRESS.contentPaddingHorizontal,
    paddingTop: ADDRESS.contentPaddingTop,
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: ADDRESS.currentLocationButtonPaddingVertical,
    backgroundColor: COLORS.textPrimary,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 3,
  },
  currentLocationText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADDRESS.currentLocationFontSize,
    lineHeight: ADDRESS.currentLocationLineHeight,
    color: COLORS.addressCurrentLocationText,
  },
  sectionTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADDRESS.sectionTitleFontSize,
    lineHeight: ADDRESS.sectionTitleLineHeight,
    color: COLORS.addressSectionTitle,
    marginTop: ADDRESS.sectionGap,
    marginBottom: 12,
  },
  card: {
    backgroundColor: COLORS.textPrimary,
    borderRadius: ADDRESS.cardBorderRadius,
    padding: ADDRESS.cardPadding,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: COLORS.addressCardBorder,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardIconWrapper: {
    width: ADDRESS.cardIconWrapperSize,
    height: ADDRESS.cardIconWrapperSize,
    borderRadius: ADDRESS.cardIconWrapperSize / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardInfo: {
    flex: 1,
    gap: 4,
  },
  cardNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardName: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: ADDRESS.nameFontSize,
    lineHeight: ADDRESS.nameLineHeight,
    color: COLORS.addressName,
  },
  defaultBadge: {
    backgroundColor: COLORS.addressDefaultBadgeBg,
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  defaultBadgeText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ADDRESS.badgeFontSize,
    lineHeight: ADDRESS.badgeLineHeight,
    color: COLORS.addressDefaultBadgeText,
  },
  cardAddressText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ADDRESS.addressTextFontSize,
    lineHeight: ADDRESS.addressTextLineHeight,
    color: COLORS.addressText,
  },
  editButton: {
    padding: 4,
  },
  selectedBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.addressSelectedBadgeBg,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  selectedBadgeText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADDRESS.selectedBadgeFontSize,
    lineHeight: ADDRESS.selectedBadgeLineHeight,
    color: COLORS.addressSelectedBadgeText,
  },
  addButton: {
    height: ADDRESS.addButtonHeight,
    borderWidth: 2,
    borderColor: COLORS.addressAddBorder,
    borderStyle: 'dashed',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADDRESS.addButtonFontSize,
    lineHeight: ADDRESS.addButtonLineHeight,
    color: COLORS.addressAddText,
  },
  confirmBar: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: COLORS.background,
  },
  confirmButton: {
    backgroundColor: COLORS.addressConfirmBg,
    borderRadius: ADDRESS.confirmButtonBorderRadius,
    paddingVertical: ADDRESS.confirmButtonPaddingVertical,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  confirmButtonText: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: ADDRESS.confirmButtonFontSize,
    lineHeight: ADDRESS.confirmButtonLineHeight,
    color: COLORS.addressConfirmText,
  },
});

export default AddressScreen;

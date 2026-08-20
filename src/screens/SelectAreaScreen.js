import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ActivityIndicator,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { COLORS, SELECT_AREA, FONTS } from '../constants/theme';

const AREAS = [
  'South Delhi',
  'West Delhi',
  'North Delhi',
  'East Delhi',
  'Central Delhi',
  'Gurgaon',
  'Noida',
];

const CloseIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 14 14">
    <Path
      d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
      fill={COLORS.areaCloseIcon}
    />
  </Svg>
);

const SearchIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18">
    <Path
      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
      fill={COLORS.areaSearchIcon}
    />
  </Svg>
);

const ChevronIcon = ({ visible }) => (
  <Svg width={7} height={10} viewBox="0 0 7 10" opacity={visible ? 1 : 0}>
    <Path d="M0 0L5 5L0 10" stroke={COLORS.areaChevron} strokeWidth={1.5} fill="none" />
  </Svg>
);

const LocationIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 19 19">
    <Path
      d="M8.63242 19V17.2648C6.82496 17.0624 5.27416 16.3141 3.98002 15.02C2.68588 13.7258 1.9376 12.175 1.73516 10.3676H0V8.63242H1.73516C1.9376 6.82496 2.68588 5.27416 3.98002 3.98002C5.27416 2.68588 6.82496 1.9376 8.63242 1.73516V0H10.3676V1.73516C12.175 1.9376 13.7258 2.68588 15.02 3.98002C16.3141 5.27416 17.0624 6.82496 17.2648 8.63242H19V10.3676H17.2648C17.0624 12.175 16.3141 13.7258 15.02 15.02C13.7258 16.3141 12.175 17.0624 10.3676 17.2648V19H8.63242ZM9.5 15.5731C11.1773 15.5731 12.6088 14.9802 13.7945 13.7945C14.9802 12.6088 15.5731 11.1773 15.5731 9.5C15.5731 7.82268 14.9802 6.39117 13.7945 5.20548C12.6088 4.01979 11.1773 3.42694 9.5 3.42694C7.82268 3.42694 6.39117 4.01979 5.20548 5.20548C4.01979 6.39117 3.42694 7.82268 3.42694 9.5C3.42694 11.1773 4.01979 12.6088 5.20548 13.7945C6.39117 14.9802 7.82268 15.5731 9.5 15.5731ZM9.5 12.9703C8.54566 12.9703 7.72869 12.6305 7.04909 11.9509C6.36948 11.2713 6.02968 10.4543 6.02968 9.5C6.02968 8.54566 6.36948 7.72869 7.04909 7.04909C7.72869 6.36948 8.54566 6.02968 9.5 6.02968C10.4543 6.02968 11.2713 6.36948 11.9509 7.04909C12.6305 7.72869 12.9703 8.54566 12.9703 9.5C12.9703 10.4543 12.6305 11.2713 11.9509 11.9509C11.2713 12.6305 10.4543 12.9703 9.5 12.9703Z"
      fill={COLORS.textPrimary}
    />
  </Svg>
);

const requestLocationPermission = async () => {
  if (Platform.OS !== 'android') return true;
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Permission',
      message: 'Cleanodry needs your location to find your area.',
      buttonPositive: 'Allow',
      buttonNegative: 'Deny',
    },
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const reverseGeocode = async (latitude, longitude) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=14`,
    { headers: { 'User-Agent': 'CleanodryApp/1.0' } },
  );
  const data = await response.json();
  const address = data.address || {};
  return (
    address.suburb ||
    address.neighbourhood ||
    address.city_district ||
    address.city ||
    address.town ||
    data.display_name ||
    'Current Location'
  );
};

const SelectAreaScreen = ({ onClose = () => {}, onSelectArea = () => {} }) => {
  const [query, setQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState(null);
  const [locatingUser, setLocatingUser] = useState(false);
  const [locationError, setLocationError] = useState(null);

  const filteredAreas = AREAS.filter(area =>
    area.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelectArea = area => {
    setSelectedArea(area);
    onSelectArea(area);
  };

  const handleUseCurrentLocation = async () => {
    setLocationError(null);
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      setLocationError('Location permission denied.');
      return;
    }

    setLocatingUser(true);
    Geolocation.getCurrentPosition(
      async position => {
        try {
          const { latitude, longitude } = position.coords;
          const areaName = await reverseGeocode(latitude, longitude);
          handleSelectArea(areaName);
        } catch (error) {
          setLocationError('Could not resolve your address.');
        } finally {
          setLocatingUser(false);
        }
      },
      () => {
        setLocationError('Could not fetch your location.');
        setLocatingUser(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

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
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <CloseIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Your Area</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.searchWrapper}>
          <View style={styles.searchIconWrapper}>
            <SearchIcon />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search areas..."
            placeholderTextColor={COLORS.areaSearchPlaceholder}
            value={query}
            onChangeText={setQuery}
          />
        </View>

        <View style={styles.listCard}>
          {filteredAreas.map((area, index) => (
            <View key={area}>
              <TouchableOpacity
                style={styles.areaItem}
                onPress={() => handleSelectArea(area)}
              >
                <Text style={styles.areaItemText}>{area}</Text>
                <ChevronIcon visible={selectedArea === area} />
              </TouchableOpacity>
              {index < filteredAreas.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>

        {locationError && <Text style={styles.errorText}>{locationError}</Text>}

        <TouchableOpacity
          style={styles.currentLocationButton}
          onPress={handleUseCurrentLocation}
          disabled={locatingUser}
        >
          {locatingUser ? (
            <ActivityIndicator size="small" color={COLORS.textPrimary} />
          ) : (
            <LocationIcon />
          )}
          <Text style={styles.currentLocationText}>
            {locatingUser ? 'Locating...' : 'Use Current Location'}
          </Text>
        </TouchableOpacity>
      </View>
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
    height: SELECT_AREA.headerHeight,
    paddingHorizontal: 16,
    backgroundColor: COLORS.areaHeaderBg,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTS.semiBold,
    fontSize: SELECT_AREA.headingFontSize,
    lineHeight: SELECT_AREA.headingLineHeight,
    color: COLORS.areaHeaderTitle,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: SELECT_AREA.contentPaddingHorizontal,
    paddingTop: 32,
  },
  searchWrapper: {
    justifyContent: 'center',
    marginBottom: 24,
  },
  searchIconWrapper: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  searchInput: {
    height: SELECT_AREA.searchInputHeight,
    backgroundColor: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.areaSearchBorder,
    borderRadius: SELECT_AREA.searchBorderRadius,
    paddingLeft: 40,
    paddingRight: 12,
    fontFamily: FONTS.regular,
    fontSize: SELECT_AREA.searchFontSize,
    color: COLORS.areaItemText,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  listCard: {
    backgroundColor: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.areaListBorder,
    borderRadius: SELECT_AREA.listBorderRadius,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 24,
    marginBottom: 24,
  },
  areaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SELECT_AREA.itemPaddingVertical,
    paddingHorizontal: SELECT_AREA.itemPaddingHorizontal,
  },
  areaItemText: {
    fontFamily: FONTS.regular,
    fontSize: SELECT_AREA.itemFontSize,
    lineHeight: SELECT_AREA.itemLineHeight,
    color: COLORS.areaItemText,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.areaDivider,
    marginHorizontal: SELECT_AREA.itemPaddingHorizontal,
  },
  errorText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: '#D64545',
    textAlign: 'center',
    marginBottom: 12,
  },
  currentLocationButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    height: SELECT_AREA.buttonHeight,
    backgroundColor: COLORS.accent,
    borderRadius: SELECT_AREA.buttonBorderRadius,
  },
  currentLocationText: {
    fontFamily: FONTS.semiBold,
    fontSize: SELECT_AREA.buttonFontSize,
    lineHeight: SELECT_AREA.buttonLineHeight,
    letterSpacing: SELECT_AREA.buttonLetterSpacing,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
});

export default SelectAreaScreen;

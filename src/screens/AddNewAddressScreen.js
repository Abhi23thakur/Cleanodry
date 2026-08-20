import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, ADD_ADDRESS } from '../constants/theme';

const LABEL_OPTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'office', label: 'Office' },
  { id: 'other', label: 'Other' },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.addAddressHeaderTitle}
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

const CurrentLocationIcon = ({ size = 22, color = COLORS.addAddressCurrentLocationText }) => (
  <Svg width={size} height={size} viewBox="0 0 22 22">
    <Path
      d="M9.99542 22V19.9908C7.90258 19.7564 6.10692 18.89 4.60844 17.3915C3.10997 15.8931 2.24353 14.0974 2.00913 12.0046H0V9.99542H2.00913C2.24353 7.90258 3.10997 6.10692 4.60844 4.60844C6.10692 3.10997 7.90258 2.24353 9.99542 2.00913V0H12.0046V2.00913C14.0974 2.24353 15.8931 3.10997 17.3915 4.60844C18.89 6.10692 19.7564 7.90258 19.9908 9.99542H22V12.0046H19.9908C19.7564 14.0974 18.89 15.8931 17.3915 17.3915C15.8931 18.89 14.0974 19.7564 12.0046 19.9908V22H9.99542ZM11 18.0319C12.9421 18.0319 14.5997 17.3455 15.9726 15.9726C17.3455 14.5997 18.0319 12.9421 18.0319 11C18.0319 9.05783 17.3455 7.4003 15.9726 6.02739C14.5997 4.65448 12.9421 3.96803 11 3.96803C9.05783 3.96803 7.4003 4.65448 6.02739 6.02739C4.65448 7.4003 3.96803 9.05783 3.96803 11C3.96803 12.9421 4.65448 14.5997 6.02739 15.9726C7.4003 17.3455 9.05783 18.0319 11 18.0319ZM11 15.0182C9.89497 15.0182 8.949 14.6248 8.16209 13.8379C7.37518 13.051 6.98173 12.105 6.98173 11C6.98173 9.89497 7.37518 8.949 8.16209 8.16209C8.949 7.37518 9.89497 6.98173 11 6.98173C12.105 6.98173 13.051 7.37518 13.8379 8.16209C14.6248 8.949 15.0182 9.89497 15.0182 11C15.0182 12.105 14.6248 13.051 13.8379 13.8379C13.051 14.6248 12.105 15.0182 11 15.0182ZM11 13.0091C11.5525 13.0091 12.0255 12.8124 12.4189 12.4189C12.8124 12.0255 13.0091 11.5525 13.0091 11C13.0091 10.4475 12.8124 9.97449 12.4189 9.58104C12.0255 9.18759 11.5525 8.99086 11 8.99086C10.4475 8.99086 9.97449 9.18759 9.58104 9.58104C9.18759 9.97449 8.99086 10.4475 8.99086 11C8.99086 11.5525 9.18759 12.0255 9.58104 12.4189C9.97449 12.8124 10.4475 13.0091 11 13.0091Z"
      fill={color}
    />
  </Svg>
);

const HomeLabelIcon = ({ color }) => (
  <Svg width={12} height={13} viewBox="0 0 12 13">
    <Path
      d="M1.5 11.5556H3.75V7.22222H8.25V11.5556H10.5V5.05556L6 1.80556L1.5 5.05556V11.5556ZM0 13V4.33333L6 0L12 4.33333V13H6.75V8.66667H5.25V13H0Z"
      fill={color}
    />
  </Svg>
);

const OfficeLabelIcon = ({ color }) => (
  <Svg width={14} height={13} viewBox="0 0 14 13">
    <Path
      d="M1.4 13C1.015 13 0.685417 12.866 0.41125 12.598C0.137083 12.33 0 12.0079 0 11.6316V4.10526C0 3.72895 0.137083 3.4068 0.41125 3.13882C0.685417 2.87083 1.015 2.73684 1.4 2.73684H4.2V1.36842C4.2 0.992105 4.33708 0.669956 4.61125 0.401974C4.88542 0.133991 5.215 0 5.6 0H8.4C8.785 0 9.11458 0.133991 9.38875 0.401974C9.66292 0.669956 9.8 0.992105 9.8 1.36842V2.73684H12.6C12.985 2.73684 13.3146 2.87083 13.5888 3.13882C13.8629 3.4068 14 3.72895 14 4.10526V11.6316C14 12.0079 13.8629 12.33 13.5888 12.598C13.3146 12.866 12.985 13 12.6 13H1.4ZM1.4 11.6316H12.6V4.10526H1.4V11.6316ZM5.6 2.73684H8.4V1.36842H5.6V2.73684Z"
      fill={color}
    />
  </Svg>
);

const OtherLabelIcon = ({ color }) => (
  <Svg width={12} height={15} viewBox="0 0 12 15">
    <Path
      d="M6 7.5C6.4125 7.5 6.76563 7.35313 7.05938 7.05938C7.35313 6.76563 7.5 6.4125 7.5 6C7.5 5.5875 7.35313 5.23438 7.05938 4.94063C6.76563 4.64688 6.4125 4.5 6 4.5C5.5875 4.5 5.23438 4.64688 4.94063 4.94063C4.64688 5.23438 4.5 5.5875 4.5 6C4.5 6.4125 4.64688 6.76563 4.94063 7.05938C5.23438 7.35313 5.5875 7.5 6 7.5ZM6 13.0125C7.525 11.6125 8.65625 10.3406 9.39375 9.19688C10.1313 8.05313 10.5 7.0375 10.5 6.15C10.5 4.7875 10.0656 3.67188 9.19688 2.80313C8.32813 1.93438 7.2625 1.5 6 1.5C4.7375 1.5 3.67188 1.93438 2.80313 2.80313C1.93438 3.67188 1.5 4.7875 1.5 6.15C1.5 7.0375 1.86875 8.05313 2.60625 9.19688C3.34375 10.3406 4.475 11.6125 6 13.0125ZM6 15C3.9875 13.2875 2.48438 11.6969 1.49063 10.2281C0.496875 8.75938 0 7.4 0 6.15C0 4.275 0.603125 2.78125 1.80938 1.66875C3.01563 0.55625 4.4125 0 6 0C7.5875 0 8.98438 0.55625 10.1906 1.66875C11.3969 2.78125 12 4.275 12 6.15C12 7.4 11.5031 8.75938 10.5094 10.2281C9.51563 11.6969 8.0125 13.2875 6 15Z"
      fill={color}
    />
  </Svg>
);

const LABEL_ICONS = {
  home: HomeLabelIcon,
  office: OfficeLabelIcon,
  other: OtherLabelIcon,
};

const FormField = ({ label, value, onChangeText, placeholder, readOnly, keyboardType }) => (
  <View style={styles.fieldWrapper}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View
      style={[
        styles.inputContainer,
        readOnly && styles.inputContainerReadonly,
      ]}
    >
      <TextInput
        style={[styles.input, readOnly && styles.inputReadonly]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.addAddressInputPlaceholder}
        editable={!readOnly}
        keyboardType={keyboardType}
      />
    </View>
  </View>
);

const AddNewAddressScreen = ({
  initialValues = {},
  contextAddress = {
    primary: '123 Park Avenue, Midtown',
    secondary: 'New York, NY 10017',
  },
  onBack = () => {},
  onOpenProfile = () => {},
  onUseCurrentLocation = () => {},
  onSave = () => {},
}) => {
  const [houseNumber, setHouseNumber] = useState(initialValues.houseNumber || '');
  const [street, setStreet] = useState(initialValues.street || '');
  const [landmark, setLandmark] = useState(initialValues.landmark || '');
  const [pinCode, setPinCode] = useState(initialValues.pinCode || '10017');
  const [city, setCity] = useState(initialValues.city || 'New York');
  const [selectedLabel, setSelectedLabel] = useState(
    initialValues.label || 'home',
  );

  const handleSave = () => {
    onSave({
      houseNumber,
      street,
      landmark,
      pinCode,
      city,
      label: selectedLabel,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Address</Text>
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
          <Image
            source={require('../assets/images/address_map_bg.png')}
            style={styles.mapImage}
            resizeMode="cover"
          />
          <View style={styles.mapPin}>
            <MapPinIcon />
          </View>

          <TouchableOpacity
            style={styles.currentLocationButton}
            activeOpacity={0.85}
            onPress={onUseCurrentLocation}
          >
            <CurrentLocationIcon />
            <Text style={styles.currentLocationText}>
              Use Current Location
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Address Details</Text>

            <View style={styles.locationContext}>
              <CurrentLocationIcon size={22} />
              <View style={styles.locationContextText}>
                <Text style={styles.locationPrimaryText}>
                  {contextAddress.primary}
                </Text>
                <Text style={styles.locationSecondaryText}>
                  {contextAddress.secondary}
                </Text>
              </View>
            </View>

            <FormField
              label="House / Flat / Block No."
              value={houseNumber}
              onChangeText={setHouseNumber}
              placeholder="e.g. Apt 4B"
            />

            <FormField
              label="Street / Society Name"
              value={street}
              onChangeText={setStreet}
              placeholder="e.g. Maple Street"
            />

            <FormField
              label="Landmark (Optional)"
              value={landmark}
              onChangeText={setLandmark}
              placeholder="e.g. Near Central Park"
            />

            <FormField
              label="PIN Code"
              value={pinCode}
              onChangeText={setPinCode}
              keyboardType="number-pad"
            />

            <FormField label="City" value={city} onChangeText={setCity} readOnly />

            <View style={styles.separator} />

            <View style={styles.labelSelector}>
              <Text style={styles.fieldLabel}>Save address as</Text>
              <View style={styles.labelPillRow}>
                {LABEL_OPTIONS.map(option => {
                  const isActive = option.id === selectedLabel;
                  const IconComponent = LABEL_ICONS[option.id];
                  const iconColor = isActive
                    ? COLORS.addAddressPillActiveText
                    : COLORS.addAddressPillText;
                  return (
                    <TouchableOpacity
                      key={option.id}
                      style={[
                        styles.labelPill,
                        isActive && styles.labelPillActive,
                      ]}
                      activeOpacity={0.85}
                      onPress={() => setSelectedLabel(option.id)}
                    >
                      <IconComponent color={iconColor} />
                      <Text
                        style={[
                          styles.labelPillText,
                          isActive && styles.labelPillTextActive,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.saveBar}>
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.85}
          onPress={handleSave}
        >
          <Text style={styles.saveButtonText}>Save Address</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: ADD_ADDRESS.headerHeight,
    backgroundColor: COLORS.addAddressHeaderBg,
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
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADD_ADDRESS.headerTitleFontSize,
    lineHeight: ADD_ADDRESS.headerTitleLineHeight,
    color: COLORS.addAddressHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  mapContainer: {
    height: ADD_ADDRESS.mapHeight,
    backgroundColor: COLORS.addAddressMapBg,
    borderBottomLeftRadius: ADD_ADDRESS.mapBorderRadius,
    borderBottomRightRadius: ADD_ADDRESS.mapBorderRadius,
    overflow: 'hidden',
  },
  mapImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
  },
  mapPin: {
    position: 'absolute',
    top: 72,
    left: '50%',
    marginLeft: -ADD_ADDRESS.pinSize / 2,
    width: ADD_ADDRESS.pinSize,
    height: ADD_ADDRESS.pinSize,
    borderRadius: ADD_ADDRESS.pinSize / 2,
    backgroundColor: COLORS.addAddressPinBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currentLocationButton: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: ADD_ADDRESS.currentLocationButtonPaddingVertical,
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
    fontSize: ADD_ADDRESS.currentLocationFontSize,
    lineHeight: ADD_ADDRESS.currentLocationLineHeight,
    color: COLORS.addAddressCurrentLocationText,
  },
  content: {
    paddingHorizontal: ADD_ADDRESS.contentPaddingHorizontal,
    paddingTop: 8,
  },
  card: {
    backgroundColor: COLORS.textPrimary,
    borderRadius: ADD_ADDRESS.cardBorderRadius,
    padding: ADD_ADDRESS.cardPadding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  cardTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADD_ADDRESS.cardTitleFontSize,
    lineHeight: ADD_ADDRESS.cardTitleLineHeight,
    color: COLORS.addAddressCardTitle,
    marginBottom: 24,
  },
  locationContext: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: COLORS.addAddressLocationContextBg,
    borderRadius: ADD_ADDRESS.locationContextRadius,
    padding: 16,
    marginBottom: ADD_ADDRESS.formGap,
  },
  locationContextText: {
    flex: 1,
  },
  locationPrimaryText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ADD_ADDRESS.locationContextPrimaryFontSize,
    lineHeight: ADD_ADDRESS.locationContextPrimaryLineHeight,
    color: COLORS.addAddressLocationPrimaryText,
  },
  locationSecondaryText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: ADD_ADDRESS.locationContextSecondaryFontSize,
    lineHeight: ADD_ADDRESS.locationContextSecondaryLineHeight,
    color: COLORS.addAddressLocationSecondaryText,
  },
  fieldWrapper: {
    marginBottom: ADD_ADDRESS.formGap,
  },
  fieldLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ADD_ADDRESS.fieldLabelFontSize,
    lineHeight: ADD_ADDRESS.fieldLabelLineHeight,
    color: COLORS.addAddressFieldLabel,
    marginBottom: ADD_ADDRESS.fieldGap,
  },
  inputContainer: {
    height: ADD_ADDRESS.inputHeight,
    backgroundColor: COLORS.addAddressInputBg,
    borderWidth: 1,
    borderColor: COLORS.addAddressInputBorder,
    borderRadius: ADD_ADDRESS.inputBorderRadius,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputContainerReadonly: {
    backgroundColor: COLORS.addAddressInputReadonlyBg,
  },
  input: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ADD_ADDRESS.inputFontSize,
    color: COLORS.addAddressInputText,
    padding: 0,
  },
  inputReadonly: {
    color: COLORS.addAddressInputReadonlyText,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.addAddressSeparator,
    marginBottom: ADD_ADDRESS.formGap,
  },
  labelSelector: {},
  labelPillRow: {
    flexDirection: 'row',
    gap: ADD_ADDRESS.labelSelectorGap,
  },
  labelPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: ADD_ADDRESS.labelPillPaddingVertical,
    paddingHorizontal: ADD_ADDRESS.labelPillPaddingHorizontal,
    backgroundColor: COLORS.addAddressPillBg,
    borderWidth: 1,
    borderColor: COLORS.addAddressPillBorder,
    borderRadius: 9999,
  },
  labelPillActive: {
    backgroundColor: COLORS.addAddressPillActiveBg,
    borderColor: 'rgba(0, 0, 0, 0)',
  },
  labelPillText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: ADD_ADDRESS.labelPillFontSize,
    lineHeight: ADD_ADDRESS.labelPillLineHeight,
    color: COLORS.addAddressPillText,
  },
  labelPillTextActive: {
    color: COLORS.addAddressPillActiveText,
  },
  saveBar: {
    height: ADD_ADDRESS.saveButtonHeight,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 13,
    backgroundColor: COLORS.textPrimary,
    borderTopWidth: 1,
    borderTopColor: COLORS.addAddressBorder,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
  },
  saveButton: {
    backgroundColor: COLORS.addAddressSaveBg,
    borderRadius: ADD_ADDRESS.saveButtonBorderRadius,
    paddingVertical: ADD_ADDRESS.saveButtonPaddingVertical,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  saveButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: ADD_ADDRESS.saveButtonFontSize,
    lineHeight: ADD_ADDRESS.saveButtonLineHeight,
    color: COLORS.addAddressSaveText,
  },
});

export default AddNewAddressScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, SCHEDULE } from '../constants/theme';

const DEFAULT_DATES = [
  { id: 'wed-12', day: 'WED', date: '12' },
  { id: 'thu-13', day: 'THU', date: '13' },
  { id: 'fri-14', day: 'FRI', date: '14' },
  { id: 'sat-15', day: 'SAT', date: '15' },
  { id: 'sun-16', day: 'SUN', date: '16', disabled: true },
  { id: 'mon-17', day: 'MON', date: '17' },
];

const TIME_SLOTS = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.scheduleHeaderTitle}
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

const CheckIcon = () => (
  <Svg width={20.23} height={16.65} viewBox="0 0 21 17">
    <Path
      d="M3.2282 17V2.86889H0V0.269485H6.28798V17H3.2282ZM9.43197 17V14.6982L13.9683 9.94287C14.8591 9.00716 15.5478 8.25765 16.0344 7.69436C16.5209 7.13106 16.8643 6.6473 17.0646 6.24307C17.2648 5.83884 17.3649 5.429 17.3649 5.01354C17.3649 4.3024 17.1432 3.74753 16.6996 3.34891C16.2561 2.9503 15.6881 2.75099 14.9957 2.75099C14.2846 2.75099 13.6642 2.95404 13.1346 3.36014C12.605 3.76624 12.226 4.36603 11.9977 5.15951L9.31407 4.3286C9.49747 3.44903 9.86614 2.68549 10.4201 2.03798C10.974 1.39047 11.6496 0.888926 12.4468 0.533356C13.2441 0.177785 14.0918 0 14.9901 0C16.0718 0 17.0206 0.196499 17.8365 0.589498C18.6525 0.982497 19.2878 1.53082 19.7426 2.23448C20.1973 2.93813 20.4247 3.75782 20.4247 4.69353C20.4247 5.29987 20.3134 5.89218 20.0907 6.47045C19.868 7.04872 19.5311 7.64383 19.0801 8.25578C18.6291 8.86774 18.048 9.54426 17.3369 10.2853L13.3956 14.4174H20.6549V17H9.43197Z"
      fill={COLORS.scheduleDateActiveText}
    />
  </Svg>
);

const ArrowRightIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
      fill={COLORS.scheduleContinueText}
    />
  </Svg>
);

const PickupIcon = () => (
  <Svg width={22} height={16} viewBox="0 0 22 16">
    <Path
      d="M5 16C4.16667 16 3.45833 15.7083 2.875 15.125C2.29167 14.5417 2 13.8333 2 13H0V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16V4H19L22 8V13H20C20 13.8333 19.7083 14.5417 19.125 15.125C18.5417 15.7083 17.8333 16 17 16C16.1667 16 15.4583 15.7083 14.875 15.125C14.2917 14.5417 14 13.8333 14 13H8C8 13.8333 7.70833 14.5417 7.125 15.125C6.54167 15.7083 5.83333 16 5 16ZM5 14C5.28333 14 5.52083 13.9042 5.7125 13.7125C5.90417 13.5208 6 13.2833 6 13C6 12.7167 5.90417 12.4792 5.7125 12.2875C5.52083 12.0958 5.28333 12 5 12C4.71667 12 4.47917 12.0958 4.2875 12.2875C4.09583 12.4792 4 12.7167 4 13C4 13.2833 4.09583 13.5208 4.2875 13.7125C4.47917 13.9042 4.71667 14 5 14ZM2 11H2.8C3.08333 10.7 3.40833 10.4583 3.775 10.275C4.14167 10.0917 4.55 10 5 10C5.45 10 5.85833 10.0917 6.225 10.275C6.59167 10.4583 6.91667 10.7 7.2 11H14V2H2V11ZM17 14C17.2833 14 17.5208 13.9042 17.7125 13.7125C17.9042 13.5208 18 13.2833 18 13C18 12.7167 17.9042 12.4792 17.7125 12.2875C17.5208 12.0958 17.2833 12 17 12C16.7167 12 16.4792 12.0958 16.2875 12.2875C16.0958 12.4792 16 12.7167 16 13C16 13.2833 16.0958 13.5208 16.2875 13.7125C16.4792 13.9042 16.7167 14 17 14ZM16 9H20.25L18 6H16V9Z"
      fill={COLORS.scheduleHeaderTitle}
    />
  </Svg>
);

const DeliveryIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20">
    <Path
      d="M3 20C2.45 20 1.97917 19.8042 1.5875 19.4125C1.19583 19.0208 1 18.55 1 18V6.725C0.7 6.54167 0.458333 6.30417 0.275 6.0125C0.0916667 5.72083 0 5.38333 0 5V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V5C20 5.38333 19.9083 5.72083 19.725 6.0125C19.5417 6.30417 19.3 6.54167 19 6.725V18C19 18.55 18.8042 19.0208 18.4125 19.4125C18.0208 19.8042 17.55 20 17 20H3ZM3 7V18H17V7H3ZM2 5H18V2H2V5ZM7 12H13V10H7V12Z"
      fill={COLORS.scheduleHeaderTitle}
    />
  </Svg>
);

const ExpressIcon = () => (
  <Svg width={16} height={20} viewBox="0 0 16 20">
    <Path
      d="M4 20L5 13H0L9 0H11L10 8H16L6 20H4Z"
      fill={COLORS.scheduleToggleIcon}
    />
  </Svg>
);

const DateCard = ({ item, isSelected, onSelect }) => (
  <TouchableOpacity
    style={[
      styles.dateCard,
      isSelected && styles.dateCardActive,
      item.disabled && styles.dateCardDisabled,
    ]}
    activeOpacity={0.85}
    disabled={item.disabled}
    onPress={() => onSelect(item.id)}
  >
    <Text
      style={[styles.dateDay, isSelected && styles.dateDayActive]}
    >
      {item.day}
    </Text>
    {isSelected ? (
      <CheckIcon />
    ) : (
      <Text style={styles.dateNumber}>{item.date}</Text>
    )}
  </TouchableOpacity>
);

const TimeSlotGrid = ({ slots, selectedSlot, onSelect, disabledSlots = [] }) => (
  <View style={styles.timeSlotGrid}>
    {slots.map(slot => {
      const isActive = slot === selectedSlot;
      const isDisabled = disabledSlots.includes(slot);
      return (
        <TouchableOpacity
          key={slot}
          style={[
            styles.timeSlot,
            isActive && styles.timeSlotActive,
            isDisabled && styles.timeSlotDisabled,
          ]}
          activeOpacity={0.85}
          disabled={isDisabled}
          onPress={() => onSelect(slot)}
        >
          <Text
            style={[
              styles.timeSlotText,
              isActive && styles.timeSlotTextActive,
            ]}
          >
            {slot}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

const ScheduleScreen = ({
  dates = DEFAULT_DATES,
  initialSelectedDateId = 'wed-12',
  initialPickupSlot = '10:00 - 12:00',
  initialDeliverySlot = null,
  onBack = () => {},
  onOpenProfile = () => {},
  onContinue = () => {},
}) => {
  const [selectedDateId, setSelectedDateId] = useState(initialSelectedDateId);
  const [pickupSlot, setPickupSlot] = useState(initialPickupSlot);
  const [deliverySlot, setDeliverySlot] = useState(initialDeliverySlot);
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  const pickupIndex = TIME_SLOTS.indexOf(pickupSlot);
  const disabledDeliverySlots = TIME_SLOTS.filter(
    (slot, index) => index < pickupIndex,
  );

  const handleSelectPickup = slot => {
    setPickupSlot(slot);
    const newIndex = TIME_SLOTS.indexOf(slot);
    if (TIME_SLOTS.indexOf(deliverySlot) < newIndex) {
      setDeliverySlot(null);
    }
  };

  const handleContinue = () => {
    onContinue({
      dateId: selectedDateId,
      pickupSlot,
      deliverySlot,
      expressDelivery,
      orderNotes,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Schedule</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dateRow}
          >
            {dates.map(item => (
              <DateCard
                key={item.id}
                item={item}
                isSelected={item.id === selectedDateId}
                onSelect={setSelectedDateId}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <PickupIcon />
            <Text style={styles.sectionTitle}>Pickup Time</Text>
          </View>
          <TimeSlotGrid
            slots={TIME_SLOTS}
            selectedSlot={pickupSlot}
            onSelect={handleSelectPickup}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <DeliveryIcon />
            <Text style={styles.sectionTitle}>Delivery Time</Text>
          </View>
          <TimeSlotGrid
            slots={TIME_SLOTS}
            selectedSlot={deliverySlot}
            onSelect={setDeliverySlot}
            disabledSlots={disabledDeliverySlots}
          />
        </View>

        <View style={styles.toggleCard}>
          <View style={styles.toggleInfo}>
            <View style={styles.toggleIconWrapper}>
              <ExpressIcon />
            </View>
            <View style={styles.toggleTextWrapper}>
              <Text style={styles.toggleTitle}>Express Delivery</Text>
              <Text style={styles.toggleSubtitle}>
                Get it back in 24 hours{'\n'}(+$5.00)
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.switchTrack,
              expressDelivery && styles.switchTrackActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setExpressDelivery(prev => !prev)}
          >
            <View
              style={[
                styles.switchThumb,
                expressDelivery && styles.switchThumbActive,
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.notesSection}>
          <View style={styles.notesLabelRow}>
            <Text style={styles.notesLabel}>Order Notes</Text>
            <Text style={styles.notesOptional}> (Optional)</Text>
          </View>
          <TextInput
            style={styles.notesInput}
            value={orderNotes}
            onChangeText={setOrderNotes}
            placeholder="Any special instructions for the driver or cleaning staff?"
            placeholderTextColor={COLORS.scheduleNotesPlaceholder}
            multiline
            textAlignVertical="top"
          />
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.continueButton}
          activeOpacity={0.85}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue to Payment</Text>
          <ArrowRightIcon />
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
    height: SCHEDULE.headerHeight,
    backgroundColor: COLORS.scheduleHeaderBg,
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
    fontSize: SCHEDULE.headerTitleFontSize,
    lineHeight: SCHEDULE.headerTitleLineHeight,
    color: COLORS.scheduleHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: SCHEDULE.contentPaddingHorizontal,
    paddingTop: SCHEDULE.contentPaddingTop,
    paddingBottom: 32,
  },
  section: {
    marginBottom: SCHEDULE.sectionGap,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: SCHEDULE.sectionHeaderGap,
  },
  sectionTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SCHEDULE.sectionTitleFontSize,
    lineHeight: SCHEDULE.sectionTitleLineHeight,
    color: COLORS.scheduleSectionTitle,
    marginBottom: SCHEDULE.sectionHeaderGap,
  },
  dateRow: {
    gap: SCHEDULE.dateCardGap,
  },
  dateCard: {
    width: SCHEDULE.dateCardWidth,
    height: SCHEDULE.dateCardHeight,
    backgroundColor: COLORS.scheduleDateInactiveBg,
    borderWidth: 1,
    borderColor: COLORS.scheduleDateInactiveBorder,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  dateCardActive: {
    backgroundColor: COLORS.scheduleDateActiveBg,
    borderColor: 'rgba(0, 0, 0, 0)',
  },
  dateCardDisabled: {
    opacity: 0.5,
  },
  dateDay: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SCHEDULE.dateDayFontSize,
    lineHeight: SCHEDULE.dateDayLineHeight,
    textTransform: 'uppercase',
    color: COLORS.scheduleDateInactiveText,
  },
  dateDayActive: {
    color: COLORS.scheduleDateActiveText,
    opacity: 0.8,
  },
  dateNumber: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: SCHEDULE.dateNumberFontSize,
    lineHeight: SCHEDULE.dateNumberLineHeight,
    color: COLORS.scheduleDateInactiveText,
  },
  timeSlotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SCHEDULE.timeSlotGap,
  },
  timeSlot: {
    flexBasis: '48%',
    flexGrow: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.scheduleSlotInactiveBg,
    borderWidth: 1,
    borderColor: COLORS.scheduleSlotInactiveBorder,
    borderRadius: SCHEDULE.timeSlotBorderRadius,
  },
  timeSlotActive: {
    backgroundColor: COLORS.scheduleSlotActiveBg,
    borderColor: 'rgba(0, 0, 0, 0)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  timeSlotDisabled: {
    opacity: 0.5,
  },
  timeSlotText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SCHEDULE.timeSlotFontSize,
    lineHeight: SCHEDULE.timeSlotLineHeight,
    color: COLORS.scheduleSlotInactiveText,
  },
  timeSlotTextActive: {
    color: COLORS.scheduleSlotActiveText,
  },
  toggleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.textPrimary,
    borderRadius: SCHEDULE.toggleCardBorderRadius,
    padding: SCHEDULE.toggleCardPadding,
    marginBottom: SCHEDULE.sectionGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  toggleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flexShrink: 1,
  },
  toggleIconWrapper: {
    width: SCHEDULE.toggleIconWrapperSize,
    height: SCHEDULE.toggleIconWrapperSize,
    borderRadius: SCHEDULE.toggleIconWrapperSize / 2,
    backgroundColor: COLORS.scheduleToggleIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleTextWrapper: {
    flexShrink: 1,
  },
  toggleTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SCHEDULE.toggleTitleFontSize,
    lineHeight: SCHEDULE.toggleTitleLineHeight,
    color: COLORS.scheduleToggleTitle,
  },
  toggleSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SCHEDULE.toggleSubtitleFontSize,
    lineHeight: SCHEDULE.toggleSubtitleLineHeight,
    color: COLORS.scheduleToggleSubtitle,
  },
  switchTrack: {
    width: SCHEDULE.switchWidth,
    height: SCHEDULE.switchHeight,
    borderRadius: SCHEDULE.switchHeight / 2,
    backgroundColor: COLORS.scheduleSwitchOffBg,
    justifyContent: 'center',
    padding: 2,
  },
  switchTrackActive: {
    backgroundColor: COLORS.scheduleSwitchOnBg,
  },
  switchThumb: {
    width: SCHEDULE.switchThumbSize,
    height: SCHEDULE.switchThumbSize,
    borderRadius: SCHEDULE.switchThumbSize / 2,
    backgroundColor: COLORS.scheduleSwitchThumb,
    borderWidth: 1,
    borderColor: COLORS.scheduleSwitchThumbBorder,
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  notesSection: {},
  notesLabelRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  notesLabel: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SCHEDULE.notesLabelFontSize,
    lineHeight: SCHEDULE.notesLabelLineHeight,
    color: COLORS.scheduleSectionTitle,
  },
  notesOptional: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SCHEDULE.notesOptionalFontSize,
    lineHeight: SCHEDULE.notesOptionalLineHeight,
    color: COLORS.scheduleNotesOptional,
  },
  notesInput: {
    height: SCHEDULE.notesInputHeight,
    backgroundColor: COLORS.scheduleNotesInputBg,
    borderWidth: 1,
    borderColor: COLORS.scheduleNotesInputBorder,
    borderRadius: SCHEDULE.notesInputBorderRadius,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SCHEDULE.notesInputFontSize,
    color: COLORS.scheduleToggleTitle,
  },
  bottomBar: {
    height: SCHEDULE.bottomBarHeight,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.textPrimary,
    borderTopWidth: 1,
    borderTopColor: COLORS.scheduleBottomBarBorder,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.scheduleContinueBg,
    borderRadius: SCHEDULE.continueButtonBorderRadius,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  continueButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SCHEDULE.continueButtonFontSize,
    lineHeight: SCHEDULE.continueButtonLineHeight,
    color: COLORS.scheduleContinueText,
  },
});

export default ScheduleScreen;

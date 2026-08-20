import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, PAYMENT } from '../constants/theme';

const DEFAULT_ORDER = {
  orderId: 'CD-8924',
  status: 'Processing',
  lineItems: [
    { label: 'Premium Dry Cleaning (x3)', value: 45.0 },
    { label: 'Express Delivery', value: 5.0 },
  ],
  promo: { label: 'Promo Code (CLEAN20)', value: -10.0 },
};

const DEFAULT_SAVED_CARD = {
  id: 'saved-visa',
  brand: 'VISA',
  last4: '4242',
  expiry: '12/25',
};

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI (GPay, PhonePe, Paytm)', icon: 'upi' },
  { id: 'card', label: 'Credit / Debit Card', icon: 'card' },
  { id: 'netbanking', label: 'Net Banking', icon: 'netbanking' },
  { id: 'wallets', label: 'Wallets', icon: 'wallet' },
  { id: 'cod', label: 'Cash on Delivery', icon: 'cod' },
];

const formatAmount = value => `₹${Math.abs(value).toFixed(2)}`;

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.paymentBackIcon}
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

const ArrowRightIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
      fill={COLORS.paymentPayText}
    />
  </Svg>
);

const UpiIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20">
    <Path
      d="M0 5V0H5V2H2V5H0ZM0 20V15H2V18H5V20H0ZM15 20V18H18V15H20V20H15ZM18 5V2H15V0H20V5H18ZM15.5 15.5H17V17H15.5V15.5ZM15.5 12.5H17V14H15.5V12.5ZM14 14H15.5V15.5H14V14ZM12.5 15.5H14V17H12.5V15.5ZM11 14H12.5V15.5H11V14ZM14 11H15.5V12.5H14V11ZM12.5 12.5H14V14H12.5V12.5ZM11 11H12.5V12.5H11V11ZM17 3V9H11V3H17ZM9 11V17H3V11H9ZM9 3V9H3V3H9ZM7.5 15.5V12.5H4.5V15.5H7.5ZM7.5 7.5V4.5H4.5V7.5H7.5ZM15.5 7.5V4.5H12.5V7.5H15.5Z"
      fill={COLORS.paymentIcon}
    />
  </Svg>
);

const CardIcon = () => (
  <Svg width={20} height={16} viewBox="0 0 20 16">
    <Path
      d="M20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2ZM2 4H18V2H2V4ZM2 8V14H18V8H2ZM2 14V2V14Z"
      fill={COLORS.paymentIcon}
    />
  </Svg>
);

const NetBankingIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20">
    <Path
      d="M3 16V9H5V16H3ZM9 16V9H11V16H9ZM0 20V18H20V20H0ZM15 16V9H17V16H15ZM0 7V5L10 0L20 5V7H0ZM4.45 5H10H15.55H4.45ZM4.45 5H15.55L10 2.25L4.45 5Z"
      fill={COLORS.paymentIcon}
    />
  </Svg>
);

const WalletIcon = () => (
  <Svg width={19} height={18} viewBox="0 0 19 18">
    <Path
      d="M2 16V2C2 2 2 2.37083 2 3.1125C2 3.85417 2 4.81667 2 6V12C2 13.1833 2 14.1458 2 14.8875C2 15.6292 2 16 2 16ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V4.5H16V2H2V16H16V13.5H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM10 14C9.45 14 8.97917 13.8042 8.5875 13.4125C8.19583 13.0208 8 12.55 8 12V6C8 5.45 8.19583 4.97917 8.5875 4.5875C8.97917 4.19583 9.45 4 10 4H17C17.55 4 18.0208 4.19583 18.4125 4.5875C18.8042 4.97917 19 5.45 19 6V12C19 12.55 18.8042 13.0208 18.4125 13.4125C18.0208 13.8042 17.55 14 17 14H10ZM17 12V6H10V12H17ZM13 10.5C13.4167 10.5 13.7708 10.3542 14.0625 10.0625C14.3542 9.77083 14.5 9.41667 14.5 9C14.5 8.58333 14.3542 8.22917 14.0625 7.9375C13.7708 7.64583 13.4167 7.5 13 7.5C12.5833 7.5 12.2292 7.64583 11.9375 7.9375C11.6458 8.22917 11.5 8.58333 11.5 9C11.5 9.41667 11.6458 9.77083 11.9375 10.0625C12.2292 10.3542 12.5833 10.5 13 10.5Z"
      fill={COLORS.paymentIcon}
    />
  </Svg>
);

const CodIcon = () => (
  <Svg width={22} height={16} viewBox="0 0 22 16">
    <Path
      d="M13 9C12.1667 9 11.4583 8.70833 10.875 8.125C10.2917 7.54167 10 6.83333 10 6C10 5.16667 10.2917 4.45833 10.875 3.875C11.4583 3.29167 12.1667 3 13 3C13.8333 3 14.5417 3.29167 15.125 3.875C15.7083 4.45833 16 5.16667 16 6C16 6.83333 15.7083 7.54167 15.125 8.125C14.5417 8.70833 13.8333 9 13 9ZM6 12C5.45 12 4.97917 11.8042 4.5875 11.4125C4.19583 11.0208 4 10.55 4 10V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H20C20.55 0 21.0208 0.195833 21.4125 0.5875C21.8042 0.979167 22 1.45 22 2V10C22 10.55 21.8042 11.0208 21.4125 11.4125C21.0208 11.8042 20.55 12 20 12H6ZM8 10H18C18 9.45 18.1958 8.97917 18.5875 8.5875C18.9792 8.19583 19.45 8 20 8V4C19.45 4 18.9792 3.80417 18.5875 3.4125C18.1958 3.02083 18 2.55 18 2H8C8 2.55 7.80417 3.02083 7.4125 3.4125C7.02083 3.80417 6.55 4 6 4V8C6.55 8 7.02083 8.19583 7.4125 8.5875C7.80417 8.97917 8 9.45 8 10ZM19 16H2C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V3H2V14H19V16ZM6 10V2V10Z"
      fill={COLORS.paymentIcon}
    />
  </Svg>
);

const METHOD_ICONS = {
  upi: UpiIcon,
  card: CardIcon,
  netbanking: NetBankingIcon,
  wallet: WalletIcon,
  cod: CodIcon,
};

const RadioButton = ({ isActive }) => (
  <View
    style={[
      styles.radioOuter,
      isActive && styles.radioOuterActive,
    ]}
  >
    {isActive ? <View style={styles.radioDot} /> : null}
  </View>
);

const SavedCardOption = ({ card, isSelected, onSelect }) => (
  <TouchableOpacity
    style={[styles.methodRow, isSelected && styles.methodRowActive]}
    activeOpacity={0.85}
    onPress={() => onSelect(card.id)}
  >
    <View style={styles.methodInfo}>
      <View style={styles.cardBadge}>
        <Text style={styles.cardBadgeText}>{card.brand}</Text>
      </View>
      <View>
        <Text style={styles.methodLabel}>{'•••• ' + card.last4}</Text>
        <Text style={styles.methodDetail}>{'Expires ' + card.expiry}</Text>
      </View>
    </View>
    <RadioButton isActive={isSelected} />
  </TouchableOpacity>
);

const PaymentMethodOption = ({ method, isSelected, onSelect }) => {
  const IconComponent = METHOD_ICONS[method.icon];
  return (
    <TouchableOpacity
      style={[styles.methodRow, isSelected && styles.methodRowActive]}
      activeOpacity={0.85}
      onPress={() => onSelect(method.id)}
    >
      <View style={styles.methodInfo}>
        <View style={styles.methodIconWrapper}>
          <IconComponent />
        </View>
        <Text style={styles.methodLabel}>{method.label}</Text>
      </View>
      <RadioButton isActive={isSelected} />
    </TouchableOpacity>
  );
};

const PaymentScreen = ({
  order = DEFAULT_ORDER,
  savedCard = DEFAULT_SAVED_CARD,
  methods = PAYMENT_METHODS,
  initialSelectedMethodId = DEFAULT_SAVED_CARD.id,
  onBack = () => {},
  onOpenProfile = () => {},
  onPay = () => {},
}) => {
  const [selectedMethodId, setSelectedMethodId] = useState(
    initialSelectedMethodId,
  );

  const subtotal = order.lineItems.reduce((sum, item) => sum + item.value, 0);
  const total = subtotal + (order.promo ? order.promo.value : 0);

  const handlePay = () => {
    onPay({ methodId: selectedMethodId, amount: total });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.orderCard}>
          <View style={styles.orderHeaderRow}>
            <View>
              <Text style={styles.orderTitle}>Order Summary</Text>
              <Text style={styles.orderId}>{'Order #' + order.orderId}</Text>
            </View>
            <View style={styles.statusBadge}>
              <Text style={styles.statusBadgeText}>{order.status}</Text>
            </View>
          </View>

          <View style={styles.lineItemsBlock}>
            {order.lineItems.map(item => (
              <View key={item.label} style={styles.lineItemRow}>
                <Text style={styles.lineItemLabel}>{item.label}</Text>
                <Text style={styles.lineItemValue}>
                  {formatAmount(item.value)}
                </Text>
              </View>
            ))}
            {order.promo ? (
              <View style={styles.lineItemRow}>
                <Text style={styles.promoLabel}>{order.promo.label}</Text>
                <Text style={styles.promoValue}>
                  {'-' + formatAmount(order.promo.value)}
                </Text>
              </View>
            ) : null}
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>{formatAmount(total)}</Text>
          </View>
        </View>

        <View style={styles.methodsSection}>
          <Text style={styles.sectionTitle}>Select Payment Method</Text>

          <SavedCardOption
            card={savedCard}
            isSelected={selectedMethodId === savedCard.id}
            onSelect={setSelectedMethodId}
          />

          {methods.map(method => (
            <PaymentMethodOption
              key={method.id}
              method={method}
              isSelected={selectedMethodId === method.id}
              onSelect={setSelectedMethodId}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.payButton}
          activeOpacity={0.85}
          onPress={handlePay}
        >
          <Text style={styles.payButtonLabel}>Pay Now</Text>
          <View style={styles.payButtonRight}>
            <Text style={styles.payButtonAmount}>{formatAmount(total)}</Text>
            <ArrowRightIcon />
          </View>
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
    height: PAYMENT.headerHeight,
    backgroundColor: COLORS.paymentHeaderBg,
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
    fontSize: PAYMENT.headerTitleFontSize,
    lineHeight: PAYMENT.headerTitleLineHeight,
    color: COLORS.paymentHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: PAYMENT.contentPaddingHorizontal,
    paddingVertical: PAYMENT.contentPaddingVertical,
    paddingBottom: 32,
  },
  orderCard: {
    backgroundColor: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.paymentCardBorder,
    borderRadius: PAYMENT.cardBorderRadius,
    padding: PAYMENT.cardPadding,
    marginBottom: PAYMENT.sectionGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  orderHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: PAYMENT.cardGap,
  },
  orderTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.orderTitleFontSize,
    lineHeight: PAYMENT.orderTitleLineHeight,
    color: COLORS.paymentOrderTitle,
  },
  orderId: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: PAYMENT.orderIdFontSize,
    lineHeight: PAYMENT.orderIdLineHeight,
    color: COLORS.paymentOrderId,
  },
  statusBadge: {
    backgroundColor: COLORS.paymentStatusBadgeBg,
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusBadgeText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.statusBadgeFontSize,
    lineHeight: PAYMENT.statusBadgeLineHeight,
    color: COLORS.paymentStatusBadgeText,
  },
  lineItemsBlock: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.paymentDivider,
    paddingBottom: 16,
    gap: PAYMENT.lineItemGap,
  },
  lineItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineItemLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: PAYMENT.lineItemLabelFontSize,
    lineHeight: PAYMENT.lineItemLabelLineHeight,
    color: COLORS.paymentLineItemLabel,
  },
  lineItemValue: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.lineItemValueFontSize,
    lineHeight: PAYMENT.lineItemValueLineHeight,
    color: COLORS.paymentLineItemValue,
  },
  promoLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: PAYMENT.lineItemLabelFontSize,
    lineHeight: PAYMENT.lineItemLabelLineHeight,
    color: COLORS.paymentPromoText,
  },
  promoValue: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.lineItemValueFontSize,
    lineHeight: PAYMENT.lineItemValueLineHeight,
    color: COLORS.paymentPromoText,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  totalLabel: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.totalLabelFontSize,
    lineHeight: PAYMENT.totalLabelLineHeight,
    color: COLORS.paymentTotalLabel,
  },
  totalValue: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: PAYMENT.totalValueFontSize,
    lineHeight: PAYMENT.totalValueLineHeight,
    color: COLORS.paymentTotalValue,
  },
  methodsSection: {
    gap: PAYMENT.methodGap,
  },
  sectionTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.sectionTitleFontSize,
    lineHeight: PAYMENT.sectionTitleLineHeight,
    color: COLORS.paymentSectionTitle,
  },
  methodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.paymentMethodBg,
    borderWidth: 2,
    borderColor: COLORS.paymentMethodBorder,
    borderRadius: PAYMENT.methodBorderRadius,
    padding: PAYMENT.methodPadding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 1,
  },
  methodRowActive: {
    backgroundColor: COLORS.paymentMethodActiveBg,
    borderColor: COLORS.paymentMethodActiveBorder,
  },
  methodInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flexShrink: 1,
  },
  methodIconWrapper: {
    width: PAYMENT.methodIconWrapperSize,
    height: PAYMENT.methodIconWrapperSize,
    borderRadius: PAYMENT.methodIconWrapperSize / 2,
    backgroundColor: COLORS.paymentIconWrapperBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodLabel: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.methodLabelFontSize,
    lineHeight: PAYMENT.methodLabelLineHeight,
    color: COLORS.paymentMethodLabel,
    flexShrink: 1,
  },
  methodDetail: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: PAYMENT.methodDetailFontSize,
    lineHeight: PAYMENT.methodDetailLineHeight,
    color: COLORS.paymentMethodDetail,
  },
  cardBadge: {
    width: PAYMENT.cardBadgeWidth,
    height: PAYMENT.cardBadgeHeight,
    borderWidth: 1,
    borderColor: COLORS.paymentIconWrapperBorder,
    backgroundColor: COLORS.paymentIconWrapperBg,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBadgeText: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 15,
    color: COLORS.paymentCardBadgeText,
  },
  radioOuter: {
    width: PAYMENT.radioSize,
    height: PAYMENT.radioSize,
    borderRadius: PAYMENT.radioSize / 2,
    borderWidth: 2,
    borderColor: COLORS.paymentRadioBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterActive: {
    borderColor: COLORS.paymentRadioActiveBorder,
  },
  radioDot: {
    width: PAYMENT.radioDotSize,
    height: PAYMENT.radioDotSize,
    borderRadius: PAYMENT.radioDotSize / 2,
    backgroundColor: COLORS.paymentRadioActiveDot,
  },
  bottomBar: {
    height: PAYMENT.bottomBarHeight,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.paymentBottomBarBg,
    borderTopWidth: 1,
    borderTopColor: COLORS.paymentBottomBarBorder,
  },
  payButton: {
    height: PAYMENT.payButtonHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: COLORS.paymentPayBg,
    borderRadius: PAYMENT.payButtonBorderRadius,
  },
  payButtonLabel: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.payButtonLabelFontSize,
    lineHeight: PAYMENT.payButtonLabelLineHeight,
    color: COLORS.paymentPayText,
  },
  payButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  payButtonAmount: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: PAYMENT.payButtonLabelFontSize,
    lineHeight: PAYMENT.payButtonLabelLineHeight,
    color: COLORS.paymentPayText,
  },
});

export default PaymentScreen;

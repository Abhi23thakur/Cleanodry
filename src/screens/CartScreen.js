import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { COLORS, CART, FONTS } from '../constants/theme';

const DEFAULT_ITEMS = [
  {
    id: 'suit-set',
    name: "Men's Suit Set",
    description: 'Dry Clean & Press',
    unitPrice: 24.0,
    quantity: 1,
  },
  {
    id: 'silk-blouse-1',
    name: 'Silk Blouse',
    description: 'Delicate Wash & Iron',
    unitPrice: 6.25,
    quantity: 2,
  },
  {
    id: 'silk-blouse-2',
    name: 'Silk Blouse',
    description: 'Delicate Wash & Iron',
    unitPrice: 12.5,
    quantity: 1,
  },
];

const PICKUP_FEE = 5.0;
const TAX_AMOUNT = 3.5;
const DEMO_PROMO_CODE = 'SAVE5';
const DEMO_PROMO_DISCOUNT = 5.0;

const formatPrice = value => `₹${value.toFixed(2)}`;

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.cartHeaderTitle}
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

const MinusIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 12 12">
    <Path d="M0 5.14286H12V6.85714H0V5.14286Z" fill={COLORS.textPrimary} />
  </Svg>
);

const PlusIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 12 12">
    <Path
      d="M5.14286 6.85714H0V5.14286H5.14286V0H6.85714V5.14286H12V6.85714H6.85714V12H5.14286V6.85714Z"
      fill={COLORS.textPrimary}
    />
  </Svg>
);

const AddMoreIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20">
    <Path
      d="M9 15H11V11H15V9H11V5H9V9H5V11H9V15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
      fill={COLORS.accent}
    />
  </Svg>
);

const CheckoutArrowIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
      fill={COLORS.textPrimary}
    />
  </Svg>
);

const CartItemRow = ({ item, onIncrement, onDecrement }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemPrice}>
        {formatPrice(item.unitPrice * item.quantity)}
      </Text>
    </View>

    <View style={styles.stepper}>
      <TouchableOpacity style={styles.stepperButton} onPress={() => onDecrement(item.id)}>
        <MinusIcon />
      </TouchableOpacity>
      <Text style={styles.stepperQuantity}>{item.quantity}</Text>
      <TouchableOpacity style={styles.stepperButton} onPress={() => onIncrement(item.id)}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  </View>
);

const SummaryRow = ({ label, value, labelStyle, valueStyle }) => (
  <View style={styles.summaryRow}>
    <Text style={[styles.summaryLabel, labelStyle]}>{label}</Text>
    <Text style={[styles.summaryValue, valueStyle]}>{value}</Text>
  </View>
);

const CartScreen = ({
  initialItems = DEFAULT_ITEMS,
  onBack = () => {},
  onOpenProfile = () => {},
  onAddMoreItems = () => {},
  onCheckout = () => {},
}) => {
  const [items, setItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState(DEMO_PROMO_CODE);
  const [appliedDiscount, setAppliedDiscount] = useState(DEMO_PROMO_DISCOUNT);
  const [promoError, setPromoError] = useState(false);

  const updateQuantity = (itemId, delta) => {
    setItems(prev =>
      prev
        .map(item =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === DEMO_PROMO_CODE) {
      setAppliedDiscount(DEMO_PROMO_DISCOUNT);
      setPromoError(false);
    } else {
      setAppliedDiscount(0);
      setPromoError(true);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const total = subtotal + PICKUP_FEE + TAX_AMOUNT - appliedDiscount;

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
        <Text style={styles.headerTitle}>Your Cart</Text>
        <TouchableOpacity style={styles.headerButton} onPress={onOpenProfile}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../assets/images/empty_cart_illustration.png')}
            style={styles.emptyIllustration}
            resizeMode="contain"
          />
          <Text style={styles.emptyHeading}>Your cart is empty</Text>
          <Text style={styles.emptySubtitle}>
            Looks like your laundry pile is sorted! When{'\n'}
            you're ready for fresh, clean clothes, we're{'\n'}
            here to help.
          </Text>
          <TouchableOpacity
            style={styles.emptyButton}
            activeOpacity={0.85}
            onPress={onAddMoreItems}
          >
            <Text style={styles.emptyButtonText}>Start Cleaning</Text>
            <CheckoutArrowIcon />
          </TouchableOpacity>
        </View>
      ) : (
        <>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionHeading}>Items in Cart</Text>

          {items.map(item => (
            <CartItemRow
              key={item.id}
              item={item}
              onIncrement={id => updateQuantity(id, 1)}
              onDecrement={id => updateQuantity(id, -1)}
            />
          ))}

          <TouchableOpacity style={styles.addMoreButton} onPress={onAddMoreItems}>
            <AddMoreIcon />
            <Text style={styles.addMoreText}>Add more items</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionHeading}>Promo Code</Text>
            <View style={styles.promoRow}>
              <TextInput
                style={styles.promoInput}
                placeholder="Enter code"
                placeholderTextColor={COLORS.cartInputPlaceholder}
                value={promoCode}
                onChangeText={text => {
                  setPromoCode(text);
                  setPromoError(false);
                }}
                autoCapitalize="characters"
              />
              <TouchableOpacity style={styles.applyButton} onPress={handleApplyPromo}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
            {promoError && (
              <Text style={styles.promoErrorText}>Invalid promo code.</Text>
            )}
          </View>

          <View style={styles.card}>
            <Text style={[styles.sectionHeading, styles.summaryHeading]}>
              Order Summary
            </Text>

            <SummaryRow
              label={`Subtotal (${items.length} items)`}
              value={formatPrice(subtotal)}
            />
            <SummaryRow label="Pickup & Delivery" value={formatPrice(PICKUP_FEE)} />
            <SummaryRow label="Tax" value={formatPrice(TAX_AMOUNT)} />

            {appliedDiscount > 0 && (
              <View style={styles.discountRow}>
                <Text style={styles.discountText}>Discount (Promo)</Text>
                <Text style={styles.discountText}>-{formatPrice(appliedDiscount)}</Text>
              </View>
            )}

            <View style={styles.divider} />

            <SummaryRow
              label="Total"
              value={formatPrice(total)}
              labelStyle={styles.totalLabel}
              valueStyle={styles.totalValue}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.checkoutBar}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => onCheckout({ items, subtotal, total })}
        >
          <View>
            <Text style={styles.checkoutTotalLabel}>Total</Text>
            <Text style={styles.checkoutTotalValue}>{formatPrice(total)}</Text>
          </View>
          <View style={styles.checkoutCtaRow}>
            <Text style={styles.checkoutCtaText}>Proceed to Checkout</Text>
            <CheckoutArrowIcon />
          </View>
        </TouchableOpacity>
      </View>
        </>
      )}
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
    height: CART.headerHeight,
    paddingHorizontal: 16,
    backgroundColor: COLORS.cartHeaderBg,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: CART.headingFontSize,
    lineHeight: CART.headingLineHeight,
    letterSpacing: CART.headingLetterSpacing,
    color: COLORS.cartHeaderTitle,
  },
  content: {
    paddingHorizontal: CART.contentPaddingHorizontal,
    paddingTop: CART.contentPaddingTop,
    paddingBottom: 32,
    gap: CART.sectionGap,
  },
  section: {
    gap: 16,
  },
  sectionHeading: {
    fontFamily: FONTS.semiBold,
    fontSize: 18,
    lineHeight: 27,
    color: COLORS.cartItemName,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: CART.itemHeight,
    paddingHorizontal: 23,
    backgroundColor: COLORS.textPrimary,
    borderRadius: CART.cardRadius,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
  },
  itemName: {
    fontFamily: FONTS.semiBold,
    fontSize: CART.itemNameFontSize,
    lineHeight: CART.itemNameLineHeight,
    color: COLORS.cartItemName,
  },
  itemDescription: {
    fontFamily: FONTS.regular,
    fontSize: CART.itemDescFontSize,
    lineHeight: CART.itemDescLineHeight,
    color: COLORS.cartItemDescription,
  },
  itemPrice: {
    fontFamily: FONTS.semiBold,
    fontSize: CART.itemPriceFontSize,
    lineHeight: CART.itemPriceLineHeight,
    color: COLORS.cartItemPrice,
    marginTop: 4,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: CART.stepperWidth,
    height: CART.stepperHeight,
    paddingHorizontal: 10,
    backgroundColor: COLORS.cartStepperBg,
    borderRadius: 6,
  },
  stepperButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9999,
  },
  stepperQuantity: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    lineHeight: 25.6,
    color: COLORS.textPrimary,
  },
  addMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.accent,
    borderStyle: 'dashed',
  },
  addMoreText: {
    fontFamily: FONTS.semiBold,
    fontSize: CART.addMoreFontSize,
    lineHeight: CART.addMoreLineHeight,
    color: COLORS.accent,
  },
  card: {
    backgroundColor: COLORS.textPrimary,
    borderRadius: CART.cardRadius,
    padding: CART.cardPadding,
    gap: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    marginBottom: 16,
  },
  promoRow: {
    flexDirection: 'row',
    gap: 8,
  },
  promoInput: {
    flex: 1,
    height: CART.inputHeight,
    backgroundColor: COLORS.cartInputBg,
    borderWidth: 1,
    borderColor: COLORS.cartInputBorder,
    borderRadius: CART.inputBorderRadius,
    paddingHorizontal: 16,
    fontFamily: FONTS.medium,
    fontSize: 16,
    color: COLORS.cartItemName,
  },
  applyButton: {
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
    borderRadius: CART.inputBorderRadius,
  },
  applyButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    lineHeight: 25.6,
    color: COLORS.textPrimary,
  },
  promoErrorText: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: '#D64545',
  },
  summaryHeading: {
    marginBottom: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    fontFamily: FONTS.medium,
    fontSize: CART.summaryLabelFontSize,
    lineHeight: CART.summaryLabelLineHeight,
    color: COLORS.cartSummaryLabel,
  },
  summaryValue: {
    fontFamily: FONTS.medium,
    fontSize: CART.summaryLabelFontSize,
    lineHeight: CART.summaryLabelLineHeight,
    color: COLORS.cartSummaryValue,
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: COLORS.cartDiscountBg,
  },
  discountText: {
    fontFamily: FONTS.medium,
    fontSize: CART.summaryLabelFontSize,
    lineHeight: CART.summaryLabelLineHeight,
    color: COLORS.cartDiscountText,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.cartDivider,
    marginVertical: 4,
  },
  totalLabel: {
    fontFamily: FONTS.bold,
    fontSize: CART.totalLabelFontSize,
    lineHeight: CART.totalLabelLineHeight,
    color: COLORS.cartTotalLabel,
  },
  totalValue: {
    fontFamily: FONTS.bold,
    fontSize: CART.totalValueFontSize,
    lineHeight: CART.totalValueLineHeight,
    letterSpacing: CART.totalValueLetterSpacing,
    color: COLORS.cartTotalValue,
  },
  checkoutBar: {
    paddingHorizontal: 14,
    paddingVertical: 15,
    backgroundColor: COLORS.textPrimary,
    borderTopWidth: 1,
    borderTopColor: COLORS.cartDivider,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: COLORS.accent,
    borderRadius: CART.checkoutButtonRadius,
  },
  checkoutTotalLabel: {
    fontFamily: FONTS.regular,
    fontSize: CART.checkoutTotalFontSize,
    lineHeight: CART.checkoutTotalLineHeight,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  checkoutTotalValue: {
    fontFamily: FONTS.bold,
    fontSize: CART.checkoutPriceFontSize,
    lineHeight: CART.checkoutPriceLineHeight,
    color: COLORS.textPrimary,
  },
  checkoutCtaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkoutCtaText: {
    fontFamily: FONTS.semiBold,
    fontSize: CART.checkoutCtaFontSize,
    lineHeight: CART.checkoutCtaLineHeight,
    color: COLORS.textPrimary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: CART.emptyContentPaddingTop,
    paddingHorizontal: 24,
  },
  emptyIllustration: {
    width: CART.emptyIllustrationWidth,
    height: CART.emptyIllustrationHeight,
    marginBottom: CART.emptyIllustrationMarginBottom,
  },
  emptyHeading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: CART.emptyHeadingFontSize,
    lineHeight: CART.emptyHeadingLineHeight,
    color: COLORS.cartEmptyHeading,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: CART.emptySubtitleFontSize,
    lineHeight: CART.emptySubtitleLineHeight,
    color: COLORS.cartEmptySubtitle,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  emptyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: CART.emptyButtonPaddingVertical,
    paddingHorizontal: CART.emptyButtonPaddingHorizontal,
    borderRadius: CART.emptyButtonBorderRadius,
    backgroundColor: COLORS.cartEmptyButtonBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  emptyButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: CART.emptyButtonFontSize,
    lineHeight: CART.emptyButtonLineHeight,
    color: COLORS.cartEmptyButtonText,
  },
});

export default CartScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, STORE_SERVICES } from '../constants/theme';

const CATEGORIES = [
  {
    id: 'dry-clean',
    label: 'Dry Cleaning',
    icon: 'hanger',
    items: [
      {
        id: 'suit-2pc',
        name: 'Suit - 2 piece',
        description: 'Wool & blended fabrics',
        price: 249,
      },
      {
        id: 'saree-dc',
        name: 'Saree',
        description: 'Silk & delicate fabrics',
        price: 149,
      },
      {
        id: 'blazer',
        name: 'Blazer',
        description: 'Structured outerwear',
        price: 179,
      },
    ],
  },
  {
    id: 'iron',
    label: 'Ironing',
    icon: 'iron',
    items: [
      {
        id: 'shirt',
        name: 'Shirt',
        description: 'Cotton & linen',
        price: 19,
      },
      {
        id: 'trouser',
        name: 'Trouser',
        description: 'Formal & casual wear',
        price: 25,
      },
      {
        id: 'saree-iron',
        name: 'Saree',
        description: 'Silk & cotton sarees',
        price: 49,
      },
    ],
  },
  {
    id: 'wash-fold',
    label: 'Wash & Fold',
    icon: 'wash',
    items: [
      {
        id: 'regular-load',
        name: 'Regular load (upto 5kg)',
        description: 'Everyday clothes, washed & folded',
        price: 199,
      },
      {
        id: 'heavy-load',
        name: 'Heavy load (upto 10kg)',
        description: 'Bulk laundry, washed & folded',
        price: 349,
      },
      {
        id: 'express-wash',
        name: 'Express wash',
        description: 'Same-day wash & fold service',
        price: 249,
      },
    ],
  },
  {
    id: 'shoe-care',
    label: 'Shoe Care',
    icon: 'shoe',
    items: [
      {
        id: 'sneakers',
        name: 'Sneakers',
        description: 'Deep clean & deodorising',
        price: 199,
      },
      {
        id: 'leather-shoes',
        name: 'Leather shoes',
        description: 'Polish & conditioning',
        price: 249,
      },
      {
        id: 'sports-shoes',
        name: 'Sports shoes',
        description: 'Sole cleaning & odour removal',
        price: 179,
      },
    ],
  },
  {
    id: 'bag-care',
    label: 'Bag Care',
    icon: 'bag',
    items: [
      {
        id: 'handbag',
        name: 'Handbag',
        description: 'Leather & fabric cleaning',
        price: 149,
      },
      {
        id: 'backpack',
        name: 'Backpack',
        description: 'Deep clean & waterproofing',
        price: 129,
      },
      {
        id: 'leather-bag',
        name: 'Leather bag',
        description: 'Premium leather conditioning',
        price: 249,
      },
    ],
  },
  {
    id: 'curtains',
    label: 'Curtains',
    icon: 'curtain',
    items: [
      {
        id: 'curtain-single',
        name: 'Single panel',
        description: 'Light fabric curtains',
        price: 149,
      },
      {
        id: 'curtain-double',
        name: 'Double panel',
        description: 'Heavy fabric curtains',
        price: 249,
      },
      {
        id: 'curtain-blackout',
        name: 'Blackout curtain',
        description: 'Deep clean & pressing',
        price: 299,
      },
    ],
  },
  {
    id: 'blankets-bedding',
    label: 'Blankets & Bedding',
    icon: 'blanket',
    items: [
      {
        id: 'blanket-single',
        name: 'Single blanket',
        description: 'Machine wash & dry',
        price: 199,
      },
      {
        id: 'blanket-double',
        name: 'Double blanket',
        description: 'Deep clean, large size',
        price: 299,
      },
      {
        id: 'comforter',
        name: 'Comforter / duvet',
        description: 'Fluff wash & dry',
        price: 349,
      },
    ],
  },
];

const formatPrice = value => `₹${value}`;

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.storeServicesBackIcon}
    />
  </Svg>
);

const StarIcon = () => (
  <Svg width={12} height={12} viewBox="0 0 24 24">
    <Path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill={COLORS.storeServicesRatingStar}
    />
  </Svg>
);

const BagIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 9.5V7a1.2 1.2 0 0 1 2.4 0v2.5"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <Path
      d="M12.6 9.5V7a1.2 1.2 0 0 1 2.4 0v2.5"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
    <Path
      d="M4.8 9.5h14.4l-1 9.8c-.16 1.5-1.42 2.7-2.94 2.7H8.74c-1.52 0-2.78-1.2-2.94-2.7l-1-9.8Z"
      fill={color}
    />
  </Svg>
);

const HangerIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 3.5a1.5 1.5 0 1 0-1.45 1.5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Path
      d="M12 5v2.2L3 13.5v2h18v-2l-9-6.3V5Z"
      fill={color}
    />
    <Path
      d="M4 18h16"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const IronIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
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
    <Path
      d="M6.5 19v1.5"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

const WashIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M4.5 3.5h15a1 1 0 0 1 1 1V19a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 19V4.5a1 1 0 0 1 1-1Z"
      stroke={color}
      strokeWidth={1.8}
    />
    <Path d="M6.3 5.5h1.7" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    <Path
      d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke={color}
      strokeWidth={1.8}
    />
    <Path
      d="M9.7 12a2.3 2.3 0 0 0 4.3 1.5"
      stroke={color}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

const ShoeIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M3 15.3v-2.6c0-.5.4-.9.9-.9h.9c.5 0 1 .2 1.35.6l1.5 1.55c.5.5 1.15.8 1.85.8h6.2c1.85 0 3.35 1.5 3.35 3.35v.4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2.25Z"
      stroke={color}
      strokeWidth={1.7}
      strokeLinejoin="round"
    />
    <Path d="M6.3 11.6V8.3" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
    <Path d="M3 17.5h16" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
  </Svg>
);

const CurtainIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path d="M3.5 4h17" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    <Path
      d="M6 4c0 5-1.4 9-2.3 16h5.9c-1.35-6-.9-11.5.9-16"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18 4c0 5 1.4 9 2.3 16h-5.9c1.35-6 .9-11.5-.9-16"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BlanketIcon = ({ color, size = 22 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 12V8.3A2.3 2.3 0 0 1 7.3 6h9.4A2.3 2.3 0 0 1 19 8.3V12"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
    />
    <Path
      d="M3.2 14.3c0-1.3 1.05-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v3a1.9 1.9 0 0 1-1.9 1.9H5.1a1.9 1.9 0 0 1-1.9-1.9v-3Z"
      stroke={color}
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Path
      d="M3.2 14.6c2.55-1 5.15-1.5 8.8-1.5s6.25.5 8.8 1.5"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
    />
  </Svg>
);

const PlusIcon = ({ color = COLORS.storeServicesStepperIcon, size = 14 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z" fill={color} />
  </Svg>
);

const MinusIcon = ({ color = COLORS.storeServicesStepperIcon, size = 14 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M5 11h14v2H5z" fill={color} />
  </Svg>
);

const CartIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Path
      d="M7 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7.2 17h9.8a2 2 0 0 0 1.94-1.51L21 8H6.42l-.4-2H2v2h2.6L7.4 15.9a2 2 0 0 0 .01.02L7.2 17Z"
      fill={COLORS.storeServicesCartButtonText}
    />
  </Svg>
);

const TAB_ICONS = {
  bag: BagIcon,
  hanger: HangerIcon,
  iron: IronIcon,
  wash: WashIcon,
  shoe: ShoeIcon,
  curtain: CurtainIcon,
  blanket: BlanketIcon,
};

const CategoryTab = ({ category, isActive, onSelect }) => {
  const IconComponent = TAB_ICONS[category.icon];
  const color = isActive
    ? COLORS.storeServicesTabActiveIcon
    : COLORS.storeServicesTabInactiveIcon;

  return (
    <TouchableOpacity
      style={[styles.tab, isActive && styles.tabActive]}
      activeOpacity={0.85}
      onPress={() => onSelect(category.id)}
    >
      <IconComponent color={color} size={STORE_SERVICES.tabIconSize} />
      <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
        {category.label}
      </Text>
    </TouchableOpacity>
  );
};

const ServiceRow = ({ item, quantity, onAdd, onDecrement, isLast }) => (
  <View style={[styles.row, !isLast && styles.rowDivider]}>
    <View style={styles.rowInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
    <View style={styles.rowAction}>
      <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
      {quantity > 0 ? (
        <View style={styles.stepper}>
          <TouchableOpacity
            style={styles.stepperButton}
            activeOpacity={0.85}
            onPress={() => onDecrement(item)}
          >
            <MinusIcon />
          </TouchableOpacity>
          <Text style={styles.stepperQuantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.stepperButton}
            activeOpacity={0.85}
            onPress={() => onAdd(item)}
          >
            <PlusIcon />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.85}
          onPress={() => onAdd(item)}
        >
          <PlusIcon color={COLORS.storeServicesAddText} size={12} />
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const StoreServicesScreen = ({
  storeName = 'CleanoDry - South Delhi',
  storeSubtitle = '4.8 rating · 2.1 km away',
  categories = CATEGORIES,
  onBack = () => {},
  onViewCart = () => {},
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [cart, setCart] = useState({});

  const activeCategory =
    categories.find(category => category.id === activeCategoryId) ||
    categories[0];

  const handleAdd = item => {
    setCart(prev => ({
      ...prev,
      [item.id]: { item, quantity: (prev[item.id]?.quantity || 0) + 1 },
    }));
  };

  const handleDecrement = item => {
    setCart(prev => {
      const existing = prev[item.id];
      if (!existing) {
        return prev;
      }
      if (existing.quantity <= 1) {
        const { [item.id]: _removed, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [item.id]: { item, quantity: existing.quantity - 1 },
      };
    });
  };

  const cartEntries = Object.values(cart);
  const totalItems = cartEntries.reduce((sum, entry) => sum + entry.quantity, 0);
  const totalPrice = cartEntries.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {storeName}
          </Text>
          <View style={styles.headerSubtitleRow}>
            <StarIcon />
            <Text style={styles.headerSubtitle}>{storeSubtitle}</Text>
          </View>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.tabBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabBarContent}
        >
          {categories.map(category => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={category.id === activeCategoryId}
              onSelect={setActiveCategoryId}
            />
          ))}
        </ScrollView>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          {activeCategory.items.map((item, index) => (
            <ServiceRow
              key={item.id}
              item={item}
              quantity={cart[item.id]?.quantity || 0}
              onAdd={handleAdd}
              onDecrement={handleDecrement}
              isLast={index === activeCategory.items.length - 1}
            />
          ))}
        </View>
      </ScrollView>

      {totalItems > 0 ? (
        <View style={styles.cartBarWrapper}>
          <View style={styles.cartBar}>
            <Text style={styles.cartBarText}>
              {totalItems} {totalItems === 1 ? 'item' : 'items'} added ·{' '}
              {formatPrice(totalPrice)}
            </Text>
            <TouchableOpacity
              style={styles.cartButton}
              activeOpacity={0.85}
              onPress={() => onViewCart({ cart, totalItems, totalPrice })}
            >
              <Text style={styles.cartButtonText}>View cart</Text>
              <CartIcon />
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: STORE_SERVICES.headerHeight,
    backgroundColor: COLORS.storeServicesHeaderBg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.storeServicesTabBorder,
  },
  backButton: {
    width: 32,
  },
  headerTextWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerSpacer: {
    width: 32,
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: STORE_SERVICES.headerTitleFontSize,
    lineHeight: STORE_SERVICES.headerTitleLineHeight,
    color: COLORS.storeServicesHeaderTitle,
  },
  headerSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  headerSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: STORE_SERVICES.headerSubtitleFontSize,
    lineHeight: STORE_SERVICES.headerSubtitleLineHeight,
    color: COLORS.storeServicesHeaderSubtitle,
  },
  tabBar: {
    backgroundColor: COLORS.storeServicesHeaderBg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.storeServicesTabBorder,
  },
  tabBarContent: {
    paddingHorizontal: STORE_SERVICES.tabBarPaddingHorizontal,
    paddingVertical: STORE_SERVICES.tabBarPaddingVertical,
    gap: STORE_SERVICES.tabChipGap,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: STORE_SERVICES.tabGap,
    paddingVertical: STORE_SERVICES.tabChipPaddingVertical,
    paddingHorizontal: STORE_SERVICES.tabChipPaddingHorizontal,
    borderRadius: STORE_SERVICES.tabChipBorderRadius,
    backgroundColor: COLORS.storeServicesTabChipInactiveBg,
    borderWidth: 1,
    borderColor: COLORS.storeServicesTabChipInactiveBorder,
  },
  tabActive: {
    backgroundColor: COLORS.storeServicesTabChipActiveBg,
    borderColor: COLORS.storeServicesTabChipActiveBg,
  },
  tabLabel: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: STORE_SERVICES.tabFontSize,
    lineHeight: STORE_SERVICES.tabLineHeight,
    color: COLORS.storeServicesTabInactiveText,
  },
  tabLabelActive: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    color: COLORS.storeServicesTabActiveText,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: STORE_SERVICES.contentPaddingHorizontal,
    paddingTop: STORE_SERVICES.contentPaddingTop,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: COLORS.textPrimary,
    borderRadius: STORE_SERVICES.cardBorderRadius,
    paddingHorizontal: STORE_SERVICES.cardPadding,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: STORE_SERVICES.itemPaddingVertical,
    gap: 12,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.storeServicesDivider,
  },
  rowInfo: {
    flex: 1,
    gap: STORE_SERVICES.itemGap,
  },
  itemName: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: STORE_SERVICES.itemNameFontSize,
    lineHeight: STORE_SERVICES.itemNameLineHeight,
    color: COLORS.storeServicesItemName,
  },
  itemDescription: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: STORE_SERVICES.itemDescFontSize,
    lineHeight: STORE_SERVICES.itemDescLineHeight,
    color: COLORS.storeServicesItemDesc,
  },
  rowAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemPrice: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: STORE_SERVICES.priceFontSize,
    lineHeight: STORE_SERVICES.priceLineHeight,
    color: COLORS.storeServicesPrice,
  },
  addButton: {
    width: STORE_SERVICES.controlWidth,
    height: STORE_SERVICES.controlHeight,
    borderRadius: STORE_SERVICES.controlBorderRadius,
    borderWidth: 1.5,
    borderColor: COLORS.storeServicesAddBorder,
    backgroundColor: COLORS.storeServicesAddBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  addButtonText: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: STORE_SERVICES.addPillFontSize,
    color: COLORS.storeServicesAddText,
  },
  stepper: {
    width: STORE_SERVICES.controlWidth,
    height: STORE_SERVICES.controlHeight,
    borderRadius: STORE_SERVICES.controlBorderRadius,
    backgroundColor: COLORS.storeServicesStepperBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  stepperButton: {
    width: STORE_SERVICES.stepperButtonSize,
    height: STORE_SERVICES.stepperButtonSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperQuantity: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: STORE_SERVICES.stepperQuantityFontSize,
    color: COLORS.storeServicesStepperText,
  },
  cartBarWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  cartBar: {
    height: STORE_SERVICES.cartBarHeight,
    borderRadius: STORE_SERVICES.cartBarBorderRadius,
    backgroundColor: COLORS.storeServicesCartBarBg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: STORE_SERVICES.cartBarPaddingHorizontal,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 4,
  },
  cartBarText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: STORE_SERVICES.cartBarTextFontSize,
    lineHeight: STORE_SERVICES.cartBarTextLineHeight,
    color: COLORS.storeServicesCartBarText,
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.storeServicesCartButtonBg,
    borderRadius: 9999,
    paddingVertical: STORE_SERVICES.cartBarButtonPaddingVertical,
    paddingHorizontal: STORE_SERVICES.cartBarButtonPaddingHorizontal,
  },
  cartButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: STORE_SERVICES.cartBarButtonFontSize,
    lineHeight: STORE_SERVICES.cartBarButtonLineHeight,
    color: COLORS.storeServicesCartButtonText,
  },
});

export default StoreServicesScreen;

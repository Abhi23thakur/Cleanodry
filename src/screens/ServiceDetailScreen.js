import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { COLORS, SERVICE_DETAIL, FONTS } from '../constants/theme';

const CATEGORIES = [
  {
    id: 'dry-cleaning',
    name: 'Dry Cleaning',
    icon: 'dryCleaning',
    items: [
      { id: 'suit-2pc', name: 'Suit - 2 piece', description: 'Wool & blended fabrics', price: 249 },
      { id: 'saree', name: 'Saree', description: 'Silk & delicate fabrics', price: 149 },
      { id: 'blazer', name: 'Blazer', description: 'Structured outerwear', price: 179 },
      { id: 'jacket', name: 'Jacket', description: 'Leather or heavy fabric', price: 299 },
    ],
  },
  {
    id: 'ironing',
    name: 'Ironing',
    icon: 'ironing',
    items: [
      { id: 'shirt', name: 'Shirt', description: 'Cotton & linen', price: 19 },
      { id: 'trouser', name: 'Trouser', description: 'Formal & casual wear', price: 25 },
      { id: 'saree', name: 'Saree', description: 'Silk & cotton sarees', price: 49 },
    ],
  },
  {
    id: 'wash-fold',
    name: 'Wash & Fold',
    icon: 'washFold',
    items: [
      { id: 'regular-load', name: 'Regular load (upto 5kg)', description: 'Everyday clothes, washed & folded', price: 199 },
      { id: 'heavy-load', name: 'Heavy load (upto 10kg)', description: 'Bulk laundry, washed & folded', price: 349 },
      { id: 'express-wash', name: 'Express wash', description: 'Same-day wash & fold service', price: 249 },
    ],
  },
  {
    id: 'shoe-care',
    name: 'Shoe Care',
    icon: 'shoeCare',
    items: [
      { id: 'sneakers', name: 'Sneakers', description: 'Deep clean & deodorising', price: 199 },
      { id: 'leather-shoes', name: 'Leather shoes', description: 'Polish & conditioning', price: 249 },
      { id: 'sports-shoes', name: 'Sports shoes', description: 'Sole cleaning & odour removal', price: 179 },
    ],
  },
];

const GENDERS = ['All', 'Men', 'Women', 'Kids'];

const formatPrice = value => `₹${value}`;

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.serviceDetailBackIcon}
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

const DryCleaningIcon = ({ size, color }) => (
  <Svg width={size} height={(size * 12) / 11} viewBox="0 0 11 12">
    <Path
      d="M2.4 12V8.39999H1.44C1.04 8.39999 0.699999 8.25999 0.419999 7.97999C0.14 7.69999 0 7.35999 0 6.95999C0 6.66999 0.0799999 6.40249 0.24 6.15749C0.399999 5.91249 0.609999 5.72999 0.869999 5.60999L4.79999 3.86999V3.47999C4.43999 3.34999 4.14999 3.13249 3.92999 2.8275C3.70999 2.5225 3.59999 2.18 3.59999 1.8C3.59999 1.3 3.77499 0.874999 4.12499 0.524999C4.47499 0.175 4.89999 0 5.39999 0C5.89999 0 6.32499 0.175 6.67499 0.524999C7.02499 0.874999 7.19999 1.3 7.19999 1.8H5.99999C5.99999 1.63 5.94249 1.4875 5.82749 1.3725C5.71249 1.2575 5.56999 1.2 5.39999 1.2C5.22999 1.2 5.08749 1.2575 4.97249 1.3725C4.85749 1.4875 4.79999 1.63 4.79999 1.8C4.79999 1.97 4.85749 2.1125 4.97249 2.2275C5.08749 2.3425 5.22999 2.4 5.39999 2.4C5.56999 2.4 5.71249 2.4575 5.82749 2.5725C5.94249 2.6875 5.99999 2.83 5.99999 2.99999V3.86999L9.92998 5.60999C10.19 5.72999 10.4 5.91249 10.56 6.15749C10.72 6.40249 10.8 6.66999 10.8 6.95999C10.8 7.35999 10.66 7.69999 10.38 7.97999C10.1 8.25999 9.75998 8.39999 9.35998 8.39999H8.39999V12H2.4ZM1.44 7.19999H2.4V6.59999H8.39999V7.19999H9.35998C9.42998 7.19999 9.48748 7.17499 9.53248 7.12499C9.57748 7.07499 9.59998 7.00999 9.59998 6.92999C9.59998 6.87999 9.58748 6.83749 9.56248 6.80249C9.53748 6.76749 9.49998 6.73999 9.44998 6.71999L5.39999 4.91999L1.35 6.71999C1.3 6.73999 1.2625 6.76749 1.2375 6.80249C1.2125 6.83749 1.2 6.87999 1.2 6.92999C1.2 7.00999 1.2225 7.07499 1.2675 7.12499C1.3125 7.17499 1.37 7.19999 1.44 7.19999ZM3.59999 10.8H7.19999V7.79999H3.59999V10.8ZM3.59999 7.79999H7.19999H3.59999Z"
      fill={color}
    />
  </Svg>
);

const HangerIcon = ({ size, color }) => (
  <Svg width={size} height={(size * 7) / 12} viewBox="0 0 12 7">
    <Path
      d="M0 7V5.25C0 4.60833 0.228472 4.05903 0.685417 3.60208C1.14236 3.14514 1.69167 2.91667 2.33333 2.91667H7.58333V2.33333C7.58333 2.16806 7.52743 2.02951 7.41563 1.91771C7.30382 1.8059 7.16528 1.75 7 1.75H4.66667C4.50139 1.75 4.36285 1.8059 4.25104 1.91771C4.13924 2.02951 4.08333 2.16806 4.08333 2.33333H2.91667C2.91667 1.84722 3.08681 1.43403 3.42708 1.09375C3.76736 0.753472 4.18056 0.583333 4.66667 0.583333H7C7.48611 0.583333 7.89931 0.753472 8.23958 1.09375C8.57986 1.43403 8.75 1.84722 8.75 2.33333V4.66667C8.91528 4.66667 9.05382 4.61076 9.16562 4.49896C9.27743 4.38715 9.33333 4.24861 9.33333 4.08333V1.75C9.33333 1.26389 9.50347 0.850694 9.84375 0.510417C10.184 0.170139 10.5972 0 11.0833 0H11.6667V1.16667H11.0833C10.9181 1.16667 10.7795 1.22257 10.6677 1.33438C10.5559 1.44618 10.5 1.58472 10.5 1.75V4.08333C10.5 4.56944 10.3299 4.98264 9.98958 5.32292C9.64931 5.66319 9.23611 5.83333 8.75 5.83333V7H0ZM1.16667 5.83333H7.58333V4.08333H2.33333C2.0125 4.08333 1.73785 4.19757 1.50937 4.42604C1.2809 4.65451 1.16667 4.92917 1.16667 5.25V5.83333ZM7.58333 5.83333V5.25C7.58333 4.92917 7.58333 4.65451 7.58333 4.42604C7.58333 4.19757 7.58333 4.08333 7.58333 4.08333V5.83333Z"
      fill={color}
    />
  </Svg>
);

const WashFoldIcon = ({ size, color }) => (
  <Svg width={size} height={(size * 12) / 10} viewBox="0 0 10 12">
    <Path
      d="M1.2 12C0.869998 12 0.587499 11.8825 0.352499 11.6475C0.1175 11.4125 0 11.13 0 10.8V1.2C0 0.869998 0.1175 0.587499 0.352499 0.352499C0.587499 0.1175 0.869998 0 1.2 0H8.39999C8.72998 0 9.01249 0.1175 9.24748 0.352499C9.48248 0.587499 9.59998 0.869998 9.59998 1.2V10.8C9.59998 11.13 9.48248 11.4125 9.24748 11.6475C9.01249 11.8825 8.72998 12 8.39999 12H1.2ZM1.2 10.8H8.39999V1.2H1.2V10.8ZM4.79999 10.2C5.62999 10.2 6.33749 9.90748 6.92249 9.32248C7.50749 8.73748 7.79999 8.02999 7.79999 7.19999C7.79999 6.36999 7.50749 5.66249 6.92249 5.07749C6.33749 4.49249 5.62999 4.19999 4.79999 4.19999C3.96999 4.19999 3.26249 4.49249 2.6775 5.07749C2.0925 5.66249 1.8 6.36999 1.8 7.19999C1.8 8.02999 2.0925 8.73748 2.6775 9.32248C3.26249 9.90748 3.96999 10.2 4.79999 10.2ZM4.79999 9.17998C4.53999 9.17998 4.28749 9.13248 4.04249 9.03748C3.79749 8.94248 3.57999 8.79998 3.38999 8.60999L6.20999 5.78999C6.39999 5.97999 6.54249 6.19749 6.63749 6.44249C6.73249 6.68749 6.77999 6.93999 6.77999 7.19999C6.77999 7.74999 6.58749 8.21749 6.20249 8.60248C5.81749 8.98748 5.34999 9.17998 4.79999 9.17998ZM2.4 2.99999C2.57 2.99999 2.7125 2.9425 2.8275 2.8275C2.9425 2.7125 2.99999 2.57 2.99999 2.4C2.99999 2.23 2.9425 2.0875 2.8275 1.9725C2.7125 1.8575 2.57 1.8 2.4 1.8C2.23 1.8 2.0875 1.8575 1.9725 1.9725C1.8575 2.0875 1.8 2.23 1.8 2.4C1.8 2.57 1.8575 2.7125 1.9725 2.8275C2.0875 2.9425 2.23 2.99999 2.4 2.99999ZM4.19999 2.99999C4.36999 2.99999 4.51249 2.9425 4.62749 2.8275C4.74249 2.7125 4.79999 2.57 4.79999 2.4C4.79999 2.23 4.74249 2.0875 4.62749 1.9725C4.51249 1.8575 4.36999 1.8 4.19999 1.8C4.02999 1.8 3.88749 1.8575 3.77249 1.9725C3.65749 2.0875 3.59999 2.23 3.59999 2.4C3.59999 2.57 3.65749 2.7125 3.77249 2.8275C3.88749 2.9425 4.02999 2.99999 4.19999 2.99999ZM1.2 10.8V1.2V10.8Z"
      fill={color}
    />
  </Svg>
);

const ShoeCareIcon = ({ size, color }) => (
  <Svg width={size} height={(size * 10) / 12} viewBox="0 0 12 10">
    <Path
      d="M0.600008 9.60013C0.430006 9.60013 0.287504 9.54263 0.172502 9.42763C0.0575008 9.31263 0 9.17013 0 9.00013C0 8.90012 0.0200003 8.80762 0.0600008 8.72262C0.100001 8.63762 0.160002 8.57012 0.240003 8.52012L5.40008 4.65007V3.60005C5.40008 3.43005 5.46008 3.28755 5.58008 3.17254C5.70008 3.05754 5.84508 3.00004 6.01508 3.00004C6.26509 3.00004 6.47509 2.91004 6.64509 2.73004C6.8151 2.55004 6.9001 2.33503 6.9001 2.08503C6.9001 1.83503 6.81259 1.62502 6.63759 1.45502C6.46259 1.28502 6.25009 1.20002 6.00008 1.20002C5.75008 1.20002 5.53758 1.28752 5.36257 1.46252C5.18757 1.63752 5.10007 1.85003 5.10007 2.10003H3.90005C3.90005 1.52002 4.10506 1.02501 4.51506 0.615009C4.92507 0.205003 5.42008 0 6.00008 0C6.58009 0 7.0751 0.202503 7.4851 0.607508C7.89511 1.01251 8.10011 1.50502 8.10011 2.08503C8.10011 2.55504 7.96261 2.97504 7.68761 3.34505C7.4126 3.71505 7.0501 3.97006 6.60009 4.11006V4.65007L11.7602 8.52012C11.8402 8.57012 11.9002 8.63762 11.9402 8.72262C11.9802 8.80762 12.0002 8.90012 12.0002 9.00013C12.0002 9.17013 11.9427 9.31263 11.8277 9.42763C11.7127 9.54263 11.5702 9.60013 11.4002 9.60013H0.600008ZM2.40003 8.40012H9.60013L6.00008 5.70008L2.40003 8.40012Z"
      fill={color}
    />
  </Svg>
);

const CATEGORY_ICONS = {
  dryCleaning: DryCleaningIcon,
  ironing: HangerIcon,
  washFold: WashFoldIcon,
  shoeCare: ShoeCareIcon,
};

const PlusIcon = ({ color }) => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6V5Z" fill={color} />
  </Svg>
);

const MinusIcon = ({ color }) => (
  <Svg width={10} height={10} viewBox="0 0 24 24">
    <Path d="M5 11h14v2H5z" fill={color} />
  </Svg>
);

const CategoryPill = ({ category, isActive, onPress }) => {
  const Icon = CATEGORY_ICONS[category.icon];
  const color = isActive
    ? COLORS.serviceDetailCategoryActiveText
    : COLORS.serviceDetailCategoryInactiveText;

  return (
    <TouchableOpacity
      style={[styles.categoryPill, isActive ? styles.categoryPillActive : styles.categoryPillInactive]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Icon size={SERVICE_DETAIL.categoryIconSize} color={color} />
      <Text style={[styles.categoryPillText, { color }]}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const GenderPill = ({ label, isActive, onPress }) => {
  const color = isActive
    ? COLORS.serviceDetailGenderActiveText
    : COLORS.serviceDetailGenderInactiveText;

  return (
    <TouchableOpacity
      style={[styles.genderPill, isActive && styles.genderPillActive]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <HangerIcon size={SERVICE_DETAIL.categoryIconSize} color={color} />
      <Text style={[styles.categoryPillText, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const ServiceItemCard = ({ item, quantity, onAdd, onDecrement }) => (
  <View style={styles.itemCard}>
    <View style={styles.itemTextArea}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
    <View style={styles.itemActionArea}>
      <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
      {quantity > 0 ? (
        <View style={styles.stepper}>
          <TouchableOpacity onPress={() => onDecrement(item)} hitSlop={8}>
            <MinusIcon color={COLORS.serviceDetailAddButtonText} />
          </TouchableOpacity>
          <Text style={styles.stepperQuantity}>{quantity}</Text>
          <TouchableOpacity onPress={() => onAdd(item)} hitSlop={8}>
            <PlusIcon color={COLORS.serviceDetailAddButtonText} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.addButton} onPress={() => onAdd(item)} activeOpacity={0.85}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const ServiceDetailScreen = ({
  serviceName = 'Dry Cleaning',
  onBack = () => {},
  onOpenProfile = () => {},
  onViewCart = () => {},
}) => {
  const initialCategory =
    CATEGORIES.find(category => category.name === serviceName) || CATEGORIES[0];
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategory.id);
  const [activeGender, setActiveGender] = useState('All');
  const [cart, setCart] = useState({});

  const activeCategory =
    CATEGORIES.find(category => category.id === activeCategoryId) || CATEGORIES[0];

  const cartKey = (categoryId, itemId) => `${categoryId}:${itemId}`;

  const handleAdd = item => {
    const key = cartKey(activeCategoryId, item.id);
    setCart(prev => ({
      ...prev,
      [key]: { item, quantity: (prev[key]?.quantity || 0) + 1 },
    }));
  };

  const handleDecrement = item => {
    const key = cartKey(activeCategoryId, item.id);
    setCart(prev => {
      const existing = prev[key];
      if (!existing) {
        return prev;
      }
      if (existing.quantity <= 1) {
        const { [key]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [key]: { item, quantity: existing.quantity - 1 } };
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
        <Text style={styles.headerTitle}>Our Services</Text>
        <TouchableOpacity style={styles.headerButton} onPress={onOpenProfile}>
          <ProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={[styles.content, totalItems > 0 && styles.contentWithCheckout]}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/images/service_detail_promo_banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {CATEGORIES.map(category => (
            <CategoryPill
              key={category.id}
              category={category}
              isActive={category.id === activeCategoryId}
              onPress={() => setActiveCategoryId(category.id)}
            />
          ))}
        </ScrollView>

        <View style={styles.genderRow}>
          {GENDERS.map(gender => (
            <GenderPill
              key={gender}
              label={gender}
              isActive={gender === activeGender}
              onPress={() => setActiveGender(gender)}
            />
          ))}
        </View>

        <View style={styles.itemsList}>
          {activeCategory.items.map(item => (
            <ServiceItemCard
              key={item.id}
              item={item}
              quantity={cart[cartKey(activeCategoryId, item.id)]?.quantity || 0}
              onAdd={handleAdd}
              onDecrement={handleDecrement}
            />
          ))}
        </View>
      </ScrollView>

      {totalItems > 0 && (
        <View style={styles.checkoutWrapper}>
          <TouchableOpacity
            style={styles.checkoutBar}
            onPress={() => onViewCart({ cart, totalItems, totalPrice })}
          >
            <Text style={styles.checkoutText}>
              View Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </Text>
            <Text style={styles.checkoutPrice}>{`₹${totalPrice.toFixed(2)}`}</Text>
          </TouchableOpacity>
        </View>
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
    height: SERVICE_DETAIL.headerHeight,
    paddingHorizontal: 16,
    backgroundColor: COLORS.serviceDetailHeaderBg,
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: SERVICE_DETAIL.headingFontSize,
    lineHeight: SERVICE_DETAIL.headingLineHeight,
    letterSpacing: SERVICE_DETAIL.headingLetterSpacing,
    color: COLORS.serviceDetailHeaderTitle,
  },
  content: {
    paddingHorizontal: SERVICE_DETAIL.contentPaddingHorizontal,
    paddingTop: SERVICE_DETAIL.contentPaddingTop,
    paddingBottom: 24,
    gap: 16,
  },
  contentWithCheckout: {
    paddingBottom: 96,
  },
  banner: {
    width: '100%',
    height: SERVICE_DETAIL.bannerHeight,
    borderRadius: SERVICE_DETAIL.bannerRadius,
    borderWidth: 1,
    borderColor: COLORS.serviceDetailBannerBorder,
  },
  categoryRow: {
    gap: SERVICE_DETAIL.categoryPillGap,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: SERVICE_DETAIL.categoryPillPaddingVertical,
    paddingHorizontal: SERVICE_DETAIL.categoryPillPaddingHorizontal,
    borderRadius: SERVICE_DETAIL.categoryPillRadius,
  },
  categoryPillActive: {
    backgroundColor: COLORS.serviceDetailCategoryActiveBg,
  },
  categoryPillInactive: {
    backgroundColor: COLORS.serviceDetailCategoryInactiveBg,
    borderWidth: 1,
    borderColor: COLORS.serviceDetailCategoryInactiveBorder,
  },
  categoryPillText: {
    fontFamily: FONTS.semiBold,
    fontSize: SERVICE_DETAIL.categoryPillFontSize,
    lineHeight: SERVICE_DETAIL.categoryPillLineHeight,
    letterSpacing: SERVICE_DETAIL.categoryPillLetterSpacing,
  },
  genderRow: {
    flexDirection: 'row',
    gap: SERVICE_DETAIL.genderPillGap,
  },
  genderPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: SERVICE_DETAIL.genderPillPaddingVertical,
    paddingHorizontal: SERVICE_DETAIL.genderPillPaddingHorizontal,
    borderRadius: SERVICE_DETAIL.genderPillRadius,
    borderWidth: SERVICE_DETAIL.genderPillBorderWidth,
    borderColor: COLORS.serviceDetailGenderInactiveBorder,
  },
  genderPillActive: {
    backgroundColor: COLORS.serviceDetailGenderActiveBg,
    borderColor: COLORS.serviceDetailGenderActiveBg,
  },
  itemsList: {
    gap: SERVICE_DETAIL.listGap,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    backgroundColor: COLORS.serviceDetailItemCardBg,
    borderRadius: SERVICE_DETAIL.itemCardRadius,
    paddingVertical: SERVICE_DETAIL.itemPaddingVertical,
    paddingHorizontal: SERVICE_DETAIL.itemPaddingHorizontal,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTextArea: {
    flex: 1,
    gap: 4,
  },
  itemName: {
    fontFamily: FONTS.bold,
    fontSize: SERVICE_DETAIL.itemNameFontSize,
    lineHeight: SERVICE_DETAIL.itemNameLineHeight,
    color: COLORS.serviceDetailItemName,
  },
  itemDescription: {
    fontFamily: FONTS.regular,
    fontSize: SERVICE_DETAIL.itemDescriptionFontSize,
    lineHeight: SERVICE_DETAIL.itemDescriptionLineHeight,
    color: COLORS.serviceDetailItemDescription,
  },
  itemActionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16.5,
  },
  itemPrice: {
    fontFamily: FONTS.bold,
    fontSize: SERVICE_DETAIL.itemPriceFontSize,
    lineHeight: SERVICE_DETAIL.itemPriceLineHeight,
    color: COLORS.serviceDetailItemPrice,
  },
  addButton: {
    width: SERVICE_DETAIL.addButtonWidth,
    height: SERVICE_DETAIL.addButtonHeight,
    borderRadius: SERVICE_DETAIL.addButtonRadius,
    borderWidth: SERVICE_DETAIL.addButtonBorderWidth,
    borderColor: COLORS.serviceDetailAddButtonBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: SERVICE_DETAIL.addButtonFontSize,
    lineHeight: SERVICE_DETAIL.addButtonLineHeight,
    color: COLORS.serviceDetailAddButtonText,
  },
  stepper: {
    width: SERVICE_DETAIL.addButtonWidth,
    height: SERVICE_DETAIL.addButtonHeight,
    borderRadius: SERVICE_DETAIL.addButtonRadius,
    borderWidth: SERVICE_DETAIL.addButtonBorderWidth,
    borderColor: COLORS.serviceDetailAddButtonBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  stepperQuantity: {
    fontFamily: FONTS.semiBold,
    fontSize: SERVICE_DETAIL.addButtonFontSize,
    color: COLORS.serviceDetailAddButtonText,
  },
  checkoutWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  checkoutBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SERVICE_DETAIL.checkoutBarPaddingVertical,
    paddingHorizontal: SERVICE_DETAIL.checkoutBarPaddingHorizontal,
    backgroundColor: COLORS.serviceDetailCheckoutBg,
    borderRadius: SERVICE_DETAIL.checkoutBarRadius,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
  },
  checkoutText: {
    fontFamily: FONTS.semiBold,
    fontSize: SERVICE_DETAIL.checkoutBarFontSize,
    lineHeight: SERVICE_DETAIL.checkoutBarLineHeight,
    color: COLORS.serviceDetailCheckoutText,
  },
  checkoutPrice: {
    fontFamily: FONTS.bold,
    fontSize: SERVICE_DETAIL.checkoutBarFontSize,
    lineHeight: SERVICE_DETAIL.checkoutBarLineHeight,
    color: COLORS.serviceDetailCheckoutText,
  },
});

export default ServiceDetailScreen;

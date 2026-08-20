import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { COLORS, FONTS, SUPPORT } from '../constants/theme';
import BottomNavBar from '../components/BottomNavBar';

const CATEGORIES = [
  { id: 'services', icon: 'services', label: 'Services' },
  { id: 'billing', icon: 'billing', label: 'Billing' },
  { id: 'delivery', icon: 'delivery', label: 'Delivery' },
  { id: 'account', icon: 'account', label: 'Account' },
];

const TICKETS = [
  {
    id: 'cd-4928',
    icon: 'ticket',
    title: 'Missing item in\nOrder #4928',
    updated: 'Updated 2 hours ago',
    status: 'in-progress',
    statusLabel: 'In Progress',
  },
  {
    id: 'payment-failed',
    icon: 'card',
    title: 'Payment failed\nissue',
    updated: 'Updated yesterday',
    status: 'resolved',
    statusLabel: 'Resolved',
  },
];

const BackIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16">
    <Path
      d="M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z"
      fill={COLORS.supportBackIcon}
    />
  </Svg>
);

const HeaderProfileIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Path
      d="M14 0C11.2311 0 8.52431 0.821086 6.22202 2.35943C3.91973 3.89777 2.12532 6.08427 1.06569 8.64243C0.00606596 11.2006 -0.271181 14.0155 0.269012 16.7313C0.809205 19.447 2.14258 21.9416 4.10051 23.8995C6.05845 25.8574 8.55301 27.1908 11.2687 27.731C13.9845 28.2712 16.7994 27.9939 19.3576 26.9343C21.9157 25.8747 24.1022 24.0803 25.6406 21.778C27.1789 19.4757 28 16.7689 28 14C28 10.287 26.525 6.72601 23.8995 4.1005C21.274 1.475 17.713 0 14 0ZM8.00001 24.39C8.14858 22.9099 8.84167 21.5377 9.9448 20.5398C11.0479 19.5418 12.4825 18.9893 13.97 18.9893C15.4576 18.9893 16.8921 19.5418 17.9952 20.5398C19.0983 21.5377 19.7914 22.9099 19.94 24.39C18.1272 25.4449 16.0673 26.0006 13.97 26.0006C11.8727 26.0006 9.81277 25.4449 8.00001 24.39ZM21.74 23.13C21.3138 21.391 20.3165 19.8453 18.9078 18.7402C17.4991 17.6351 15.7604 17.0345 13.97 17.0345C12.1796 17.0345 10.4409 17.6351 9.03219 18.7402C7.6235 19.8453 6.62624 21.391 6.20001 23.13C4.32813 21.5395 2.98941 19.4129 2.36465 17.0374C1.73989 14.6619 1.85918 12.1518 2.70641 9.84622C3.55363 7.54063 5.08798 5.55057 7.10225 4.14479C9.11652 2.739 11.5137 1.98521 13.97 1.98521C16.4263 1.98521 18.8235 2.739 20.8378 4.14479C22.852 5.55057 24.3864 7.54063 25.2336 9.84622C26.0808 12.1518 26.2001 14.6619 25.5754 17.0374C24.9506 19.4129 23.6119 21.5395 21.74 23.13ZM14 6C13.0111 6 12.0444 6.29325 11.2222 6.84265C10.3999 7.39206 9.75905 8.17295 9.38061 9.08658C9.00217 10.0002 8.90315 11.0055 9.09608 11.9755C9.28901 12.9454 9.76521 13.8363 10.4645 14.5355C11.1637 15.2348 12.0547 15.711 13.0246 15.9039C13.9945 16.0969 14.9998 15.9978 15.9134 15.6194C16.8271 15.241 17.6079 14.6001 18.1574 13.7779C18.7068 12.9556 19 11.9889 19 11C19 9.67392 18.4732 8.40215 17.5355 7.46447C16.5979 6.52678 15.3261 6 14 6ZM14 14C13.4067 14 12.8266 13.8241 12.3333 13.4944C11.8399 13.1648 11.4554 12.6962 11.2284 12.1481C11.0013 11.5999 10.9419 10.9967 11.0577 10.4147C11.1734 9.83279 11.4591 9.29824 11.8787 8.87868C12.2982 8.45912 12.8328 8.1734 13.4147 8.05764C13.9967 7.94189 14.5999 8.0013 15.1481 8.22836C15.6962 8.45542 16.1648 8.83994 16.4944 9.33329C16.8241 9.82664 17 10.4067 17 11C17 11.7956 16.6839 12.5587 16.1213 13.1213C15.5587 13.6839 14.7957 14 14 14Z"
      fill={COLORS.supportHeaderProfileIcon}
    />
  </Svg>
);

const SearchIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 24 24">
    <Path
      d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 5L20.49 19l-5-5Zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
      fill={COLORS.supportSearchIcon}
    />
  </Svg>
);

const ServicesIcon = () => (
  <Svg width={16} height={20} viewBox="0 0 24 24">
    <Path d="M9 2h6v3H9V2Z" fill={COLORS.supportCategoryIcon} />
    <Path
      d="M8 6h8a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z"
      fill={COLORS.supportCategoryIcon}
    />
  </Svg>
);

const BillingIcon = () => (
  <Svg width={22} height={16} viewBox="0 0 24 18">
    <Path
      d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Zm10 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4 7v4M20 7v4"
      fill={COLORS.supportCategoryIcon}
    />
  </Svg>
);

const DeliveryIcon = () => (
  <Svg width={22} height={16} viewBox="0 0 24 18">
    <Path
      d="M1 3h12a1 1 0 0 1 1 1v2h3.5a1 1 0 0 1 .8.4l2.5 3.3a1 1 0 0 1 .2.6V14a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H8a2 2 0 1 1-4 0H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      fill={COLORS.supportCategoryIcon}
    />
    <Path
      d="M6 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={COLORS.supportCategoryIcon}
    />
  </Svg>
);

const AccountIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Path
      d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z"
      fill={COLORS.supportCategoryIcon}
    />
  </Svg>
);

const TicketIcon = () => (
  <Svg width={18} height={20} viewBox="0 0 24 26">
    <Path
      d="M6 2h8l6 6v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V8h4.5L13 3.5Z"
      fill={COLORS.supportTicketIcon}
    />
  </Svg>
);

const CardIcon = () => (
  <Svg width={20} height={16} viewBox="0 0 24 20">
    <Path
      d="M20 4H4a2 2 0 0 0-2 2v1h20V6a2 2 0 0 0-2-2ZM2 10v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8Zm4 6H4v-2h2Z"
      fill={COLORS.supportTicketIcon}
    />
  </Svg>
);

const HeadsetIcon = () => (
  <Svg width={40} height={36} viewBox="0 0 24 24">
    <Path
      d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H6.1A6 6 0 0 1 18 10v2h-1.9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1H17a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z"
      fill={COLORS.supportCtaIcon}
    />
  </Svg>
);

const ChatIcon = () => (
  <Svg width={17} height={17} viewBox="0 0 24 24">
    <Path
      d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8l-4 4V5a1 1 0 0 1 1-1Z"
      fill={COLORS.supportChatButtonText}
    />
  </Svg>
);

const PhoneIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 24 24">
    <Path
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.25 1.01l-2.2 2.2Z"
      fill={COLORS.supportCallButtonText}
    />
  </Svg>
);

const MailIcon = () => (
  <Svg width={17} height={14} viewBox="0 0 24 20">
    <Path
      d="M2 2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v.01L12 10l10-5.99V4H2Zm20 2.24-9.4 5.55a1 1 0 0 1-1.2 0L2 8.24V16h20V8.24Z"
      fill={COLORS.supportEmailButtonText}
    />
  </Svg>
);

const CATEGORY_ICONS = {
  services: ServicesIcon,
  billing: BillingIcon,
  delivery: DeliveryIcon,
  account: AccountIcon,
};

const TICKET_ICONS = {
  ticket: TicketIcon,
  card: CardIcon,
};

const CategoryCard = ({ category, onPress }) => {
  const Icon = CATEGORY_ICONS[category.icon];
  return (
    <TouchableOpacity
      style={styles.categoryCard}
      activeOpacity={0.85}
      onPress={() => onPress(category)}
    >
      <View style={styles.categoryIconBox}>
        <Icon />
      </View>
      <Text style={styles.categoryLabel}>{category.label}</Text>
    </TouchableOpacity>
  );
};

const TicketRow = ({ ticket, onPress }) => {
  const Icon = TICKET_ICONS[ticket.icon];
  const isResolved = ticket.status === 'resolved';
  return (
    <TouchableOpacity
      style={styles.ticketRow}
      activeOpacity={0.7}
      onPress={() => onPress(ticket)}
    >
      <View style={styles.ticketLeft}>
        <View style={styles.ticketIconBox}>
          <Icon />
        </View>
        <View>
          <Text style={styles.ticketTitle}>{ticket.title}</Text>
          <Text style={styles.ticketSubtitle}>{ticket.updated}</Text>
        </View>
      </View>
      <View
        style={[
          styles.statusPill,
          {
            backgroundColor: isResolved
              ? COLORS.supportStatusResolvedBg
              : COLORS.supportStatusInProgressBg,
          },
        ]}
      >
        <Text
          style={[
            styles.statusPillText,
            {
              color: isResolved
                ? COLORS.supportStatusResolvedText
                : COLORS.supportStatusInProgressText,
            },
          ]}
        >
          {ticket.statusLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const SupportScreen = ({
  onBack = () => {},
  onOpenProfile = () => {},
  onSearch = () => {},
  onSelectCategory = () => {},
  onViewAllTickets = () => {},
  onSelectTicket = () => {},
  onStartLiveChat = () => {},
  onCallUs = () => {},
  onEmailSupport = () => {},
  onNavigateHome = () => {},
  onNavigateOrders = () => {},
  onNavigateServices = () => {},
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} hitSlop={12} style={styles.backButton}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support</Text>
        <TouchableOpacity onPress={onOpenProfile} hitSlop={12} style={styles.profileButton}>
          <HeaderProfileIcon />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headingSection}>
          <Text style={styles.heading}>How can we help you?</Text>
          <Text style={styles.subheading}>
            Search our knowledge base or get in touch{'\n'}with our team.
          </Text>
        </View>

        <View style={styles.searchWrapper}>
          <View style={styles.searchIconWrapper}>
            <SearchIcon />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for 'stain removal' or 'billing'"
            placeholderTextColor={COLORS.supportSearchPlaceholder}
            onChangeText={onSearch}
          />
        </View>

        <View style={styles.categoryGrid}>
          {CATEGORIES.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              onPress={onSelectCategory}
            />
          ))}
        </View>

        <View style={styles.ticketsCard}>
          <View style={styles.ticketsHeader}>
            <Text style={styles.ticketsHeading}>Recent Tickets</Text>
            <TouchableOpacity onPress={onViewAllTickets} hitSlop={8}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ticketsList}>
            {TICKETS.map(ticket => (
              <TicketRow key={ticket.id} ticket={ticket} onPress={onSelectTicket} />
            ))}
          </View>
        </View>

        <View style={styles.ctaCard}>
          <View style={styles.ctaIconWrapper}>
            <HeadsetIcon />
            <View style={styles.ctaOnlineDot} />
          </View>

          <View style={styles.ctaTextWrapper}>
            <Text style={styles.ctaTitle}>Need human help?</Text>
            <Text style={styles.ctaSubtitle}>
              Our support team is online and ready{'\n'}to assist you right now.
            </Text>
          </View>

          <View style={styles.ctaButtons}>
            <TouchableOpacity
              style={styles.chatButton}
              activeOpacity={0.85}
              onPress={onStartLiveChat}
            >
              <ChatIcon />
              <Text style={styles.chatButtonText}>Start Live Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.callButton}
              activeOpacity={0.85}
              onPress={onCallUs}
            >
              <PhoneIcon />
              <Text style={styles.callButtonText}>Call Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.emailButton}
              activeOpacity={0.7}
              onPress={onEmailSupport}
            >
              <MailIcon />
              <Text style={styles.emailButtonText}>Email Support</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.responseTimeText}>Average response time: 2 mins</Text>
        </View>
      </ScrollView>

      <BottomNavBar
        activeTab="Profile"
        onNavigateHome={onNavigateHome}
        onNavigateOrders={onNavigateOrders}
        onNavigateServices={onNavigateServices}
        onNavigateProfile={onBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: SUPPORT.headerHeight,
    backgroundColor: COLORS.supportHeaderBg,
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
    fontSize: SUPPORT.headerTitleFontSize,
    lineHeight: SUPPORT.headerTitleLineHeight,
    color: COLORS.supportHeaderTitle,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: SUPPORT.contentPaddingHorizontal,
    paddingTop: SUPPORT.contentPaddingTop,
    paddingBottom: SUPPORT.contentPaddingBottom,
    gap: SUPPORT.sectionGap,
  },
  headingSection: {
    gap: SUPPORT.headingGap,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontWeight: '700',
    fontSize: SUPPORT.headingFontSize,
    lineHeight: SUPPORT.headingLineHeight,
    color: COLORS.supportHeading,
  },
  subheading: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SUPPORT.subheadingFontSize,
    lineHeight: SUPPORT.subheadingLineHeight,
    color: COLORS.supportSubheading,
  },
  searchWrapper: {
    height: SUPPORT.searchInputHeight,
    borderRadius: SUPPORT.searchBorderRadius,
    borderWidth: 1,
    borderColor: COLORS.supportSearchBorder,
    backgroundColor: COLORS.supportSearchBg,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  searchIconWrapper: {
    position: 'absolute',
    left: SUPPORT.searchIconLeft,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  searchInput: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SUPPORT.searchFontSize,
    color: COLORS.supportSubheading,
    paddingLeft: 48,
    paddingRight: 24,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SUPPORT.categoryGridGap,
  },
  categoryCard: {
    width: '47%',
    flexGrow: 1,
    backgroundColor: COLORS.supportCategoryCardBg,
    borderRadius: SUPPORT.categoryCardBorderRadius,
    paddingVertical: SUPPORT.categoryCardPaddingVertical,
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  categoryIconBox: {
    width: SUPPORT.categoryIconSize,
    height: SUPPORT.categoryIconSize,
    borderRadius: SUPPORT.categoryIconSize / 2,
    backgroundColor: COLORS.supportCategoryIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.categoryLabelFontSize,
    lineHeight: SUPPORT.categoryLabelLineHeight,
    color: COLORS.supportCategoryLabel,
  },
  ticketsCard: {
    backgroundColor: COLORS.supportTicketsCardBg,
    borderRadius: SUPPORT.ticketsCardBorderRadius,
    padding: SUPPORT.ticketsCardPadding,
    gap: SUPPORT.sectionGap - 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },
  ticketsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ticketsHeading: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.ticketsHeadingFontSize,
    lineHeight: SUPPORT.ticketsHeadingLineHeight,
    color: COLORS.supportTicketsHeading,
  },
  viewAllText: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SUPPORT.viewAllFontSize,
    lineHeight: SUPPORT.viewAllLineHeight,
    color: COLORS.supportViewAllText,
  },
  ticketsList: {
    gap: SUPPORT.ticketsGap,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SUPPORT.ticketPadding,
    borderRadius: SUPPORT.ticketBorderRadius,
    borderWidth: 1,
    borderColor: COLORS.supportTicketBorder,
    gap: 12,
  },
  ticketLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  ticketIconBox: {
    width: SUPPORT.ticketIconSize,
    height: SUPPORT.ticketIconSize,
    borderRadius: SUPPORT.ticketIconSize / 2,
    backgroundColor: COLORS.supportTicketIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.ticketTitleFontSize,
    lineHeight: SUPPORT.ticketTitleLineHeight,
    color: COLORS.supportTicketTitle,
  },
  ticketSubtitle: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SUPPORT.ticketSubtitleFontSize,
    lineHeight: SUPPORT.ticketSubtitleLineHeight,
    color: COLORS.supportTicketSubtitle,
    marginTop: 2,
  },
  statusPill: {
    paddingVertical: SUPPORT.statusPillPaddingVertical,
    paddingHorizontal: SUPPORT.statusPillPaddingHorizontal,
    borderRadius: 9999,
  },
  statusPillText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.statusPillFontSize,
    lineHeight: SUPPORT.statusPillLineHeight,
  },
  ctaCard: {
    backgroundColor: COLORS.supportCtaCardBg,
    borderRadius: SUPPORT.ctaCardBorderRadius,
    padding: SUPPORT.ctaCardPadding,
    alignItems: 'center',
    gap: SUPPORT.ctaCardGap,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 4,
  },
  ctaIconWrapper: {
    width: SUPPORT.ctaIconWrapperSize,
    height: SUPPORT.ctaIconWrapperSize,
    borderRadius: SUPPORT.ctaIconWrapperSize / 2,
    backgroundColor: COLORS.supportCtaIconBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaOnlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: SUPPORT.ctaOnlineDotSize,
    height: SUPPORT.ctaOnlineDotSize,
    borderRadius: SUPPORT.ctaOnlineDotSize / 2,
    backgroundColor: COLORS.supportCtaOnlineDotBg,
    borderWidth: 2,
    borderColor: COLORS.textPrimary,
  },
  ctaTextWrapper: {
    alignItems: 'center',
    gap: 4,
  },
  ctaTitle: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.ctaTitleFontSize,
    lineHeight: SUPPORT.ctaTitleLineHeight,
    color: COLORS.supportCtaTitle,
    textAlign: 'center',
  },
  ctaSubtitle: {
    fontFamily: FONTS.medium,
    fontWeight: '500',
    fontSize: SUPPORT.ctaSubtitleFontSize,
    lineHeight: SUPPORT.ctaSubtitleLineHeight,
    color: COLORS.supportCtaSubtitle,
    textAlign: 'center',
  },
  ctaButtons: {
    alignSelf: 'stretch',
    gap: SUPPORT.ctaButtonsGap,
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: SUPPORT.ctaButtonPaddingVertical,
    borderRadius: SUPPORT.ctaButtonBorderRadius,
    backgroundColor: COLORS.supportChatButtonBg,
    shadowColor: COLORS.supportChatButtonBg,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 4,
  },
  chatButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.ctaButtonFontSize,
    lineHeight: SUPPORT.ctaButtonLineHeight,
    color: COLORS.supportChatButtonText,
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: SUPPORT.ctaButtonPaddingVertical,
    borderRadius: SUPPORT.ctaButtonBorderRadius,
    backgroundColor: COLORS.supportCallButtonBg,
    borderWidth: 1,
    borderColor: COLORS.supportCallButtonBorder,
  },
  callButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.ctaButtonFontSize,
    lineHeight: SUPPORT.ctaButtonLineHeight,
    color: COLORS.supportCallButtonText,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: SUPPORT.ctaButtonPaddingVertical,
    borderRadius: SUPPORT.ctaButtonBorderRadius,
  },
  emailButtonText: {
    fontFamily: FONTS.semiBold,
    fontWeight: '600',
    fontSize: SUPPORT.ctaButtonFontSize,
    lineHeight: SUPPORT.ctaButtonLineHeight,
    color: COLORS.supportEmailButtonText,
  },
  responseTimeText: {
    fontFamily: FONTS.regular,
    fontWeight: '400',
    fontSize: SUPPORT.responseTimeFontSize,
    lineHeight: SUPPORT.responseTimeLineHeight,
    color: COLORS.supportResponseTimeText,
  },
});

export default SupportScreen;

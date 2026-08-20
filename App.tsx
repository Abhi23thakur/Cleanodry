/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen1 from './src/screens/OnboardingScreen1';
import OnboardingScreen2 from './src/screens/OnboardingScreen2';
import OnboardingScreen3 from './src/screens/OnboardingScreen3';
import LoginScreen from './src/screens/LoginScreen';
import OtpScreen from './src/screens/OtpScreen';
import HomeScreen from './src/screens/HomeScreen';
import SelectAreaScreen from './src/screens/SelectAreaScreen';
import ChooseStoreScreen from './src/screens/ChooseStoreScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import ServiceDetailScreen from './src/screens/ServiceDetailScreen';
import CartScreen from './src/screens/CartScreen';
import AddressScreen from './src/screens/AddressScreen';
import AddNewAddressScreen from './src/screens/AddNewAddressScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import OrderConfirmedScreen from './src/screens/OrderConfirmedScreen';
import StoreServicesScreen from './src/screens/StoreServicesScreen';
import OrderTrackingScreen from './src/screens/OrderTrackingScreen';
import OrderHistoryScreen from './src/screens/OrderHistoryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SupportScreen from './src/screens/SupportScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import NotFoundScreen from './src/screens/NotFoundScreen';
import RateOrderScreen from './src/screens/RateOrderScreen';

const Stack = createNativeStackNavigator();

const buildCartItemsFromStoreServices = cart =>
  Object.values(cart).map(entry => ({
    id: entry.item.id,
    name: entry.item.name,
    description: entry.item.description,
    unitPrice: entry.item.price,
    quantity: entry.quantity,
  }));

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [hasSelectedLocation, setHasSelectedLocation] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleLogout = navigation => {
    setHasSelectedLocation(false);
    setSelectedStore(null);
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} options={{ animation: 'fade' }} />

          <Stack.Screen name="Onboarding1">
            {({ navigation }) => (
              <OnboardingScreen1
                onSkip={() => navigation.replace('Login')}
                onContinue={() => navigation.navigate('Onboarding2')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Onboarding2">
            {({ navigation }) => (
              <OnboardingScreen2
                onSkip={() => navigation.replace('Login')}
                onContinue={() => navigation.navigate('Onboarding3')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Onboarding3">
            {({ navigation }) => (
              <OnboardingScreen3
                onSkip={() => navigation.replace('Login')}
                onGetStarted={() => navigation.replace('Login')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Login">
            {({ navigation }) => (
              <LoginScreen
                onContinue={phoneNumber =>
                  navigation.navigate('Otp', { phoneNumber })
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Otp">
            {({ navigation, route }) => (
              <OtpScreen
                phoneNumber={route.params?.phoneNumber}
                onVerify={() => navigation.replace('Home')}
                onChangePhoneNumber={() => navigation.goBack()}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Home" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <HomeScreen
                onSeeAllServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onNavigateServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onSelectService={serviceName =>
                  navigation.navigate('ServiceDetail', { serviceName })
                }
                onNavigateOrders={() => navigation.navigate('OrderHistory')}
                onNavigateProfile={() => navigation.navigate('Profile')}
                onOpenProfile={() => navigation.navigate('Profile')}
                onSchedulePickup={serviceNames =>
                  navigation.navigate('Address', { serviceNames })
                }
                onClaimOffer={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onViewAllOrders={() => navigation.navigate('OrderHistory')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="OrderHistory" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <OrderHistoryScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onNavigateHome={() => navigation.navigate('Home')}
                onNavigateServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onTrackOrder={() => navigation.navigate('OrderTracking')}
                onNavigateProfile={() => navigation.navigate('Profile')}
                onViewOrderDetails={order =>
                  order.status === 'completed'
                    ? navigation.navigate('RateOrder', { order })
                    : undefined
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="OrderTracking">
            {({ navigation }) => (
              <OrderTrackingScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onNavigateHome={() => navigation.navigate('Home')}
                onNavigateServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onNavigateProfile={() => navigation.navigate('Profile')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Profile" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <ProfileScreen
                onBack={() => navigation.goBack()}
                onNavigateHome={() => navigation.navigate('Home')}
                onNavigateOrders={() => navigation.navigate('OrderHistory')}
                onNavigateServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onNavigateAddresses={() => navigation.navigate('Address')}
                onNavigateHelp={() => navigation.navigate('Support')}
                onNavigateNotifications={() => navigation.navigate('Notifications')}
                onLogout={() => handleLogout(navigation)}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Support" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <SupportScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onNavigateHome={() => navigation.navigate('Home')}
                onNavigateOrders={() => navigation.navigate('OrderHistory')}
                onNavigateServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onNavigateProfile={() => navigation.navigate('Profile')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Notifications">
            {({ navigation }) => (
              <NotificationsScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onTrackOrder={() => navigation.navigate('OrderTracking')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Settings" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <SettingsScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onNavigateHome={() => navigation.navigate('Home')}
                onNavigateOrders={() => navigation.navigate('OrderHistory')}
                onNavigateServices={() =>
                  navigation.navigate(
                    hasSelectedLocation ? 'StoreServices' : 'SelectArea',
                  )
                }
                onNavigateProfile={() => navigation.navigate('Profile')}
                onLogout={() => handleLogout(navigation)}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="RateOrder">
            {({ navigation, route }) => (
              <RateOrderScreen
                orderId={route.params?.order?.orderNumber ?? 'CD-8921'}
                serviceName={route.params?.order?.serviceLabel ?? 'Premium Dry Cleaning'}
                completedDate={
                  route.params?.order
                    ? `Completed on ${route.params.order.date}`
                    : 'Completed on Oct 24, 2023'
                }
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onSubmitReview={() => navigation.goBack()}
                onSkip={() => navigation.goBack()}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="NotFound">
            {({ navigation }) => (
              <NotFoundScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onGoHome={() => navigation.navigate('Home')}
                onContactSupport={() => navigation.navigate('Support')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="SelectArea" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <SelectAreaScreen
                onClose={() => navigation.goBack()}
                onSelectArea={() => navigation.navigate('ChooseStore')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="ChooseStore">
            {({ navigation }) => (
              <ChooseStoreScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onSelectStore={store => {
                  setHasSelectedLocation(true);
                  setSelectedStore(store);
                  navigation.navigate('StoreServices');
                }}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="StoreServices" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <StoreServicesScreen
                storeName={selectedStore?.name ?? 'CleanoDry Store'}
                storeSubtitle={
                  selectedStore
                    ? `4.8 rating · ${selectedStore.distance} away`
                    : '4.8 rating'
                }
                onBack={() => navigation.goBack()}
                onViewCart={({ cart }) =>
                  navigation.navigate('Cart', {
                    initialItems: buildCartItemsFromStoreServices(cart),
                  })
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Services">
            {({ navigation }) => (
              <ServicesScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onNavigateHome={() => navigation.navigate('Home')}
                onNavigateOrders={() => navigation.navigate('OrderHistory')}
                onNavigateProfile={() => navigation.navigate('Profile')}
                onSelectService={service =>
                  navigation.navigate('ServiceDetail', {
                    serviceName: service.name,
                  })
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="ServiceDetail">
            {({ navigation, route }) => (
              <ServiceDetailScreen
                serviceName={route.params?.serviceName ?? 'Dry Cleaning'}
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onViewCart={({ cart }) =>
                  navigation.navigate('Cart', {
                    initialItems: buildCartItemsFromStoreServices(cart),
                  })
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Cart">
            {({ navigation, route }) => (
              <CartScreen
                initialItems={route.params?.initialItems}
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onAddMoreItems={() => navigation.goBack()}
                onCheckout={() => navigation.navigate('Address')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Address">
            {({ navigation, route }) => (
              <AddressScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onAddNewAddress={() => navigation.navigate('AddNewAddress')}
                onEditAddress={() => navigation.navigate('AddNewAddress')}
                onConfirm={() =>
                  navigation.navigate('Schedule', {
                    serviceNames: route.params?.serviceNames,
                  })
                }
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="AddNewAddress" options={{ animation: 'slide_from_bottom' }}>
            {({ navigation }) => (
              <AddNewAddressScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onSave={() => navigation.goBack()}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Schedule">
            {({ navigation }) => (
              <ScheduleScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onContinue={() => navigation.navigate('Payment')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Payment">
            {({ navigation }) => (
              <PaymentScreen
                onBack={() => navigation.goBack()}
                onOpenProfile={() => navigation.navigate('Profile')}
                onPay={() => navigation.replace('OrderConfirmed')}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="OrderConfirmed" options={{ animation: 'fade' }}>
            {({ navigation }) => (
              <OrderConfirmedScreen
                onClose={() => navigation.navigate('Home')}
                onTrackOrder={() => navigation.navigate('OrderTracking')}
                onBackToHome={() => navigation.navigate('Home')}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

import React, { useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Animated, Easing } from 'react-native';
import Svg, { Path, Circle, Rect, Defs, RadialGradient, LinearGradient, Stop } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SPACING, FONTS, SPLASH } from '../constants/theme';

const BackgroundGradient = () => (
  <Svg width="100%" height="100%" preserveAspectRatio="none">
    <Defs>
      <LinearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor={COLORS.splashGradientTopLeft} />
        <Stop offset="50%" stopColor={COLORS.splashGradientCenter} />
        <Stop offset="100%" stopColor={COLORS.splashGradientBottomRight} />
      </LinearGradient>
    </Defs>
    <Rect x="0" y="0" width="100%" height="100%" fill="url(#bgGradient)" />
  </Svg>
);

const BackgroundBlobs = () => (
  <>
    <Svg width={SPLASH.blobBlueSize} height={SPLASH.blobBlueSize} viewBox="0 0 260 260" style={styles.blobBlue}>
      <Defs>
        <RadialGradient id="blobBlue" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0.1} />
          <Stop offset="100%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx="130" cy="130" r="130" fill="url(#blobBlue)" />
    </Svg>
    <Svg width={SPLASH.blobGreenSize} height={SPLASH.blobGreenSize} viewBox="0 0 300 300" style={styles.blobGreen}>
      <Defs>
        <RadialGradient id="blobGreen" cx="50%" cy="50%" r="50%">
          <Stop offset="0%" stopColor={COLORS.splashAccentGreen} stopOpacity={0.08} />
          <Stop offset="100%" stopColor={COLORS.splashAccentGreen} stopOpacity={0} />
        </RadialGradient>
      </Defs>
      <Circle cx="150" cy="150" r="150" fill="url(#blobGreen)" />
    </Svg>
  </>
);

const LogoGlow = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 200 200">
    <Defs>
      <RadialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
        <Stop offset="0%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0.4} />
        <Stop offset="60%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0.14} />
        <Stop offset="100%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0} />
      </RadialGradient>
    </Defs>
    <Circle cx="100" cy="100" r="100" fill="url(#logoGlow)" />
  </Svg>
);

const BackgroundGlow = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 340 340">
    <Defs>
      <RadialGradient id="blueGlow" cx="42%" cy="42%" r="60%">
        <Stop offset="0%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0.16} />
        <Stop offset="100%" stopColor={COLORS.splashGarmentStroke} stopOpacity={0} />
      </RadialGradient>
      <RadialGradient id="greenGlow" cx="60%" cy="60%" r="55%">
        <Stop offset="0%" stopColor={COLORS.splashAccentGreen} stopOpacity={0.14} />
        <Stop offset="100%" stopColor={COLORS.splashAccentGreen} stopOpacity={0} />
      </RadialGradient>
    </Defs>
    <Circle cx="170" cy="170" r="170" fill="url(#blueGlow)" />
    <Circle cx="170" cy="170" r="150" fill="url(#greenGlow)" />
  </Svg>
);

const TShirtIcon = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <Path
      d="M35 8 L50 18 L65 8 L88 24 L78 38 L70 32 L70 90 L30 90 L30 32 L22 38 L12 24 Z"
      fill={COLORS.splashGarmentFill}
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={3}
      strokeLinejoin="round"
    />
    <Path
      d="M40 10 Q50 20 60 10"
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={2.5}
      fill="none"
      strokeLinecap="round"
    />
  </Svg>
);

const ShirtIcon = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <Path
      d="M32 6 L50 16 L68 6 L90 22 L80 36 L72 30 L72 92 L28 92 L28 30 L20 36 L10 22 Z"
      fill={COLORS.splashGarmentFill}
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={3}
      strokeLinejoin="round"
    />
    <Path
      d="M40 8 L50 26 L60 8"
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={2.5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="50" cy="42" r="2.2" fill={COLORS.splashAccentGreen} />
    <Circle cx="50" cy="54" r="2.2" fill={COLORS.splashAccentGreen} />
    <Circle cx="50" cy="66" r="2.2" fill={COLORS.splashAccentGreen} />
    <Circle cx="50" cy="78" r="2.2" fill={COLORS.splashAccentGreen} />
  </Svg>
);

const JeansIcon = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <Path
      d="M18 8 H82 L76 92 H58 L50 42 L42 92 H24 Z"
      fill={COLORS.splashGarmentFill}
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={3}
      strokeLinejoin="round"
    />
    <Path
      d="M50 8 V42"
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={2}
      strokeDasharray="1,4"
      strokeLinecap="round"
    />
    <Path d="M27 18 H36" stroke={COLORS.splashAccentGreen} strokeWidth={2} strokeLinecap="round" />
    <Path d="M64 18 H73" stroke={COLORS.splashAccentGreen} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const FoldedClothesIcon = ({ size }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <Rect
      x="12"
      y="60"
      width="76"
      height="22"
      rx="6"
      fill={COLORS.splashGarmentFill}
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={2}
      opacity={0.55}
    />
    <Rect
      x="16"
      y="38"
      width="68"
      height="22"
      rx="6"
      fill={COLORS.splashGarmentFill}
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={2}
      opacity={0.8}
    />
    <Rect
      x="20"
      y="16"
      width="60"
      height="22"
      rx="6"
      fill={COLORS.splashGarmentFill}
      stroke={COLORS.splashGarmentStroke}
      strokeWidth={3}
    />
    <Rect x="20" y="16" width="60" height="5" rx="2.5" fill={COLORS.splashAccentGreen} />
  </Svg>
);

const SparkleIcon = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill={color} />
  </Svg>
);

const SPARKLES = [
  { top: 4, left: 6, size: 11, color: COLORS.splashSparkleBlue, floatDistance: 6, floatDuration: 1500 },
  { top: 18, left: 128, size: 8, color: COLORS.splashSparkleWhite, floatDistance: 5, floatDuration: 1800 },
  { top: 112, left: 4, size: 7, color: COLORS.splashSparkleWhite, floatDistance: 5, floatDuration: 1600 },
  { top: 132, left: 122, size: 10, color: COLORS.splashSparkleBlue, floatDistance: 6, floatDuration: 1700 },
  { top: 58, left: 146, size: 7, color: COLORS.splashSparkleWhite, floatDistance: 4, floatDuration: 1400 },
];

const Sparkle = ({ config, opacity }) => {
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(float, {
          toValue: 1,
          duration: config.floatDuration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(float, {
          toValue: 0,
          duration: config.floatDuration,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [config.floatDuration, float]);

  const translateY = float.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -config.floatDistance],
  });

  return (
    <Animated.View
      style={[
        styles.sparkle,
        {
          top: config.top,
          left: config.left,
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <SparkleIcon size={config.size} color={config.color} />
    </Animated.View>
  );
};

const useGarmentStage = () => ({
  opacity: useRef(new Animated.Value(0)).current,
  scale: useRef(new Animated.Value(0.85)).current,
});

const SplashScreen = () => {
  const navigation = useNavigation();

  const backgroundGlowOpacity = useRef(new Animated.Value(0)).current;
  const tshirt = useGarmentStage();
  const shirt = useGarmentStage();
  const jeans = useGarmentStage();
  const folded = useGarmentStage();
  const foldedTranslateY = useRef(new Animated.Value(0)).current;
  const sparkleOpacity = useRef(new Animated.Value(0)).current;

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.7)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineTranslateY = useRef(new Animated.Value(10)).current;
  const glowOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const ease = Easing.inOut(Easing.ease);
    const easeOut = Easing.out(Easing.ease);

    const fadeInStage = stage =>
      Animated.parallel([
        Animated.timing(stage.opacity, { toValue: 1, duration: SPLASH.garmentStageDuration, easing: easeOut, useNativeDriver: true }),
        Animated.timing(stage.scale, { toValue: 1, duration: SPLASH.garmentStageDuration, easing: easeOut, useNativeDriver: true }),
      ]);

    const morph = (outStage, inStage) =>
      Animated.parallel([
        Animated.timing(outStage.opacity, { toValue: 0, duration: SPLASH.garmentStageDuration, easing: ease, useNativeDriver: true }),
        Animated.timing(outStage.scale, { toValue: 1.12, duration: SPLASH.garmentStageDuration, easing: ease, useNativeDriver: true }),
        Animated.timing(inStage.opacity, { toValue: 1, duration: SPLASH.garmentStageDuration, easing: ease, useNativeDriver: true }),
        Animated.timing(inStage.scale, { toValue: 1, duration: SPLASH.garmentStageDuration, easing: ease, useNativeDriver: true }),
      ]);

    let cancelled = false;

    const sequence = Animated.sequence([
      // 0 - 0.6s: subtle ambient blue/green glow fades in behind the stage
      Animated.timing(backgroundGlowOpacity, { toValue: 1, duration: SPLASH.ambientGlowDuration, easing: easeOut, useNativeDriver: true }),
      // 0.6 - 1.1s: T-shirt fades + scales into view
      fadeInStage(tshirt),
      // 1.1 - 1.6s: T-shirt morphs into a formal shirt
      morph(tshirt, shirt),
      // 1.6 - 2.1s: shirt morphs into jeans
      morph(shirt, jeans),
      // 2.1 - 2.6s: jeans morph into neatly folded clothes, sparkles drift in
      Animated.parallel([
        morph(jeans, folded),
        Animated.timing(sparkleOpacity, { toValue: 1, duration: SPLASH.garmentStageDuration, easing: ease, useNativeDriver: true }),
      ]),
      // folded clothes drift slightly upward and dissolve as the logo reveals underneath
      Animated.parallel([
        Animated.timing(folded.opacity, { toValue: 0, duration: SPLASH.foldedRevealDuration, easing: ease, useNativeDriver: true }),
        Animated.timing(foldedTranslateY, { toValue: SPLASH.foldedExitTranslateY, duration: SPLASH.foldedRevealDuration, easing: ease, useNativeDriver: true }),
        Animated.timing(sparkleOpacity, { toValue: 0, duration: SPLASH.foldedRevealDuration, easing: ease, useNativeDriver: true }),
        Animated.timing(logoOpacity, { toValue: 1, duration: SPLASH.foldedRevealDuration, easing: easeOut, useNativeDriver: true }),
        Animated.timing(logoScale, { toValue: 1, duration: SPLASH.foldedRevealDuration, easing: easeOut, useNativeDriver: true }),
      ]),
      // tagline fades in slightly after the logo
      Animated.delay(SPLASH.taglineRevealDelay),
      Animated.parallel([
        Animated.timing(taglineOpacity, { toValue: 1, duration: SPLASH.taglineRevealDuration, easing: easeOut, useNativeDriver: true }),
        Animated.timing(taglineTranslateY, { toValue: 0, duration: SPLASH.taglineRevealDuration, easing: easeOut, useNativeDriver: true }),
      ]),
      // brief hold so the logo + tagline are legible before the screen transitions away
      Animated.delay(SPLASH.holdBeforeNavigate),
    ]);

    sequence.start(({ finished }) => {
      if (!finished || cancelled) {
        return;
      }
      Animated.loop(
        Animated.sequence([
          Animated.timing(glowOpacity, { toValue: 1, duration: SPLASH.glowPulseDuration, easing: ease, useNativeDriver: true }),
          Animated.timing(glowOpacity, { toValue: 0.5, duration: SPLASH.glowPulseDuration, easing: ease, useNativeDriver: true }),
        ]),
      ).start();
      navigation.navigate('Onboarding1');
    });

    return () => {
      cancelled = true;
      sequence.stop();
    };
  }, [
    navigation,
    backgroundGlowOpacity,
    tshirt,
    shirt,
    jeans,
    folded,
    foldedTranslateY,
    sparkleOpacity,
    logoOpacity,
    logoScale,
    taglineOpacity,
    taglineTranslateY,
    glowOpacity,
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundLayer} pointerEvents="none">
        <BackgroundGradient />
        <BackgroundBlobs />
      </View>

      <Animated.View style={[styles.backgroundGlow, { opacity: backgroundGlowOpacity }]} pointerEvents="none">
        <BackgroundGlow size={SPLASH.backgroundGlowSize} />
      </Animated.View>

      <View style={styles.content}>
        <View style={styles.garmentStage}>
          {SPARKLES.map((config, index) => (
            <Sparkle key={index} config={config} opacity={sparkleOpacity} />
          ))}

          <Animated.View
            style={[styles.garmentLayer, { opacity: tshirt.opacity, transform: [{ scale: tshirt.scale }] }]}
          >
            <TShirtIcon size={SPLASH.garmentIconSize} />
          </Animated.View>

          <Animated.View
            style={[styles.garmentLayer, { opacity: shirt.opacity, transform: [{ scale: shirt.scale }] }]}
          >
            <ShirtIcon size={SPLASH.garmentIconSize} />
          </Animated.View>

          <Animated.View
            style={[styles.garmentLayer, { opacity: jeans.opacity, transform: [{ scale: jeans.scale }] }]}
          >
            <JeansIcon size={SPLASH.garmentIconSize} />
          </Animated.View>

          <Animated.View
            style={[
              styles.garmentLayer,
              {
                opacity: folded.opacity,
                transform: [{ scale: folded.scale }, { translateY: foldedTranslateY }],
              },
            ]}
          >
            <FoldedClothesIcon size={SPLASH.garmentIconSize} />
          </Animated.View>
        </View>

        <View style={styles.logoBlock}>
          <Animated.View
            style={[
              styles.logoGlow,
              { opacity: glowOpacity, transform: [{ scale: logoScale }] },
            ]}
          >
            <LogoGlow size={SPLASH.logoGlowSize} />
          </Animated.View>
          <Animated.View
            style={[styles.logoWrapper, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
          >
            <Image
              source={require('../assets/images/splash_logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>

          <Animated.View style={{ opacity: taglineOpacity, transform: [{ translateY: taglineTranslateY }] }}>
            <Text style={styles.title}>CLEANODRY</Text>
            <Text style={styles.subtitle}>Clean Clothes. Delivered Fresh.</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.splashBackground,
  },
  backgroundLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  blobBlue: {
    position: 'absolute',
    top: -SPLASH.blobBlueSize * 0.35,
    left: -SPLASH.blobBlueSize * 0.3,
  },
  blobGreen: {
    position: 'absolute',
    bottom: -SPLASH.blobGreenSize * 0.35,
    right: -SPLASH.blobGreenSize * 0.3,
  },
  backgroundGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: SPLASH.backgroundGlowSize,
    height: SPLASH.backgroundGlowSize,
    marginTop: -SPLASH.backgroundGlowSize / 2 - SPLASH.contentUpwardOffset,
    marginLeft: -SPLASH.backgroundGlowSize / 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.contentPaddingHorizontal,
    transform: [{ translateY: -SPLASH.contentUpwardOffset }],
  },
  garmentStage: {
    width: SPLASH.garmentWrapperSize,
    height: SPLASH.garmentWrapperSize,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.logoMarginBottom,
  },
  garmentLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.splashGarmentStroke,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 3,
  },
  sparkle: {
    position: 'absolute',
  },
  logoBlock: {
    alignItems: 'center',
  },
  logoGlow: {
    position: 'absolute',
    top: SPLASH.logoHeight / 2 - SPLASH.logoGlowSize / 2,
    width: SPLASH.logoGlowSize,
    height: SPLASH.logoGlowSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    width: SPLASH.logoWidth,
    marginBottom: 12,
  },
  logo: {
    width: '100%',
    height: SPLASH.logoHeight,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SPLASH.titleFontSize,
    lineHeight: SPLASH.titleLineHeight,
    letterSpacing: SPLASH.titleLetterSpacing,
    color: COLORS.splashTitle,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: SPLASH.subtitleFontSize,
    lineHeight: SPLASH.subtitleLineHeight,
    letterSpacing: SPLASH.subtitleLetterSpacing,
    color: COLORS.splashSubtitle,
    textAlign: 'center',
    marginTop: SPLASH.subtitleMarginTop,
  },
});

export default SplashScreen;

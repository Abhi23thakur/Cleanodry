import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const SCREEN_WIDTH = Dimensions.get('window').width;

const buildMapHtml = (latitude, longitude) => `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    html, body, #map { height: 100%; width: 100%; margin: 0; padding: 0; background: #E6E8EA; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    function post(type, payload) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: type, payload: payload }));
    }

    function initMap() {
      var map = L.map('map', { zoomControl: false, attributionControl: false })
        .setView([${latitude}, ${longitude}], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        subdomains: ['a', 'b', 'c'],
      }).addTo(map);

      map.on('moveend', function () {
        var center = map.getCenter();
        post('centerChange', { latitude: center.lat, longitude: center.lng });
      });

      function handleMessage(event) {
        try {
          var data = JSON.parse(event.data);
          if (data.type === 'panTo') {
            map.setView([data.payload.latitude, data.payload.longitude], data.payload.zoom || 16);
          }
        } catch (e) {}
      }
      document.addEventListener('message', handleMessage);
      window.addEventListener('message', handleMessage);

      setTimeout(function () { map.invalidateSize(); }, 100);
      setTimeout(function () { map.invalidateSize(); }, 500);
    }

    if (document.readyState === 'complete') {
      initMap();
    } else {
      window.addEventListener('load', initMap);
    }
  </script>
</body>
</html>
`;

const AddressMapView = forwardRef(
  ({ initialLatitude, initialLongitude, onCenterChange, style }, ref) => {
    const webViewRef = useRef(null);

    useImperativeHandle(ref, () => ({
      panTo: (latitude, longitude, zoom) => {
        webViewRef.current?.postMessage(
          JSON.stringify({ type: 'panTo', payload: { latitude, longitude, zoom } }),
        );
      },
    }));

    const handleMessage = event => {
      try {
        const data = JSON.parse(event.nativeEvent.data);
        if (data.type === 'centerChange' && onCenterChange) {
          onCenterChange(data.payload);
        }
      } catch (error) {
        // ignore malformed messages from the map page
      }
    };

    return (
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: buildMapHtml(initialLatitude, initialLongitude) }}
        style={[styles.webview, style]}
        onMessage={handleMessage}
        javaScriptEnabled
        domStorageEnabled
        geolocationEnabled
        scrollEnabled={false}
        overScrollMode="never"
        mixedContentMode="always"
      />
    );
  },
);

const styles = StyleSheet.create({
  webview: {
    width: SCREEN_WIDTH,
    height: '100%',
    backgroundColor: 'transparent',
  },
});

export default AddressMapView;

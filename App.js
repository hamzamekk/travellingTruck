import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import Svg, {Circle, G, Path, SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6e96cc',
      }}>
      <Sky />
      <Water />
      <Tree delay={Math.random() * 10000} />
      <Tree delay={Math.random() * 10000} />
      <Tree delay={Math.random() * 10000} />
      <Hill delay={Math.random() * 10000} />
      <Hill delay={Math.random() * 10000} />
      <Hill delay={Math.random() * 10000} />
      <Montain delay={Math.random() * 10000} />
      <Truck />
      <Rock />

      <View style={{height: 10, width: '100%', backgroundColor: '#828282'}} />
    </View>
  );
};

const Truck = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -5,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),

        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
      ]),
    ).start();
  };

  const rockAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(10000),
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
          // easing: Easing.ease,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animate();
    rockAnimation();
  }, []);

  return (
    <View
      style={{
        height: 65,
        width: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        zIndex: 100,
      }}>
      <Animated.View
        style={[
          {
            transform: [
              {
                rotateZ: rotation.interpolate({
                  inputRange: [0, 0.2, 0.5, 0.6, 0.8, 1],
                  outputRange: [
                    '0deg',
                    '-5deg',
                    '5deg',
                    '-5deg',
                    '5deg',
                    '0deg',
                  ],
                }),
              },
            ],
          },
        ]}>
        <Svg height={65} width={90} style={{zIndex: 1000}}>
          <Path
            fill={'white'}
            d="M4.127 4.208c-.596 0-1.083.389-1.083.987v44.709c0 .597.488 1.086 1.086 1.086h1.004c.005-.047.123-.271.133-.317 1.267-5.562 6.323-9.597 12.022-9.597a12.356 12.356 0 0 1 11.912 9.137c.151.734.681.777.785.777h21.111c.596 0 1.083-.487 1.083-1.084V5.293c0-.598-.485-1.085-1.083-1.085H4.127z"
          />
          <Path
            fill={'white'}
            d="M5.138 54.039a3.77 3.77 0 0 1-.149-.005l-.859.002A4.134 4.134 0 0 1 0 49.906V5.195a4.135 4.135 0 0 1 4.13-4.133h46.973c2.272 0 4.123 1.95 4.123 4.229v44.612a4.133 4.133 0 0 1-4.127 4.131H29.962c-1.091-.019-3.239-.691-3.727-3.128-1.067-3.957-4.755-6.789-8.947-6.789-4.291 0-8.098 3.041-9.051 7.229-.225 1.817-1.723 2.693-3.099 2.693zM4.127 4.208c-.596 0-1.083.389-1.083.987v44.709c0 .597.488 1.086 1.086 1.086h1.004c.005-.047.123-.271.133-.317 1.267-5.562 6.323-9.597 12.022-9.597a12.356 12.356 0 0 1 11.912 9.137c.151.734.681.777.785.777h21.111c.596 0 1.083-.487 1.083-1.084V5.293c0-.598-.485-1.085-1.083-1.085H4.127zM84.929 35.828s-.093-2.093-.288-3.118c-.164-.873-1.087-2.644-1.087-2.644l-7.299-13.59c-.951-1.52-3.115-2.707-4.558-2.707H60.785a2.608 2.608 0 0 0-2.606 2.609v33.526a2.609 2.609 0 0 0 2.606 2.609h.643s.949-.123 1.304-1.312c.986-3.933 4.514-6.862 8.749-6.862 4.145 0 7.612 2.808 8.682 6.613.442 1.612 2.231 1.561 2.231 1.561A2.608 2.608 0 0 0 85 49.904l-.071-14.076zm-6.603-3.511H65.312a1.996 1.996 0 0 1-1.989-1.99V20.143c0-1.098.894-1.99 1.989-1.99h4.365c2.483 0 4.117 2.009 4.63 2.978l5.065 9.434c.521.962.053 1.752-1.046 1.752z"
          />

          <Circle fill={'white'} r={7} x={17} y={55} />
          <Circle fill={'white'} r={7} x={72} y={55} />
        </Svg>
        <Svg
          height={65}
          width={90}
          style={{
            zIndex: 1000,
            // marginTop: 5,
            transform: [{scaleY: -1}, {rotateX: '70deg'}, {rotateZ: '-5deg'}],
          }}>
          <Path
            fill={'black'}
            d="M4.127 4.208c-.596 0-1.083.389-1.083.987v44.709c0 .597.488 1.086 1.086 1.086h1.004c.005-.047.123-.271.133-.317 1.267-5.562 6.323-9.597 12.022-9.597a12.356 12.356 0 0 1 11.912 9.137c.151.734.681.777.785.777h21.111c.596 0 1.083-.487 1.083-1.084V5.293c0-.598-.485-1.085-1.083-1.085H4.127z"
          />
          <Path
            fill={'black'}
            d="M5.138 54.039a3.77 3.77 0 0 1-.149-.005l-.859.002A4.134 4.134 0 0 1 0 49.906V5.195a4.135 4.135 0 0 1 4.13-4.133h46.973c2.272 0 4.123 1.95 4.123 4.229v44.612a4.133 4.133 0 0 1-4.127 4.131H29.962c-1.091-.019-3.239-.691-3.727-3.128-1.067-3.957-4.755-6.789-8.947-6.789-4.291 0-8.098 3.041-9.051 7.229-.225 1.817-1.723 2.693-3.099 2.693zM4.127 4.208c-.596 0-1.083.389-1.083.987v44.709c0 .597.488 1.086 1.086 1.086h1.004c.005-.047.123-.271.133-.317 1.267-5.562 6.323-9.597 12.022-9.597a12.356 12.356 0 0 1 11.912 9.137c.151.734.681.777.785.777h21.111c.596 0 1.083-.487 1.083-1.084V5.293c0-.598-.485-1.085-1.083-1.085H4.127zM84.929 35.828s-.093-2.093-.288-3.118c-.164-.873-1.087-2.644-1.087-2.644l-7.299-13.59c-.951-1.52-3.115-2.707-4.558-2.707H60.785a2.608 2.608 0 0 0-2.606 2.609v33.526a2.609 2.609 0 0 0 2.606 2.609h.643s.949-.123 1.304-1.312c.986-3.933 4.514-6.862 8.749-6.862 4.145 0 7.612 2.808 8.682 6.613.442 1.612 2.231 1.561 2.231 1.561A2.608 2.608 0 0 0 85 49.904l-.071-14.076zm-6.603-3.511H65.312a1.996 1.996 0 0 1-1.989-1.99V20.143c0-1.098.894-1.99 1.989-1.99h4.365c2.483 0 4.117 2.009 4.63 2.978l5.065 9.434c.521.962.053 1.752-1.046 1.752z"
          />
          <Circle fill={'black'} r={7} x={17} y={55} />
          <Circle fill={'black'} r={7} x={72} y={55} />
        </Svg>
      </Animated.View>
      <Animated.View
        style={[
          {
            height: 3,
            width: 20,
            backgroundColor: 'white',
            position: 'absolute',
            borderRadius: 10,
            top: 10,
            left: -25,
          },
          {transform: [{translateY}]},
        ]}
      />
      <Animated.View
        style={[
          {
            height: 3,
            width: 20,
            backgroundColor: 'white',
            position: 'absolute',
            top: 20,
            left: -20,
          },
          {transform: [{translateY}]},
        ]}
      />
    </View>
  );
};

const Tree = ({delay}) => {
  const translateX = useRef(new Animated.Value(250)).current;

  const animate = () => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: -250,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View
      style={[{position: 'absolute', top: '42%'}, {transform: [{translateX}]}]}>
      <Svg height={100} width={32} viewBox={'0 0 32 100'}>
        <Path
          fill={'black'}
          d="M31.945 74.986L17.37 1.148A1.416 1.416 0 0 0 15.988 0c-.673 0-1.252.48-1.383 1.148L.027 74.986c-.083.42.025.854.292 1.186.268.332.669.523 1.091.523h13.167V100h2.821V76.695h13.165c.422 0 .821-.191 1.09-.523.27-.331.375-.766.292-1.186z"
        />
      </Svg>
    </Animated.View>
  );
};

const hillImage = require('./assets/download.svg');

const svg = resolveAssetSource(hillImage);

const Hill = ({delay}) => {
  const translateX = useRef(new Animated.Value(400)).current;

  const animate = () => {
    Animated.loop(
      Animated.timing(translateX, {
        delay,
        toValue: -300,
        duration: 10000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View
      style={[
        {position: 'absolute', top: '39%', zIndex: 0},
        {transform: [{translateX}]},
      ]}>
      <Svg width="300" height="200" viewBox="0 0 150 100" style={{zIndex: 0}}>
        <SvgCssUri uri={svg.uri} width="100%" height="100%" />
      </Svg>
    </Animated.View>
  );
};

const montainmage = require('./assets/montain.svg');

const svgM = resolveAssetSource(montainmage);

const Montain = ({delay}) => {
  const translateX = useRef(new Animated.Value(500)).current;

  const animate = () => {
    Animated.loop(
      Animated.timing(translateX, {
        delay,
        toValue: -1000,
        duration: 20000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View
      style={[
        {position: 'absolute', bottom: '0%'},
        {transform: [{translateX}]},
      ]}>
      <Svg width="1000" height="1000" viewBox="0 0 250 250" style={{zIndex: 0}}>
        <SvgCssUri uri={svgM.uri} width="100%" height="100%" />
      </Svg>
    </Animated.View>
  );
};

const cloudImage = require('./assets/cloud.svg');

const svgCloud = resolveAssetSource(cloudImage);

const Cloud = ({delay}) => {
  const translateX = useRef(new Animated.Value(400)).current;

  const animate = () => {
    Animated.loop(
      Animated.timing(translateX, {
        delay,
        toValue: -400,
        duration: 15000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View
      style={[{position: 'absolute', top: '10%'}, {transform: [{translateX}]}]}>
      <Svg width="100" height="100" viewBox="0 0 50 50" style={{zIndex: 0}}>
        <SvgCssUri uri={svgCloud.uri} width="100%" height="100%" />
      </Svg>
    </Animated.View>
  );
};

const Rock = () => {
  const translateX = useRef(new Animated.Value(200)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(10000),
        Animated.timing(translateX, {
          toValue: -200,
          duration: 700,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: 8,
          width: 8,
          borderRadius: 4,
          position: 'absolute',
          top: '52%',
          backgroundColor: 'white',
          zIndex: 1000,
        },
        {transform: [{translateX}]},
      ]}
    />
  );
};

const Sky = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          delay: 6000,
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.delay(5000),
        Animated.timing(animatedValue, {
          delay: 6000,
          toValue: 0,
          duration: 10000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 1],
    outputRange: ['#F6F54D', '#FEB139', '#F55353', '#143F6B'],
  });

  return (
    <Animated.View
      style={{
        height: '54%',
        width: '100%',
        backgroundColor: backgroundColor,
        position: 'absolute',
        top: 0,
        zIndex: 0,
      }}>
      <Cloud delay={1000} />
      <Cloud delay={5000} />
    </Animated.View>
  );
};

const Water = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          delay: 6000,
          toValue: 1,
          duration: 10000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.delay(5000),
        Animated.timing(animatedValue, {
          delay: 6000,
          toValue: 0,
          duration: 10000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    animate();
  }, []);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [
      '#6e96cc',
      '#197c92',
      '#fffff8',
      '#f0a531',
      '#a74e57',
    ].reverse(),
  });

  return (
    <Animated.View
      style={{
        height: '46%',
        width: '100%',
        backgroundColor: backgroundColor,
        position: 'absolute',
        bottom: 0,
        zIndex: 0,
      }}></Animated.View>
  );
};

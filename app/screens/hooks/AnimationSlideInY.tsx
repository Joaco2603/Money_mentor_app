import { Animated, PanResponder } from "react-native";
import { useRef } from "react";

export const AnimationSlideInY = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  // const minY = 0;
  // const maxY = 600;
  // const thresholdY = 100;
  // const clampedY = Animated.diffClamp(pan.y, minY, maxY);

  const animateTo = (toValue: number) => {
    Animated.timing(pan, {
      toValue: { x: 0, y: toValue },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: new Animated.Value(0), dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: (e, gesture) => {
        pan.flattenOffset();
        // const shouldReset = gesture.moveY > 450 ? 600 : 0;
        const shouldReset =
          gesture.dy > 130
            ? gesture.moveY == 600
              ? 0
              : 600
            : gesture.moveY == 0
            ? 600
            : 0;
        animateTo(shouldReset);
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({ x: 0, y: 0 });
      },
    })
  ).current;

  return {
    pan,
    panResponder,
    animateTo,
  };
};

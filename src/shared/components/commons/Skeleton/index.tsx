import { useEffect, useMemo } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, {
  Defs,
  Rect,
  Stop,
  LinearGradient as SvgLinearGradient,
} from 'react-native-svg';
import { View } from 'tamagui';

import { MY_DEVICE_HEIGHT, MY_DEVICE_WIDTH } from '@utils/utils';

import { ANIMATION_DURATION } from '@consts/duration';

const AnimatedContainer = Animated.createAnimatedComponent(View);
const AnimatedSvgWrapper = Animated.createAnimatedComponent(View);

interface IProps {
  position?: 'absolute' | 'relative';
  width: string | number;
  height: string | number;
  maxW?: number;
  ml?: number;
  mt?: number;
  isDone: boolean;
  borderRadius?: number;
}

export default function CommonSkeleton(props: IProps) {
  const convertedWidth = useMemo(
    () => convertPercentToNumber(props.width, 'width'),
    [props.width],
  );
  const convertedHeight = useMemo(
    () => convertPercentToNumber(props.height, 'height'),
    [props.height],
  );

  const skeletonHeight = convertedHeight;

  const translateX = useSharedValue<number>(-convertedWidth);
  const skeletonOpacity = useSharedValue<number>(1);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(convertedWidth, {
        duration: ANIMATION_DURATION.SKELETON_ANIMATING,
      }),
      -1,
      false,
    );
  }, [convertedWidth, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const skeletonAnimatedStyle = useAnimatedStyle(() => {
    if (props.isDone) {
      skeletonOpacity.value = withTiming(0, {
        duration: ANIMATION_DURATION.SKELETON_FADE_OUT,
      });
    }
    return {
      opacity: skeletonOpacity.value,
    };
  }, [props.isDone]);

  return (
    <AnimatedContainer
      position={props.position || 'relative'}
      width={convertedWidth}
      height={skeletonHeight}
      maxWidth={props.maxW}
      marginLeft={props.ml}
      marginTop={props.mt}
      backgroundColor="#E1E9EE"
      borderRadius={props.borderRadius || 4}
      overflow="hidden"
      style={skeletonAnimatedStyle}
    >
      <AnimatedSvgWrapper
        position="absolute"
        top={0}
        left={0}
        width={convertedWidth}
        height={skeletonHeight}
        style={animatedStyle}
      >
        <Svg width={convertedWidth} height={skeletonHeight}>
          <Defs>
            <SvgLinearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <Stop offset="0" stopColor="#E1E9EE" stopOpacity="1" />
              <Stop offset="0.5" stopColor="#F2F8FC" stopOpacity="1" />
              <Stop offset="1" stopColor="#E1E9EE" stopOpacity="1" />
            </SvgLinearGradient>
          </Defs>
          <Rect
            x={0}
            y={0}
            width={convertedWidth}
            height={skeletonHeight}
            fill="url(#gradient)"
          />
        </Svg>
      </AnimatedSvgWrapper>
    </AnimatedContainer>
  );
}

const convertPercentToNumber = (
  value: string | number,
  dimension: 'width' | 'height',
): number => {
  if (typeof value === 'number') return value;

  if (typeof value === 'string' && value.endsWith('%')) {
    const percent = parseFloat(value.replace('%', ''));
    const dimensionValue =
      dimension === 'width' ? MY_DEVICE_WIDTH : MY_DEVICE_HEIGHT;
    return (dimensionValue * percent) / 100;
  }

  return parseFloat(value) || 0;
};

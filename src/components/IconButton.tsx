import { Pressable, StyleSheet, Image, View } from 'react-native';
import { forwardRef } from 'react';

type ButtonProps = {
  iconSource: any; // Change the type to accept image source
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const IconButton = forwardRef<View | null, ButtonProps>(
  ({ iconSource, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={[styles.container, styles.iconButton]}>
        <Image source={iconSource} style={styles.image} />
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
  },
  iconButton: {
    marginLeft: 10, // Adjust the margin as needed
  },
  image: {
    width: 50, // Set width of image
    height: 50, // Set height of image
    resizeMode: 'contain', // Adjust image resizing mode as needed
    tintColor: 'white', // Adjust image color as needed
  },
});

export default IconButton;

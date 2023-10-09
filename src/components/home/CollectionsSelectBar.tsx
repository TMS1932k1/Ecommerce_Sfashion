import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  MyApp,
  MyColors,
  MyDimesions,
  MyFonts,
  MyStylers,
} from '../../constants';

interface Props {
  currentIndex?: number;
  onClickCollection?: (index: number) => void;
}

export default function CollectionsSelectBar({
  currentIndex = 0,
  onClickCollection,
}: Props) {
  const collections = MyApp.collections;

  return (
    <View style={styles.container}>
      {collections.map(collection => (
        <Pressable
          key={collection.label}
          style={({pressed}) => [
            (pressed || !onClickCollection) && MyStylers.press,
          ]}
          onPress={
            onClickCollection
              ? () => onClickCollection(collections.indexOf(collection))
              : undefined
          }>
          <View style={styles.item}>
            <Text
              style={[
                MyFonts.bodyStyle,
                styles.text,
                {
                  color:
                    currentIndex === collections.indexOf(collection)
                      ? MyColors.titleActive
                      : MyColors.placeholder,
                },
              ]}>
              {collection.label}
            </Text>
            {currentIndex === collections.indexOf(collection) && (
              <Image source={require('../../../assets/images/rectangle.png')} />
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
  },
  text: {
    fontSize: MyDimesions.kBodyMedium,
  },
});

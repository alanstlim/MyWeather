import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async <T = string>(key: string): Promise<T | undefined> => {
  try {
    const item = await AsyncStorage.getItem(key);
    let result;

    if (item) {
      try {
        result = JSON.parse(item);
      } catch (e) {}
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

export const removeItem = async (key: string) => {
  try {
    const result = await AsyncStorage.removeItem(key);
    return result;
  } catch (err: any) {
    console.error(err.message);
  }
};

export const setItem = async <T = string>(key: string, value: T) => {
  try {
    let newValue;

    if (typeof value === 'object') {
      newValue = JSON.stringify(value);
    } else {
      newValue = value;
    }

    await AsyncStorage.setItem(key, newValue as string);
  } catch (err: any) {
    console.error(err);
  }
};

export const clearAll = async () => {
  try {
    const result = await AsyncStorage.clear();
    return result;
  } catch (err: any) {
    console.error(err);
  }
};

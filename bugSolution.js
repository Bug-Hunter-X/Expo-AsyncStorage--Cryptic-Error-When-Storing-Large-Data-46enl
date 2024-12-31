import AsyncStorage from '@react-native-async-storage/async-storage';

const storeLargeData = async (data) => {
  try {
    // Split data into chunks
    const chunkSize = 1000; // Adjust as needed
    const dataChunks = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      dataChunks.push(data.slice(i, i + chunkSize));
    }

    // Store each chunk separately
    for (let i = 0; i < dataChunks.length; i++) {
      await AsyncStorage.setItem(`largeDataChunk-${i}`, JSON.stringify(dataChunks[i]));
    }
  } catch (e) {
    console.error('Error storing data:', e);
  }
};

const retrieveLargeData = async () => {
  try {
    const keys = [];
    let i = 0;
    while(true){
      const key = await AsyncStorage.getItem(`largeDataChunk-${i}`);
      if (!key) break;
      keys.push(JSON.parse(key))
      i++;
    }
    return keys.flat();
  } catch (e) {
    console.error('Error retrieving data:', e);
  }
};
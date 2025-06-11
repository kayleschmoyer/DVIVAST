import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { List, TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import StatusSelector, { Status } from './StatusSelector';

export interface QuadrantData {
  status: Status;
  note?: string;
  photoUri?: string;
}

interface Props {
  label: string;
  data: QuadrantData;
  onChange: (data: QuadrantData) => void;
}

/**
 * Collapsible quadrant section allowing status, note, and photo input.
 */
export default function QuadrantSection({ label, data, onChange }: Props) {
  const [expanded, setExpanded] = useState(false);

  const pickImage = async (fromCamera: boolean) => {
    const method = fromCamera
      ? ImagePicker.launchCameraAsync
      : ImagePicker.launchImageLibraryAsync;
    const result = await method({ quality: 0.5 });
    if (!result.canceled && result.assets && result.assets[0]) {
      onChange({ ...data, photoUri: result.assets[0].uri });
    }
  };

  return (
    <List.Accordion
      title={label}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
      style={styles.accordion}
    >
      <View style={styles.content}>
        <StatusSelector
          status={data.status}
          onChange={status => onChange({ ...data, status })}
        />
        <TextInput
          mode="outlined"
          placeholder="Add note"
          value={data.note}
          onChangeText={note => onChange({ ...data, note })}
          style={styles.input}
        />
        {data.photoUri && (
          <Image source={{ uri: data.photoUri }} style={styles.photo} />
        )}
        <View style={styles.buttons}>
          <Button icon="camera" mode="contained" onPress={() => pickImage(true)}>
            Camera
          </Button>
          <Button
            icon="image"
            mode="contained"
            onPress={() => pickImage(false)}
            style={styles.gallery}
          >
            Gallery
          </Button>
        </View>
      </View>
    </List.Accordion>
  );
}

const styles = StyleSheet.create({
  accordion: { paddingVertical: 4 },
  content: { paddingHorizontal: 16 },
  input: { marginTop: 8 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8
  },
  gallery: { marginLeft: 8 },
  photo: { width: '100%', height: 150, marginTop: 8, borderRadius: 4 }
});

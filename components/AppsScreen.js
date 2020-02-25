
import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Switch
} from 'native-base';
import {
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class AppsScreen extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Applications</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon name="apps-box" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>App manager</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon name="bluetooth" fontFamily="FontAwesome.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>BLE</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon name="code-braces" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Programmable</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon name="bullhorn" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Beep</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon name="watch-vibrate" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Vibration</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#DC8406" }}>
                <Icon name="compass-outline" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Compass</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#DC1D06" }}>
                <Icon name="heart-pulse" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Heart rate monitor</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#DC8406" }}>
                <Icon name="satellite-uplink" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>GPS Info </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon name="alarm" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Default Alarm </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon name="battery" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Battery Level Widget </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon name="music-note-bluetooth" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth Music Control</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon name="duck" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Flappy Bird </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon name="cube-unfolded" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Clock Tris </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon name="keyboard-variant" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth keyboard </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon name="satellite-variant" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>GPS Time </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon name="clock-fast" fontFamily="Ionicons.ttf" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Morphing Clock </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF0EC',
  },
});
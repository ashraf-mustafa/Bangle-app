
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
  Switch,
  ScrollView
} from 'native-base';
import {
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ICON from 'react-native-vector-icons/FontAwesome5';


export default class AppsScreen extends Component {
  render() {
    return (

      <Container style={styles.container}>

        <Content style={{ height: 2000 }} >

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon name="apps-box" size={20} color='#ffffff' />
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
                <Icon name="bluetooth" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth Widget</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon name="clock-out" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Center Clock</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D6A1A" }}>
                <Icon name="matrix" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Binary Clock</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon name="flag-triangle" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Espruino Flag Raiser</Text>
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
                <Icon name="heart-pulse" size={20} color='#ffffff' />
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
                <Icon name="satellite-uplink" size={20} color='#ffffff' />
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
                <Icon name="alarm" size={20} color='#ffffff' />
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
                <Icon name="battery" size={20} color='#ffffff' />
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
                <Icon name="music-note-bluetooth" size={20} color='#ffffff' />
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
                <Icon name="duck" size={20} color='#ffffff' />
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
                <Icon name="cube-unfolded" size={20} color='#ffffff' />
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
                <Icon name="keyboard-variant" size={20} color='#ffffff' />
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
                <Icon name="satellite-variant" size={20} color='#ffffff' />
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
                <Icon name="clock-fast" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Morphing Clock </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#0D53D6" }}>
                <Icon name="hand" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text>Gesture Test </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#E0674D" }}>
                <ICON name="horse" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text> Horse Race </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <ICON name="bell" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text> Jingle Bells </Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#DC1D06" }}>
                <ICON name="walking" size={20} color='#ffffff' />
              </Button>
            </Left>
            <Body>
              <Text> Pedometer widget </Text>
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
    marginTop: 80
  },
});

import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch 
  } from 'native-base';


export default class SettingsScreen extends Component {
  render() {
    return (
      <Container>
      <Header>
      <Left/>
      <Body>
        <Title>Settings</Title>
      </Body>
      <Right />
    </Header>
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="" />
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
              <Button style={{ backgroundColor: "#E0674D" }}>
                <Icon active name="" />
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
                <Icon active name="" />
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
                <Icon active name="" />
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
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="" />
              </Button>
            </Left>
            <Body>
              <Text>HID</Text>
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

import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, useTheme} from 'react-native-paper';
import Container from '../../components/Container';
import {DomainContext} from '../../stores/DomainStore';
import {ChannelsStackScreenProps, CustomTheme} from '../../types';

function ChannelScreen({
  route: {
    params: {guildId, channelId},
  },
}: ChannelsStackScreenProps<'Channel'>) {
  const theme = useTheme<CustomTheme>();
  const domain = React.useContext(DomainContext);

  // const logout = () => {
  //   console.log('logout');
  //   domain.logout();
  // };

  const showFps = () => {
    domain.setShowFPS(!domain.showFPS);
  };

  return (
    <Container
      flex={1}
      style={[
        styles.container,
        {backgroundColor: theme.colors.palette.background60},
      ]}>
      <Text>Channel Screen</Text>
      <Text>Guild ID: {guildId}</Text>
      <Text>Channel ID: {channelId ?? 'N/A'}</Text>
      <Button mode="contained" onPress={showFps}>
        Show FPS
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default observer(ChannelScreen);

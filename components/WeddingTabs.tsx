import React from 'react';
import { Tabs, Tab, Text, Card, CardHeader, Button, Box } from 'grommet';





const WeddingTabs = () => {
  
    return (
        <Tabs alignControls='center' alignSelf='center'>
            <Tab title="Tab One">
                <Box background='white' direction='row-responsive' responsive={true}>
                    <Text>Ember</Text>
                </Box>
            </Tab>
            <Tab title="Tab Two">
                <Box direction='row-responsive' responsive={true}>
                    <Text>Is</Text>
                </Box>
            </Tab>
            <Tab title="Tab Three">
                <Box direction='row-responsive' responsive={true}>
                    <Text>a bad cat</Text>
                </Box>
            </Tab>
        </Tabs>
    )
}

export default WeddingTabs
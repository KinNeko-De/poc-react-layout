import React from 'react';
import { Tabs, Tab, Card, CardContent, Typography, List, ListItem } from '@mui/material';

const Documents: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>

      <div>
        {selectedTab === 0 && (
          <List>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5">Document 1</Typography>
                  <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5">Document 2</Typography>
                  <Typography variant="body1">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </CardContent>
              </Card>
            </ListItem>
          </List>
        )}

        {selectedTab === 1 && (
          <List>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5">Document 3</Typography>
                  <Typography variant="body1">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5">Document 4</Typography>
                  <Typography variant="body1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>
                </CardContent>
              </Card>
            </ListItem>
          </List>
        )}

        {selectedTab === 2 && (
          <List>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5">Document 5</Typography>
                  <Typography variant="body1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5">Document 6</Typography>
                  <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </CardContent>
              </Card>
            </ListItem>
          </List>
        )}
      </div>
    </div>
  );
};

export default Documents;
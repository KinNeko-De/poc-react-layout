import React from 'react';
import { Tabs, Tab, Card, CardContent, Typography, List, ListItem, Stack } from '@mui/material';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/Unstable_Grid2'; // Import Item separately

const Documents: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab label="Documents" />
        <Tab label="Something else" />
        <Tab label="More content" />
      </Tabs>

      <div>
        {selectedTab === 0 && (
          <List>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="h5"><Link to="document/invoice">invoice</Link></Typography>
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

        {selectedTab === 1 && (
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={8}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        )}

        {selectedTab === 2 && (
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default Documents;
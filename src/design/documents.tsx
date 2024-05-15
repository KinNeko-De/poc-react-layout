import React, { useEffect } from 'react';
import { Tabs, Tab, Card, CardContent, Typography, List, ListItem, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Item from '@mui/material/Unstable_Grid2'; // Import Item separately
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { ToInvoice, ToMain } from '../features/title/titleSlice'

const Documents: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tab = query.get('tab');
  const selectedTab = tab ? Number(tab) : 0;

  useEffect(() => {
    if (tab === null) {
      query.set('tab', '0');
      navigate(location.pathname + '?' + query.toString());
    }
  }); // Empty dependency array means this effect runs once on mount

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    query.set('tab', String(newValue));
    navigate({ search: query.toString() });
  };

  // const currecntTitle = useSelector((state: any) => state.title.value)
  const dispatch = useDispatch()

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
                  <Typography variant="h5"><Link to="document/invoice" onClick={() => dispatch(ToInvoice())}>invoice</Link></Typography>
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
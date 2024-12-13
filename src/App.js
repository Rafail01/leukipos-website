
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import IconMap from '@mui/icons-material/Map';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CelebrationIcon from '@mui/icons-material/Celebration';
import NewspaperIcon from '@mui/icons-material/Newspaper';


// Import the page components
import HomePage from './home/page';
import AboutPage from './about/page'; 
import MapPage from './map/page';
import EventsPage from './events/page';
import NewsPage from './news/page';

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayoutNavigationLinks(props) {
  const { window } = props;

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={[
        {
          segment: 'home',
          title: 'Home',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'about',
          title: 'About Us',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'events',
          title: 'Events',
          icon: <CelebrationIcon/>
        },
        {
          segment: 'map',
          title: 'Map',
          icon: <IconMap />,
        },
        {
          segment: 'news',
          title: 'News',
          icon: <NewspaperIcon/>
        },
      ]}
      theme={demoTheme}
      window={demoWindow}
    >
      <Router>
        <DashboardLayout>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '12px',
            }}
          >
            
          </Box>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/" element={<HomePage />} /> {/* Default route */}
            <Route path="/events" element={<EventsPage/>} />
            <Route path='/news' element={<NewsPage/>}/>
            <Route path="*" element={<HomePage />} /> {/* Catch-all route */}
          </Routes>
        </DashboardLayout>
      </Router>
    </AppProvider>
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutNavigationLinks;

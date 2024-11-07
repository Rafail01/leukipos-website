import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import mapImage from '../../images/leukipos_map.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const MapCard = () => {
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');

    const copyToClipboard = (text) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
              setSnackbarMessage(`Αντιγράφηκε: ${text}`);
              setSnackbarOpen(true);
          }).catch(err => {
              console.error('Σφάλμα κατά την αντιγραφή:', err);
              setSnackbarMessage('Σφάλμα κατά την αντιγραφή');
              setSnackbarOpen(true);
          });
      } else {
          console.warn('Η λειτουργία αντιγραφής δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης.');
          setSnackbarMessage('Η αντιγραφή δεν υποστηρίζεται σε αυτό το πρόγραμμα περιήγησης.');
          setSnackbarOpen(true);
      }
  };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return ( 
      <Card sx={{ width: "300px" }}>
        <CardActionArea sx={{width:"300px"}}>
          <CardMedia
            component="img"
            height="140"
            image={mapImage}
            alt="Χάρτης"
          />
          <CardContent sx={{width:"300px"}}>
            <Typography gutterBottom variant="h5" component="div">
              ΧΟΡΕΥΤΙΚΟΣ ΟΜΙΛΟΣ ΛΕΥΚΙΠΠΟΣ
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', color: 'text.secondary', gap: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap:0.2 }}>
                    <LocationOnIcon />
                    <Typography variant="body2" ml={0.5} width={"60%"}>
                        Ι. Παλαιολόγου 42, Καλαμάτα 241 00
                    </Typography>
                    <Button 
                        size="small" 
                        onClick={() => copyToClipboard("Ι. Παλαιολόγου 42, Καλαμάτα 241 00")}
                        startIcon={<ContentCopyIcon />}
                    >
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
                    <PhoneIcon />
                    <Typography variant="body2" ml={0.5} width={"60%"} >
                        6944982331
                    </Typography>
                    <Button 
                        size="small" 
                        onClick={() => copyToClipboard("6944982331")}
                        startIcon={<ContentCopyIcon />}
                    >
                    </Button>
                </Box>
            </Box>
          </CardContent>
        </CardActionArea>

        {/* Snackbar for copy notification */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Card>
    );
}

export default MapCard;

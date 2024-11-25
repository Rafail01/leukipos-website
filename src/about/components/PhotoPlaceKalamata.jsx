import React, { useState } from 'react';
import { useMediaQuery, Modal, Box,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

const imageKalamata = [
  require('../../images/kalamata/kalamata1.jpg'),
  require('../../images/kalamata/kalamata2.jpg'),
  require('../../images/kalamata/kalamata3.jpg'),
  require('../../images/kalamata/kalamata4.jpg'),
  require('../../images/kalamata/kalamata5.jpg'),
  require('../../images/kalamata/kalamata6.jpg'),
  require('../../images/kalamata/kalamata7.jpg'),
  require('../../images/kalamata/kalamata8.jpg'),
  require('../../images/kalamata/kalamata9.jpg')
];

const PhotoPlaceKalamata = () => {
  const mdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(false); 

 
  const handleOpen = (src) => {
    setSelectedImage(src);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <h4 style={{ color: "orange" }}>Ο χώρος μας στην Καλαμάτα</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {imageKalamata.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Κalamata ${index + 1}`} 
            style={{ width: mdUp ? '15%' : '30%', height: '35%', cursor: 'pointer' }}
            onClick={() => handleOpen(src)} 
          />
        ))}
      </div>

      
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="large-image-modal"
      aria-describedby="modal showing full-sized image"
      >
        <Box
          sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          outline: 'none',
          width: { xs: '90%', sm: '80%', md: '60%' },
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
          position: 'absolute',
          top: 4,
          right: 4,
          color: 'grey.500',
        }}
        >
          <CloseIcon />
        </IconButton>
        {selectedImage && (
        <img
          src={selectedImage}
          alt="Επιλεγμένη εικόνα Καλαμάτας"
          style={{
          width: '100%',
          height: 'auto', 
        }}
      />
      )}
      </Box>
    </Modal>

  </div>
  );
};

export default PhotoPlaceKalamata;

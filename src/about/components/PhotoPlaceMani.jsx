import React, { useState } from 'react';
import { useMediaQuery, Modal, Box,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'


const imageMani = [
    require('../../images/mani/mani1.jpg'),
    require('../../images/mani/mani2.jpg'),
    require('../../images/mani/mani3.jpg'),
    require('../../images/mani/mani4.jpg'),
    require('../../images/mani/mani5.jpg')
  ];
  


const PhotoPlaceMani = () => {
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
      <h4 style={{ color: "orange" }}>Ο χώρος μας στην Μάνη</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {imageMani.map((src, index) => (
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
            p: 4,
            outline: 'none',
          }}
        >
           <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 4,
              right: 4,
              color: 'grey.500'
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Επιλεγμένη εικόνα Μάνης" 
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default PhotoPlaceMani;
import React from 'react';
import logo from '../images/logo_final.jpg';
import { Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const HomePage = () => {
    return(<div style={{padding:'20px'}}>
        <h1 style={{textAlign: "center"}}>ΧΟΡΕΥΤΙΚΟΣ ΟΜΙΛΟΣ ΜΑΝΗΣ «Ο ΛΕΥΚΙΠΠΟΣ»</h1>

        <img 
        src={logo}  
        alt="Λογότυπο Χορευτικού Ομίλου Μάνης" 
        style={{ display: 'block', margin: '0 auto', width: '300px', height: 'auto' }} 
      />
        
        <p>Ο Χορευτικός Όμιλος Λεύκιππος ιδρύθηκε το 2002 με σκοπό την προβολή της πολιτιστικής παράδοσης της μανιάτικης κοινωνίας. Δραστηριοποιείται στους δήμους της Δυτικής Μάνης και της Καλαμάτας. Έχει τμήματα παραδοσιακών και λαϊκών χορών για ενηλίκους και παιδιά που μαθαίνουν παραδοσιακούς χορούς από όλες τις περιοχές της Ελλάδας. Διαθέτει ερασιτεχνική, θεατρική ομάδα και χορωδία. Στο βεστιάριό του, υπάρχουν περίπου 200 φορεσιές από διάφορες περιοχές της χώρας μας.</p>
        
        <p>Έχει λάβει μέρος σε πολλά φεστιβάλ του εσωτερικού και του εξωτερικού. Χαρακτηριστικά αναφέρουμε τα ταξίδια χορευτικών ομάδων του σε Αθήνα, Πάτρα, Χανιά, Χίο και Τρίκαλα, και αντίστοιχα σε Ρωσία, Ελβετία, Βουλγαρία και Ρουμανία. Τέλος, έχει πάρει μέρος σε εκπομπές λαογραφικού και παραδοσιακού περιεχομένου, διαφόρων τηλεοπτικών σταθμών όπως ΕΡΤ 3, κανάλι της Βουλής, Kriti TV και σε τοπικά κανάλια της Μεσσηνίας.</p>
        
        <p><strong>Πρόεδρος του συλλόγου:</strong> Ντυμένος Θεόδωρος</p>
        <p><strong>Χοροδιδάσκαλοι:</strong> Μανιμάνης Δημήτριος, Κρασσακοπούλου Δήμητρα</p>
        <Box sx={{ width: '100%', borderRadius: '20px', textAlign: 'center' }}>
          <a
            href="https://www.facebook.com/dim.manimanis"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <FacebookIcon style={{ fontSize: '40px', cursor: 'pointer'}} />
          </a>
          <a
            href="https://www.instagram.com/leukipposkhoreutikos/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <InstagramIcon style={{ fontSize: '40px', cursor: 'pointer' }} />
          </a>
        </Box>
      </div>
    );
}

export default HomePage;
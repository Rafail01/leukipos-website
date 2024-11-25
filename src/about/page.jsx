import React from "react";
import PhotoPlaceKalamata from "./components/PhotoPlaceKalamata";
import PhotoPlaceMani from "./components/PhotoPlaceMani";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from '@mui/icons-material/Info';

const AboutPage = () => {
  const reasonsToDance = [
    "Σωματική και πνευματική ευεξία",
    "Τόνωση της αυτοπεποίθησης",
    "Απόκτηση και διατήρηση καλής φυσικής κατάστασης",
    "Καλλιεργημένο πνεύμα",
    "Σωστή συμπεριφορά",
    "Διασκέδαση",
    "Κοινωνικές συναναστροφές",
    "Συμμετοχή σε συνεστιάσεις",
    "Συμμετοχή σε εκδρομές – Θεατρικές παραστάσεις",
    "Συμμετοχή σε εκδηλώσεις – παρελάσεις",
    "Γνωριμία και εξοικείωση με τους ελληνικούς παραδοσιακούς και λαϊκούς χορούς",
    "Σύνδεση με το παρελθόν και τις ελληνικές παραδόσεις",
  ];

  const contactDetails = [
    { label: "Καλαμάτα", address: "Ιωάννη Παλαιολόγου 42" },
    {
      label: "Στούπα Δυτικής Μάνης",
      address: "Έναντι Ιερού Ναού Αγίας Τριάδας",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color:"orange" }}>12 Λόγοι για να ξεκινήσεις χορό στο Λεύκιππο</h2>

      <ul style={{ lineHeight: "1.8", margin: "20px 0" }}>
        {reasonsToDance.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <p style={{ margin: "20px 0" }}>
        Λειτουργούν τμήματα παιδικά και ενηλίκων για αρχάριους αλλά και πιο έμπειρους χορευτές.
        Διδάσκονται παραδοσιακοί και λαϊκοί χοροί, κρητικοί χοροί, και υπάρχει δυνατότητα ιδιαίτερων μαθημάτων.
        Στο σύλλογο λειτουργεί και ερασιτεχνική θεατρική ομάδα.
      </p>

      <h3 style={{color:"orange"}}>Πού θα μας βρείτε;</h3>
      <div>
        {contactDetails.map((detail, index) => (
          <p key={index}>
            <strong>{detail.label}:</strong> {detail.address}
          </p>
        ))}
      </div>

      <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <InfoIcon style={{ fontSize: "30px" }}/>
        Πληροφορίες ή εγγραφές, καλέστε:
        <span style={{ fontWeight:"bold",color:"orange" }}>6944982331</span>,
        <span style={{ fontWeight:"bold",color:"orange" }}>6947144443</span>
      </p>

      <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <EmailIcon style={{ fontSize: "30px" }} />
        E-mail:
        <span style={{ fontWeight:"bold",color:"orange" }}>leukippos.h.o.manis@gmail.com</span>
      </p>

      <div style={{ margin: "20px 0" }}>
        <PhotoPlaceKalamata />
        <PhotoPlaceMani />
      </div>
    </div>
  );
};

export default AboutPage;

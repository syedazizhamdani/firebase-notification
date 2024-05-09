import React from 'react';
import { Grid, Button } from '@mui/material';
import { firestore } from './FirebaseConfig';
import { collection,addDoc } from 'firebase/firestore';

function ButtonContainer() {
    
    const handleNotification = async (message: string) => {
        try {
          await addDoc(collection(firestore, 'notifications'), { message, read: false });
          console.log("Notification added successfully!");
        } catch (error) {
          console.error("Error adding notification: ", error);
        }
      };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button variant="contained" onClick={() => handleNotification("Notification 1")}>Notification 1</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => handleNotification("Notification 2")}>Notification 2</Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => handleNotification("Notification 3")}>Notification 3</Button>
      </Grid>
    </Grid>
  );
}

export default ButtonContainer;

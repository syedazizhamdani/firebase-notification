import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button,IconButton, Snackbar, Alert  } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { collection, onSnapshot, QuerySnapshot, QueryDocumentSnapshot, doc, updateDoc } from 'firebase/firestore';
import { firestore } from './FirebaseConfig';

function Notification() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, 'notifications'), (snapshot: QuerySnapshot) => {
      const fetchedNotifications = snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        id: doc.id,
        ...doc.data()
      }));
      setNotifications(fetchedNotifications);
    });
  
    return () => unsubscribe();
  }, []);

  const handleNotificationClick = async (notificationId: string) => {
    try {
      const notificationRef = doc(firestore, 'notifications', notificationId);
      await updateDoc(notificationRef, { read: true });
      setOpenAlert(true);
      console.log("Notification marked as read successfully!");
    } catch (error) {
      console.error("Error marking notification as read: ", error);
    }
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };


  return (
    <>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Notification marked as read successfully!
        </Alert>
      </Snackbar>
    <List>
      {notifications.map(notification => (
        <ListItem key={notification.id}>
          <ListItemText primary={notification.message} />
          {notification.read ? (
            <IconButton disabled>
              <CheckCircle /> 
            </IconButton>
          ) : (
            <Button onClick={() => handleNotificationClick(notification.id)}>Mark as Read</Button>
          )}
        </ListItem>
      ))}
    </List>
    </>
  );
}

export default Notification;

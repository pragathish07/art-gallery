// AuthContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCurrentUser({ ...user, role: userData.role });
            setIsAdmin(userData.role === 'admin');
            console.log('User role:', userData.role);
            console.log('Is admin:', userData.role === 'admin');
          } else {
            // Create default user document
            await setDoc(userDocRef, { role: 'user' });
            setCurrentUser({ ...user, role: 'user' });
            setIsAdmin(false);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
          setCurrentUser(null);
          setIsAdmin(false);
        }
      } else {
        setCurrentUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      setIsAdmin(false);
      navigate('/login');
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const value = {
    
    currentUser,
    isAdmin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// dbService.js
import { db } from "./firebase.js";
import { ref, set } from "firebase/database";

export const saveUserData = async (user) => {
  try {
    const userRef = ref(db, `users/${user.uid}`);
    await set(userRef, {
      uid: user.uid,
      displayName: user.displayName || "Anonymous User",
      email: user.email,
      photoURL: user.photoURL || "",
      lastLogin: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

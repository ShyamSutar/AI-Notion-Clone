import { getApps, initializeApp,App, cert } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";
import { getApp } from "firebase/app";

const serviceKey = require("@/service_key.json");

let app: App = getApps().length === 0 ? initializeApp({credential: cert(serviceKey)}) : getApp();

const adminDb = getFirestore(app);

export {app as adminApp, adminDb};
import * as functions from "firebase-functions";
import * as express from "express";
import * as admin from "firebase-admin";
import {addEntry,
  deleteEntry,
  getAllEntries,
  updateEntry,
} from "./entryController";
import {addExtraction} from "./extractionController";
import {
  getUserProfile,
  updateUserProfile,
} from "./insertUserProfile";
if (admin.apps.length === 0) {
  admin.initializeApp();
}
const app = express();
app.get("/", (req, res) => res.status(200).send("Hey there!"));
app.post("/entries", addEntry);
exports.app = functions.https.onRequest(app);
app.get("/entries", getAllEntries);
app.patch("/entries/:entryId", updateEntry);
app.delete("/entries/:entryId", deleteEntry);
app.post("/extraction", addExtraction);


exports.addCustomClaim = functions.https.onCall((data) => {
  return admin.auth().getUserByEmail(data.email).then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, data.claims).
        then(() => {
          return {
            message: ` Success!claims ${Object.keys(data.claim)} 
        have been set on ${data.email}`,
          };
        }).catch((err) => {
          return {error: err};
        });
  });
});

exports.deleteAuthUser = functions.https.onCall((data)=>{
  return admin.auth().getUserByEmail(data.email).then((user)=>{
    return admin.auth().deleteUser(user.uid).
        then(()=> {
          return {message: `Success! user ${data.email} has been deleted!`};
        }).
        catch((err)=>{
          return {error: err};
        });
  });
});

exports.getUserProfile =functions.https.onCall((data)=>{
  return getUserProfile(data);
});
exports.updateUserProfile= functions.https.onCall((data)=>{
  return updateUserProfile(data);
}
);

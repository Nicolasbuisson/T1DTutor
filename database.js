import dbh from "./firebase";

export function getUser(uid, callback) {
    dbh.collection("users").doc(uid).get().then((doc)=>{
        let data = doc.data();
        callback(data);
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

export function updateUser(uid, options, callback) {
    dbh.collection("users").doc(uid).update(options)
      .then(callback)
      .catch((e)=>{
        console.log(e);
      })
}

export function createUser(uid, options, callback) {
    dbh.collection("users").doc(uid).set(options)
    .then(callback).catch((e)=>{
        console.log(e);
      })
}
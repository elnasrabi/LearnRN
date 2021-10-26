import Realm from "realm";

class Contact extends Realm.Object { }

class Cat extends Realm.Object { }
Contact.schema = {
    name: "Contact",
    properties: {
        recordID: "string",
        uid: "string?",
        thumbnailPath: "string",
        givenName: "string",
        familyName: "string",
        hasThumbnail: {type: "bool", default: false},
        phoneNumber: "string",
    },
    primaryKey: "recordID",
};

Cat.schema = {
    name: "Cat",
    properties: {
        CatID: "string",
        CatNumber: "string?",
        CatName: "string",
        CatType: "string",
        IsSold: {type: "bool", default: false},
        CatOrigin: "string",
    },
    primaryKey: "CatID",
};

export default new Realm({ schema: [Cat] });
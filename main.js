const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//connect to db
const dbURI =
    "mongodb+srv://anouar1994:ca_19206656@cluster0.sywgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) throw err;
        console.log("connected to database");
    }
);

//create Schema

const personSchema = new Schema(
    {
        name: {
            type: "string",
            required: true,
        },
        age: "number",
        favouriteFoods: ["string"],
    },
    { timestamps: true }
);

const Perso_col = mongoose.model("Perso_col", personSchema);

//create and save
// const instancePerson = new Perso_col({
//     name :"Anouar",
//     age : 27,
//     favouriteFoods : ['lasagna', 'pizza']
// });
// instancePerson.save((err, data)=>{
//     if (err) throw err
//     console.log(data)
// })

//Create Many Records with model.create()

// Perso_col.create([
//     { name: "Ahmed", age: 20, favouriteFoods: ["Kafteji", "Couscous"] },
//     {
//         name: "Sara",
//         age: 24,
//         favouriteFoods: ["Canelonni", "Spaghetti with meat-balls"],
//     },
//     { name: "Anis", age: 30, favouriteFoods: ["Hamburger", "Kebab"] },
//     { name: "Dorra", age: 18, favouriteFoods: ["Tacos", "Quesadilla"] },
// ]);
// Perso_col.create({
//     name: "Mary",
//     age: 22,
//     favouriteFoods: ["Hot Chicken", "Jambalaya"],
// });
//Use model.find() to Search Your Database

// Perso_col.find((err, data)=> {
//     if (err) throw err;
//     console.log(data)
// })

//Use model.findOne() to Return a Single Matching Document from Your Database

// Perso_col.findOne({ favouriteFoods :"Couscous"}, (err, data)=> {
//     if (err) throw err;
//     console.log(data)
// });

// Use model.findById() to Search Your Database By _id
// let personId = "60cbc82b06325f0f9ced517b";

// Perso_col.findById({ _id: personId }, (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// Perform Classic Updates by Running Find, Edit, then Save

// let saraId = "60cbcf56f1086a267838559a";
// Perso_col.findByIdAndUpdate(
//     saraId,
//     { $push: { favouriteFoods: "Humberger" } },
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// )

// Perform New Updates on a Document Using model.findOneAndUpdate()

// Perso_col.findOneAndUpdate({name : 'Dorra'}, {$set:{age : 17}}, {new : true}, (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// Delete One Document Using model.findByIdAndRemove
// let anisID = "60cbcf56f1086a267838559b";

// Perso_col.findByIdAndRemove(anisID, (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// Delete Many Documents with model.remove()

// Perso_col.remove({name : "Mary"}, (err)=>{
//     if (err) throw err;
//     console.log("person was deleted")
// })

// Chain Search Query Helpers to Narrow Search Results

Perso_col.find({ favouriteFoods: { $all: ["Humburger"] } })
    .sort({ name: "asc" })
    .limit(2)
    .select("-age")
    .exec((err, data) => {
        if (err) throw err;
        console.log(data);
    });

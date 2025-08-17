// const mongoose = require ('mongoose');

// const main = async () =>{ 
//     await mongoose.connect("mongodb://localhost:27017/e-comme");
//     const PS = new mongoose.Schema({
//         name:String,
//         price:Number,
//         brand:String,
//         category:String
//     });


//     ///// insert and read///////////

//     // const PsM = mongoose.model('products-m' , PS);
//     // let data = new PsM({
//     //     name:"iphone 11",
//     //     price:'800',
//     //     brand:'iphone',
//     //     category:'Mobile'
//     // });
//     //     let result = await data.save();
//     // console.log(result)

//     // update////

// //     const updateInDB = async() =>{
// //         const Product = mongoose.model('products-ms', PS);
// //         let data = await Product.updateOne(
// //             {name : "m8"},
// //             { $set : {price :1700}
// //         }
// //         )
// //     console.log(data);
// //     }
// // updateInDB()



// // const deleteInDB = async () =>{
// //     const Product = mongoose.model('products-ms' , PS);
// //     let data = await Product.deleteOne({name:'m8'});
// //     console.log(data);
// // }
// // deleteInDB();


// //find /////////////////

// // const findInDB = async () =>{
// //     const Product = mongoose.model('products-ms', PS);
// //     let data = await Product.find();
// //     console.log(data);
// //   } 
// //     findInDB();

// /// update///////

// const updateInDB = async () =>{
//     const Product = mongoose.model('products-ms', PS)
//     let data = await Product.updateOne (
//         { name :'iphone 11'},
//         {
//             $set:{ price:700}
//         }
//     ); 
//     console.log (data);
// }

// updateInDB()

// }

// main()


//////////////////////////////////////api section //////////////////////

// const express = require ('express');
// const productNew = require('./product-new');
// require ('./config');

// const newProduct = require ('./product-new');

// const app = express();

// app.post('/create' , (req,res) =>{
//     res.send("done");
// })

// app.listen(5000);



const express = require('express');
const ProductN = require('./product-new'); // ✅ only once
require('./config');

const app = express();
app.use(express.json()); // so we can send JSON in POST requests

app.post('/create', async (req, res) => {
  try {
    const data = new ProductN(req.body);  // create new product from request
    let result = await data.save();      // save in MongoDB
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

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



// const express = require('express');
// const ProductN = require('./product-new'); // ✅ only once
// require('./config');

// const app = express();
// app.use(express.json()); // so we can send JSON in POST requests

// app.post('/create', async (req, res) => {
//   try {
//     const data = new ProductN(req.body);  // create new product from request
//     let result = await data.save();      // save in MongoDB
//     res.send(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });

///get api with mongoose////////

// const express = require ('express');
// require('./config');

// const ProductN = require ('./product-new');

// const app = express();
// app.use (express.json());


// app.get ("/list" , async (req,res) =>{
// let data = await ProductN.find();
// res.send(data);
// })

// app.listen(5000);


////delete api with mongoose////

// const express = require ('express');
// require ('./config');
// const ProductNew = require ('./product-new');

// const app = express();

// app.use (express.json());

// app.delete('/delete/:_id',async (req,res) =>{
// console.log(req.params);
// let data = await ProductNew.deleteOne(req.params);
// res.send("done");
// })

// app.listen(5000);

////update api with mongoose/////


// const express = require ('express');
// require('./config');
// const ProductNew = require ('./product-new');

// const app = express();

// app.use (express.json());

// app.put('/update/:_id' , async (req,res)=>{
//     console.log(req.params);
//     let data = await ProductNew.updateOne
//     (req.params , {
//         $set:req.body 
//     })
// res.send(data);
// })

// app.listen(5000);


/// search api in node.js /////

const express = require ('express');
require ('./config');

const Product = require ('./product-new');

// const app = express ();

// app.use (express.json());

// app.get('/search/:key', async (req,res) =>{
//     console.log(req.params.key)
//     let data = await Product.find(
//         {
//             "$or" :[
//                 {"name":{ $regex: req.params.key}},
//                 {"brand":{ $regex: req.params.key}}
//             ]
//         }
//     )
// })

// app.listen(5000);
const mongoose = require ('mongoose');

const main = async () =>{ 
    await mongoose.connect("mongodb://localhost:27017/e-comme");
    const PS = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });


    ///// insert and read///////////

    // const PsM = mongoose.model('products-m' , PS);
    // let data = new PsM({
    //     name:"iphone 11",
    //     price:'800',
    //     brand:'iphone',
    //     category:'Mobile'
    // });
    //     let result = await data.save();
    // console.log(result)

    // update////

//     const updateInDB = async() =>{
//         const Product = mongoose.model('products-ms', PS);
//         let data = await Product.updateOne(
//             {name : "m8"},
//             { $set : {price :1700}
//         }
//         )
//     console.log(data);
//     }
// updateInDB()



// const deleteInDB = async () =>{
//     const Product = mongoose.model('products-ms' , PS);
//     let data = await Product.deleteOne({name:'m8'});
//     console.log(data);
// }
// deleteInDB();


//find /////////////////

// const findInDB = async () =>{
//     const Product = mongoose.model('products-ms', PS);
//     let data = await Product.find();
//     console.log(data);
//   } 
//     findInDB();

/// update///////

const updateInDB = async () =>{
    const Product = mongoose.model('products-ms', PS)
    let data = await Product.updateOne (
        { name :'iphone 11'},
        {
            $set:{ price:700}
        }
    ); 
    console.log (data);
}

updateInDB()

}

main()



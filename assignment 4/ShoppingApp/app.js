// QUE:-3 Create database for online shopping app.



const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const url = "mongodb://localhost:27017";

mongoClient.connect(url).then(data => {
    
    const database = data.db("shoppingApp");

    // QUE:-4  Create Require collections for online shopping app and documents. 
        // i.User 
        // ii.Product category 
        // iii. Product
        // iv. Order
        // v. Review

    
    database.createCollection("user").then(data => {
        console.log("User collection created");
    }).catch(err => {
        console.log(err);
    });

    database.createCollection("product_categories").then(data => {
        console.log("Product categories collection created");
    }).catch(err => {
        console.log(err);
    });

    database.createCollection("products").then(data => {
        console.log("Products collection created");
    }).catch(err => {
        console.log(err);
    });

    database.createCollection("orders").then(data => {
        console.log("Orders collection created");
    }).catch(err => {
        console.log(err);
    });

    database.createCollection("reviews").then(data => {
        console.log("Reviews collection created");
    }).catch(err => {
        console.log(err);
    });

    // Sample data
    const userData = [
        { username: "user1", email: "user1@example.com" },
        { username: "user2", email: "user2@example.com" },
        { username: "user3", email: "user3@example.com" }
    ];

    const categoriesData = [
        { name: "Electronics" },
        { name: "Clothing" },
        { name: "Books" }
    ];

    const productsData = [
        { name: "Laptop", category: "Electronics", price: 1000 },
        { name: "T-shirt", category: "Clothing", price: 20 },
        { name: "Python Programming Book", category: "Books", price: 50 }
    ];

    const ordersData = [
        { userId: "user1", products: ["Laptop"], totalAmount: 1000 },
        { userId: "user2", products: ["T-shirt", "Python Programming Book"], totalAmount: 70 }
    ];

    const reviewsData = [
        { productId: "ObjectId(productId1)", userId: "user1", rating: 4, comment: "Great laptop!" },
        { productId: "ObjectId(productId2)", userId: "user2", rating: 5, comment: "Excellent book!" }
    ];

    // Insert sample data
    database.collection("user").insertMany(userData).then(r => {
        console.log("User inserted:", r.insertedCount);
    }).catch(err => {
        console.log(err);
    });

    database.collection("product_categories").insertMany(categoriesData).then(r => {
        console.log("Categories inserted:", r.insertedCount);
    }).catch(err => {
        console.log(err);
    });

    database.collection("products").insertMany(productsData).then(r => {
        console.log("Products inserted:", r.insertedCount);
    }).catch(err => {
        console.log(err);
    });

    database.collection("orders").insertMany(ordersData).then(r => {
        console.log("Orders inserted:", r.insertedCount);
    }).catch(err => {
        console.log(err);
    });

    database.collection("reviews").insertMany(reviewsData).then(r => {
        console.log("Reviews inserted:", r.insertedCount);
    }).catch(err => {
        console.log(err);
    });

    // Query examples (similar to your provided code)
    database.collection("users").find().toArray().then(r => {
        console.log("Users:", r);
    }).catch(err => {
        console.log(err);
    });

    database.collection("products").find({ category: "Electronics" }).toArray().then(r => {
        console.log("Electronic Products:", r);
    }).catch(err => {
        console.log(err);
    });


    //QUE:-5  Write command to show all data from product collections and sort in ascending order. 

    database.collection("products").find().sort({ name: 1 }).toArray().then(r => {
        console.log("Products sorted in ascending order:", r);
    }).catch(err => {
        console.log(err);
    });
    

    //QUE:-6  Update product price for particular product.
    

    database.collection("products").updateOne({name:"Laptop"},{$set:{email:"user1@example.com",category:"Electronic",price:"12000"}}).then(r=>{
             console.log(r);
         }).catch(err=>{
             console.log(err);
         })


    //QUE:- 7   Write command to delete particular document and collection. 

    // database.collection("info").deleteOne({name:"test"})
    database.collection("products").deleteOne({name:"Laptop"},{$set:{email:"user1@example.com",category:"Electronic",price:"12000"}}).then(r=>{
        console.log(r);
    }).catch(err=>{
        console.log(err);
    })


}).catch(err => {
    console.log(err);
});

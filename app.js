const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017/statsdb'); 
// this nodemongo is the name of db. a new one will be created if not existed yet.

client.connect()
    .then(() => {
        // Task 1
        // console.log('Connected Successfully & Databse statsdb Created!');
        
        // Task 2
        // var dbo = client.db('statsdb');
        // dbo.createCollection('uscensus').then(function() {
        //     console.log('Collection uscensus created');
        //     client.close()
        // })

        // Task 3
        // var dbo = client.db('statsdb');
        // dbo.collection('uscensus').insertMany(stats)
        //     .then((res) => {
        //         console.log(`Number of documents inserted: ${res.insertedCount}`);
        //         client.close();
        //     })

        // Task 4
        // var dbo = client.db('statsdb');
        // dbo.collection('uscensus').insertMany([
        //     {
        //         'city': 'Pacomia', 
        //         'zip': '91331', 
        //         'state': 'CA', 
        //         'income': '60360',
        //         'age': '33'
        //     },
        //     {
        //         'city': 'Ketchikan', 
        //         'zip': '99950', 
        //         'state': 'AK', 
        //         'income': '00000',
        //         'age': '00'
        //     },
        // ])
        //     .then((res) => {
        //         console.log(`Number of documents inserted: ${res.insertedCount}`);
        //         client.close();
        //     })


        // Task 5
        // var dbo = client.db('statsdb');
        // var query = { city: "Corona" , state: "NY" };
        // dbo.collection('uscensus').find(query)
        //     .toArray()
        //     .then(items => {
        //         console.log(`Successfully found ${items.length} documents.`);
        //         console.log(items);
        //         client.close();
        //     })

        // Task 6
        // var dbo = client.db('statsdb');
        // var query = { state: "CA" };
        // dbo.collection('uscensus').find(query)
        //     .toArray()
        //     .then(items => {
        //         console.log(`Successfully found ${items.length} documents.`);
        //         items.forEach(item => console.log(`${item.city}'s income is ${item.income}`));
        //         client.close();
        //     })

        // Task 7
        // var dbo = client.db('statsdb');
        // var myquery = { state: "AK" };
        // var newvalues = {$set: {income: "38910", age: "46"}}; 
        // dbo.collection('uscensus').updateOne(myquery, newvalues).then(() => {
        //     console.log('1 document updated');
        //     client.close();
        // })

        // Task 7
        var dbo = client.db('statsdb');
        var mysort = { state: 1 };
        dbo.collection('uscensus').find()
            .sort(mysort)
            .toArray()
            .then(items => {
                console.log(`Successfully sorted ${items.length} documents.`);
                console.log(items);
                client.close();
            })

    })
    .catch(error => console.log('Failed to connet', error));

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]
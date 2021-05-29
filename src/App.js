import React from 'react';
import Card from '../src/components/Card';
import Data from './data.json';

function App() {
    let myItems = [];

    /*
    for(let x=0; x < Data.length; x++){
        myItems.push(<Card name={Data[x].name} country={Data[x].country} city={Data[x].city} />)
        // এখানে আমাদের json data তে যত ডাটা আছে সবগুলো ডাটা for loop চালিয়ে শো করাতে পারি তার জন্য let myItems নামে
        // একটি variable নিলাম এবং for loop এর মধ্যে condition দিলাম যে let x=0 মানে হল x এর মান যদি 0 হয় এবং x<Data.length মানে হল এটি ততক্ষন পর্যন্ত চেক করতে থাকবে যতক্ষন পর্যন্ত ডাটা থাকবে এবং x++ মানে হল যে ডাটাগুলোকে পাবে সেগুলোকে এক এক করে বৃদ্ধি করবে ।
        // myItems.push মানে হল যত ডাটা পাবে সেগুলোকে push করে দিবে।  
    }*/
    myItems = Data.map((item, index) => <Card key={index} name={item.name} country={item.country} city={item.city} />);
    // এখানে for loop ছাড়াও আমরা map এর মাধ্যমে ডাটাগুলোকে সিঙ্গেল সিঙ্গেল করে নিয়ে আসতে পারি এবং এই পদ্ধতি খুবই জনপ্রিয়, তার জন্য আমরা যাকে map করব তাকে ধরতে হবে যেমন - Data.map করে ধরলাম এবং এখানে আমরা arrow function use করব , arrow function এর ভিতরে আমরা সাধারনত তিনটি Argument pass করতে পারি, প্রথমটি হল Value, দ্বিতীয়টি হল index number এবং তৃতীয়টি হল Array. আমরা আমাদের এখানে pass করলাম value & index কে । তারপর আমরা যেখানে ডাটা পাঠাতে চাই সেখানে দিয়ে দেব , যেমন আমরা Card এ ডাটা পাঠিয়েছি । 
    //এখানে আরেকটি জিনিস খুবই সাবধানে কাজ করতে হবে তা হল এখানে আমরা যে নামে ডাটা পাঠাব Card এর মধ্যে ঠিক একই নামে Data Receive করতে হবে  


    return (
        <div>
            <h1 className="headStyle">My First React App </h1>
            {myItems}
        </div>
    );
}
export default App;
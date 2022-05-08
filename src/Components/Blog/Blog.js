import React from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        class="accordion container mt-lg-5 mt-md-2"
        id="accordionPanelsStayOpenExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Difference between javascript and nodejs
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              Javascript হলো একটি সাধারন প্রোগ্রামিং ল্যাংগুয়েজ। এটি যেকোন
              ব্রাউজার থেকে রান করা যায়। যেমনঃ Chrome, Firefox, Internet
              Explorer etc. NodeJs হলো জাভাস্ক্রিপ্ট এর জন্য একটি Interpreter
              and Environment. এটি ভালো ভাবে ব্যবহার করার জন্য লাইব্রেরি
              প্রয়োজন। এটি শুধুমাত্র chrome এর V8 ইঞ্জিনেই রান করা হয়।
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Differences between sql and nosql databases
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              Sql database কে <code>relational database</code> বলে অন্যদিকে
              NoSql database কে
              <code> Non-relational database</code> বলে। <br /> Sql database এ
              ডেটাগুলো স্ট্রাকচারাল ভাবে সাজানো গোছানো থাকে। অন্যদিকে NoSql
              database এ ডেটা স্ট্রাকচারালভাবে সাজানো থাকে না। <br /> Sql
              database এ ডেটা গুলো টেবিল ভিত্তিক সাজানো থাকে। অন্যদিকে NoSql
              database এ ডেটাগুলো key-value pair হিসেবে থাকে।
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              What is the purpose of jwt and how does it work
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              Json Web Token সংক্ষেপে এটিকে ( jwt ) বলা হয়৷ jwt মুলত ডেটার
              নিরাপত্তা নিশ্চিত করে আদান প্রদান কাজ করা হয়। jwt এর token json
              object দিয়ে এনকোড করা হয়। Jwt server থেকে একটি টোকেন বানিয়ে
              ইউজারের আইডেন্টিটির জন্য ক্লাইন্ট সাইডে পাঠায়। এবং যখন কোন ডেটা
              ইউজার ব্যবহার করতে চায় তখন ইউজার এক্সেস টোকেন সার্ভার এ পাঠায় এবং
              সার্ভার চেক করে ইউজারের আইডেন্টিটি এবং সবকিছু ঠিকঠাক থাকলে ইউজার
              ডেটা ব্যবহার করতে পারে।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

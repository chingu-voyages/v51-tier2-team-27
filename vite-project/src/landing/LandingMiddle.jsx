import React from 'react';
import Arrow from '../assets/arrow-pink.png';

export default function LandingMiddle() {
  return (
    <div className="bg-beige p-8 mt-32">
      <h2 className="text-center text-2xl font-bold mb-8 text-[#575757]">
        Three Steps to <span className="text-[#68AEA7]">Smarter</span> Spending
      </h2>
      <div className="flex justify-around items-center relative">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2 text-[#575757]">1</div>
          <p className="font-bold mb-2 text-black">Create a Group</p>
          <p className="text-[#575757]">Click 'App Group' to create a new group, making it simple to split expenses and manage shared spending.</p>
        </div>
        <img src={Arrow} alt="Arrow" className="" />
        <div className="text-center">
          <div className="text-4xl font-bold mb-2 text-[#575757]">2</div>
          <p className="font-bold mb-2 text-black">Add an Expense</p>
          <p className="text-[#575757]">Click 'Add Expense' to log a shared cost and assign it to your group for easy tracking and splitting.</p>
        </div>
        <img src={Arrow} alt="Arrow" className="" />
        <div className="text-center">
          <div className="text-4xl font-bold mb-2 text-[#575757]">3</div>
          <p className="font-bold mb-2 text-black">Split Your Expenses</p>
          <p className="text-[#575757]">Click 'Split Expenses' to customize each member's contribution, allowing everyone to decide how much they want to pay.</p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import '../Quiz/Quiz.css'; // Import the CSS file for styling

const Quiz = () => {
  return (
    <div className="quiz-overview">
      <div className="quiz-title">Quiz</div>
      <div className="quiz-branches">
        {/* Left Branch */}
        <div className="branch branch-left">
          <div className="branch-title">Amendment & Landmark Cases</div>
          <div className="branch-description">
            This quiz dives deep into the amendments made to the Constitution and the landmark Supreme Court cases that shaped constitutional law in India.
          </div>
        </div>

        {/* Right Branch Top */}
        <div className="branch branch-right-top">
          <div className="branch-title">Rights and Duties</div>
          <div className="branch-description">
            This quiz focuses on the Fundamental Rights and Duties enshrined in the Constitution of India.
          </div>
        </div>

        {/* Right Branch Bottom */}
        <div className="branch branch-right-bottom">
          <div className="branch-title">Preamble and Structure</div>
          <div className="branch-description">
            This quiz is designed to test knowledge of the Preamble of the Indian Constitution, its components, and the overall structure and framework of the Constitution, including the distribution of powers between the Centre and the States.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
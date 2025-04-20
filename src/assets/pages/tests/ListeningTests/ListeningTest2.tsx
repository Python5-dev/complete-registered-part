import { Input, Radio } from "antd"
import { useState } from "react";

const ListeningTest2 = () => {
    const [BlanksAnswers, setBlanksAnswers] = useState({
      1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""
  });
  const [q2Answers, setQ2Answers] = useState<{ [key: number]: number }>({});
  const [q3Answers, setQ3Answers] = useState<{ [key: number]: number }>({});
  const [q4Answers, setQ4Answers] = useState<{ [key: number]: number }>({});

  const handleBlanksChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlanksAnswers(prev => ({
      ...prev,
      [index]: e.target.value
    }));
  };

  const handleQ2AnswerChange = (questionIndex:any) => (e:any) => {
    setQ2Answers(prevState => ({
      ...prevState,
      [questionIndex]: Number(e.target.value)
    }));
  };

  const handleQ3AnswerChange = (questionIndex:any) => (e:any) => {
    setQ3Answers(prevState => ({
      ...prevState,
      [questionIndex]: Number(e.target.value)
    }));
  };

  const handleQ4AnswerChange = (questionIndex:any) => (e:any) => {
    setQ4Answers(prevState => ({
      ...prevState,
      [questionIndex]: Number(e.target.value)
    }));
  };

  console.log(BlanksAnswers);

  return (
    <>
      <h1 className="text-[#003366] m-10">I. Fill in the Blanks</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li><span>The speaker wants to know more about<Input className='w-40 mx-2' value={BlanksAnswers[1]} name="1" onChange={handleBlanksChange(1)} />classes.</span></li>
        <li><span>The language centre is open from 8:30 am to<Input className='w-40 mx-2' value={BlanksAnswers[2]} name="2" onChange={handleBlanksChange(2)} /> pm.</span></li>
        <li><span>The receptionist's name is<Input className='w-40 mx-2' value={BlanksAnswers[3]} name="3" onChange={handleBlanksChange(3)} /> .</span></li>
        <li><span>The morning sessions begin at<Input className='w-40 mx-2' value={BlanksAnswers[4]} name="4" onChange={handleBlanksChange(4)} /> .</span></li>
        <li><span>The student is interested in the<Input className='w-40 mx-2' value={BlanksAnswers[5]} name="5" onChange={handleBlanksChange(5)} /> course.</span></li>
        <li><span>Students must pay their fees at the<Input className='w-40 mx-2' value={BlanksAnswers[6]} name="6" onChange={handleBlanksChange(6)} /> office.</span></li>
        <li><span>The centre closes at<Input className='w-40 mx-2' value={BlanksAnswers[7]} name="7" onChange={handleBlanksChange(7)} /> on weekends.</span></li>
        <li><span>The student wants to improve her<Input className='w-40 mx-2' value={BlanksAnswers[8]} name="8" onChange={handleBlanksChange(8)} /> skills.</span></li>
        <li><span>The<Input className='w-40 mx-2' value={BlanksAnswers[9]} name="9" onChange={handleBlanksChange(9)} /> room is located on the third floor.</span></li>
        <li><span>The college is located on<Input className='w-40 mx-2' value={BlanksAnswers[10]} name="10" onChange={handleBlanksChange(10)} /> Street.</span></li>
      </ol>
      <h1 className="text-[#003366] m-10">II. Fill the Circle (Choose One Option)</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          What kind of course is the student looking for?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Business English' },
              { value: 2, label: 'B. General English' },
              { value: 3, label: 'C. English Literature' },
              { value: 4, label: 'D. TOEFL Preparation' },
            ]}
          />
        </li>
        <li>
          What time do classes begin in the morning?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. 9:30' },
              { value: 2, label: 'B. 10:00' },
              { value: 3, label: 'C. 8:30' },
              { value: 4, label: 'D. 8:00' },
            ]}
          />
        </li>
        <li>
          What is the name of the receptionist?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Julia' },
              { value: 2, label: 'B. Sarah' },
              { value: 3, label: 'C. Amanda' },
              { value: 4, label: 'D. Linda' },
            ]}
          />

        </li>
        <li>
          How long do the courses last?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. 6 weeks' },
              { value: 2, label: 'B. 10 weeks' },
              { value: 3, label: 'C. 3 months' },
              { value: 4, label: 'D. 1 month' },
            ]}
          />
        </li>
        <li>
          When is the language centre closed?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Friday' },
              { value: 2, label: 'B. Saturday' },
              { value: 3, label: 'C. Sunday' },
              { value: 4, label: 'D. Both B and C' },
            ]}
          />
        </li>
        <li>
          What does the student want to improve?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Grammar' },
              { value: 2, label: 'B. Pronunciation' },
              { value: 3, label: 'C. Writing' },
              { value: 4, label: 'D. Reading' },
            ]}
          />
        </li>
        <li>
          Where is the administration office?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. First floor' },
              { value: 2, label: 'B. Second floor' },
              { value: 3, label: 'C. Ground floor' },
              { value: 4, label: 'D. Third floor' },
            ]}
          />
        </li>
        <li>
          What is required to enroll in a class?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Application form' },
              { value: 2, label: 'B. ID only' },
              { value: 3, label: 'C. Passport photo' },
              { value: 4, label: 'D. Entrance test' },
            ]}
          />
        </li>
        <li>
          What street is the college on?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: "A. King's Road" },
              { value: 2, label: 'B. George Street' },
              { value: 3, label: 'C. Queen Street' },
              { value: 4, label: 'D. Oxford Street' },
            ]}
          />
        </li>
        <li>
          What level is the student?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Elementary' },
              { value: 2, label: 'B. Pre-intermediate' },
              { value: 3, label: 'C. Intermediate' },
              { value: 4, label: 'D. Advanced' },
            ]}
          />
        </li>
      </ol>
      <h1 className="text-[#003366] m-10">III. Multiple Choice Questions</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          What is the latest time the centre closes on weekdays?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(1)}
            value={q3Answers[1]}
            options={[
              { value: 1, label: 'A. 5:00 pm' },
              { value: 2, label: 'B. 6:30 pm' },
              { value: 3, label: 'C. 7:00 pm' },
              { value: 4, label: 'D. 8:00 pm' },
            ]}
          />
        </li>
        <li>
          How many hours per week is the General English course?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(2)}
            value={q3Answers[2]}
            options={[
              { value: 1, label: 'A. 10' },
              { value: 2, label: 'B. 15' },
              { value: 3, label: 'C. 20' },
              { value: 4, label: 'D. 25' },
            ]}
          />
        </li>
        <li>
          What is the student required to bring on the first day?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(3)}
            value={q3Answers[3]}
            options={[
              { value: 1, label: 'A. ID and photos' },
              { value: 2, label: 'B. Pen and notebook' },
              { value: 3, label: 'C. Uniform' },
              { value: 4, label: 'D. Calculator' },
            ]}
          />
        </li>
        <li>
          How can students get help with accommodation?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(4)}
            value={q3Answers[4]}
            options={[
              { value: 1, label: 'A. Speak to receptionist' },
              { value: 2, label: 'B. Visit Room 101' },
              { value: 3, label: 'C. Ask at the information desk' },
              { value: 4, label: 'D. Send email' },
            ]}
          />
        </li>
        <li>
          When can students register for classes?
          <Radio.Group
            className='flex flex-col gap-4 my-2' 
            onChange={handleQ3AnswerChange(5)}
            value={q3Answers[5]}
            options={[
              { value: 1, label: 'A. Only Monday' },
              { value: 2, label: 'B. Any weekday' },
              { value: 3, label: 'C. Weekends only' },
              { value: 4, label: 'D. Anytime online' },
            ]}
          />
        </li>
        <li>
          Where is the timetable posted?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(6)}
            value={q3Answers[6]}
            options={[
              { value: 1, label: 'A. Online' },
              { value: 2, label: 'B. Reception' },
              { value: 3, label: 'C. Classrooms' },
              { value: 4, label: 'D. Noticeboard' },
            ]}
          />
        </li>
        <li>
          What is the first step in enrolling?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(7)}
            value={q3Answers[7]}
            options={[
              { value: 1, label: 'A. Pay fees' },
              { value: 2, label: 'B. Take placement test' },
              { value: 3, label: 'C. Choose course' },
              { value: 4, label: 'D. Visit website' },
            ]}
          />
        </li>
        <li>
          What kind of ID is needed to register?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(8)}
            value={q3Answers[8]}
            options={[
              { value: 1, label: 'A. Passport' },
              { value: 2, label: 'B. Student card' },
              { value: 3, label: 'C. Any valid ID' },
              { value: 4, label: 'C. Any valid ID' },
            ]}
          />
        </li>
        <li>
          What is the typical class size?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(9)}
            value={q3Answers[9]}
            options={[
              { value: 1, label: 'A. 5-10' },
              { value: 2, label: 'B. 10-15' },
              { value: 3, label: 'C. 15-20' },
              { value: 4, label: 'D. 20-25' },
            ]}
          />
        </li>
        <li>
          Where can students go for help with assignments?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(10)}
            value={q3Answers[10]}
            options={[
              { value: 1, label: 'A. Library' },
              { value: 2, label: 'B. Writing centre' },
              { value: 3, label: 'C. Teachers' },
              { value: 4, label: 'D. Computer lab' },
            ]}
          />
        </li>
      </ol>
      <h1 className="text-[#003366] m-10">IV. True / False</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          The student is interested in a Business English course.
          <Radio.Group
          className='ml-72'
          onChange={handleQ4AnswerChange(1)}
          value={q4Answers[1]}
          options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
          </li>
        <li>
          The centre opens at 8:00 am.
          <Radio.Group
          className='ml-28'
          onChange={handleQ4AnswerChange(2)}
          value={q4Answers[2]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          Amanda is the name of the receptionist.
          <Radio.Group
            className='ml-64'
            onChange={handleQ4AnswerChange(3)}
            value={q4Answers[3]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          Classes are not held on Sundays.
          <Radio.Group
          className='ml-[238px]'
          onChange={handleQ4AnswerChange(4)}
          value={q4Answers[4]}
          options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          The administration office is on the third floor.
          <Radio.Group
            className='ml-[162px]'
            onChange={handleQ4AnswerChange(5)}
            value={q4Answers[5]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          Students must bring a passport photo to register.
          <Radio.Group
            className='ml-[215px]'
            onChange={handleQ4AnswerChange(6)}
            value={q4Answers[6]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          The student wants to improve pronunciation.
          <Radio.Group
            className='ml-[243px]'
            onChange={handleQ4AnswerChange(7)}
            value={q4Answers[7]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          The centre is located on Queen Street.
          <Radio.Group
            className='ml-[276px]'
            onChange={handleQ4AnswerChange(8)}
            value={q4Answers[8]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          The General English course is 15 hours per week.
          <Radio.Group
            className='ml-[270px]'
            onChange={handleQ4AnswerChange(9)}
            value={q4Answers[9]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
        <li>
          The General English course is 15 hours per week.
          <Radio.Group
            className='ml-[221px]'
            onChange={handleQ4AnswerChange(10)}
            value={q4Answers[10]}
            options={[
              { value: 1, label: 'True' },
              { value: 2, label: 'False' },
            ]}
          />
        </li>
      </ol>
    </>
  )
}

export default ListeningTest2

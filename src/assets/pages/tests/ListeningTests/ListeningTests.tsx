import { Radio, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { AiOutlineClockCircle } from "react-icons/ai";
//However, we realize that you have not completed the test yet.
//Please click the "Retake" button below to take the test again before submitting.
const ListeningTests = () => {
  const [BlanksAnswers, setBlanksAnswers] = useState({
    1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: ""
  });
  const [q2Answers, setQ2Answers] = useState<{ [key: number]: number }>({});
  const [q3Answers, setQ3Answers] = useState<{ [key: number]: number }>({});
  const [q4Answers, setQ4Answers] = useState<{ [key: number]: number }>({});
  const submittedRef = useRef(false); // track if submitted already
  const [finalBand, setFinalBand] = useState<number | null>(null);
  console.log(q2Answers);

  const q1AnswersList = {
    1: "Leadership",
    2: "Leadership",
    3: "Democratic",
    4: "Coercive",
    5: "communicating",
    6: "Transactional",
    7: "Expert power",
    8: "hands-off",
    9: "vision",
    10: "status quo",
  }

  const q2AnswersList = {
    1: 2,
    2: 2,
    3: 3,
    4: 3,
    5: 1,
    6: 2,
    7: 2,
    8: 3,
    9: 2,
    10: 3,
  }

  const q3AnswersList = {
    1: 2,
    2: 3,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 3,
    8: 2,
    9: 3,
    10: 2,
  }

  const q4AnswersList = {
    1: 2,
    2: 1,
    3: 2,
    4: 1,
    5: 2,
    6: 1,
    7: 2,
    8: 1,
    9: 1,
    10: 2,
  }

  const audioRef = useRef(null);
  const lastAllowed = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Update lastAllowed when audio moves forward
    const onTimeUpdate = () => {
      const t = audio.currentTime;
      setCurrentTime(t);
      if (t > lastAllowed.current) lastAllowed.current = t;
    };

    // Enforce no seeking every 100ms
    const interval = setInterval(() => {
      if (audio.currentTime < lastAllowed.current) {
        audio.currentTime = lastAllowed.current;
      }
    }, 100);

    audio.addEventListener("timeupdate", onTimeUpdate);

    // Auto-play on mount
    audio.play().then(() => setIsPlaying(true)).catch(() => {});

    return () => {
      clearInterval(interval);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  // Format seconds -> mm:ss
  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${String(s).padStart(2, "0")}`;
  };


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

  console.log(BlanksAnswers)
  console.log(q4Answers)

  const handleSubmit = () => {
    let correctAnswersCount = 0;
    console.log("Submit")
    for (let i = 1; i <= 10; i++) {
      if (BlanksAnswers[i] === q1AnswersList[i]) {
        correctAnswersCount++;
      }
    }

    for (let i = 1; i <= 10; i++) {
      if (q2Answers[i] === q2AnswersList[i]) {
        correctAnswersCount++;
      }
    }
  
    // Check Multiple Choice answers
    for (let i = 1; i <= 10; i++) {
      if (q3Answers[i] === q3AnswersList[i]) {
        correctAnswersCount++;
      }
    }
  
    // Check True/False answers
    for (let i = 1; i <= 10; i++) {
      if (q4Answers[i] === q4AnswersList[i]) {
        correctAnswersCount++;
      }
    }

    const band = getListeningBand(correctAnswersCount);
    setFinalBand(band); // show in UI
    return band;
  }

  const getListeningBand = (score:any) => {
    if (score >= 39) return 9;
    if (score >= 37) return 8.5;
    if (score >= 35) return 8;
    if (score >= 32) return 7.5;
    if (score >= 30) return 7;
    if (score >= 26) return 6.5;
    if (score >= 23) return 6;
    if (score >= 18) return 5.5;
    if (score >= 16) return 5;
    if (score >= 13) return 4.5;
    if (score >= 10) return 4;
    if (score >= 8) return 3.5;
    if (score >= 6) return 3;
    if (score >= 4) return 2.5;
    if (score === 3) return 2;
    if (score === 2) return 1.5;
    if (score === 1) return 1;
    return 0;
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      if (!submittedRef.current) {
        submittedRef.current = true;
        console.log(handleSubmit()); // call once
      }
      return <span className="text-red-600">Time's up!</span>;
    } else {
      return (
        <span>
          {String(seconds).padStart(2, '0')}
          <span className="text-xl text-black font-light">minutes remaining</span>
        </span>
      );
    }
  };

  return (
    <div>
      <div className="text-[#003366] font-black text-4xl flex justify-center items-center">
        <AiOutlineClockCircle className='size-8' />
        <Countdown date={Date.now() + 1000 * 60 * 30} renderer={renderer} />
      </div>
      <audio controls className='w-full'>
        <source src="/audios/listening_test.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h1 className="text-[#003366] m-10">I. Fill in the Blanks</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li><span className='flex items-center'>The term <Input className='w-40 mx-2' value={BlanksAnswers[1]} name="1" onChange={handleBlanksChange(1)} /> is used for human beings' ability to control or manage other individuals or groups.</span></li>
        <li><span className='flex items-center'><Input className='w-40 mx-2' name="2" value={BlanksAnswers[2]} onChange={handleBlanksChange(2)} /> is the process through which leaders influence people to achieve goals.</span></li>
        <li><span className='flex items-center'><Input className='w-40 mx-2' name="3" value={BlanksAnswers[3]} onChange={handleBlanksChange(3)} /> leadership involves delegating authority and empowering employees.</span></li>
        <li><span className='flex items-center'><Input className='w-40 mx-2' name="4" value={BlanksAnswers[4]} onChange={handleBlanksChange(4)} /> power is based on a leader’s ability to punish non-compliance.</span></li>
        <li><span className='flex items-center'>Transformational leaders focus on <Input className='w-40 mx-2' name="5" value={BlanksAnswers[5]} onChange={handleBlanksChange(5)} /> the vision and inspiring followers.</span></li>
        <li><span className='flex items-center'><Input className='w-40 mx-2' name="6" value={BlanksAnswers[6]} onChange={handleBlanksChange(6)} /> leaders tend to clarify expectations and reward performance.</span></li>
        <li><span className='flex items-center'><Input className='w-40 mx-2' name="7" value={BlanksAnswers[7]} onChange={handleBlanksChange(7)}/> is the ability to influence others because of special knowledge or skill.</span></li>
        <li><span className='flex items-center'>Laissez-faire leadership style is also called <Input className='w-40 mx-2' name="8" value={BlanksAnswers[8]} onChange={handleBlanksChange(8)} /> leadership.</span></li>
        <li><span className='flex items-center'>One major component of leadership is setting a <Input className='w-40 mx-2' name="9" value={BlanksAnswers[9]} onChange={handleBlanksChange(9)} /> for the organization.</span></li>
        <li><span className='flex items-center'>In transactional leadership, the focus is on maintaining the <Input className='w-40 mx-2' name="10" value={BlanksAnswers[10]} onChange={handleBlanksChange(10)} />.</span></li>
      </ol>
      <h1 className="text-[#003366] m-10">II. Fill the Circle (Choose One Option)</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          Which of the following is *not* a type of power?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Coercive' },
              { value: 2, label: 'B. Rational' },
              { value: 3, label: 'C. Reward' },
              { value: 4, label: 'D. Legitimate' },
            ]}
          />
        </li>
        <li>
          Transformational leadership emphasizes:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(2)}
            value={q2Answers[2]}
            options={[
              { value: 1, label: 'A. Strict rules' },
              { value: 2, label: 'B. Vision and inspiration' },
              { value: 3, label: 'C. Punishment' },
              { value: 4, label: 'D. Avoiding risks' },
            ]}
          />
        </li>
        <li>
          The leadership style where the leader avoids making decisions is:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(3)}
            value={q2Answers[3]}
            options={[
              { value: 1, label: 'A. Autocratic' },
              { value: 2, label: 'B. Democratic' },
              { value: 3, label: 'C. Laissez-faire' },
              { value: 4, label: 'D. Charismatic' },
            ]}
          />
        </li>
        <li>
          Expert power comes from:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(4)}
            value={q2Answers[4]}
            options={[
              { value: 1, label: 'A. Position' },
              { value: 2, label: 'B. Rewards' },
              { value: 3, label: 'C. Knowledge' },
              { value: 4, label: 'D. Threats' },
            ]}
          />
        </li>
        <li>
          The ability to influence others due to formal authority is:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(5)}
            value={q2Answers[5]}
            options={[
              { value: 1, label: 'A. Legitimate power' },
              { value: 2, label: 'B. Expert power' },
              { value: 3, label: 'C. Coercive power' },
              { value: 4, label: 'D. Referent power' },
            ]}
          />
        </li>
        <li>
          Transactional leaders use:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(6)}
            value={q2Answers[6]}
            options={[
              { value: 1, label: 'A. Vision' },
              { value: 2, label: 'B. Rewards and punishments' },
              { value: 3, label: 'C. Collaboration' },
              { value: 4, label: 'D. Shared leadership' },
            ]}
          />
        </li>
        <li>
          Which leadership style promotes team involvement and shared decisions?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(7)}
            value={q2Answers[7]}
            options={[
              { value: 1, label: 'A. Autocratic' },
              { value: 2, label: 'B. Democratic' },
              { value: 3, label: 'C. Bureaucratic' },
              { value: 4, label: 'D. Laissez-faire' },
            ]}
          />
        </li>
        <li>
          Referent power is based on:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(8)}
            value={q2Answers[8]}
            options={[
              { value: 1, label: 'A. Position' },
              { value: 2, label: 'B. Knowledge' },
              { value: 3, label: 'C. Admiration' },
              { value: 4, label: 'D. Fear' },
            ]}
          />
        </li>
        <li>
          Charismatic leaders inspire followers through:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(9)}
            value={q2Answers[9]}
            options={[
              { value: 1, label: 'A. Strict control' },
              { value: 2, label: 'B. Personal charm' },
              { value: 3, label: 'C. Technical knowledge' },
              { value: 4, label: 'D. Organizational hierarchy' },
            ]}
          />
        </li>
        <li>
          Autocratic leadership involves:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(10)}
            value={q2Answers[10]}
            options={[
              { value: 1, label: 'A. Group input' },
              { value: 2, label: 'B. Freedom in decision-making' },
              { value: 3, label: 'C. Centralized control' },
              { value: 4, label: 'D. Empowerment' },
            ]}
          />
        </li>
      </ol>
      <h1 className="text-[#003366] m-10">III. Multiple Choice Questions</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          Which of the following is true about transformational leaders?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(1)}
            value={q3Answers[1]}
            options={[
              { value: 1, label: 'A. They rely solely on punishment' },
              { value: 2, label: 'B. They inspire and motivate followers' },
              { value: 3, label: 'C. They avoid responsibility' },
              { value: 4, label: 'D. They work without feedback' },
            ]}
          />
        </li>
        <li>
          Which power is related to admiration and respect from others?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(2)}
            value={q3Answers[2]}
            options={[
              { value: 1, label: 'A. Coercive' },
              { value: 2, label: 'B. Expert' },
              { value: 3, label: 'C. Referent' },
              { value: 4, label: 'D. Legitimate' },
            ]}
          />
        </li>
        <li>
          Which leadership style best fits creative work environments?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(3)}
            value={q3Answers[3]}
            options={[
              { value: 1, label: 'A. Autocratic' },
              { value: 2, label: 'B. Laissez-faire' },
              { value: 3, label: 'C. Bureaucratic' },
              { value: 4, label: 'D. Transactional' },
            ]}
          />
        </li>
        <li>
          Democratic leaders are known for:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(4)}
            value={q3Answers[4]}
            options={[
              { value: 1, label: 'A. Making all decisions alone' },
              { value: 2, label: 'B. Encouraging team input' },
              { value: 3, label: 'C. Punishing mistakes' },
              { value: 4, label: 'D. Avoiding leadership responsibility' },
            ]}
          />
        </li>
        <li>
          The leadership style with low involvement in team decision-making is:
          <Radio.Group
            className='flex flex-col gap-4 my-2' 
            onChange={handleQ3AnswerChange(5)}
            value={q3Answers[5]}
            options={[
              { value: 1, label: 'A. Transformational' },
              { value: 2, label: 'B. Democratic' },
              { value: 3, label: 'C. Autocratic' },
              { value: 4, label: 'D. Laissez-faire' },
            ]}
          />
        </li>
        <li>
          Which of the following powers is the most sustainable in the long term?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(6)}
            value={q3Answers[6]}
            options={[
              { value: 1, label: 'A. Coercive' },
              { value: 2, label: 'B. Reward' },
              { value: 3, label: 'C. Expert' },
              { value: 4, label: 'D. Legitimate' },
            ]}
          />
        </li>
        <li>
          Transactional leadership is primarily focused on:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(7)}
            value={q3Answers[7]}
            options={[
              { value: 1, label: 'A. Building personal relationships' },
              { value: 2, label: 'B. Vision and mission' },
              { value: 3, label: 'C. Tasks and rewards' },
              { value: 4, label: 'C. Tasks and rewards' },
            ]}
          />
        </li>
        <li>
          The concept of leadership includes all except:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(8)}
            value={q3Answers[8]}
            options={[
              { value: 1, label: 'A. Influencing people' },
              { value: 2, label: 'B. Delegating all work' },
              { value: 3, label: 'C. Setting a direction' },
              { value: 4, label: 'D. Motivating followers' },
            ]}
          />
        </li>
        <li>
          A leader who acts as a mentor and promotes innovation is a:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(9)}
            value={q3Answers[9]}
            options={[
              { value: 1, label: 'A. Transactional leader' },
              { value: 2, label: 'B. Laissez-faire leader' },
              { value: 3, label: 'C. Transformational leader' },
              { value: 4, label: 'D. Bureaucratic leader' },
            ]}
          />
        </li>
        <li>
          A power type based on fear or punishment is:
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(10)}
            value={q3Answers[10]}
            options={[
              { value: 1, label: 'A. Reward power' },
              { value: 2, label: 'B. Coercive power' },
              { value: 3, label: 'C. Referent power' },
              { value: 4, label: 'D. Expert power' },
            ]}
          />
        </li>
      </ol>
      <h1 className="text-[#003366] m-10">IV. True / False</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          Leadership and management are exactly the same.
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
          Transactional leadership is based on a system of rewards and punishments.
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
          Autocratic leaders always encourage team discussions.
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
          Referent power is earned through respect and admiration.
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
          Transformational leaders are more concerned with rules than vision.
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
          Expert power can come from both experience and education.
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
          Laissez-faire leaders are deeply involved in all decisions.
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
          Democratic leadership promotes group participation.
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
          Coercive power often leads to resistance in followers.
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
          Leadership is only needed at the top level of an organization.
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
      <button className='bg-[#003366] text-white py-2 px-8 rounded-md mx-10 mb-10' onClick={() => {
    if (!submittedRef.current) {
      submittedRef.current = true;
      const band = handleSubmit();
      alert(`Your band score is: ${band}`);
    }
  }}>Submit</button>
    </div>
  )
}

export default ListeningTests;
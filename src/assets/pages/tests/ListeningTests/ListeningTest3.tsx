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
        <li><span>Keiko Uchini is a<Input className='w-40 mx-2' value={BlanksAnswers[1]} name="1" onChange={handleBlanksChange(1)} />national.</span></li>
        <li><span>The Tower in Bicentennial Park stands<Input className='w-40 mx-2' value={BlanksAnswers[2]} name="2" onChange={handleBlanksChange(2)} />metres high.</span></li>
        <li><span>The Olympic site includes a stadium for<Input className='w-40 mx-2' value={BlanksAnswers[3]} name="3" onChange={handleBlanksChange(3)} />and field.</span></li>
        <li><span>The<Input className='w-40 mx-2' value={BlanksAnswers[4]} name="4" onChange={handleBlanksChange(4)} />was discovered in 1908 to enhance flavor.</span></li>
        <li><span><Input className='w-40 mx-2' value={BlanksAnswers[5]} name="5" onChange={handleBlanksChange(5)} /> is a flavor enhancer commonly used in Asian cuisine.</span></li>
        <li><span>The train system is preferred because it is <Input className='w-40 mx-2' value={BlanksAnswers[6]} name="6" onChange={handleBlanksChange(6)} />.</span></li>
        <li><span>Keiko plays<Input className='w-40 mx-2' value={BlanksAnswers[7]} name="7" onChange={handleBlanksChange(7)} />on weekends with friends.</span></li>
        <li><span>The mangroves are accessible via a <Input className='w-40 mx-2' value={BlanksAnswers[8]} name="8" onChange={handleBlanksChange(8)} />.</span></li>
        <li><span>The frog pond existed before the<Input className='w-40 mx-2' value={BlanksAnswers[9]} name="9" onChange={handleBlanksChange(9)} />was designed.</span></li>
        <li><span>The number of presentations per hour is <Input className='w-40 mx-2' value={BlanksAnswers[10]} name="10" onChange={handleBlanksChange(10)} />.</span></li>
      </ol>
      <h1 className="text-[#003366] m-10">II. Fill the Circle (Choose One Option)</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          What is Keiko's room number?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. 20B' },
              { value: 2, label: 'B. 21C' },
              { value: 3, label: 'C. 22A' },
              { value: 4, label: 'D. 23D' },
            ]}
          />
        </li>
        <li>
          How long is the Bicentennial Tower?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. 10 meters' },
              { value: 2, label: 'B. 12 meters' },
              { value: 3, label: 'C. 15 meters' },
              { value: 4, label: ' D. 8 meters' },
            ]}
          />
        </li>
        <li>
          Where are rowing boats available?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Lake' },
              { value: 2, label: 'B. Frog Pond' },
              { value: 3, label: 'C. Ornamental Pond' },
              { value: 4, label: 'D. Rose Garden' },
            ]}
          />

        </li>
        <li>
          Which plant was originally used in Japanese cooking?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Seaweed' },
              { value: 2, label: 'B. Spinach' },
              { value: 3, label: 'C. Mint' },
              { value: 4, label: 'D. Basil' },
            ]}
          />
        </li>
        <li>
          MSG contains what percentage of glutamate?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. 12.2%' },
              { value: 2, label: 'B. 78.2%' },
              { value: 3, label: 'C. 56.5%' },
              { value: 4, label: 'D. 9.6%' },
            ]}
          />
        </li>
        <li>
          What did Dr. White emphasize?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Long presentation' },
              { value: 2, label: 'B. Plenty of visuals' },
              { value: 3, label: 'C. Reading aloud' },
              { value: 4, label: 'D. No questions' },
            ]}
          />
        </li>
        <li>
          Which sport did Keiko stop playing?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Tennis' },
              { value: 2, label: 'B. Handball' },
              { value: 3, label: 'C. Swimming' },
              { value: 4, label: 'D. Cycling' },
            ]}
          />
        </li>
        <li>
          Where is the viewing shelter for bird watchers?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Tower' },
              { value: 2, label: 'B. Frog Pond' },
              { value: 3, label: 'C. Estuary' },
              { value: 4, label: 'D. Nature Reserve' },
            ]}
          />
        </li>
        <li>
          What is a favorite with biology school parties?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. Outdoor classroom' },
              { value: 2, label: 'B. Olympic arena' },
              { value: 3, label: 'C. Lake' },
              { value: 4, label: 'D. Cafe' },
            ]}
          />
        </li>
        <li>
          Where are the Olympic buildings located from the Tower?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ2AnswerChange(1)}
            value={q2Answers[1]}
            options={[
              { value: 1, label: 'A. East' },
              { value: 2, label: 'B. West' },
              { value: 3, label: 'C. North' },
              { value: 4, label: 'D. South' },
            ]}
          />
        </li>
      </ol>
      <h1 className="text-[#003366] m-10">III. Multiple Choice Questions</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          What nationality is Keiko?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(1)}
            value={q3Answers[1]}
            options={[
              { value: 1, label: 'A. Chinese' },
              { value: 2, label: 'B. Japanese' },
              { value: 3, label: 'C. Korean' },
              { value: 4, label: 'D. Vietnamese' },
            ]}
          />
        </li>
        <li>
          What is the purpose of the ornamental pond?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(2)}
            value={q3Answers[2]}
            options={[
              { value: 1, label: 'A. Swimming' },
              { value: 2, label: 'B. Rowing' },
              { value: 3, label: 'C. Decoration' },
              { value: 4, label: 'D. Boating' },
            ]}
          />
        </li>
        <li>
          What do school parties often use for learning?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(3)}
            value={q3Answers[3]}
            options={[
              { value: 1, label: 'A. Cafe' },
              { value: 2, label: 'B. Outdoor classroom' },
              { value: 3, label: 'C. Viewing tower' },
              { value: 4, label: 'D. Car park' },
            ]}
          />
        </li>
        <li>
          What is the benefit of MSG?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(4)}
            value={q3Answers[4]}
            options={[
              { value: 1, label: 'A. Adds salt' },
              { value: 2, label: 'B. Enhances flavor' },
              { value: 3, label: 'C. Adds sweetness' },
              { value: 4, label: 'D. Removes bitterness' },
            ]}
          />
        </li>
        <li>
          What did Dr. White suggest for presentations?
          <Radio.Group
            className='flex flex-col gap-4 my-2' 
            onChange={handleQ3AnswerChange(5)}
            value={q3Answers[5]}
            options={[
              { value: 1, label: 'A. Avoid visuals' },
              { value: 2, label: 'B. Include plenty of visuals' },
              { value: 3, label: 'C. Speak slowly' },
              { value: 4, label: 'D. Make it short' },
            ]}
          />
        </li>
        <li>
          What is Keiko's preferred leisure activity?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(6)}
            value={q3Answers[6]}
            options={[
              { value: 1, label: 'A. Handball' },
              { value: 2, label: 'B. Tennis' },
              { value: 3, label: 'C. Swimming' },
              { value: 4, label: 'D. Soccer' },
            ]}
          />
        </li>
        <li>
          Where is the frog pond in relation to the boardwalk?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(7)}
            value={q3Answers[7]}
            options={[
              { value: 1, label: 'A. Before' },
              { value: 2, label: 'B. Behind' },
              { value: 3, label: 'C. Beyond' },
              { value: 4, label: 'D. Next to' },
            ]}
          />
        </li>
        <li>
          Why do visitors climb the tower?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(8)}
            value={q3Answers[8]}
            options={[
              { value: 1, label: 'A. To take pictures' },
              { value: 2, label: 'To see Olympic site' },
              { value: 3, label: 'C. To exercise' },
              { value: 4, label: 'D. To watch sports' },
            ]}
          />
        </li>
        <li>
          What is recommended for giving presentations?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(9)}
            value={q3Answers[9]}
            options={[
              { value: 1, label: 'A. Long paragraphs' },
              { value: 2, label: 'B. Just reading slides' },
              { value: 3, label: 'C. Clear visuals' },
              { value: 4, label: 'D. No visuals' },
            ]}
          />
        </li>
        <li>
          Which feature existed before the park’s design?
          <Radio.Group
            className='flex flex-col gap-4 my-2'
            onChange={handleQ3AnswerChange(10)}
            value={q3Answers[10]}
            options={[
              { value: 1, label: 'A. Cafe' },
              { value: 2, label: 'B. Frog pond' },
              { value: 3, label: 'C. Tower' },
              { value: 4, label: 'D. Estuary' },
            ]}
          />
        </li>
      </ol>
      <h1 className="text-[#003366] m-10">IV. True / False</h1>
      <ol className="list-decimal m-14 leading-[80px] text-[18px] text-[#003366]">
        <li>
          Keiko is a vegetarian.
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
          The rose garden is located in the west of the park.
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
          Keiko prefers to live with families with young children.
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
          Public transport in the city is always on time.
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
          The Olympic site includes a car park.
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
          The boat shed is visible from the Tower.
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
          Primary schools often use the outdoor classroom.
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
          MSG was discovered in 1956.
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
          The Tower is the center of the nature reserve.
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
          Dr. White said the presentation would be graded.
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

import { Radio } from "antd";

const Test1 = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="text-[#003366] m-10 text-center">How the mind ages</h1>
        <p className="text-justify p-5">
          The way mental function changes is largely determined by three factors-mental lifestyle, the impact of chronic disease and flexibility of the mind.
          <br /><br />
          Experiments have shown that younger monkeys consistently outperform their older colleagues on memory tests. Formerly, psychologists concluded that memory and other mental functions in humans deteriorate over time because of changes in the brain. Thus mental decline after young adulthood appeared inevitable. The truth, however, is not quite so simple.
          <br /><br />
          Stanley Rapoport at the National Institute of Health in the United States measured the flow of blood in the brains of old and young people as they completed different tasks. Since blood flow reflects neural activity. Rapoport could compare which networks of neurons were the same, the neural networks they used were significantly different. The older subjects used different internal strategies to accomplish comparable results at the same time,'Rapoport says. At the Georgia Institute of Technology, psychologist Timothy Salthouse compared a group of fast and accurate typists of college age with another group in their 60s. Both groups typed 60 words a minute. The older typists, it turned out, achieved their speed with cunning little strategies that made them more efficient than their younger counterparts. They made fewer finger shifts, gaining a fraction of a second here and there. They also read ahead in the test. The neural networks involved in typing appear to have been reshaped to compensate for losses in motor skills or other age changes.
          <br /><br />
          In fact, there's evidence that deterioration in mental functions can actually be reversed. Neuropsychologist Marion Diamond at the University of California has shown that mental activity maks neurons sprout new dendrites* which establish connections with other neurons. The dendrites shrink when the mind is idle. For example,'when a rat is kept in isolation, the animal's brain shrinks, but if we put that rat with other rats in a large cage and give them an assortment of toys, we can show, after four days, significant differences in its brain.'says Diamond. After a month in the enriched surroundings, the whole cerebral cortex has expanded, as has its blood supply.'But even in the enriched surroundings, rats get bored unless the toys are varied. Animals are just like we are. They need stimulation,'says Diamond. A busy mental lifestyle keeps the human mind fit, says Warner Schaie of Penn State University. ‘People who regularly participate in challenging tasks retain their intellectual abilities better than mental couch potatoes.'
          <br /><br />
          In his studies, Schaie detected a decline in mental function among individuals who underwent lengthy stays in hospital for chronic illness. He postulated it might be due to the mental passivity encouraged by hospital routine.
          <br /><br />
          One of the most profoundly important mental functions is memory. Memory exists in more than one form, what we call knowledge- facts- is what psychologists such as Harry Bahrick of Ohio Wesleyan University call semantic memory. Events, conversations and occurrences in time and space, on the other hand, make up episodic memory. It's true that episodic memory begins to decline when most people are in their 50s, but it's never perfect at any age.
          <br /><br />
          Probing the longevity of knowledge, Bahrick tested 1,000 high school graduates to see how well they remembered the school subject algebra. Some had completed the course a month before, other 50 years earlier. Surprisingly, he found that a person's grasp of algebra did not depend on how long ago he'd taken the course. The determining factor was the duration of instruction. Those who had spent only a few months learning algebra forgot most of it within two or three years while others who had been instructed for longer remembered better. According to Bahrick,'the long-term residue of knowledge remains stable over the decades, independent of the age of the person and the memory.'
          <br /><br />
          Perhaps even more important than the ability to remember is the ability to manage memory- a mental function known as metamemory.'You could say metamemory is a byproduct of going to school,'says psychologist Robert Kail of Purdue University,'The question-and-answer process,especially exam taking, helps children learn and teaches them how their memory functions.This may be one reason why the better educated a person is, the more likely they are to perform well in many aspects of life and in psychological assessments: A group of adult novice chess players were compared with a group of child experts at the game. But when asked to remember the patterns of chess pieces arranged on a board, the children won.' Because they'd played a lot of chess, their knowledge of chess was better organized than that of the adults, and their existing knowledge of chess served as a framework for new memory,'explains Kail. Cognitive style, another factor in maintaining mental function, is what Schaie calls the ability to adapt and roll with life's punches.'He measured mental flexibility with questions and tests requiring people to carry out in an offbeat way an everyday activity they had done millions of times. One example was asking people to copy a paragraph substituting uppercase letters for lowercase ones. These tests seem silly, but flexible-minded people manage to complete them,'says Schaie. The rigid person responds with tension instead and performs poorly. Those who score highly on tests of cognition at an advanced age are those who tested high in mental flexibility at middle age'.
          <br /><br />
          On a more optimistic note, one mental resource that only improves with time is specialized knowledge. Crystallised intelligence about one's occupation apparently does not decline at all until at least age 75. Vocabulary is another such specialized form of knowledge. Research clearly shows that vocabulary develops with time. Retired teachers and journalists consistently score higher on tests of vocabulary and general information than college students.
        </p>
      </div>
      <div className="w-1/2 p-5">
        <h2 className="text-[#003366] p-0 my-5">Questions 1-3</h2>
        <p>
          Choose the correct letter <span className="font-black">A, B, C or D.</span>
          <br /><br />
          Write the correct letter in boxes <span className="font-black">1-3</span> on your answer sheet
        </p>

        <h4 className="p-0 text-[#282828] mt-8">1. What does the writer say about the performance of older typists on the test?</h4>
        <Radio.Group
            className='flex flex-col gap-4 my-2'
            // onChange={handleQ2AnswerChange(1)}
            // value={q2Answers[1]}
            options={[
              { value: 1, label: 'They used different motor skills from younger typists.' },
              { value: 2, label: 'They had been more efficiently trained than younger typists.' },
              { value: 3, label: 'They used more time-saving techniques than younger typists.' },
              { value: 4, label: 'They had better concentration skills than younger typists.' },
            ]}
          />
        <h4 className="p-0 text-[#282828] mt-8">2. The experiment with the rats showed that</h4>
        <Radio.Group
            className='flex flex-col gap-4 my-2'
            // onChange={handleQ2AnswerChange(1)}
            // value={q2Answers[1]}
            options={[
              { value: 1, label: 'brain structure only changed when the rats were given a familiar toy' },
              { value: 2, label: 'the rats became anxious after a lengthy period of time alone' },
              { value: 3, label: 'the rats lived longer then they were part of a social group' },
              { value: 4, label: "the rats'brains expanded or shrank depending on the level of mental activity" },
            ]}
          />
        <h4 className="p-0 text-[#282828] mt-8">3. A comparison between adults and children who played chess showed that</h4>
        <Radio.Group
            className='flex flex-col gap-4 my-2'
            // onChange={handleQ2AnswerChange(1)}
            // value={q2Answers[1]}
            options={[
              { value: 1, label: 'the children were as capable as the adults of remembering a series of numbers' },
              { value: 2, label: 'the children had better recall of the layout of pieces' },
              { value: 3, label: 'the adults stored memories of chess moves in a more logical manner' },
              { value: 4, label: 'the adults had clearer memories of chess games they had played' },
            ]}
          />
        <h2 className="text-[#003366] p-0 my-5">Questions 4-9</h2>
        Complete the summary below.
        <br /><br />
        Choose <span className="text-red-600 font-black">ONE WORD ONLY</span> ONE WORD ONLY from the passage for each answer.
        <br /><br />
        Write your answers in boxes <span className="font-black">4-9</span> on your answer sheet.
        <br /><br />
        <p className="leading-[60px]">Psychologists distinguish between two different types of memory: <input placeholder="4" className="h-8 w-auto mx-1 rounded-full inline-block text-center focus:placeholder-transparent placeholder-[#003366] placeholder:text-center placeholder:font-black placeholder:text-xl"/>
        and 
        <input placeholder="5" className="h-8 w-auto mx-1 rounded-full inline-block text-center focus:placeholder-transparent placeholder-[#003366] placeholder:text-center placeholder:font-black placeholder:text-xl"/>
        memory. A study was conducted into people's knowledge of 
        <input placeholder="6" className="h-8 w-auto mx-1 rounded-full inline-block text-center focus:placeholder-transparent placeholder-[#003366] placeholder:text-center placeholder:font-black placeholder:text-xl"/>        to determine recall ability. This aspect of memory was found to be a function not of age but rather of length of tuition.
        School also helps with a brain function called 
        <input placeholder="7" className="h-8 w-auto mx-1 rounded-full inline-block text-center focus:placeholder-transparent placeholder-[#003366] placeholder:text-center placeholder:font-black placeholder:text-xl"/>         . This is why a more highly educated person is generally more successful and does better in 
        <input placeholder="8" className="h-8 w-auto mx-1 rounded-full inline-block text-center focus:placeholder-transparent placeholder-[#003366] placeholder:text-center placeholder:font-black placeholder:text-xl"/>        tests.

        Some of our mental functions remain unaffected by age or even improve. For example, as we get older, our knowledge of 
        <input placeholder="9" className="h-8 w-auto mx-1 rounded-full inline-block text-center focus:placeholder-transparent placeholder-[#003366] placeholder:text-center placeholder:font-black placeholder:text-xl"/>        increases.
        </p>
        <h2 className="text-[#003366] p-0 my-5">Questions 10-13</h2>
        Look at the following statements and the list of people below.
        <br /><br />
        Match each statement with the correct person, <span className="font-black">A-E</span>.
        <br /><br />
        Write the correct letter, <span className="font-black">A-E</span>, in boxes <span className="font-black">10-13</span> on your answer sheet.



      </div>
    </div>
  )
}

export default Test1;
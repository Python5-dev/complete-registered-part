import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Listening',
    children: (
      <div className='text-base'>
        <ul className='list-disc'>
          <li><span className='font-black'>Duration:</span> 30 minutes</li>
          <li><span className='font-black'>Format:</span> 4 sections, 40 questions</li>
          <li>The Listening section consists of four sections, each containing 10 questions. You will hear recordings of native English
            speakers, and you will answer a variety of questions based on what you hear. The recordings may include monologues and
            conversations. The questions test your ability to understand the main ideas, specific details, opinions, and attitudes of the
            speakers. Question types may include multiple choice, matching, form completion, sentence completion, and summary completion.
            You will have 10 minutes at the end of the Listening section to transfer your answers to an answer sheet.</li>
        </ul>
        <img src="ListeningTest-removebg-preview.png" alt="" className='mx-auto' />
      </div>
    ),
  },
  {
    key: '2',
    label: 'Speaking',
    children: (
      <div className='text-base'>
        <ul className='list-disc'>
          <li><span className='font-black'>Duration:</span> 11-14 minutes</li>
          <li><span className='font-black'>Format:</span> 3 parts</li>
          <li>The Speaking section is a face-to-face interview with a certified IELTS examiner. It consists of three parts:
            Part 1: You will be asked general questions about yourself, your interests, and everyday topics. This part is designed to help you relax and feel comfortable.
            Part 2: You will be given a topic card and one minute to prepare a short talk on the topic. You will then speak for up to two minutes. The examiner may ask some follow-up questions.
            Part 3: You will have a more in-depth discussion with the examiner about issues related to the topic you spoke about in Part 2. This part allows you to demonstrate your ability to express and justify your opinions.
          </li>
        </ul>
        <img src="Speaking Test.webp" alt="" className='mx-auto' />
      </div>
    ),
  },
  {
    key: '3',
    label: 'Reading',
    children: (
      <div className='text-base'>
        <ul className='list-disc'>
          <li><span className='font-black'>Duration:</span> 60 minutes</li>
          <li><span className='font-black'>Format:</span> 3 passages, 40 questions</li>
          <li>
            The Reading section has 40 questions and is different for the Academic and General Training versions.
            <ol className='list-decimal'>
              <li><span className='font-black'>Academic Reading:</span> This section presents you with three long academic texts, often from journals, books, or newspapers.
                The texts cover a range of topics related to academic subjects. The questions assess your ability to understand the main
                ideas, specific details, opinions, attitudes, and purpose of the writer. Question types may include multiple choice,
                matching, True/False/Not Given, Yes/No/Not Given, sentence completion, summary completion, and diagram labeling.
              </li>
                <li><span className='font-black'>General Training Reading:</span> This section presents you with a variety of texts, including extracts from notices, advertisements,
                  leaflets, and official documents. There are three sections. Section 1 contains two or three short factual texts related to 
                  everyday life. Section 2 features two short factual texts related to work-related issues. Section 3 contains one longer text
                  on a topic of general interest. The questions assess your ability to locate information, understand the main ideas, and
                  follow detailed instructions. Question types are similar to those in the Academic Reading test.
                </li>
            </ol>
        </li>
      </ul>
      <img src="Reading Test.jpeg" alt="" className='mx-auto' />
    </div>
    ),
  },
  {
    key: '4',
    label: 'Writing',
    children: (
      <div className='text-base'>
        <ul className='list-disc'>
          <li><span className='font-black'>Duration:</span> 60 minutes</li>
          <li><span className='font-black'>Format:</span> 2 tasks</li>
          <li>The Writing section also has 40 questions and is different for the Academic and General Training versions.
            <ol className='list-decimal'>
              <li><span className='font-black'>Academic Writing:</span> This section consists of two tasks. Task 1 requires you to describe a visual
                (e.g., a graph, chart, or diagram) in your own words. You are assessed on your ability to select and report the main features,
                 make comparisons, and present the information clearly. Task 2 requires you to write an essay on a given topic. You are
                 assessed on your ability to present a clear argument, support your opinions with evidence, and organize your ideas
                 logically.</li>
              <li><span className='font-black'>General Training Writing:</span> This section also consists of two tasks. Task 1 requires you to write a letter requesting
                information or explaining a situation. You are assessed on your ability to write in a clear and appropriate style. Task 2
                requires you to write an essay on a given topic. You are assessed on your ability to present a clear argument, support your
                opinions with evidence, and organize your ideas logically, similar to the Academic Writing Task 2, but the topics are
                generally less academic.</li>
            </ol>
          </li>
        </ul>
        <img src="writing-test.jpg" alt="" className='mx-auto' />
      </div>
    ),
  },
];

const Tab = () => {
  return (
    <div className='w-3/5 mx-auto'>
      {/* <h1 className='text-center font-black text-[#003366]'>Why we take IELTS</h1> */}
      <p className='bg-[#f1f1f0] p-10'>IELTS is designed to evaluate a candidate's ability to use English in real-life situations.
        Universities and colleges worldwide require IELTS scores as proof of English proficiency for admission into their academic programs.
        Many countries, including the UK, Australia, Canada, and New Zealand, use IELTS scores to assess the English language skills of
        immigration applicants. Professional bodies in fields like medicine, nursing, engineering, and accounting often require IELTS scores
        for registration and licensing. Employers may use IELTS scores to evaluate the English language skills of job applicants. Therefore,
        a good IELTS score can open doors to opportunities for education, migration, and career advancement.</p>
      <h1 className='text-center font-black text-[#003366]'>IELTS Test Format</h1>
      <p className='bg-[#f1f1f0] p-10'>The IELTS test assesses your English language proficiency across four key skills: Listening, Reading, Writing, and Speaking.
        All candidates take the same Listening and Speaking tests. However, the Reading and Writing tests differ depending on whether you are
        taking the Academic or General Training version of the IELTS</p>
      <Tabs
        defaultActiveKey="1"
        items={items}
        className='custom-tabs animate__animated animate__zoomIn'
      />
    </div>
  )
}

export default Tab

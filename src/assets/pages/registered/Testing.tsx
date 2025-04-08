const Testing = () => {
  return (
    <>
      <div className="flex mt-4">
        <div className="flex border-2 border-[#003366] w-[48%] rounded-3xl">
          <div className="w-1/2">
            <h2 className="font-black">Listening Tips</h2>
            <ul className='list-disc pl-5'>
              <li><span className='font-black'>Duration:</span> 30 minutes</li>
              <li><span className='font-black'>Format:</span> 4 sections, 40 questions</li>
              <li>The Listening section consists of four sections, each containing 10 questions. You will hear recordings of native English
                speakers, and you will answer a variety of questions based on what you hear. The recordings may include monologues and
                conversations. The questions test your ability to understand the main ideas, specific details, opinions, and attitudes of the
                speakers. Question types may include multiple choice, matching, form completion, sentence completion, and summary completion.
                You will have 10 minutes at the end of the Listening section to transfer your answers to an answer sheet.</li>
            </ul>
          </div>
          <div className="w-1/2">
            <img src="ListeningTest-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="flex border-2 border-[#003366] w-[48%] rounded-3xl ml-5">
          <div className="w-1/2">
            <h2 className="font-black">Speaking Tips</h2>
            <ul className='list-disc pl-5'>
              <li><span className='font-black'>Duration:</span> 11-14 minutes</li>
              <li><span className='font-black'>Format:</span> 3 parts</li>
              <li>The Speaking section is a face-to-face interview with a certified IELTS examiner. It consists of three parts: <br />
                Part 1: You will be asked general questions about yourself, your interests, and everyday topics. This part is designed to help you relax and feel comfortable.
                <br />
                Part 2: You will be given a topic card and one minute to prepare a short talk on the topic. You will then speak for up to two minutes. The examiner may ask some follow-up questions.
                <br />
                Part 3: You will have a more in-depth discussion with the examiner about issues related to the topic you spoke about in Part 2. This part allows you to demonstrate your ability to express and justify your opinions.</li>
            </ul>
          </div>
          <div className="w-1/2">
            <img src="Speaking Test.webp" alt="" className="h-full rounded-s-full py-5"/>
          </div>
        </div>
      </div>
      {/* </div>
      <div className="flex mt-4">
        <div className="flex border-2 w-[48%] h-[48%] rounded-3xl">
          <div className="w-1/2">
            <ul className='list-disc pl-5'>
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
          </div>
          <div>
            <img src="Reading Test.jpeg" alt="" />
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div> */}
    </>
  )
}

export default Testing
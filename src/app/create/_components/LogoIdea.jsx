import React, { useEffect, useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import axios from 'axios'
import Prompt from '@/app/_data/Prompt'
import { Loader2Icon } from 'lucide-react'

function LogoIdea({formData,onHandleInputChange}) {

  const [ideas,setIdeas]=useState();
  const [loading,setLoading]=useState(false);
  const [selectedOption,setSelectedOption]=useState(formData?.idea);
  useEffect(()=>{
    generateLogoDesignIdea();
  },[])

  const generateLogoDesignIdea=async()=>{
    setLoading(true)

    const PROMPT=Prompt.DESIGN_IDEA_PROMPT
    .replace('{logoType}',formData?.design.title)
    .replace('{logoTitle}',formData.title)
    .replace('{logoDesc}',formData.desc)
    .replace('{logoPrompt}',formData.design.prompt)
     console.log("Prompt being sent:",PROMPT);

     try {
      const result = await axios.post('/api/ai-design-ideas', {
        prompt: PROMPT
      });
      console.log('API result:',result.data);
      !ideas && setIdeas(result.data.ideas);
    } catch (err) {
      console.error("API Error:", err);
    }
    setLoading(false);
  };
  const handleSelection = (ideaText) => {
    setSelectedOption(ideaText)
    onHandleInputChange(ideaText)
  }
  return (
    <div className='my-10'>
      <HeadingDescription
      title={Lookup.LogoIdeaTitle}
      description={Lookup.LogoIdeaDesc}
      />
    <div className='flex items-center justify-center'>
    {loading&&<Loader2Icon className='animate-spin my-10' />}
    </div>
    <div className='flex flex-wrap gap-3 mt-6'>
      {ideas&&ideas.map((item,index)=>{
          const ideaText = item.idea
          const description = item.description

          return (
            <div
              key={index}
              onClick={() => handleSelection(ideaText)}
              className={`p-4 rounded-xl border cursor-pointer hover:border-primary ${
                selectedOption === ideaText && 'border-primary bg-gray-100'
              }`}
            >
              <h3 className="font-semibold text-lg">{ideaText}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          )
        })}
      <div
          onClick={() => handleSelection('Let AI Select the best idea')}
          className={`p-4 rounded-xl border cursor-pointer hover:border-primary ${
            selectedOption === 'Let AI Select the best idea' &&
            'border-primary bg-gray-100'
          }`}
        >
          <h3 className="font-semibold text-lg">Let AI Select the best idea</h3>
        </div>
      </div>
    </div>
  )
}

export default LogoIdea
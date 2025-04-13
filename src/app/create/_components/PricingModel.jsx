"use client";
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useUser,useClerk, useSignIn } from '@clerk/nextjs'
import Link from 'next/link';

function PricingModel({ formData }) {
  const { user } = useUser();
  //const { openSignIn } = useSignIn();
  const { openSignIn } = useClerk();

  useEffect(() => {
    if (formData?.title && typeof window !== 'undefined') {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

  const handleSignIn = (pricingTitle) => {
    openSignIn({
      redirectUrl: `/generate-logo?type=${pricingTitle}`,
      appearance: {
        elements: {
          card: 'rounded-xl shadow-lg'
        }
      }
    });
  };

  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <Image
              src={pricing.icon}
              alt={pricing.title}
              width={100}
              height={100}
              className="w-20 h-20 mb-4"
            />

            <h2 className="text-2xl font-bold mb-3 text-center">{pricing.title}</h2>

            <ul className="text-sm text-gray-600 mb-6 space-y-1 text-center">
              {pricing.features.map((feature, fIndex) => (
                <li key={fIndex} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>

            {user ? (
              <Link href={`/generate-logo?type=${pricing.title}`}>
              <Button className="w-full bg-violet-600 text-white rounded-md hover:bg-violet-700 transition">
                {pricing.button}
              </Button></Link>
            ) : (
              <Button
                className="w-full bg-violet-600 text-white rounded-md hover:bg-violet-700 transition"
                onClick={() => handleSignIn(pricing.title)}
              >
                {pricing.button}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingModel;

/*"use client";
import React, { useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignIn, useUser } from '@clerk/nextjs';

function PricingModel({formData}) {
    const user=useUser()
    useEffect(() => {
        if(formData?.title &&typeof window !== 'undefined'){
            localStorage.setItem("formData", JSON.stringify(formData))
        }
    },[formData])
  return (
    <div className="my-10">
      <HeadingDescription
        title={Lookup.LogoPricingModelTitle}
        description={Lookup.LogoPricingModelDesc}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {Lookup.pricingOption.map((pricing, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            <Image
              src={pricing.icon}
              alt={pricing.title}
              width={100}
              height={100}
              className="w-20 h-20 mb-4"
            />

            <h2 className="text-2xl font-bold mb-3 text-center">{pricing.title}</h2>

            <ul className="text-sm text-gray-600 mb-6 space-y-1 text-center">
              {pricing.features.map((feature, fIndex) => (
                <li key={fIndex} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
{user?<Button className="w-full bg-violet-600 text-white rounded-md hover:bg-violet-700 transition">
              {pricing.button}
            </Button>:
            <SignIn mode='modal' forceRedirectUrl={'/generate-logo?type='+pricing.title}><Button className="w-full bg-violet-600 text-white rounded-md hover:bg-violet-700 transition">
            {pricing.button}
          </Button></SignIn>}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default PricingModel
*/
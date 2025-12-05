import { useEffect } from 'react';
import GoToTopButton from '../../Components/GoToTopButton';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full bg-black font-[Host_Grotesk] text-white backdrop-blur-xl'>
    <div className="max-w-6xl  mx-auto px-2 py-8">
      <div className="mb-6 text-sm px-8 pt-20  text-start">
        <h1 className="text-[8vw] md:text-[5vw]  select-none mb-8 font-extrabold tracking-wide font-[Host_Grotesk] text-center">
            Terms and Conditions
        </h1>
        Last updated May 5, 2025
      </div>

      <div className="bg-black rounded-lg shadow-md px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
        <p className="mb-1">
          We are Pigopi ("Company," "we," "us," "our"), a company registered in India at Greater Noida, Uttar Pradesh 201306.
        </p>
        <p className="mb-1">
          We operate the mobile application Pigopi (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
        </p>
        <p className="mb-1">
          You can contact us by  email at info@pigo-pi.com, or by mail to Greater Noida, Uttar Pradesh 201306, India.
        </p>
      </div>

      {/* OUR SERVICES */}
      <div id="our-services" className="mb-8 bg-black rounded-lg shadow-md px-6">
        <h2 className="text-xl font-semibold mb-4 text-white">1. The use of this website is subject to the following terms of use</h2>
        <p className='list-style'>
        The content of the pages of this website is for your general information and use only. It is subject to change without notice.
        Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
        This Website, including all Materials present (excluding any applicable third party materials), is the property of PigoPi and is copyrighted and protected by worldwide copyright laws and treaty provisions. You hereby agree to comply with all copyright laws worldwide in Your use of this Website and to prevent any unauthorized copying of the Materials. PigoPi does not grant any express or implied rights under any patents, trademarks, copyrights or trade secret information.
        This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
        Unauthorised use of this website may give to a claim for damages and/or be a criminal offence.
        From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
        You may not create a link to this website from another website or document without PigoPi prior written consent.
        Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
        </p>
      </div>

      {/* Your Warranties */}
      <div id="intellectual-property-rights" className="mb-8 bg-black rounded-lg shadow-md px-6">
        <h2 className="text-xl font-semibold mb-4 text-white">2. Your Warranties</h2>
        <h3 className="font-medium mb-2">Our intellectual property</h3>
        <p className="mb-1">
          You shall not defame, abuse, harass or threaten PigoPi or any third party, or otherwise violate the legal rights of PigoPi or any third party.
          You shall not contribute any content or take any action that may in any manner adversely affect the reputation of PigoPi, or that is otherwise detrimental to PigoPi.
          You shall not in any manner publish or post any inappropriate, defamatory, infringing, obscene, racist, terrorist, politically slanted, indecent or unlawful topic, name, material or information.
          You shall not use profane and objectionable language or abbreviations. You shall not use any character(s) as a substitute for objectionable language.
          You shall not in any manner reveal confidential or proprietary information of any third party. Specifically, You shall not post any material for which You do not have requisite and applicable right(s) under law.
          You shall not conduct any contests or publish or propagate any forwards.
        </p>
      </div>

      {/* Lawful and/or Prohibited use of the website */}
      <div id="user-representations" className="mb-8 bg-black rounded-lg shadow-md px-6">
        <h2 className="text-xl font-semibold mb-4 text-white">3. Lawful and/or Prohibited use of the website</h2>
        <p className="mb-1">
          As a condition of Your use of the Website, You shall not use the Website for any purpose(s) that is unlawful or prohibited by the Terms of Use. You shall not use the Website in any manner that could damage, disable, overburden, or impair any PigoPi server, or the network(s) connected to any PigoPi server, or interfere with any other party's use and enjoyment of any services associated with the Website. You shall not attempt to gain unauthorized access to any section of the Website, other accounts, computer systems or networks connected to any PigoPi server or to any of the services associated with the Website, through hacking, password mining or any other means. You shall not obtain or attempt to obtain any Materials or information through any means not intentionally made available through the Website.
        </p>
      </div>

      {/* Indemnity */}
      <div id="user-registration" className="mb-8 bg-black rounded-lg shadow-md px-6">
        <h2 className="text-xl font-semibold mb-4 text-white">4. Indemnity</h2>
        <p className="mb-1">
          You agree to indemnify and hold harmless PigoPi, its subsidiaries and affiliates from any claim, cost, expense, judgment or other loss relating to Your use of this Website in any manner, including without limitation of the foregoing, any action You take which is in violation of the terms and conditions of these Terms of Use and against any applicable law.
        </p>
      </div>

      {/* PRODUCTS */}
      <div id="products" className="mb-8 bg-black rounded-lg shadow-md px-6">
        <h2 className="text-xl font-semibold mb-4 text-white">5. PRODUCTS</h2>
        <p className="mb-1">
          We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Services. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
        </p>
      </div>

      {/* Inquiries, Concerns and Grievances */}
      <div id="purchases-and-payment" className="mb-8 bg-black rounded-lg shadow-md px-6">
        <h2 className="text-xl font-semibold mb-4 text-white">5. Inquiries, Concerns and Grievances</h2>
        <p className="mb-5">
          Should you have any concerns, grievances or issues with the use of the Website, the products sold, any related services, or this Privacy Policy, you can write to info@pigo-pi.com.
        </p>

      {/* Add more sections following the same pattern */}

      {/* CONTACT US */}
      <div id="contact-us" className="mb-8 bg-black rounded-lg shadow-md">
        <h2 className="text-x  font-semibold mb-4 text-white">6. CONTACT US</h2>
        <p className="mb-4">
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
        </p>
        <address className="not-italic">
          <p className="mb-1">Pigopi</p>
          <p className="mb-1">Greater Noida, Uttar Pradesh 201306</p>
          <p className="mb-1">India</p>
          <p>Email: info@pigo-pi.com</p>
        </address>
      </div>
      </div>
      </div>
    </div>
  );
};

export default TermsConditions;
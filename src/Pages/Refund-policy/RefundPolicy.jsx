import { div } from 'framer-motion/client';
import { useEffect } from 'react';
import GoToTopButton from '../../Components/GoToTopButton';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='w-full bg-black font-[Host_Grotesk] text-white backdrop-blur-xl'>
    <div className="max-w-6xl  mx-auto px-4 py-8">
      <div className="mb-6 text-sm  md:pt-20 pt-30 text-start">
        <h1 className="text-[8vw] md:text-[5vw] select-none mb-8 font-extrabold tracking-wide font-[Host_Grotesk] text-center">
            Refund Policy
        </h1>
        {/* Last updated May 5, 2025 */}
      </div>

      <div className="bg-black rounded-lg shadow-md p-4 mb-8">
        <h2 className="">The intent of this policy is to provide an easy solution and path to our client and other affiliates for refund with respect to services acquired from PigoPi or our partners or affiliates (Collectively referred to as services).</h2>
      </div>

      {/* OUR SERVICES */}
      <div id="our-services" className="mb-8 bg-black rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">1. Eligibility for Refund or cancellation</h2>
        <p className='list-style'>
            All the conditions need to be fulfilled for eligibility of this refund and cancellation policy:
            If the discussion fails to deliver the expected results/delivery with concern team.
            If the client/customer has raised the dispute on deliverables on email with concern project Manager or signing authority within the 02 days for delivery of deliverables.
            If the due date of such invoice shall not be lapse.
            If the project is not taken to be void unless the agreed upon payments are clear.
            If the client never has been declared default in payment, If the contractual obligations have been compiled properly.
        </p>
      </div>

      {/* Your Warranties */}
      <div id="intellectual-property-rights" className="mb-8 bg-black rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">2. Refund or cancellation shall not be apply</h2>
        <h3 className="font-medium mb-2">Our intellectual property</h3>
        <p className="mb-4">
            If the required information for the successful completion of the project is not given to us at proper time.
            If there is delay or failure in completion of the project due to improper communication from client.
            If the information provided by the client is incomplete and/or complete information regarding the project is not provided at the initiation of the project.
            There is no provision for compensation for the delay of delivery under any conditions, until and unless there is an agreement signed with a penalty clause for delay in delivery.
            If the client will not raise any dispute with respect of deployed employee performance till last sprint of refunding invoice.
            If the project has been completed and uploaded on the server.
            If the client fails in compliance of clause A of this policy.
        </p>
      </div>

      {/* Lawful and/or Prohibited use of the website */}
      <div id="user-representations" className="mb-8 bg-black rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">3. Limitation of Liability</h2>
        <p className="mb-4">
        Our liability is bound by the value of the chunk of the project (as per our proposal) which remains incomplete at a given point of time. PigoPi is not obligated for losses due to the services provided/ not provided or the delay in the same at any point of time. The liability to refund holds only if the delivery issue which has been communicated to PigoPi in writing within stipulated time frame as mentioned herein above in clause A sub clause b which shall be restricted upto 10% of total paid invoices.
        </p>
      </div>

      {/* Indemnity */}
      <div id="user-registration" className="mb-8 bg-black rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">4. Process for Refund</h2>
        <p className="mb-4">
        The refund will be processed and emailed within the 180 business days from the date of cancellation while the dispute shall be considered as refundable by the PigoPi.
        </p>
      </div>

      {/* PRODUCTS */}
      <div id="products" className="mb-8 bg-black rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">5. Terms & Conditions</h2>
        <p className="mb-4">
        If any administrative charges shall be applicable during the refund process it shall be borne by the client.
        </p>
      </div>

      {/* Inquiries, Concerns and Grievances */}
      <div id="purchases-and-payment" className="mb-8 bg-black rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4 text-white">6. Your Consent</h2>
        <p className="mb-20">
        If we decide to change our Privacy Policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.
        </p>

      {/* Add more sections following the same pattern */}

      {/* CONTACT US */}
      <div id="contact-us" className="mb-8 bg-black rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-white">6. CONTACT US</h2>
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

export default RefundPolicy;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionSection() {
  return (
    <div className="w-full px-60 mb-20 bg-[#1e1e1e] text-white">
      <h1 className="font-extrabold text-2xl">
        Most Frequently Asked Questions.:
      </h1>
      <br />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Hero Hai App?</AccordionTrigger>
          <AccordionContent>
            Hero Hai App is a community powered donation platform which makes
            easy for people to ask for donation and donate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How does the donation process work?
          </AccordionTrigger>
          <AccordionContent>
            When you make a donation, the funds are securely transferred to the
            selected project or community. You can choose to donate a one-time
            amount or set up a recurring donation. Once the donation is
            processed, you'll receive a confirmation email and a receipt for
            your records. You can then track the impact of your donation through
            our Transparency Dashboard.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I specify where my donation is used?
          </AccordionTrigger>
          <AccordionContent>
            Yes, our platform allows you to choose specific projects or causes
            where you'd like your donation to be applied. You can browse through
            various ongoing initiatives and select the one that resonates most
            with you. If you prefer, you can also let our AI-powered system
            match your donation to the most urgent needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is my donation tax-deductible?</AccordionTrigger>
          <AccordionContent>
            In most cases, donations made through our platform are
            tax-deductible. After completing your donation, you'll receive an
            official receipt that can be used for tax purposes. Please consult
            with a tax professional to confirm the deductibility of your
            donation based on your local regulations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How can I be sure my donation is being used effectively?
          </AccordionTrigger>
          <AccordionContent>
            We prioritize transparency and accountability. Our Blockchain-Based
            Donation Tracking feature ensures that every transaction is recorded
            and can be verified. You can see exactly how your donation is being
            used and track the progress of the projects you've supported.
            Additionally, our Impact Visualization and Analytics tool provides
            detailed reports on the outcomes of your contributions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

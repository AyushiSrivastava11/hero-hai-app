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
          <AccordionTrigger>What does your app provide?</AccordionTrigger>
          <AccordionContent>
          Our app is a comprehensive platform that connects pet owners in need with essential resources and support. It allows individuals to seek donations for pet-related expenses, links them to NGOs and service providers offering assistance, and facilitates connections with donors willing to provide financial support for pet causes. By bringing these three key groups together, our app creates a unified ecosystem for addressing various pet care needs and fostering a supportive community for animal welfare.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I get a help from this app?</AccordionTrigger>
          <AccordionContent>
          Our app offers multiple ways to get help for your pet needs. You can create a post requesting donations for specific pet-related expenses, browse a directory of NGOs and service providers offering assistance, or connect with potential donors willing to support pet causes. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is this app safe?</AccordionTrigger>
          <AccordionContent>
          Yes, our app prioritizes user safety and data protection. We implement robust security measures to safeguard personal information and financial transactions. All users undergo a verification process, and we have reporting mechanisms in place to address any concerns. 
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
          What types of social issues can be addressed via this app?
          </AccordionTrigger>
          <AccordionContent>
          Our app addresses various pet-related social issues including pet poverty, animal homelessness, access to veterinary care, emergency pet assistance, animal rights advocacy, community education on responsible pet ownership, disaster relief for pets, and support for elderly or disabled pet owners.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Do I need special equipment for a telemedicine appointment?
          </AccordionTrigger>
          <AccordionContent>
          To access our app, you only need a smartphone or computer with internet access. The app is free to download and use, and you'll need to create a simple account with basic information to get started. No special equipment or technical knowledge is required – it's designed to be user-friendly and accessible to everyone interested in pet welfare and support.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

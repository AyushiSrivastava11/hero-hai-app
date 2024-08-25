import Image from "next/image";

const topFeatures = [
  {
    name: "Transparency Dashboard.",
    description:
      "A real-time transparency dashboard that shows exactly how donations are being utilized. Donors can track the allocation of their contributions, view project progress, and see the impact their donations are making on the community. This builds trust and encourages ongoing support.",
  },
  {
    name: "Donor Impact Stories.",
    description:
      "Personalized updates and stories from individuals or communities who have benefited from the donations. These stories could include photos, videos, and testimonials, providing a tangible sense of the difference donors are making. This feature can be enhanced with a 'Thank You' note directly from the beneficiaries.",
  },
  {
    name: "Recurring Donation Options with Progress Tracking.",
    description:
      "A feature allowing donors to set up recurring donations with the ability to track the cumulative impact over time. This could include milestone celebrations (e.g., 100 meals provided, 50 shelters built) and offer badges or certificates as rewards for reaching certain milestones, fostering a sense of accomplishment and ongoing commitment.",
  },
];

const bottomFeatures = [
  {
    name: "AI-Powered Donation Matching.",
    description:
      "An AI algorithm that analyzes donor preferences, past donations, and current community needs to suggest the most impactful causes for each donor. This could also include matching donors with specific projects or individuals, ensuring their contributions align with their personal values and desired outcomes.",
  },
  {
    name: "Blockchain-Based Donation Tracking",
    description:
      "Integrating blockchain technology for secure, transparent, and immutable tracking of all transactions. Donors can verify how and where their money is being spent, ensuring that funds are used as intended. This feature enhances accountability and can be a significant trust factor for potential donors.",
  },
  {
    name: "Smart Contract Donations.",
    description:
      "Allowing donations to be tied to smart contracts that release funds only when certain conditions are met (e.g., a project reaches a specific phase, or a particular community need is verified). This ensures that funds are used efficiently and only for their intended purpose, offering donors more control over their contributions..",
  },
  {
    name: "Impact Visualization and Analytics.",
    description:
      "A feature that provides advanced data analytics and visualizations to show the broader impact of donations over time. This could include metrics like community health improvements, educational achievements, or environmental restoration progress. Donors can access detailed reports and infographics, helping them understand the long-term effects of their contributions.",
  },
];

export default function Features() {
  return (
    <>
      <div className="overflow-hidden bg-[#333333] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-[#179646]">
                  Hero Hai App
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  The Best Features.
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Hero Hai App provides a easy to manage donation dashboard, and
                  it makes donating easy for people.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                  {topFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="inline font-semibold text-white">
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src="https://utfs.io/f/3e7b25bb-2c62-4337-8720-cc7b76eb5759-3serbx.jpg"
              alt="Product screenshot"
              className="w-[48rem] min-h-screen max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1456}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#333333] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#179646]">
              Tele FUNICULAR
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Some the advanced features of this Application.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Advanced Features in telemedicine apps are designed to cater to
              the unique needs of individual patients to make them comfortable.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {bottomFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

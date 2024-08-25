export const mongourl = process.env.MONGOURL;
export const datatest = [
  {
    userId: 1,
    title: "Help Build a School",
    description: "We are raising funds to build a school in a rural area.",
    amount: 5000,
    status: "Active" as const,
    createdAt: "2024-08-19T12:34:56Z",
    updatedAt: "2024-08-25T09:45:30Z",
  },
  {
    userId: 2,
    title: "Support Local Farmers",
    description:
      "We aim to provide financial aid to local farmers affected by drought.",
    amount: 3000,
    status: "Inactive" as const,
    createdAt: "2024-07-22T08:15:30Z",
    updatedAt: "2024-08-18T12:45:10Z",
  },
  {
    userId: 3,
    title: "Healthcare for All",
    description:
      "Fundraising to provide healthcare to underprivileged communities.",
    amount: 7000,
    status: "Active" as const,
    createdAt: "2024-08-01T10:20:40Z",
    updatedAt: "2024-08-20T14:30:50Z",
  },
];

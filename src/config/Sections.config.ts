export interface SectionType {
  title: string;
  value: string;
  percentage: number;
}

export const Sections: SectionType[] = [
  {
    title: "Active Products",
    value: "242,384",
    percentage: 15,
  },
  {
    title: "New Products",
    value: "+2,368",
    percentage: 2,
  },
  {
    title: "Completed Order",
    value: "33,847",
    percentage: -4.5,
  },
  {
    title: "Pending Payment",
    value: "1,284",
    percentage: 5,
  },
  {
    title: "Canceled Order",
    value: "836",
    percentage: -2,
  },
];

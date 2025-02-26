import { NavigationOptions } from "../types";

export const navigationOptions: NavigationOptions = [
  { icon: "/icons/dashboard.svg", name: "Dashboard", path: "/" },
  { icon: "/icons/transaction.svg", name: "Transactions", path: "/transactions" },
  { icon: "/icons/user.svg", name: "Accounts", path: "/accounts" },
  { icon: "/icons/investment.svg", name: "Investments", path: "/investments" },
  { icon: "/icons/cards.svg", name: "Credit Cards", path: "/credit-cards" },
  { icon: "/icons/loan.svg", name: "Loans", path: "/loans" },
  { icon: "/icons/service.svg", name: "Services", path: "/services" },
  { icon: "/icons/privilege.svg", name: "My Privilege", path: "/privilege" },
  { icon: "/icons/settings-solid.svg", name: "Settings", path: "/settings" },
];

export const getPageTitle = (pathname: string): string => {
  const page = navigationOptions.find((option) => option.path === pathname);
  return page ? (page.name === "Dashboard" ? "Overview" : page.name) : "Not Found";
};
import Routes from "@constants/routes";

type Text = "Home" | "About";

type Route = {
  text: Text;
  href: Routes;
};

export const navigation: Route[] = [
  {
    text: "Home",
    href: Routes.HOME,
  },
  {
    text: "About",
    href: Routes.ABOUT,
  },
];

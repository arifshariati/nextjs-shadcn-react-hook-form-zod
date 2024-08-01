"use client";
import { BookText } from "lucide-react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavigationLinksType = {
  title: string;
  href: string;
};
const NavigationLinks: NavigationLinksType[] = [
  {
    title: "Basic Form",
    href: "/basic-form",
  },
  {
    title: "Json to Form",
    href: "/json-to-form",
  },
];
const Header = () => {
  const currentPath = usePathname();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <BookText className="h-6 w-6" />
          <span className="sr-only">Dynamic Forms with Next JS react-hook-form zod and shadcn</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {NavigationLinks.map(({ title, href }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), currentPath === href && "bg-accent")}>
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Header;

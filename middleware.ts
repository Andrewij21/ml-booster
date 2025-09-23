// middleware.ts

import { NextResponse, type NextRequest } from "next/server";
import { NAV_LINKS } from "./constants";

// Extract and format the protected routes into a simple array of strings
export const getProtectedRoutes = () => {
  return NAV_LINKS.navMain.flatMap((section) => {
    const urls = section.items
      .filter((item) => item.url && item.url !== "#")
      .map((item) => item.url);

    if (section.url && section.url !== "#") {
      urls.push(section.url);
    }

    return urls;
  });
};

export const getRequiredRoles = (url: string) => {
  const allItems = NAV_LINKS.navMain.flatMap((section) => section.items);
  const foundItem = allItems.find((item) => item.url === url);

  if (foundItem?.roles) {
    return foundItem.roles;
  }
  // If a role wasn't found on the item, check if the parent section has roles
  const parentSection = NAV_LINKS.navMain.find(
    (section) => section.url === url
  );
  if (parentSection?.roles) {
    return parentSection.roles;
  }
  // Fallback to a default role if no specific roles are defined for the URL
  // This is a good practice to prevent unintended access
  return ["user"];
};

const validateToken = async (token: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) return false;
    const res = await response.json();
    return res.data.user;
  } catch (error) {
    console.error("Token validation failed:", error);
    return false;
  }
};

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

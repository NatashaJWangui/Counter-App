import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";


const robotoslab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Counter",
  description: "Counter Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoslab.className}>
        <Provider>
          {children}

        </Provider>
      </body>
    </html>
  );
}

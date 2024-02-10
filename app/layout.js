import { Inter } from "@next/font/google";
import Link from "next/link";

// These styles apply to every route in the application
import "./global.css";
import styles from "./rootStyle.module.css";
import Image from "next/image";
import headerBackground from "../images/home-image-1.jpg";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.className}>
			<head />
			<body>
				<header>
					<div className={styles.logo}>
						<h1>
							<Link className={styles.homeLink} href={"/home"}>
								GLOBOMANTICS
							</Link>
						</h1>
					</div>
					<div className={styles.tabs}>
						<h3>
							<Link className={styles.menuBarLinks} href="/blog">
								Blog
							</Link>
						</h3>
						<h3>
							<Link className={styles.menuBarLinks} href="/settings">
								Settings
							</Link>
						</h3>
						<h3>
							<Link className={styles.menuBarLinks} href="/conference">
								Conference
							</Link>
						</h3>
					</div>
				</header>
				{children}
			</body>
		</html>
	);
}

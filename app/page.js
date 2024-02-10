import Image from "next/image";
import Link from "next/link";
import background from "../images/home-image-2.jpg";
import styles from "./rootStyle.module.css";

export default function Page() {
	return (
		<>
			<div className={styles.bgWrap}>
				<Image
					src={background}
					alt=" earth"
					size="100vw"
					quality={100}
					placeholder="blur"
					fill
				/>
			</div>
			<h1 className={styles.bgHeader}>Welcome to Globomantics App</h1>
			<Link href="/home" className="bgLinks">
				Home
			</Link>
		</>
	);
}

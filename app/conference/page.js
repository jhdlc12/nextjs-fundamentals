import Image from "next/image";
import Link from "next/link";
import background from "../../images/home-image-3.jpg";

export default function Page() {
	return (
		<>
			<div className="bgWrap">
				<Image
					src={background}
					alt="background"
					quality={100}
					placeholder="blur"
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<h1 className="bgHeader" style={{ color: "black" }}>
				Welcome to Conference
			</h1>
			<h2>
				<Link href="conference/speakers" className="bgLinks">
					Speakers
				</Link>
			</h2>
			<h2>
				<Link href="conference/sessions" className="bgLinks">
					Sessions
				</Link>
			</h2>
		</>
	);
}

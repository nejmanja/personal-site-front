import { ImageResponse } from "@vercel/og";

export const config = {
	runtime: "experimental-edge",
};

export default function handler(req) {
	try {
		const { searchParams } = new URL(req.url);

		// ?title=<title>
		const hasTitle = searchParams.has("title");
		const title = hasTitle
			? searchParams.get("title")?.slice(0, 100)
			: "My default title";

		return new ImageResponse(
			(
				<div
					style={{
						backgroundColor: "black",
						backgroundSize: "150px 150px",
						height: "100%",
						width: "100%",
						display: "flex",
						textAlign: "center",
						alignItems: "center",
						justifyContent: "space-between",
						flexDirection: "row",
						flexWrap: "nowrap",
					}}
				>
					<svg fill="white" viewBox="0 0 111.6 218.8" style={{marginLeft: "5rem"}}>
						<path
							d="M41.3,75.3V12.1L29.3,0v12.1v63.3l12.1,12.1V75.3z M29.3,132.9v63.3l12.1,12.1v-12.1v-63.3
			l-12.1-12.1V132.9z M100,114.9L14.8,92.1L0,100.6l11.7,3.1l85.2,22.8l14.8-8.5L100,114.9z M67.9,143.4v63.3L80,218.8v-12.1v-63.3
			l-12.1-12.1V143.4z"
						/>
					</svg>
					<div
						style={{
							fontSize: 60,
							fontStyle: "normal",
							letterSpacing: "-0.025em",
							color: "white",
							marginTop: 30,
							padding: "0 120px",
							lineHeight: 1.4,
							whiteSpace: "pre-wrap",
						}}
					>
						{title}
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	} catch (e) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}

import "./App.css";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import React from "react";

const ws = new WebSocket(
	`wss://geekhaku-vol6-920939054256.asia-northeast1.run.app/`
);
function App() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	React.useEffect(() => {
		if (!api) {
			return;
		}
		setCurrent(api.selectedScrollSnap());

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap());
		});
	}, [api]);

	const myStack = [
		{
			name: "favorite",
			data: [
				{ app: "1", text: "新しいウィンドウを開く", name: "vscode" },
				{ app: "2", text: "vscodeを起動する", name: "vscode" },
				{
					app: "3",
					text: "ページ「自己紹介」に子ページを作成する",
					name: "notion",
				},
				{ app: "4", text: "ページ「自己紹介」を開く", name: "notion" },
				{ app: "5", text: "slackを起動する", name: "slack" },
				{ app: "6", text: "channel「日報」を開く", name: "slack" },
			],
		},
		{
			name: "vscode",
			data: [
				{ app: "1", text: "新しいウィンドウを開く", name: "vscode" },
				{ app: "2", text: "vscodeを起動する", name: "vscode" },
			],
		},
		{
			name: "notion",
			data: [
				{
					app: "3",
					text: "ページ「自己紹介」に子ページを作成する",
					name: "notion",
				},
				{ app: "4", text: "ページ「自己紹介」を開く", name: "notion" },
			],
		},
	];

	console.log(ws);
	const postWS = async (value: string) => {
		const res = await fetch(
			"https://geekhaku-vol6-920939054256.asia-northeast1.run.app/action",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: value, name: "test2" }),
			}
		);
		if (res.ok) {
			console.log("送信成功");
		}
		console.log("送信失敗");
	};

	const handleClickOption = async (value: string) => {
		await postWS(value);
	};
	return (
		<>
			<div className="bg-gray-100 md:w-[calc(100vw-400px)] w-screen py-10 rounded-[10px] mx-auto">
				<Carousel
					setApi={setApi}
					opts={{
						align: "start",
						loop: true,
					}}>
					<div className="grid md:grid-cols-6 grid-cols-3 gap-2 md:w-[50%] w-[80%] mx-auto">
						{myStack.map((item, index) => (
							<button
								className={
									current === index
										? "text-center flex items-center border px-2 py-2 rounded-[10px] opacity-100 border-[#6c6c6c]"
										: "text-center flex items-center border px-2 py-2 rounded-[10px] opacity-70"
								}
								key={index}
								onClick={() => {
									api?.scrollTo(index);
								}}>
								<img src={`/${item.name}.svg`} className="w-[15px]" />
								<p className="text-[#3e3e3e] ml-1 md:text-xs text-[10px] font-bold">
									{item.name}
								</p>
							</button>
						))}
					</div>

					<CarouselContent className="md:w-[calc(100vw-400px)] w-screen mx-auto text-[#1d1d1d] bg-gray-100 md:mt-5 mt-10">
						{myStack.map((item, index) => (
							<CarouselItem key={index} className="bg-gray-100 w-full">
								<div className="md:w-[70%] w-[75%] mx-auto grid md:grid-cols-4 grid-cols-2 gap-2">
									{/* {item} */}
									{item.data.map((child, i) => (
										<button
											onClick={() => handleClickOption(child.app)}
											key={i}
											className="md:px-3 px-2 block border hover:border-[#1d1d1d] duration-200 text-left border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
											<div className="">
												<img
													src={`/${child.name}.svg`}
													className="md:w-[50px] w-[40px] mx-auto"
												/>
											</div>
											<p className="md:text-sm text-[12px] md:mt-3 mt-4 w-fit mx-auto">
												{child.text}
											</p>
										</button>
									))}
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute md:left-10 left-1 text-gray-400 hidden md:flex" />
					<CarouselNext className="absolute md:right-10 right-1 text-gray-400 hidden md:flex" />
				</Carousel>
			</div>
		</>
	);
}

export default App;

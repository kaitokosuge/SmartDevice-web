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

const ws = new WebSocket(`ws://localhost:8080/connect/test1`);
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
				{ app: "vscode", text: "新しいウィンドウでターミナルを開く" },
				{ app: "notion", text: "ページ「自己紹介」に子ページを作成する" },
				{ app: "slack", text: "channel「日報」の未読メッセージを開く" },
				{ app: "chrome", text: "勤怠管理のスプレッドシートを開く" },
				{ app: "github", text: "profileページを開く" },
				{ app: "voice", text: "音量を上げる" },
				{ app: "timer", text: "タイマーを開く" },
			],
		},
		{
			name: "vscode",
			data: [{ app: "vscode", text: "新しいウィンドウでターミナルを開く" }],
		},
		{
			name: "notion",
			data: [{ app: "notion", text: "ページ「自己紹介」に子ページを作成する" }],
		},
	];

	console.log(ws);
	const postWS = async (value: string) => {
		const res = await fetch("http://localhost:8080/action", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text: value, name: "test2" }),
		});
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
											className="md:px-3 px-1 block border hover:border-[#1d1d1d] duration-200 text-left border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
											<div className="">
												<img
													src={`/${child.app}.svg`}
													className="md:w-[50px] w-[30px] mx-auto"
												/>
											</div>
											<p className="md:text-sm text-[10px] md:mt-3 mt-4 w-fit mx-auto">
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

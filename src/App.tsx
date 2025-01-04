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

function App() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	return (
		<div className="bg-gray-100 min-h-screen">
			<Carousel
				setApi={setApi}
				opts={{
					align: "start",
					loop: true,
				}}>
				{Array.from({ length: 5 }).map((_, index) => (
					<button
						className="ml-7 mt-5"
						key={index}
						onClick={() => {
							api?.scrollTo(index);
							setCurrent(index + 1);
						}}>
						{index + 1}
					</button>
				))}

				<CarouselContent className="w-screen md:min-h-[600px] min-h-[500px] mx-auto text-[#1d1d1d] bg-gray-100 mt-20">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="bg-gray-100 w-full">
							<div className="md:w-[70%] w-[75%] mx-auto grid md:grid-cols-4 grid-cols-2 gap-2">
								{index + 1}
								<button className="block border p-2 border-[#b1b1b1] text-left rounded-[10px] font-bold aspect-square">
									<p className="text-[#acacac]">vscode</p>
									<p className="text-sm">新しいウィンドウを開く</p>
								</button>
								<button className="block border p-2 border-[#b1b1b1] text-left rounded-[10px] font-bold aspect-square">
									<p className="text-[#acacac]">vscode</p>
									<p className="text-sm">ウィンドウの再読み込み</p>
								</button>
								<button className="block border p-2 border-[#b1b1b1] text-left rounded-[10px] font-bold aspect-square">
									<p className="text-[#acacac]">vscode</p>
									<p className="text-sm">新しいターミナルを開く</p>
								</button>
								<button className="block border p-2 border-[#b1b1b1] text-left rounded-[10px] font-bold aspect-square">
									<p className="text-[#acacac]">slack</p>
									<p className="text-sm">channel「team-佐藤」を開く</p>
								</button>
								<button className="block border p-2 border-[#b1b1b1] text-left rounded-[10px] font-bold aspect-square">
									<p className="text-[#acacac]">notion</p>
									<p className="text-sm">新規ページを作成</p>
								</button>
								<button className="block border p-2 border-[#b1b1b1] text-left rounded-[10px] font-bold aspect-square">
									<p className="text-[#acacac]">notion</p>
									<p className="text-sm">「日報メモ」に子ページを作る</p>
								</button>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute md:left-10 left-1 text-gray-400 hidden md:flex" />
				<CarouselNext className="absolute md:right-10 right-1 text-gray-400 hidden md:flex" />
			</Carousel>
			<div className="py-2 text-center text-sm text-muted-foreground">
				Slide {current} of {count}
			</div>
		</div>
	);
}

export default App;

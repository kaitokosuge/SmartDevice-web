import "./App.css";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	// CarouselNext,
	// CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
	return (
		<div className="w-screen bg-gray-100 min-h-screen">
			<Carousel>
				<CarouselContent className="w-screen mx-auto h-[500px] text-[#1d1d1d] bg-gray-100 mt-20">
					<CarouselItem className="bg-gray-100 w-full">
						<div className="md:w-[80%] w-[70%] mx-auto grid grid-cols-2 gap-2">
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								vscode
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								vscode
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								vscode
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								vscode
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								vscode
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								vscode
							</button>
						</div>
					</CarouselItem>
					<CarouselItem className="bg-gray-100 w-full">
						<div className="md:w-[80%] w-[70%] mx-auto grid grid-cols-2 gap-2">
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								slack
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								slack
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								slack
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								slack
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								slack
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								slack
							</button>
						</div>
					</CarouselItem>
					<CarouselItem className="bg-gray-100 w-full">
						<div className="md:w-[80%] w-[70%] mx-auto grid grid-cols-2 gap-2">
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								notion
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								notion
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								notion
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								notion
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								notion
							</button>
							<button className="block border border-[#b1b1b1] rounded-[10px] font-bold aspect-square">
								notion
							</button>
						</div>
					</CarouselItem>
				</CarouselContent>
				{/* <CarouselPrevious className="absolute left-1 text-gray-400" />
				<CarouselNext /> */}
			</Carousel>
		</div>
	);
}

export default App;

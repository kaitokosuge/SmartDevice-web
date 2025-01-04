import "./App.css";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";

function App() {
	return (
		<>
			<Carousel>
				<CarouselContent className="w-screen mx-auto h-[500px]">
					<CarouselItem className="bg-gray-100 w-full">hello</CarouselItem>
					<CarouselItem className="bg-gray-200 w-full">...</CarouselItem>
					<CarouselItem className="bg-gray-300 w-full">...</CarouselItem>
				</CarouselContent>
				{/* <CarouselPrevious />
				<CarouselNext /> */}
			</Carousel>
		</>
	);
}

export default App;

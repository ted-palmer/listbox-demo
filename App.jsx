import React from "react";
import { ListBox } from "./components/ListBox";
import { ListBoxItem } from "./components/ListBoxItem";

const App = () => (
	<div className="flex gap-6 items-center justify-center flex-wrap">
		<ListBox type="single" defaultValue="dog" aria-label="Animals" className="w-[150px]" onValueChange={(value) => console.log(value)}>
			<ListBoxItem value="dog">Dog</ListBoxItem>
			<ListBoxItem value="cat">Cat</ListBoxItem>
			<ListBoxItem value="panda">Panda</ListBoxItem>
			<ListBoxItem value="cow">Cow</ListBoxItem>
		</ListBox>

		<ListBox type="single" defaultValue="halo" aria-label="Xbox Games" className="w-[150px]" onValueChange={(value) => console.log(value)}>
			<p className="font-medium text-gray-500">Singleplayer</p>
			<ListBoxItem value="elden-ring">Elden Ring</ListBoxItem>
			<ListBoxItem value="skyrim">Skyrim</ListBoxItem>
			<p className="font-medium text-gray-500">Multiplayer</p>
			<ListBoxItem value="apex">Apex</ListBoxItem>
			<ListBoxItem value="halo">Halo</ListBoxItem>
			<ListBoxItem value="fortnite" disabled>Fortnite</ListBoxItem>
		</ListBox>
	</div>
);

export default App;

